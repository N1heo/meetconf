# views.py
from django.shortcuts import render
from django.http import HttpResponseRedirect


def api_index(request):
    return render(request, 'api_index.html')


def api_redirect(request):
    return HttpResponseRedirect('/api/')