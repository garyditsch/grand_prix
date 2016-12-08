from rest_framework import serializers
from .models import Result

class ResultsSerializer(serializers.ModelSerializer):
    # average = serializers.ReadOnlyField()

    class Meta: 
        model = Result
        fields = ('id', 'race', 'firstname', 'lastname', 'age', 'bib', 'time', 'claim', 'user')

class UserResultsSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Result
        fields = ('id', 'race', 'firstname', 'lastname', 'age', 'bib', 'time', 'claim', 'user')