from rest_framework import serializers
from .models import Result

class ResultsSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Result
        fields = ('id', 'race', 'firstname', 'lastname', 'age', 'bib', 'time', 'claim', 'user')

class UserResultsSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Result
        fields = ('id', 'race', 'firstname', 'lastname', 'age', 'bib', 'time', 'claim', 'user')


class ResultsAnalysisSerializer(serializers.ModelSerializer):
    count = serializers.IntegerField()
    average = serializers.IntegerField()
    min = serializers.IntegerField()
    max = serializers.IntegerField()


    class Meta:
        model = Result
        fields = ('race', 'count', 'average', 'min', 'max')
