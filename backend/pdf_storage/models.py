import os

from django.db import models

from cloudinary_storage.storage import RawMediaCloudinaryStorage
from django.core.validators import FileExtensionValidator


class Archive(models.Model):
    pdf_file = models.FileField(upload_to='raw/', null=True, blank=True, storage=RawMediaCloudinaryStorage,
                                validators=[FileExtensionValidator(['pdf'])])

    def get_file_name(self):
        return os.path.splitext(os.path.basename(self.pdf_file.name))[0]

    def __str__(self):
        return self.get_file_name()


class Program(models.Model):
    pdf_file = models.FileField(upload_to='raw/', null=True, blank=True, storage=RawMediaCloudinaryStorage,
                                validators=[FileExtensionValidator(['pdf'])])

    def get_file_name(self):
        return os.path.splitext(os.path.basename(self.pdf_file.name))[0]

    def __str__(self):
        return self.get_file_name()