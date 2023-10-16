import {
  CUSTOM_GUITAR_CREATE_REQUEST,
  CUSTOM_GUITAR_CREATE_SUCCESS,
  CUSTOM_GUITAR_CREATE_FAIL,
  CUSTOM_GUITAR_CREATE_RESET

} from '../constants/customConstant'

export const customGuitarReducer = (state = {}, action) => {
  switch (action.type){
    case CUSTOM_GUITAR_CREATE_REQUEST:
      return { loading: true }

    case CUSTOM_GUITAR_CREATE_SUCCESS:
      return { loading: false, customInfo: action.payload }

    case CUSTOM_GUITAR_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}