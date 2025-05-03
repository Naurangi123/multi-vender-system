from django.db import models
class SidebarItem(models.Model):
    title = models.CharField(max_length=100)
    route = models.CharField(max_length=255)
    icon = models.CharField(max_length=100, blank=True)  
    role = models.CharField(max_length=50, default='all') 
    visible = models.BooleanField(default=True)

    def __str__(self):
        return self.title
