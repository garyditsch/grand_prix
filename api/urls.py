from django.conf.urls import include, url 
from rest_framework import routers

from race.viewsets import RaceViewSet
from results.viewsets import ResultsViewSet

router = routers.DefaultRouter()
router.register(r'race', RaceViewSet)
router.register(r'results', ResultsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]