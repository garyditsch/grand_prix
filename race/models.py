from django.db import models
from django.contrib.auth.models import User
# from results.models import Result 
from django.db.models import Avg, Max, Min, Count


# Create your models here.

class Race(models.Model):
    name = models.CharField(max_length=50)
    date = models.DateField()
    distance = models.DecimalField(max_digits=7, decimal_places=2)
    website = models.CharField(max_length=75, blank=True)
    race_director = models.CharField(max_length=50, blank=True)
    date_added = models.DateField()
    results_in_database = models.BooleanField(default=False)
    grand_prix_race = models.BooleanField(default=False)
    average = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)


    def __str__(self):
        return self.name

    # def save(self):
    #     # getAverage(self):
    #     print('YO!')
        # race = self.request.query_params.get('race', None)
        # print(race)
        # races = Race.objects.all()
        # for race in races:
        #     print(race)
        #     print(race.average)
        #     race.average = 0.00
        #     print(race.average)
        #     race.save()
        #         # results = Result.objects.filter(race=race)
        #         # if len(results) !=  0:
        #         #     race.average = results.aggregate(Avg('time'))
        #         #     race.average.save()
        #         # else:
        #         #     race.average = 0
        #         #     race.average.save()
        #     race.average = 0
        #     race.save()
# python property

#def save()
#    self.avg = self.set_avg
#    super(Race, self).save(*args, **kwargs)

#def set_avg()
#    calculations