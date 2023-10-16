import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'

import { legacy_createStore as createStore } from 'redux'
import { guitarListReducer, guitarDetailsReducer, guitarReviewCreateReducer, guitarTopRatedReducer } from './reducers/guitarReducers'
import { customGuitarReducer } from './reducers/customReducers'


const reducer = combineReducers({
  guitarList: guitarListReducer,
  guitarDetails: guitarDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  customGuitar: customGuitarReducer,
  guitarReviewCreate: guitarReviewCreateReducer,
  guitarTopRated: guitarTopRatedReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
  JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null

const shippingInfoFromStorage = localStorage.getItem('shippingAddress') ?
  JSON.parse(localStorage.getItem('shippingAddress')) : {}

const customGuitarInfoFromStorage = localStorage.getItem('customGuitarInfo') ?
  JSON.parse(localStorage.getItem('customGuitarInfo')) : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage, 
    shippingAddress: shippingInfoFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(...middleware)))

export default store