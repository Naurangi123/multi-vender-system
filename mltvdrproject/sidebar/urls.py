# urls.py
from django.urls import path
from .views import SidebarView

urlpatterns = [
    path('api/sidebar/', SidebarView.as_view(), name='sidebar-items'),
]
