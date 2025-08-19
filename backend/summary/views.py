from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from concurrent.futures import ThreadPoolExecutor
import fitz  # PyMuPDF
from transformers import pipeline
from googletrans import Translator
import hashlib
from .models import PDFSummary

summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")


def extract_text_from_pdf(pdf_file):
    """Extract text from PDF using PyMuPDF"""
    pdf_file.seek(0)
    doc = fitz.open(stream=pdf_file.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text("text") + "\n"
    return text.strip()

def chunk_text(text, max_words=500):
    """Split text into chunks of max_words size"""
    words = text.split()
    for i in range(0, len(words), max_words):
        yield " ".join(words[i:i + max_words])

def summarize_chunk(chunk):
    """Summarize a single chunk"""
    return summarizer(chunk, max_length=150, min_length=30, do_sample=False)[0]['summary_text']

def get_pdf_hash(pdf_file):
    """Generate MD5 hash for PDF"""
    pdf_file.seek(0)
    file_hash = hashlib.md5(pdf_file.read()).hexdigest()
    pdf_file.seek(0)
    return file_hash


@api_view(["POST"])
def summarize_pdf(request):
    try:
        pdf_file = request.FILES.get("pdf")
        if not pdf_file:
            return Response({"error": "No PDF uploaded."}, status=status.HTTP_400_BAD_REQUEST)

        # Step 1: Generate hash
        pdf_hash = get_pdf_hash(pdf_file)

        # Step 2: Check if summary exists in DB
        existing = PDFSummary.objects.filter(pdf_hash=pdf_hash).first()
        if existing:
            return Response({"summary": existing.summary, "cached": True}, status=status.HTTP_200_OK)

        # Step 3: Extract text and chunk it
        full_text = extract_text_from_pdf(pdf_file)
        chunks = list(chunk_text(full_text, max_words=500))

        # Step 4: Summarize chunks in parallel
        with ThreadPoolExecutor(max_workers=4) as executor:
            summaries = list(executor.map(summarize_chunk, chunks))

        final_summary = " ".join(summaries)

        # Step 5: Save to DB
        PDFSummary.objects.create(pdf_hash=pdf_hash, summary=final_summary)

        return Response({"summary": final_summary, "cached": False}, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def translate_summary(request):
    try:
        text = request.data.get("text")
        target_lang = request.data.get("language")

        if not text or not target_lang:
            return Response({"error": "Text and language are required."}, status=status.HTTP_400_BAD_REQUEST)

        translator = Translator()
        translated_text = translator.translate(text, dest=target_lang).text

        return Response({"translated_text": translated_text}, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
