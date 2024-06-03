from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ConferenceViewSet, RoleViewSet, ConfUserViewSet

router = DefaultRouter()
router.register(r'conferences', ConferenceViewSet, basename='conference')
router.register(r'roles', RoleViewSet, basename='role')
router.register(r'users', ConfUserViewSet, basename='user')


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
