import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import GuitarScreen from './screens/GuitarScreen.js'
import CartScreen from './screens/CartScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import CustomShopScreen from './screens/CustomShopScreen.js'
import ShippingScreen from './screens/ShippingScreen.js'

import { useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  useEffect(() => {
    async function getData(){
      try {
        const { data } = await axios.get('/api/guitars/') // <---- Replace with your endpoint to test the proxy
        // console.log(data)
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
            <Route path='/login' Component={LoginScreen} />
            <Route path='/register' Component={RegisterScreen} />
            <Route path='/profile' Component={ProfileScreen} />
            <Route path='/custom' Component={CustomShopScreen} />
            <Route path='/shipping' Component={ShippingScreen} />
            <Route path='/guitar/:id' Component={GuitarScreen} />
            <Route path='/cart/:id?' Component={CartScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
