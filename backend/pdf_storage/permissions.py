from rest_framework.permissions import IsAdminUser, BasePermission


class IsSuperUser(IsAdminUser):
    """
    Custom permission to allow superusers all actions.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)


class IsSuperUserOrPostOnly(BasePermission):
    """
    Custom permission to allow superusers all actions, regular users can only create (POST).
    """
    def has_permission(self, request, view):
        # Allow superusers all actions
        if request.user and request.user.is_superuser:
            return True
        # Allow regular users to only POST
        if request.method == 'POST':
            return True
        return False