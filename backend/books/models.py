from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="books")
    image = models.ImageField(upload_to="book_covers/", blank=True, null=True)
    pdf = models.FileField(upload_to="book_pdfs/", blank=True, null=True)  # PDF file
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title