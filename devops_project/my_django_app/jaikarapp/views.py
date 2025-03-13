from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>This is my first Django application JAIKAR DEVOPS ENGINEER</h1>")

