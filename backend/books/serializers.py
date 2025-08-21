from rest_framework import serializers
from .models import Book, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class BookSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    image = serializers.ImageField(required=False, allow_null=True)  # ✅ allow file upload
    pdf = serializers.FileField(required=False, allow_null=True)    # ✅ allow file upload

    class Meta:
        model = Book
        fields = ["id", "title", "author", "category", "image", "pdf", "uploaded_at"]

    def to_representation(self, instance):
        """Customize output to return full URLs for image & pdf"""
        rep = super().to_representation(instance)
        request = self.context.get("request")

        if instance.image and hasattr(instance.image, "url"):
            rep["image"] = (
                request.build_absolute_uri(instance.image.url)
                if request
                else instance.image.url
            )
        else:
            rep["image"] = None

        if instance.pdf and hasattr(instance.pdf, "url"):
            rep["pdf"] = (
                request.build_absolute_uri(instance.pdf.url)
                if request
                else instance.pdf.url
            )
        else:
            rep["pdf"] = None

        return rep


