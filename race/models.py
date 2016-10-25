from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Race(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateField()
    distance = models.DecimalField(max_digits=7, decimal_places=2)
    website = models.CharField(max_length=75, blank=True)
    race_director = models.CharField(max_length=50, blank=True)


    def __str__(self):
        return self.name