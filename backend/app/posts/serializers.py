from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"
