import {
  GUITAR_LIST_REQUEST,
  GUITAR_LIST_SUCCESS,
  GUITAR_LIST_FAIL,

  GUITAR_TOP_REQUEST,
  GUITAR_TOP_SUCCESS,
  GUITAR_TOP_FAIL,

  GUITAR_CREATE_REVIEW_REQUEST,
  GUITAR_CREATE_REVIEW_SUCCESS,
  GUITAR_CREATE_REVIEW_FAIL,
  GUITAR_CREATE_REVIEW_RESET,

  GUITAR_DETAILS_REQUEST,
  GUITAR_DETAILS_SUCCESS,
  GUITAR_DETAILS_FAIL
} from '../constants/guitarConstants'

export const guitarListReducer = (state = { guitars: [] }, action) => {
  switch (action.type){
    case GUITAR_LIST_REQUEST:
      return { loading: true, guitars: [] }

    case GUITAR_LIST_SUCCESS:
      return { loading: false, guitars: action.payload }

    case GUITAR_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const guitarDetailsReducer = (state = { guitar: { reviews: [] } }, action) => {
  switch (action.type){
    case GUITAR_DETAILS_REQUEST:
      return { loading: true, ...state }

    case GUITAR_DETAILS_SUCCESS:
      return { loading: false, guitar: action.payload }

    case GUITAR_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const guitarReviewCreateReducer = (state = { guitar: { reviews: [] } }, action) => {
  switch (action.type){
    case GUITAR_CREATE_REVIEW_REQUEST:
      return { loading: true }

    case GUITAR_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }

    case GUITAR_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }

    case GUITAR_CREATE_REVIEW_RESET:
      return { }

    default:
      return state
  }
}

export const guitarTopRatedReducer = (state = { guitars: [] }, action) => {
  switch (action.type){
    case GUITAR_TOP_REQUEST:
      return { loading: true, guitars: [] }

    case GUITAR_TOP_SUCCESS:
      return { loading: false, guitars: action.payload }

    case GUITAR_TOP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}