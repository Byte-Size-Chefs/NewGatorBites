# profiles/views.py
import logging
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProfileSerializer
from .models import Profile

logger = logging.getLogger(__name__)

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def create(self, request, *args, **kwargs):
        # Log the API call when a new profile is created
        logger.info(f"User {request.user} is created a new profile.")

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Log the API call when a profile is updated
        logger.info(f"User {request.user} is updated a profile with ID {kwargs['pk']}.")

        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Log the API call when a profile is deleted
        logger.info(f"User {request.user} is deleted a profile with ID {kwargs['pk']}.")

        return super().destroy(request, *args, **kwargs)