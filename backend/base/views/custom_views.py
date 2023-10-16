from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import CustomGuitar
from base.serialisers import CustomSerialiser


from rest_framework import status

@api_view(['POST'])
def createCustomGuitar(request):
  data = request.data
  
  customGuitar = CustomGuitar.objects.create(
    numOfStrings=data['numOfStrings'],
    rlHanded=data['rlHanded'],
    scaleLength=data['scaleLength'],
    construction=data['construction'],
    bodyShape=data['bodyShape'],
    bodyMaterial=data['bodyMaterial'],
    topWoodOptions=data['topWoodOptions'],
    bodyBinding=data['bodyBinding'],
    bindingMaterial=data['bindingMaterial'],
    finish=data['finish'],
    headstockShape=data['headstockShape'],
    headstock=data['headstock'],
    headstockFinish=data['headstockFinish'],
    headstockBinding=data['headstockBinding'],
    trussRodCover=data['trussRodCover'],
    logo=data['logo'],
    neckMaterial=data['neckMaterial'],
    neckShape=data['neckShape'],
    nutWidth6=data['nutWidth6'],
    nutWidth7=data['nutWidth7'],
    nutWidth8=data['nutWidth8'],
    thicknessAt1stand12thFret=data['thicknessAt1stand12thFret'],
    neckFinish=data['neckFinish'],
    # fingerboardMaterial=data['fingerboardMaterial'],
    # fingerboardBinding=data['fingerboardBinding'],
    # numOfFrets=data['numOfFrets'],
    # fretSize=data['fretSize'],
    # fingerboardRadius=data['fingerboardRadius'],
    # inlays=data['inlays'],
    # customInlays=data['customInlays'],
    # sideInlays=data['sideInlays'],
    # nut=data['nut'],
    # hardwareColour=data['hardwareColour'],
    # bridgeSystem6=data['bridgeSystem6'],
    # bridgeSystem7=data['bridgeSystem7'],
    # bridgeSystem8=data['bridgeSystem8'],
    # tuningMachines=data['tuningMachines'],
    # straplocks=data['straplocks'],
    # neckPickup=data['neckPickup'],
    # middlePickup=data['middlePickup'],
    # bridgePickup=data['BridgePickup'],
    # pickupRings=data['pickupRings'],
    # controlKnobs=data['controlKnobs'],
    # pickupSelector=data['pickupSelector'],
    # otherControls=data['otherControls'],
    # flightCase=data['flightCase'],
    # additionalInstructions=data['additionalInstructions'],
  )

  serialiser = CustomSerialiser(customGuitar, many=False)
  return Response(serialiser.data)

