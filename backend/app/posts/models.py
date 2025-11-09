from djongo import models
from django.utils import timezone

class Post(models.Model):
    author = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.author}: {self.content[:30]}"
