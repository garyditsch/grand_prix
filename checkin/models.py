from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from race.models import Race

# Create your models here.

class Checkin(models.Model):
    race = models.ForeignKey(Race)
    checkin_bib = models.IntegerField()
    score = models.IntegerField(blank=True, null=True)
    email = models.ForeignKey(User, blank=True, null=True)
    checkin_date = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.email