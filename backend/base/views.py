from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Guitar
from .guitars import guitars

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
  routes = [
    '/api/guitars/',
    '/api/guitars/create/',
    '/api/guitars/create/',
    '/api/guitars/upload/',
    '/api/guitars/<id>/reviews/',
    '/api/guitars/top/',
    '/api/guitars/<id>/',
    '/api/guitars/delete/<id>/',
    '/api/guitars/<update>/<id>',
  ]
  return Response(routes)

@api_view(['GET'])
def getGuitars(request):
  return Response(guitars)

@api_view(['GET'])
def getGuitar(request, pk):
  guitar = None
  for i in guitars:
    if i['_id'] == pk:
      guitar = i
      break

  return Response(guitars)
