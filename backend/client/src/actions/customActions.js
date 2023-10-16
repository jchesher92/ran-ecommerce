import axios from 'axios'
import {
  CUSTOM_GUITAR_CREATE_REQUEST,
  CUSTOM_GUITAR_CREATE_SUCCESS,
  CUSTOM_GUITAR_CREATE_FAIL,
  CUSTOM_GUITAR_CREATE_RESET

} from '../constants/customConstant'

export const create = (
  numOfStrings, 
  rlHanded, 
  scaleLength,
  construction,
  bodyShape,
  bodyMaterial,
  topWoodOptions,
  bodyBinding,
  bindingMaterial,
  finish,
  headstockShape,
  headstock,
  headstockFinish,
  headstockBinding,
  trussRodCover,
  logo,
  neckMaterial,
  neckShape,
  nutWidth6,
  nutWidth7,
  nutWidth8,
  thicknessAt1stand12thFret,
  neckFinish
  // fingerboardMaterial,
  // fingerboardBinding,
  // numOfFrets,
  // fretSize,
  // fingerboardRadius,
  // inlays,
  // customInlays,
  // sideInlays,
  // nut,
  // hardwareColour,
  // bridgeSystem6,
  // bridgeSystem7,
  // bridgeSystem8,
  // tuningMachines,
  // straplocks,
  // neckPickup,
  // middlePickup,
  // bridgePickup,
  // pickupRings,
  // controlKnobs,
  // pickupSelector,
  // otherControls,
  // flightCase,
  // additionalInstructions
) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOM_GUITAR_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/custom/create/',
      { 
        'numOfStrings': numOfStrings,
        'rlHanded': rlHanded, 
        'scaleLength': scaleLength,
        'construction': construction,
        'bodyShape': bodyShape,
        'bodyMaterial': bodyMaterial,
        'topWoodOptions': topWoodOptions,
        'bodyBinding': bodyBinding,
        'bindingMaterial': bindingMaterial,
        'finish': finish,
        'headstockShape': headstockShape,
        'headstock': headstock,
        'headstockFinish': headstockFinish,
        'headstockBinding': headstockBinding,
        'trussRodCover': trussRodCover,
        'logo': logo,
        'neckMaterial': neckMaterial,
        'neckShape': neckShape,
        'nutWidth6': nutWidth6,
        'nutWidth7': nutWidth7,
        'nutWidth8': nutWidth8,
        'thicknessAt1stand12thFret': thicknessAt1stand12thFret,
        'neckFinish': neckFinish,
        // 'fingerboardMaterial': fingerboardMaterial,
        // 'fingerboardBinding': fingerboardBinding,
        // 'numOfFrets': numOfFrets,
        // 'fretSize': fretSize,
        // 'fingerboardRadius': fingerboardRadius,
        // 'inlays': inlays,
        // 'customInlays': customInlays,
        // 'sideInlays': sideInlays,
        // 'nut': nut,
        // 'hardwareColour': hardwareColour,
        // 'bridgeSystem6': bridgeSystem6,
        // 'bridgeSystem7': bridgeSystem7,
        // 'bridgeSystem8': bridgeSystem8,
        // 'tuningMachines': tuningMachines,
        // 'straplocks': straplocks,
        // 'neckPickup': neckPickup,
        // 'middlePickup': middlePickup,
        // 'bridgePickup': bridgePickup,
        // 'pickupRings': pickupRings,
        // 'controlKnobs': controlKnobs,
        // 'pickupSelector': pickupSelector,
        // 'otherControls': otherControls,
        // 'flightCase': flightCase,
        // 'additionalInstructions': additionalInstructions,
      },
      config
    )

    dispatch({
      type: CUSTOM_GUITAR_CREATE_SUCCESS,
      payload: data,
    })

    localStorage.setItem('customInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: CUSTOM_GUITAR_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}
