from rest_framework import viewsets
from .models import Result
from .serializers import ResultsSerializer


class ResultsViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultsSerializer

    def get_queryset(self):
        """ allow rest api to filter by race """
        queryset = Result.objects.all()
        race = self.request.query_params.get('race', None)
        if race is not None:
            queryset = queryset.filter(race=race)
        
        return queryset