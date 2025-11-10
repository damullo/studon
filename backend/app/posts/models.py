from djongo import models
from django.utils import timezone
from bson import ObjectId

class ObjectIdField(models.Field):
    def __init__(self, *args, **kwargs):
        kwargs["editable"] = False
        super().__init__(*args, **kwargs)

    def get_prep_value(self, value):
        return str(value) if isinstance(value, ObjectId) else value

    def from_db_value(self, value, expression, connection):
        return str(value)

    def to_python(self, value):
        return str(value)

class Post(models.Model):
    _id = ObjectIdField(primary_key=True)
    author = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.author}: {self.content[:30]}"
