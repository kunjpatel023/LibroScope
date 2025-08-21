
from django.urls import path
from . import views

urlpatterns = [
    path("summarize/", views.summarize_pdf, name="summarize-pdf"),
    path("translate/", views.translate_summary, name="translate-summary"),  # your existing translate view
    path("tts/", views.summary_to_speech, name="summary-tts"),  # 👈 new route
]