
from django.contrib import admin
from django.urls import path
from myserver.controller import *
urlpatterns = [
    path('', index, name="home"),
    path('project/addproject/', addProject, name="addproject"),
    path('project/getproject/', getProject, name="getproject"),
    path('admin/', admin.site.urls),
]
