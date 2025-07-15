import React from 'react'
import Navbar from '../compnents/Navbar'
import Footer from '../compnents/Footer'
import Hero from '../compnents/Facts/Hero'
import Content from '../compnents/Facts/Content'
// import { useNavigate } from 'react-router-dom'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


const FactsPage = () => {
    const auth = getAuth();
    console.log(auth)
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




// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });