# tags/views.py

import logging
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post

logger = logging.getLogger(__name__)

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    
    def list(self, request, *args, **kwargs):
        # Log the API call when all are requested
        logger.info(f"User {request.user} listed all posts.")
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        # Log the API call when a new post is created
        logger.info(f"User {request.user} is created a new post.")

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Log the API call when a post is updated
        logger.info(f"User {request.user} is updated a post with ID {kwargs['pk']}.")

        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Log the API call when a post is deleted
        logger.info(f"User {request.user} is deleted a post with ID {kwargs['pk']}.")

        return super().destroy(request, *args, **kwargs)
