from django.urls import path
from . import views

urlpatterns = [
    path('summarize/', views.summarize_pdf, name='summarize_pdf'),
    path('translate/', views.translate_summary, name='translate_summary'),
]
