import axios from 'axios'
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

  GUITAR_DETAILS_REQUEST,
  GUITAR_DETAILS_SUCCESS,
  GUITAR_DETAILS_FAIL
} from '../constants/guitarConstants'

export const listGuitars = () => async (dispatch) => {
  try {
    dispatch({ type: GUITAR_LIST_REQUEST })

    const { data } = await axios.get('/api/guitars')

    dispatch({
      type: GUITAR_LIST_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: GUITAR_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const listTopGuitars = () => async (dispatch) => {
  try {
    dispatch({ type: GUITAR_TOP_REQUEST })

    const { data } = await axios.get('/api/guitars/top/')

    dispatch({
      type: GUITAR_TOP_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: GUITAR_TOP_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const listGuitarDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GUITAR_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/guitars/${id}`)

    dispatch({
      type: GUITAR_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: GUITAR_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const createGuitarReview = (guitarId, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GUITAR_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/guitars/${guitarId}/reviews/`,
      review,
      config
    )
    dispatch({
      type: GUITAR_CREATE_REVIEW_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GUITAR_CREATE_REVIEW_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}