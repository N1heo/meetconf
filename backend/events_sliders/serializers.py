from rest_framework import serializers

from event_registration.models import Conference
from event_registration.serializers import ConferenceSerializer
from events_sliders.models import EventsSlide


class EventsSlideSerializer(serializers.ModelSerializer):
    conference = serializers.PrimaryKeyRelatedField(queryset=Conference.objects.all())

    class Meta:
        model = EventsSlide
        fields = ['id', 'name', 'text', 'image', 'conference']
