import React from 'react'
import Navbar from '../compnents/Navbar'
import Footer from '../compnents/Footer'
import Hero from '../compnents/Facts/Hero'
import Content from '../compnents/Facts/Content'
// import { useNavigate } from 'react-router-dom'

const FactsPage = () => {
  return (
    <div style={{backgroundColor:"#18182b"}}>
    <Navbar/>
    <Hero/>
    <Content/>
    <Footer/>

    </div>

  )
}

export default FactsPage