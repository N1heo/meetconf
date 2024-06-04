from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventsSliderViewSet

router = DefaultRouter()
router.register(r'sliders', EventsSliderViewSet, basename='slider')


urlpatterns = [
    path('', include(router.urls)),
]
