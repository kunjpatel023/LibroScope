from django.contrib import admin
from .models import Profile,ReadingHistory,BookmarkedBook,ContactMessage,ReadingProgress
# Register your models here.
admin.site.register(Profile)
admin.site.register(ReadingHistory)
admin.site.register(BookmarkedBook)
admin.site.register(ContactMessage)
admin.site.register(ReadingProgress)
