from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
	created_at = serializers.DateTimeField(format="%Y-%m-%d")
	updated_at = serializers.DateField(format="%Y-%m-%d")

	class Meta:
		model = Post
		fields = ('id', 'title', 'description', 'image', 'content', 'created_at', 'updated_at')

