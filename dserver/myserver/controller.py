from django.shortcuts import render, redirect
from django.http import HttpResponse
from myserver.models import Project
from myserver.mongodb import project
import json
from django.http import HttpResponseBadRequest

def index(request):
    # return render(request, 'shop/index.html')
    return HttpResponse("Server is running")


def getProject(request):
    context = Project.objects.all()
    return HttpResponse(content=context)


def addProject(request):
    # prj = Project("xyz", "x", "y")
    # project.insert_one(prj.__dict__)
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title')
            # do something with title
            return HttpResponse("Got it!")
        except json.JSONDecodeError:
            return HttpResponseBadRequest("Invalid JSON data")
    else:
        return render(request, 'my_template.html')

