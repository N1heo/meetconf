from rest_framework import viewsets
from .models import EventsSlide
from .serializers import EventsSlideSerializer
from permissions import IsSuperUserOrReadOnly


class EventsSliderViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = EventsSlide.objects.all()
    serializer_class = EventsSlideSerializer
    permission_classes = (IsSuperUserOrReadOnly,)
