import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function GuitarScreen({ match }) {
  // const guitar = guitars.find((g) => g._id === match.params.id)

  const [guitar, setGuitar] = useState([])

  useEffect(() => {
    async function fetchGuitar(){
      
      const { data } = await axios.get(`/api/guitars/${match.params.id}`)
      setGuitar(data)
    } 

    fetchGuitar()
  
  }, [])

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={guitar.image} alt={guitar.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{guitar.name}</h3>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Rating value={guitar.rating} text={`${guitar.numReviews} reviews`} color={'#f8e825'} />
          </ListGroup.Item>

          <ListGroup.Item>
            Price: £{guitar.price}
          </ListGroup.Item>

          <ListGroup.Item>
            Description: {guitar.description}
          </ListGroup.Item>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> £{guitar.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {guitar.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block' disabled={guitar.countInStock === 0} type='button'>Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default GuitarScreen