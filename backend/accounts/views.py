# # from django.shortcuts import render

# # # Create your views here.
# # from rest_framework import generics
# # from django.contrib.auth.models import User
# # from .serializers import RegisterSerializer
# # from rest_framework.permissions import AllowAny

# # class RegisterView(generics.CreateAPIView):
# #     queryset = User.objects.all()
# #     permission_classes = (AllowAny,)
# #     serializer_class = RegisterSerializer
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from django.contrib.auth.models import User
# from django.contrib.auth.hashers import make_password

# @api_view(['POST'])
# def register_user(request):
#     data = request.data
#     if User.objects.filter(username=data['username']).exists():
#         return Response({"detail": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
    
#     user = User.objects.create(
#         username=data['username'],
#         email=data['email'],
#         password=make_password(data['password']),
#     )
#     return Response({"detail": "User registered successfully"}, status=status.HTTP_201_CREATED)




from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def register_user(request):
    data = request.data
    if User.objects.filter(username=data['username']).exists():
        return Response({"detail": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create(
        username=data['username'],
        email=data['email'],
        password=make_password(data['password']),
    )
    return Response({"detail": "User registered successfully"}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({"detail": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_obj = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    user = authenticate(username=user_obj.username, password=password)
    if not user:
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    return Response({
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }, status=status.HTTP_200_OK)


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Profile, ReadingHistory, BookmarkedBook
from .serializers import ProfileSerializer, ReadingHistorySerializer, BookmarkedBookSerializer
from django.contrib.auth.models import User
from books.models import Book


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_profile(request):
    profile, created = Profile.objects.get_or_create(user=request.user)
    history = ReadingHistory.objects.filter(user=request.user)
    bookmarks = BookmarkedBook.objects.filter(user=request.user)

    return Response({
        "profile": ProfileSerializer(profile).data,
        "reading_history": ReadingHistorySerializer(history, many=True).data,
        "bookmarks": BookmarkedBookSerializer(bookmarks, many=True).data
    })


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user
    user.username = request.data.get("username", user.username)
    user.email = request.data.get("email", user.email)
    user.save()
    return Response({"message": "Profile updated successfully"})

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def mark_book_as_completed(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
        ReadingHistory.objects.get_or_create(user=request.user, book=book)
        
        # Update books_read count
        profile, created = Profile.objects.get_or_create(user=request.user)
        profile.books_read = ReadingHistory.objects.filter(user=request.user).count()
        profile.save()

        return Response({"message": "Book marked as completed"})
    except Book.DoesNotExist:
        return Response({"error": "Book not found"}, status=404)
    
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from books.models import Book
from .models import BookmarkedBook

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def toggle_bookmark(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist:
        return Response({"error": "Book not found"}, status=404)

    bookmark, created = BookmarkedBook.objects.get_or_create(user=request.user, book=book)

    if not created:
        bookmark.delete()
        return Response({"message": "Bookmark removed"}, status=200)

    return Response({"message": "Bookmark added"}, status=201)


