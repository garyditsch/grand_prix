from django.core.management.base import BaseCommand
from results.models import Result 
import sys, os
import csv

from results.models import Result 

class Command(BaseCommand):

    def handle(self):
        # Get path to the csv file
        file = '/Users/G/Documents/LBX20162.csv'

        resultFile = open(file)
        resultReader = csv.reader(resultFile)
        data = list(resultReader)

        for line in data:
            result = Result()
            result.race = 2  #make sure to set this at each upload to correct race
            result.bib = line[0]
            result.firstname = line[2]
            result.lastname = line[3]
            result.age = line[6]
            result.gender = line[7]
            result.time = line[4]
            result.save()