from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.get_categories, name="get_categories"),
    path('books/', views.get_books, name="get_books"),
    path('books/<int:pk>/', views.get_book_detail, name="get_book_detail"),
]
