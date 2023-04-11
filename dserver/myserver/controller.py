from django.shortcuts import render
from django.http import HttpResponse
from myserver.models import Project

def index(request):
    # return render(request, 'shop/index.html')
    return HttpResponse("Server is running")

def addProject(request):
    prj = Project(
        title="title",
        link="link",
        description="description",
    )
    prj.save()
    return HttpResponse(prj)
