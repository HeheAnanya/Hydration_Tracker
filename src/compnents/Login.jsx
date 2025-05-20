// src/Login.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";
import Navbar from "./Navbar";

function Login() {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User Info:", user);
        // alert(`Welcome, ${user.displayName}`);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Failed to Login");
      });
  };

  return (
    <div>
        <Navbar/>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
