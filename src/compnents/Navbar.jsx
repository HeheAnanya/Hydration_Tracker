import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
        <div className='nav-main'>
                <img src={logo} alt="Hydra logo" className='logo'/>
                    <ul className='topics'>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PROGRESS</a></li>
                        <li><a href="#" >FACTS</a></li>
                    </ul>
                <div className='formality'>
                <button className='login'>Login</button>
                <button className='sign_up'>Sign Up</button>
                </div>

        </div>

            </>
    )
}

export default Navbar