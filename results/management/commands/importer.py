from django.core.management.base import BaseCommand, CommandError, NoArgsCommand
from results.models import Result 
from race.models import Race
import sys, os
import csv

class Command(NoArgsCommand):

    file = input("What file do you want to import: ")
    race_entered_id = input("What is the race id: ")


    def handle_noargs(self, **options):
        resultFile = open(self.file)
        resultReader = csv.DictReader(resultFile)

        race_id = Race.objects.get(id=self.race_entered_id)

        for row in resultReader:
            h, m, s = row['time'].split(':')
            seconds = int(h) * 3600 + int(m) * 60 + int(s)
            print(seconds)  
            print(row['time'])
            print(race_id)
            Result.objects.create(firstname=row['First Name'], lastname=row['Last Name'], bib=row['BIB'], 
                race=race_id, time=seconds)