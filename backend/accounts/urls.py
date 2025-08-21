from django.urls import path
from .views import register_user, login_user,get_profile,update_profile,mark_book_as_completed,toggle_bookmark,reset_password,create_checkout_session,ContactMessageCreateView,update_reading_progress,get_reading_progress,get_book_progress
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path("profile/", get_profile, name="get_profile"),
    path("profile/update/", update_profile, name="update_profile"),


    # path("bookmark/<int:book_id>/", add_bookmark, name="add_bookmark"),
    path("complete/<int:book_id>/", mark_book_as_completed, name="mark_completed"),
    path("bookmark/<int:book_id>/", toggle_bookmark, name="toggle_bookmark"),
    path("reset-password/", reset_password, name="reset_password"),
    path('create-checkout-session/', create_checkout_session, name="checkout_session"),
    path("submit/", ContactMessageCreateView.as_view(), name="contact-submit"),
    path('progress/<int:book_id>/', update_reading_progress, name='update-reading-progress'),
    path("progress/", get_reading_progress, name="get_progress"),
    path("progress/<int:book_id>/get/", get_book_progress, name="get-book-progress"),

]