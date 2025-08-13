from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q
from .models import Book, Category
from .serializers import BookSerializer, CategorySerializer

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_books(request):
    search = request.GET.get("search", "")
    category = request.GET.get("category", "All")
    sort = request.GET.get("sort", "az")

    books = Book.objects.all()

    if category != "All":
        books = books.filter(category__name=category)

    if search:
        books = books.filter(Q(title__icontains=search) | Q(author__icontains=search))

    if sort == "az":
        books = books.order_by("title")
    elif sort == "za":
        books = books.order_by("-title")
    elif sort == "newest":
        books = books.order_by("-uploaded_at")
    elif sort == "oldest":
        books = books.order_by("uploaded_at")

    # serializer = BookSerializer(books, many=True)
    serializer = BookSerializer(books, many=True, context={'request': request})
    return Response(serializer.data)


class BookListView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()

    def get_serializer_context(self):
        return {'request': self.request}