import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopGuitars } from '../actions/guitarActions'

function GuitarCarousel() {
  const dispatch = useDispatch()

  const guitarTopRated = useSelector(state => state.guitarTopRated)
  const { error, loading, guitars } = guitarTopRated

  useEffect(() => {
    dispatch(listTopGuitars())
  }, [dispatch])


  return ( loading ? <Loader/>
    : error
      ? <Message variant='danger'>{error}</Message>
      : (
        <Carousel pause='hover' className='bg-dark'>
          {guitars.map(guitar => (
            <Carousel.Item key={guitar._id}>
              <Link to={`/guitar/${guitar._id}`}>
                <Image src={guitar.image} alt={guitar.name} fluid/>
                <Carousel.Caption className='carousel.caption'>
                  <h4>{guitar.name} (${guitar.price})</h4>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      ))
}

export default GuitarCarousel
