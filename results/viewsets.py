from rest_framework import viewsets, generics
from .models import Result
from .serializers import ResultsSerializer, UserResultsSerializer, ResultsAnalysisSerializer
from django.db.models import Avg, Max, Min, Count

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

class UserResultsList(viewsets.ViewSetMixin, generics.ListAPIView):
    serializer_class = UserResultsSerializer

    def get_queryset(self):
        """
        This view should return a list of all the results that have
        been claimed by the authenticated user.
        """
        user = self.request.user
        return Result.objects.filter(user=user)

class ResultsAnalysisViewSet(viewsets.ModelViewSet):
    serializer_class = ResultsAnalysisSerializer

    def get_queryset(self):
        """
        This view should return summary of basic results analysis.
        """
        return Result.objects.annotate(
            average=Avg('time'), 
            max=Max('time'), 
            min=Min('time'), 
            count=Count('time')
        )

        # race = 2
        # if race is not None:
        #     race_results_list = Result.objects.filter(race=race)
        #     race_results_summary = race_results_list.aggregate(
        #         average=Avg('time'), 
        #         max=Max('time'), 
        #         min=Min('time'), 
        #         count=Count('time')
        #     )

        #     return race_results_summary