from rest_framework import viewsets, generics
from .models import Result
from .serializers import ResultsSerializer, UserResultsSerializer  #, ResultsAnalysisSerializer


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

# class ResultsAnalysisViewSet(viewsets.GenericViewSet):
#     queryset = Result.objects.all()
#     serializer_class = ResultsAnalysisSerializer

#     def get_queryset(self):
#         queryset = Result.objects.all()
#         race = self.request.query_params.get('race', None)
#         if race is not None:
#             queryset = queryset.filter(race=race)

#         race_times = {time: value for time, value in queryset.items() }
#         print(race_times)
#         return race_times