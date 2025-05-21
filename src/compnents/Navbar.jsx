import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import Login from './Login'
// import { auth, provider } from "../Firebase"
// import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
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
                    <Login/>
                {/* <button className='login'>Login</button> */}
                </div>

        </div>

            </>
    )
}

export default Navbar