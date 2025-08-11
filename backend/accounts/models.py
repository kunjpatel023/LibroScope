# from django.db import models

# # Create your models here.
# from django.contrib.auth.models import User
# from django.db import models
# from django.db.models.signals import post_save
# from django.dispatch import receiver

# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
#     avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)
#     bio = models.TextField(blank=True)
#     preferred_language = models.CharField(max_length=50, blank=True)
#     total_books_read = models.PositiveIntegerField(default=0)
#     total_hours_read = models.PositiveIntegerField(default=0)
#     avg_rating = models.FloatField(default=0.0)

#     def __str__(self):
#         return f"{self.user.username}'s profile"

# @receiver(post_save, sender=User)
# def create_or_update_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#     else:
#         instance.profile.save()
