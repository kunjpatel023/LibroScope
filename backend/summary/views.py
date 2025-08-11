from django.shortcuts import render

# Create your views here.
import os
import fitz  # PyMuPDF
from transformers import pipeline
from googletrans import Translator
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny


# Load summarization model (lightweight)
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

def extract_text_from_pdf(file_path):
    """Extracts text from a PDF file."""
    doc = fitz.open(file_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def chunk_text(text, max_words=500):
    """Splits text into chunks for summarization."""
    words = text.split()
    return [' '.join(words[i:i+max_words]) for i in range(0, len(words), max_words)]

@api_view(['POST'])
@permission_classes([IsAuthenticated])
# @permission_classes([AllowAny])
def summarize_pdf(request):
    """Uploads PDF, extracts text, summarizes."""
    pdf_file = request.FILES.get('file')
    if not pdf_file:
        return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

    # Save temp file
    temp_dir = 'temp'
    os.makedirs(temp_dir, exist_ok=True)
    file_path = os.path.join(temp_dir, pdf_file.name)
    with open(file_path, 'wb+') as destination:
        for chunk in pdf_file.chunks():
            destination.write(chunk)

    # Extract and summarize
    extracted_text = extract_text_from_pdf(file_path)
    chunks = chunk_text(extracted_text)

    summaries = []
    for chunk in chunks:
        summary_result = summarizer(chunk, max_length=150, min_length=50, do_sample=False)
        summaries.append(summary_result[0]['summary_text'])

    full_summary = " ".join(summaries)

    # Save in session for translation
    request.session['summary'] = full_summary

    return Response({'summary': full_summary}, status=status.HTTP_200_OK)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def translate_summary(request):
#     """Translates last generated summary."""
#     target_lang = request.data.get('language')
#     summary = request.session.get('summary', '')

#     if not summary:
#         return Response({'error': 'No summary found. Summarize first.'}, status=status.HTTP_400_BAD_REQUEST)

#     translator = Translator()
#     translated_text = translator.translate(summary, dest=target_lang).text
#     return Response({'translation': translated_text}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def translate_summary(request):
    """Translates the last generated summary or provided text."""
    lang = request.data.get("language")
    text = request.data.get("text") or request.session.get("summary")

    if not text:
        return Response({"error": "No text or summary found."}, status=status.HTTP_400_BAD_REQUEST)
    if not lang:
        return Response({"error": "No language code provided."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        translator = Translator()
        translated = translator.translate(text, dest=lang)
        return Response({"translated_text": translated.text}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)