import React,{useEffect, useState} from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider,  } from "../Firebase";
// import { collection, addDoc } from "firebase/firestore";
import Navbar from "./Navbar";

function Login() {
  const [name, setName] = useState(null)
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setName(user)
        console.log(result)
        window.localStorage.setItem("user",JSON.stringify(user))
        // alert(`Welcome, ${user.uid}`);
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };
  useEffect(()=>{
    const user = localStorage.getItem("user")
    if (user){
      setName(JSON.parse(user))
    }
  },[])
  // const collectionRef = collection(database, "users")
  return (
    <div>      
      {name ? (
        <button className="login">{name.displayName}</button>
      ) : (
        <button onClick={handleLogin} className="login">Login</button>
      )}
    </div>
  );
}

export default Login;