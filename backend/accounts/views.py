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
