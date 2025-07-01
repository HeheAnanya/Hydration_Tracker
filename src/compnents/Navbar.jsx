import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate= useNavigate()
    return (
        <>
        <div className='nav-main'>
                <img src={logo} alt="Hydra logo" className='logo' onClick={()=>(navigate("/home"))}/>
                    <ul className='topics'>
                        <li onClick={()=>(navigate("/home")) }><a href="#">HOME</a></li>
                        <li onClick={()=>(navigate("/about"))}><a href="#">ABOUT</a></li>
                        <li onClick={()=>(navigate("/facts"))}><a href="#">FACTS</a></li>
                        <li onClick={()=>(navigate("/progress"))}><a href="#">PROGRESS</a></li>
                        <li onClick={()=>(navigate("/blog"))}><a href="#">BLOG</a></li>

                    </ul>
                <div className='formality'>
                    <Login/>
                </div>

        </div>

            </>
    )
}

export default Navbar