from django.urls import path
from .views import login_user,signup

urlpatterns = [
    path('login/', login_user),
    path('signup/', signup, name='signup'),
]
