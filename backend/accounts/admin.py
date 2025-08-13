from django.contrib import admin
from .models import Profile,ReadingHistory,BookmarkedBook
# Register your models here.
admin.site.register(Profile)
admin.site.register(ReadingHistory)
admin.site.register(BookmarkedBook)
