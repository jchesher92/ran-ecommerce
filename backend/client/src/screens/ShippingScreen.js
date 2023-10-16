import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen({ history }) {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.address)
  const [postcode, setPostcode] = useState(shippingAddress.address)
  const [country, setCountry] = useState(shippingAddress.address)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postcode, country }))
    navigate('/payment')
  }

  return (
    <FormContainer>
      <Form onSubmit={ submitHandler }>

        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter address'
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter city'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='postcode'>
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter postcode'
            value={postcode ? postcode : ''}
            onChange={(e) => setPostcode(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter country'
            value={country ? country : ''}
            onChange={(e) => setCountry(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
