import React,{useEffect, useState} from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider} from "../Firebase";
import dummyUsers from "./DummyData/dummy";

function Login() {
  const [user, setUser]= useState(null)

  useEffect(()=>{
    const stored = localStorage.getItem("user")
    if (stored){
      setUser(JSON.parse(stored))
      
    }
  },[])
  function handleLogin(){
    signInWithPopup(auth,provider).then((result)=>{
      const userEmail = result.user.email
      const dummyInfo = dummyUsers.find((e)=>(e.email===userEmail))
      if (dummyInfo){
      localStorage.setItem('user', JSON.stringify(dummyInfo))
      setUser(dummyInfo)
      window.location.reload()
      }
      else{
        alert ("User not found")
      }
    }).catch((er)=>(console.log(er)))

  }
  return(
    <>
    {user ? (
      <button className="login">{user.displayName}</button>
    ):(
      <button onClick={handleLogin} className="login">Login</button>
    )}

    </>
  )

}

export default Login;