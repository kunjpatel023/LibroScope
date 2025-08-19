from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("username", "password", "password2", "email")

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"password": "Passwords don't match"})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user



from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, ReadingHistory, BookmarkedBook
from books.serializers import BookSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ["user", "join_date", "books_read"]


class ReadingHistorySerializer(serializers.ModelSerializer):
    book = BookSerializer()

    class Meta:
        model = ReadingHistory
        fields = ["book", "completed_on"]


class BookmarkedBookSerializer(serializers.ModelSerializer):
    book = BookSerializer()

    class Meta:
        model = BookmarkedBook
        fields = ["book", "bookmarked_on"]






from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = "__all__"
