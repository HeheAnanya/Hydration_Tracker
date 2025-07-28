import React from 'react'
import Navbar from '../compnents/Navbar'
import Home from '../compnents/Home'
import Products from '../compnents/Products'
import Footer from '../compnents/Footer'
// import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  return (
    <div style={{backgroundColor: "rgb(244, 241, 241)"}}>
        <Home/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default HomePage