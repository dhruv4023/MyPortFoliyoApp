
from django.contrib import admin
from django.urls import path
from myserver.controller import *
urlpatterns = [
    path('', index, name="home"),
    path('addproject/', addProject, name="addproject"),
    path('admin/', admin.site.urls),
]
