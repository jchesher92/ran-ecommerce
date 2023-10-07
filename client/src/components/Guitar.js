import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating.js'
import { Link } from 'react-router-dom'

function Guitar({ guitar }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`api/guitars/${guitar._id}`}>
        <Card.Img src={guitar.image} />
      </Link>

      <Card.Body>
        <Link to={`/guitars/${guitar._id}`}>
          <Card.Title as="div">
            <strong>{guitar.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className='my-3'>
            {/* {guitar.rating} from {guitar.numReviews} reviews */}
            <Rating value={guitar.rating} text={`${guitar.numReviews} reviews`} color={'#f8e825'}/>
          </div>
        </Card.Text>

        <Card.Text as="h3">
          £{guitar.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Guitar