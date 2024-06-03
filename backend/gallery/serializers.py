from rest_framework import serializers, validators
from .models import Gallery


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id', 'name', 'image', 'text']