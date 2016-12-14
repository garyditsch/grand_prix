from django.core.management.base import BaseCommand, CommandError, NoArgsCommand
from checkin.models import Checkin 
from race.models import Race
from datetime import datetime
import sys, os
import csv

class Command(NoArgsCommand):

    file = input("What file do you want to import: ")

    def handle_noargs(self, **options):
        checkinFile = open(self.file)
        checkinReader = csv.DictReader(checkinFile)

        for row in checkinReader:
            race_id = Race.objects.get(id=row['race'])
            Checkin.objects.create(firstname=row['firstname'], lastname=row['lastname'], 
                race=race_id, checkin_bib=row['checkin_bib'], checkin_date=row['checkin_date'])