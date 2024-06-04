from rest_framework import serializers, validators
from .models import Archive, Program


class ArchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archive
        fields = ['id', 'pdf_file']


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id', 'pdf_file']
