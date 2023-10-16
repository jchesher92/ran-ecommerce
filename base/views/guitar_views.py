from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from base.models import Guitar, Review
from base.serialisers import GuitarSerialiser

from rest_framework import status

@api_view(['GET'])
def getTopGuitars(request):
  guitars = Guitar.objects.filter(rating__gt=4).order_by('-rating')[0:5]
  serialiser = GuitarSerialiser(guitars, many=True)
  return Response(serialiser.data)

@api_view(['GET'])
def getGuitars(request):
  guitars = Guitar.objects.all()
  serialiser = GuitarSerialiser(guitars, many=True)
  return Response(serialiser.data)

@api_view(['GET'])
def getGuitar(request, pk):
  guitar = Guitar.objects.get(_id=pk)
  serialiser = GuitarSerialiser(guitar, many=False)
  return Response(serialiser.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createGuitarReview(request, pk):
  user = request
  guitar = Guitar.objects.get(_id=pk)
  data = request.data

  #1 - Review already exists
  alreadyExists = guitar.review_set.filter(user=user).exists()

  if alreadyExists:
    content = {'detail': 'Guitar already reviewed'}
    return Response(content, status=status.HTTP_400_BAD_REQUEST)

  #2 - No Rating or 0
  elif data['rating'] == 0:
    content = {'detail': 'Please select a rating'}
    return Response(content, status=status.HTTP_400_BAD_REQUEST)


  #3 - Create Review
  else:
    review = Review.objects.create(
      user=user,
      guitar=guitar,
      name=user.first_name,
      rating=data['rating'],
      comment=data['comment'],
    )

    reviews = guitar.review_set.all()
    guitar.numReviews = len(reviews)

    total = 0
    for i in reviews:
      total += i.rating
    
    guiar.rating = total / len(reviews)
    guitar.save()

    return Response('Review Added')