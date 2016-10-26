from django.conf.urls import include, url 
from rest_framework import routers

from race.viewsets import RaceViewSet

router = routers.DefaultRouter()
router.register(r'race', RaceViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]