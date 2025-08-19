from rest_framework import serializers
from .models import Book, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BookSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.name",read_only=True)
    image = serializers.SerializerMethodField()
    pdf = serializers.SerializerMethodField() 

    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'category', 'image', 'pdf', 'uploaded_at']
        
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            try:
                return request.build_absolute_uri(obj.image.url) if request else obj.image.url
            except Exception:
                return obj.image.url
        return None

    def get_pdf(self, obj):
        request = self.context.get('request')
        if obj.pdf:
            try:
                return request.build_absolute_uri(obj.pdf.url) if request else obj.pdf.url
            except Exception:
                return obj.pdf.url
        return None
