import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listGuitarDetails, createGuitarReview } from '../actions/guitarActions'
import { GUITAR_CREATE_REVIEW_RESET } from '../constants/guitarConstants'

function GuitarScreen({ match, history }) {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const guitarDetails = useSelector(state => state.guitarDetails)
  const { loading, error, guitar } = guitarDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const guitarReviewCreate = useSelector(state => state.guitarReviewCreate)
  const { 
    loading: loadingGuitarReview, 
    error: errorGuitarReview,
    success: successGuitarReview,
  } = guitarReviewCreate

  useEffect(() => {
    if (successGuitarReview) {
      setRating(0)
      setComment('')
      dispatch({ type: GUITAR_CREATE_REVIEW_RESET })
    }

    dispatch(listGuitarDetails(id))
  }, [dispatch, match, id, successGuitarReview])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
    // console.log(`Add to cart: ${id}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createGuitarReview(
      id, {
        rating,
        comment,
      }
    ))
  }

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      {loading ?
        <Loader/>
        : error
          ? <Message variant='danger'>{error}</Message>
          : (
            <div>
              <Row>
                <Col md={6}>
                  <Image src={guitar.image} alt={guitar.name} fluid />
                  <ListGroup.Item>
              Body Shape: {guitar.bodyShape}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Construction: {guitar.construction}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Scale Length: {guitar.scaleLength}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Body Material: {guitar.bodyMaterial}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Finish: {guitar.finish}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Headstock Shape: {guitar.headstockShape}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Neck Material: {guitar.neckMaterial}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Fingerboard Material: {guitar.fingerboardMaterial}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Number of Frets: {guitar.numOfFrets}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Fret Size: {guitar.fretSize}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Inlays: {guitar.inlays}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Side Inlays: {guitar.sideInlays}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Nut: {guitar.nut}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Hardware Colour: {guitar.hardwareColour}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Bridge System: {guitar.bridgeSystem}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Tuning Machines: {guitar.tuningMachines}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Straps: {guitar.straps}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Pickups: {guitar.pickups}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Controls: {guitar.controls}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Other Controls: {guitar.otherControls}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Width at nut / 24th fret: {guitar.widthAtNutand24thFret}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Thickness at 1st / 12th fret: {guitar.thicknessAt1stand12thFret}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Fingerboard Radius: {guitar.fingerboardRadius}
                  </ListGroup.Item>
                  <ListGroup.Item>
              Back Shape: {guitar.backShape}
                  </ListGroup.Item>
                </Col>

                <Col md={3}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h3>{guitar.name}</h3>
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup.Item>
                    <Rating value={guitar.rating} text={` ${guitar.numReviews} reviews`} color={'#f8e825'} />
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

                      {guitar.countInStock > 0 && (
                        <ListGroup.Item>
                          <Row>
                            <Col>Qty</Col>
                            <Col xs='auto' className='my-1'>
                              <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {
                                  [...Array(guitar.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  ))
                                }
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}

                      <ListGroup.Item>
                        <Button
                          onClick={addToCartHandler}
                          className='btn-block' 
                          disabled={guitar.countInStock === 0} 
                          type='button'>
                            Add to Cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row className='pt-4'>
                <Col md={6}>
                  <h4>Reviews</h4>
                  {guitar.reviews.length === 0 && <Message variant='info'>No reviews</Message>}
                  
                  <ListGroup variant='flush'>
                    {guitar.reviews.map((review) => (
                      <ListGroup.Item key={review._id}>
                        <strong>{review.name}</strong>
                        <Rating value={review.rating} color='#f8e85'/>
                        <p>{review.createdAt.substring(0,10)}</p>
                        <p>{review.comment}</p>
                      </ListGroup.Item>
                    ))}

                    <ListGroup.Item>
                      <h4>Write a Review</h4>
                      {loadingGuitarReview && <Loader/>}
                      {successGuitarReview && <Message variant='success'>Review Submitted</Message>}
                      {errorGuitarReview && <Message variant='danger'>{errorGuitarReview}</Message>}
                      
                      
                      { userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group controlId='rating'>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                              as='select'
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value=''>Select...</option>
                              <option value='1'>1 - Poor</option>
                              <option value='2'>2 - Not bad</option>
                              <option value='3'>3 - Good</option>
                              <option value='4'>4 - Very Good</option>
                              <option value='5'>5 - Excellent</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group className='pb-2' controlId='comment'>
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                              as='textarea'
                              row='5'
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            >
                            </Form.Control>
                          </Form.Group>

                          <Button
                            disabled={loadingGuitarReview}
                            type='submit'
                            variant='primary'
                          >
                            Submit
                          </Button>
                        </Form>
                      ) : (
                        <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </div>
          )
      }
      
    </div>
  )
}

export default GuitarScreen