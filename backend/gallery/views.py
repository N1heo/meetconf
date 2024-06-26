from django.shortcuts import render
from rest_framework import viewsets
from .models import Gallery
from .serializers import GallerySerializer
from permissions import IsSuperUserOrReadOnly


class GalleryViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = (IsSuperUserOrReadOnly,)
