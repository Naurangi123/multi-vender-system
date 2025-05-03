from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SidebarItem
from .serializers import SidebarItemSerializer

class SidebarView(APIView):
    def get(self, request):
        user_role = request.user.role  # customize as needed
        items = SidebarItem.objects.filter(visible=True).filter(role__in=['all', user_role])
        serializer = SidebarItemSerializer(items, many=True)
        return Response(serializer.data)
