from django.db import models

# Create your models here.
from django.db import models

class PDFSummary(models.Model):
    pdf_hash = models.CharField(max_length=64, unique=True)
    summary = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Summary {self.pdf_hash}"
