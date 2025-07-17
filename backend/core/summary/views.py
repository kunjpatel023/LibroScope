from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UploadedPDF
import fitz  # PyMuPDF
from transformers import pipeline
import requests

# 🔹 Load summarization pipeline
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

# 🔹 Extract full text from PDF
def extract_text(path):
    doc = fitz.open(path)
    return "\n".join([page.get_text() for page in doc])

# 🔹 Chunking for long documents
def chunk_text(text, max_words=500):
    words = text.split()
    return [" ".join(words[i:i+max_words]) for i in range(0, len(words), max_words)]

# 🔹 Translate using LibreTranslate API
def translate_text(text, lang="hi"):
    payload = {
        "q": text,
        "source": "en",
        "target": lang,
        "format": "text"
    }
    res = requests.post("https://libretranslate.com/translate", data=payload)
    return res.json().get("translatedText", "")
# 🔸 POST: /api/summarize/
@api_view(['POST'])
def summarize_pdf(request):
    pdf = request.FILES.get("pdf")
    if not pdf:
        return Response({"error": "No PDF provided."}, status=400)

    uploaded = UploadedPDF.objects.create(file=pdf)
    text = extract_text(uploaded.file.path)

    if not text:
        return Response({"error": "Could not extract text from PDF."}, status=400)

    chunks = chunk_text(text)
    summaries = [summarizer(chunk, max_length=150, min_length=30)[0]['summary_text'] for chunk in chunks]
    final_summary = "\n\n".join(summaries)

    return Response({"summary": final_summary})
# 🔸 POST: /api/translate/
@api_view(['POST'])
def translate_summary(request):
    summary = request.data.get("summary")
    if not summary:
        return Response({"error": "No summary provided."}, status=400)

    translated = translate_text(summary, lang="hi")
    return Response({"translated": translated})
