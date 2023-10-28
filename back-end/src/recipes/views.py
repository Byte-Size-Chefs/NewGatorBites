import logging
from rest_framework import viewsets
from .serializers import RecipeSerializer
from .models import Recipe

logger = logging.getLogger(__name__)

class RecipeView(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

    def create(self, request, *args, **kwargs):
        # Log the API call when a new recipe is created
        logger.info(f"User {request.user} created a new recipe.")

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Log the API call when a recipe is updated
        logger.info(f"User {request.user} updated a recipe with ID {kwargs['pk']}.")

        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Log the API call when a recipe is deleted
        logger.info(f"User {request.user} is deleted a recipe with ID {kwargs['pk']}.")

        return super().destroy(request, *args, **kwargs)
