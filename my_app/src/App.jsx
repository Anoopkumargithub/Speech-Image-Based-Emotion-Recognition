import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 

  return (
    <BrowserRouter>
    <Header />
    <Routes> 
      <Route path="/register" element={<Signup />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/home" element={<Home />} ></Route>
      <Route path="/features" element={<Features />} ></Route>
      <Route path="/HowItWorks" element={<HowItWorks />} ></Route>
      <Route path="/Testimonials" element={<Testimonials />} ></Route>
      <Route path="/Pricing" element={<Pricing />} ></Route>  
      <Route path="/AboutUs" element={<AboutUs />} ></Route>

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
