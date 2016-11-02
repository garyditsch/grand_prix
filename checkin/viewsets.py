from rest_framework import viewsets
from .models import Checkin
from .serializers import CheckinSerializer

class CheckinViewSet(viewsets.ModelViewSet):
    queryset = Checkin.objects.all()
    serializer_class = CheckinSerializer
    