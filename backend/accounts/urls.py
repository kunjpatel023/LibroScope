# from django.urls import path
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from .views import RegisterView

# urlpatterns = [
#     path("register/", RegisterView.as_view(), name="register"),
#     path("login/", TokenObtainPairView.as_view(), name="login"),
#     path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
# ]
from django.urls import path
from .views import register_user, login_user
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
