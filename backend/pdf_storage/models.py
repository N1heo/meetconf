from django.db import models

from cloudinary_storage.storage import RawMediaCloudinaryStorage
from django.core.validators import FileExtensionValidator


class Archive(models.Model):
    pdf_file = models.FileField(upload_to='raw/', null=True, blank=True, storage=RawMediaCloudinaryStorage,
                                validators=[FileExtensionValidator(['pdf'])])


class Program(models.Model):
    pdf_file = models.FileField(upload_to='raw/', null=True, blank=True, storage=RawMediaCloudinaryStorage,
                                validators=[FileExtensionValidator(['pdf'])])