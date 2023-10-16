import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Guitar from '../components/Guitar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listGuitars } from '../actions/guitarActions'
import GuitarCarousel from '../components/GuitarCarousel'


function HomeScreen() {
  const dispatch = useDispatch()
  const guitarList = useSelector(state => state.guitarList)
  const { error, loading, guitars } = guitarList

  useEffect(() => {
    dispatch(listGuitars())
  }, [dispatch])

  return (
    <div>
      <GuitarCarousel/>
      <h1>Checkout Our Guitars</h1>
      {loading ? <Loader/>
        : error ? <Message variant='danger'>{error}</Message>
          :
          <Row>
            {guitars.map(guitar => (
              <Col key={guitar._id} sm={12} md={6} lg={4} xl={3}>
                <Guitar guitar={guitar} />
              </Col>
            ))}
          </Row>
      }
      
    </div>
  )
}

export default HomeScreen
