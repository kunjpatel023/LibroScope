import os
from django.db import models
from django.dispatch import receiver

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="books")
    image = models.ImageField(upload_to="book_images/", blank=True, null=True)
    pdf = models.FileField(upload_to="book_pdfs/", blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# 🗑 Delete old PDF when updated
@receiver(models.signals.pre_save, sender=Book)
def auto_delete_old_file_on_change(sender, instance, **kwargs):
    if not instance.pk:
        return  # New object, no file to delete

    try:
        old_file = Book.objects.get(pk=instance.pk).pdf
    except Book.DoesNotExist:
        return

    new_file = instance.pdf
    if old_file and old_file != new_file:
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)


# 🗑 Delete PDF when book is deleted
@receiver(models.signals.post_delete, sender=Book)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    if instance.pdf and os.path.isfile(instance.pdf.path):
        os.remove(instance.pdf.path)
    if instance.image and os.path.isfile(instance.image.path):
        os.remove(instance.image.path)
