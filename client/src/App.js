import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import GuitarScreen from './screens/GuitarScreen.js'

import { useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  useEffect(() => {
    async function getData(){
      try {
        const { data } = await axios.get('/api/guitars/') // <---- Replace with your endpoint to test the proxy
        console.log(data)
      } catch (error) {
        console.log(error.response.data)
      }
    }
    getData()
  }, [])

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' Component={HomeScreen} exact/>
            <Route path='/guitars/:id' Component={GuitarScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
