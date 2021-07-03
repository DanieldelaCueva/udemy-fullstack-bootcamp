from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("<em>My Second App</em>")

def help(request):
    dict = {
        "help": "Help Page"
    }
    return render(request, "AppTwo/help.html", context=dict)

# Create your views here.
