from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q
from .models import Book, Category
from .serializers import BookSerializer, CategorySerializer

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all().order_by('name')
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_books(request):
    search = request.GET.get("search", "")
    category = request.GET.get("category", "All")
    sort = request.GET.get("sort", "az")

    books = Book.objects.all()

    if category and category != "All":
        books = books.filter(category__name__iexact=category)

    if search:
        books = books.filter(
            Q(title__icontains=search) | Q(author__icontains=search)
        )

    if sort == "az":
        books = books.order_by("title")
    elif sort == "za":
        books = books.order_by("-title")
    elif sort == "newest":
        books = books.order_by("-uploaded_at")
    elif sort == "oldest":
        books = books.order_by("uploaded_at")

    serializer = BookSerializer(books, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def get_book_detail(request, pk):
    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response({'error': 'Book not found'}, status=404)
    serializer = BookSerializer(book, context={'request': request})
    return Response(serializer.data)

# Optional DRF generic list view (not used by frontend but kept)
from rest_framework import generics

class BookListView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()

    def get_serializer_context(self):
        return {'request': self.request}




# book recommendation -------------------------------------------------------------------------

# from django.shortcuts import get_object_or_404
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from .models import Book
# from accounts.models import ReadingHistory, BookmarkedBook
# from .serializers import BookSerializer
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# import random

# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def recommended_books(request):
#     user = request.user

#     # Fetch books user has interacted with
#     bookmarked_books = BookmarkedBook.objects.filter(user=user).values_list("book", flat=True)
#     completed_books = ReadingHistory.objects.filter(user=user).values_list("book", flat=True)

#     interacted_books = list(set(list(bookmarked_books) + list(completed_books)))

#     # If no interaction, just return random 5 books
#     if not interacted_books:
#         books = Book.objects.all().order_by("?")[:5]
#         serializer = BookSerializer(books, many=True, context={"request": request})
#         return Response(serializer.data)

#     # Prepare corpus (title + author + category)
#     books = list(Book.objects.all())
#     corpus = [
#         f"{book.title} {book.author} {book.category.name}"
#         for book in books
#     ]

#     # TF-IDF Vectorization
#     vectorizer = TfidfVectorizer(stop_words="english")
#     tfidf_matrix = vectorizer.fit_transform(corpus)

#     # Take last interacted book as reference
#     ref_book_id = interacted_books[-1]
#     ref_index = next(i for i, b in enumerate(books) if b.id == ref_book_id)

#     cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
#     sim_scores = list(enumerate(cosine_sim[ref_index]))
#     sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

#     # Pick top 5 similar (excluding the same book)
#     top_indices = [i for i, _ in sim_scores[1:6]]
#     recommended = [books[i] for i in top_indices]

#     # If less than 5, pad with random
#     if len(recommended) < 5:
#         others = [b for b in books if b not in recommended and b.id != ref_book_id]
#         recommended += random.sample(others, min(5 - len(recommended), len(others)))

#     serializer = BookSerializer(recommended, many=True, context={"request": request})
#     return Response(serializer.data)



# accounts/views.py

# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from django.db.models import Count
# import random

# from books.models import Book
# from books.serializers import BookSerializer
# from accounts.models import BookmarkedBook, ReadingHistory


# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def recommended_books(request):
#     """
#     Recommend books based on categories/authors of BOTH
#     bookmarked and completed books.
#     Excludes already read or bookmarked books.
#     """
#     user = request.user
#     TOP_N = 5

#     # --- 1) Collect user interactions ---
#     bookmarked_ids = list(
#         BookmarkedBook.objects.filter(user=user).values_list("book__id", flat=True)
#     )
#     completed_ids = list(
#         ReadingHistory.objects.filter(user=user).values_list("book__id", flat=True)
#     )
#     interacted_ids = set(bookmarked_ids) | set(completed_ids)

#     # If no interactions, fallback to latest books
#     all_books = Book.objects.all().order_by("-uploaded_at")
#     if not interacted_ids:
#         fallback = all_books[:TOP_N]
#         serializer = BookSerializer(fallback, many=True, context={"request": request})
#         return Response(serializer.data)

#     # --- 2) Find user’s favorite categories & authors ---
#     categories = Book.objects.filter(id__in=interacted_ids).values_list(
#         "category", flat=True
#     )
#     authors = Book.objects.filter(id__in=interacted_ids).values_list(
#         "author", flat=True
#     )

#     # --- 3) Query books in those categories/authors ---
#     rec_qs = Book.objects.filter(category__in=categories) | Book.objects.filter(
#         author__in=authors
#     )
#     rec_qs = rec_qs.exclude(id__in=interacted_ids).distinct()

#     # --- 4) Pick top N (shuffle for variety) ---
#     rec_list = list(rec_qs)
#     random.shuffle(rec_list)
#     rec_list = rec_list[:TOP_N]

#     # --- 5) Fallback: if not enough, add some random from others ---
#     if len(rec_list) < TOP_N:
#         extra = (
#             Book.objects.exclude(id__in=interacted_ids)
#             .exclude(id__in=[b.id for b in rec_list])
#             .order_by("-uploaded_at")[: TOP_N - len(rec_list)]
#         )
#         rec_list.extend(extra)

#     serializer = BookSerializer(rec_list, many=True, context={"request": request})
#     return Response(serializer.data)





# accounts/views.py

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from books.models import Book
from books.serializers import BookSerializer
from accounts.models import BookmarkedBook, ReadingHistory

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import numpy as np


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def knn_recommendations(request):
    """
    Recommend books using TF-IDF + KNN similarity.
    Based on user's bookmarks + completed books.
    """
    user = request.user
    TOP_N = 5

    # --- 1) Get user history + bookmarks ---
    bookmarked_ids = list(BookmarkedBook.objects.filter(user=user).values_list("book__id", flat=True))
    completed_ids = list(ReadingHistory.objects.filter(user=user).values_list("book__id", flat=True))
    interacted_ids = set(bookmarked_ids) | set(completed_ids)

    all_books = list(Book.objects.all())

    if not interacted_ids:
        # Fallback: newest books
        newest = Book.objects.all().order_by("-uploaded_at")[:TOP_N]
        return Response(BookSerializer(newest, many=True, context={"request": request}).data)

    # --- 2) Build corpus for TF-IDF ---
    corpus = [f"{b.title} {b.author} {b.category.name}" for b in all_books]

    vectorizer = TfidfVectorizer(stop_words="english")
    X = vectorizer.fit_transform(corpus)

    # --- 3) Fit KNN model ---
    knn = NearestNeighbors(n_neighbors=TOP_N+1, metric="cosine")  # +1 to skip self
    knn.fit(X)

    # --- 4) Get vectors of interacted books ---
    interacted_indices = [i for i, b in enumerate(all_books) if b.id in interacted_ids]

    recommended_indices = set()
    for idx in interacted_indices:
        distances, neighbors = knn.kneighbors(X[idx], n_neighbors=TOP_N+1)
        for n in neighbors[0]:
            if n != idx:  # skip the same book
                if all_books[n].id not in interacted_ids:  # exclude already read/bookmarked
                    recommended_indices.add(n)

    # --- 5) Collect final recommendations ---
    rec_books = [all_books[i] for i in list(recommended_indices)[:TOP_N]]

    # Fallback if not enough
    if len(rec_books) < TOP_N:
        extra = Book.objects.exclude(id__in=interacted_ids).order_by("-uploaded_at")[: (TOP_N - len(rec_books))]
        rec_books.extend(extra)

    serializer = BookSerializer(rec_books, many=True, context={"request": request})
    return Response(serializer.data)
