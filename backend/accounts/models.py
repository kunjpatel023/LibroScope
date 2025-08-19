from django.db import models
from django.contrib.auth.models import User
from books.models import Book

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    join_date = models.DateField(auto_now_add=True)
    books_read = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.username


class ReadingHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reading_history")
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    completed_on = models.DateField(auto_now_add=True)  # Will be auto-filled when added

    def __str__(self):
        return f"{self.user.username} - {self.book.title}"


class BookmarkedBook(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookmarks")
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    bookmarked_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} bookmarked {self.book.title}"




from django.db import models
from django.contrib.auth.models import User

class ContactMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  # Optional
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"
