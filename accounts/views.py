from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework.generics import RetrieveAPIView

from .serializers import CurrentUserSerializer

class CurrentUserDetails(RetrieveAPIView):
    model = User
    serializer_class = CurrentUserSerializer

    def get_object(self):
        return self.request.user