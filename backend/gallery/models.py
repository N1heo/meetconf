import datetime
from django.db import models


class Gallery(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', blank=True)
    text = models.TextField()
    year = models.IntegerField(default=datetime.datetime.now().year)

    def __str__(self):
        return self.name
