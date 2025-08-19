
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerializer
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Profile, ReadingHistory, BookmarkedBook
from .serializers import ProfileSerializer, ReadingHistorySerializer, BookmarkedBookSerializer
from django.contrib.auth.models import User
from books.models import Book




@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"detail": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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






@api_view(['POST'])
def reset_password(request):
    email = request.data.get("email")
    new_password = request.data.get("new_password")

    if not email or not new_password:
        return Response({"error": "Email and new password required"}, status=400)

    try:
        user = User.objects.get(email=email)
        user.set_password(new_password)
        user.save()
        return Response({"message": "Password reset successfully"}, status=200)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)


# ------------------------ stripe payment method -----------------------
# backend/views.py
import stripe
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

stripe.api_key = settings.STRIPE_SECRET_KEY

@csrf_exempt
def create_checkout_session(request):
    try:
        plan_name = request.GET.get("plan_name", "SmartShelf Plan")
        price = int(request.GET.get("price", 99)) * 100  # convert to paisa

        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'inr',
                    'product_data': {'name': plan_name},
                    'unit_amount': price,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url="http://localhost:5173/subscription?success=true",
            cancel_url="http://localhost:5173/subscription?canceled=true",
        )
        return JsonResponse({'id': session.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


# ---------------------------------------------contact us details -------------------------


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
