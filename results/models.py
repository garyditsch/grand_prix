from django.db import models
from django.contrib.auth.models import User
from race.models import Race

# Create your models here.

class Result(models.Model):
    race = models.ForeignKey(Race)
    firstname = models.CharField(max_length=50, blank=True, null=True)
    lastname = models.CharField(max_length=50, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=2, blank=True, null=True)
    time = models.IntegerField()
    bib = models.IntegerField(blank=True, null=True)
    claim = models.BooleanField(default=False)
    user = models.ForeignKey(User, blank=True, null=True)
    
    def __str__(self):
        return self.lastname