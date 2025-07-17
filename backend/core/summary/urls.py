from django.urls import path
from .views import summarize_pdf, translate_summary

urlpatterns = [
    path('summarize/', summarize_pdf, name='summarize'),
    path('translate/', translate_summary, name='translate'),
]
