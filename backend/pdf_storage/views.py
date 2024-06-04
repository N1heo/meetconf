from django.shortcuts import render
from rest_framework import viewsets
from .models import Archive, Program
from .serializers import ArchiveSerializer, ProgramSerializer


class ArchiveViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = Archive.objects.all()
    serializer_class = ArchiveSerializer


class ProgramViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
