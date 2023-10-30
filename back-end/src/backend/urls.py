from django.contrib import admin
from django.urls import path, include
from profiles import views as profile_views
from posts import views as post_views
from recipes import views as recipe_views
from tags import views as tag_views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'profiles', profile_views.ProfileView, 'profile')
router.register(r'posts', post_views.PostView, 'post')
router.register(r'recipes', recipe_views.RecipeView, 'recipe')
router.register(r'tags', tag_views.TagView, 'tag')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # Profiles
    path('api/profiles/', profile_views.ProfileView.as_view({'get': 'list', 'post': 'create'})),
    path('api/profiles/<int:pk>/', profile_views.ProfileView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    # Posts
    path('api/posts/', post_views.PostView.as_view({'get': 'list', 'post': 'create'})),
    path('api/posts/<int:pk>/', post_views.PostView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    # Recipes
    path('api/recipes/', recipe_views.RecipeView.as_view({'get': 'list', 'post': 'create'})),
    path('api/recipes/<int:pk>/', recipe_views.RecipeView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    # Tags
    path('api/tags/', tag_views.TagView.as_view({'get': 'list', 'post': 'create'})),
    path('api/tags/<int:pk>/', tag_views.TagView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
]
