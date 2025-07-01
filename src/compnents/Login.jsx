import React,{useState} from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";
import Navbar from "./Navbar";

function Login() {
  const [name, setName] = useState(null)
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setName(user)
        // alert(`Welcome, ${user.uid}`);
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

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