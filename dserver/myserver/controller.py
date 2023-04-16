from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.http import HttpResponse
from myserver.models import *
from myserver.mongodb import *
import json
from django.http import *
from bson.objectid import *


def index(request):
    # return render(request, 'shop/index.html')
    return HttpResponse("Server is running")


def getProject(request):
    context = project_collection.find()
    return HttpResponse(content=context)


@csrf_exempt
def addProject(request):
    # prj = Project("xyz", "x", "y")
    # project.in
    # sert_one(prj.__dict__)
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title')
            link = data.get('link')
            description = data.get('description')
            np = Project(title=title, link=link, description=description)
            project_collection.insert_one(np.__dict__)
            return HttpResponse("JSON data Saved")
            # return HttpResponse(json.dumps(np), content_type='application/json')
        except json.JSONDecodeError:
            return HttpResponseBadRequest("Invalid JSON data")
    else:
        return HttpResponse("Server Error")


@csrf_exempt
def delProject(request, id):
    try:
        if request.method == 'DELETE':
            project_collection.find_one_and_delete({"_id": ObjectId(id)})
            return HttpResponse("Successfully deleted")
        else:
            return HttpResponseBadRequest("Request Not Allowed")
    except:
        return HttpResponseBadRequest("Invalid Project Id")


@csrf_exempt
def editProject(request, id):
    print(id, request.method)
    try:
        if request.method == 'POST':
            data = json.loads(request.body)
            title = data.get('title')
            link = data.get('link')
            description = data.get('description')
            np = Project(title=title, link=link, description=description)
            print(np.__dict__)
            find={"_id": ObjectId(id)}
            update={"$set": np.__dict__}
            project_collection.find_one_and_update(find,update)
            return HttpResponse("Successfully Edited")
    except:
        return HttpResponseBadRequest("Invalid Project Id")
