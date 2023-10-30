# tags/views.py
import logging
from rest_framework import viewsets
from .serializers import TagSerializer
from .models import Tag

logger = logging.getLogger(__name__)

class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

    def list(self, request, *args, **kwargs):
        # Log the API call when all are requested
        logger.info(f"User {request.user} listed all tags.")
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        # Log the API call when a new Tag is created
        logger.info(f"User {request.user} created a new tag.")

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Log the API call when a Tag is updated
        logger.info(f"User {request.user} updated a tag with ID {kwargs['pk']}.")

        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Log the API call when a Tag is deleted
        logger.info(f"User {request.user} is deleted a tag with ID {kwargs['pk']}.")

        return super().destroy(request, *args, **kwargs)
