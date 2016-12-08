from django.conf.urls import include, url 
from rest_framework import routers

from race.viewsets import RaceViewSet
from results.viewsets import ResultsViewSet, UserResultsList
from checkin.viewsets import CheckinViewSet
from accounts.views import CurrentUserDetails

router = routers.DefaultRouter()
router.register(r'race', RaceViewSet)
router.register(r'results', ResultsViewSet, base_name='results')
router.register(r'user-results', UserResultsList, base_name='user-results')
router.register(r'checkins', CheckinViewSet)

urlpatterns = [
    url(r'^me/$', CurrentUserDetails.as_view(), name="me"),
    url(r'^', include(router.urls)),
]