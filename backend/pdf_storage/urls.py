from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArchiveViewSet, ProgramViewSet

router = DefaultRouter()
router.register(r'archive', ArchiveViewSet, basename='archive')
router.register(r'program', ProgramViewSet, basename='program')

urlpatterns = [
    path('', include(router.urls)),
]
