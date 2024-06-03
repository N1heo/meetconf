from rest_framework import viewsets
from .models import Conference, Role, ConfUser
from .serializers import ConferenceSerializer, RoleSerializer, ConfUserSerializer
from .permissions import IsSuperUser, IsSuperUserOrPostOnly


class ConferenceViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer
    # permission_classes = [IsSuperUser]


class RoleViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    # permission_classes = [IsSuperUser]


class ConfUserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, `create`, `update`, and `destroy` actions.
    """
    queryset = ConfUser.objects.all()
    serializer_class = ConfUserSerializer

