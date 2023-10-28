import logging
from rest_framework import viewsets
from .serializers import CategorySerializer
from .models import Category

logger = logging.getLogger(__name__)

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def create(self, request, *args, **kwargs):
        # Log the API call when a new Category is created
        logger.info(f"User {request.user} created a new Category.")

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Log the API call when a Category is updated
        logger.info(f"User {request.user} updated a Category with ID {kwargs['pk']}.")

        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Log the API call when a Category is deleted
        logger.info(f"User {request.user} is deleted a Category with ID {kwargs['pk']}.")

        return super().destroy(request, *args, **kwargs)
