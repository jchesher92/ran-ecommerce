import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Guitar from '../components/Guitar'
import axios from 'axios'

import guitars from '../data/guitars.js'

function HomeScreen() {
  const [guitars, setGuitars] = useState([])

  useEffect(() => {
    async function fetchGuitars(){
      const { data } = await axios.get('api/guitars/')
      setGuitars(data)
    }

    fetchGuitars()
  
  }, [])

  return (
    <div>
      <h1>Latest Guitars</h1>
      <Row>
        {guitars.map(guitar => (
          <Col key={guitar._id} sm={12} md={6} lg={4} xl={3}>
            <Guitar guitar={guitar} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
