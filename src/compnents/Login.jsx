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
        alert(`Welcome, ${user.displayName}`);
       return( <button className='login'>`${user.displayName}`</button>)
      })
      .catch((error) => {
        console.error("Error during login:", error);
        // alert("Failed to Login");
      });
  };

  return (
    <div>
        {/* <Navbar/> */}
      
      <button onClick={handleLogin} className='login'>Login</button>
    </div>
  );
}

export default Login;
// // import React, { useState } from 'react';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle login logic here (e.g., call Firebase or your API)
// //     console.log('Email:', email);
// //     console.log('Password:', password);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //           style={styles.input}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           style={styles.input}
// //         />
// //         <button type="submit" style={styles.button}>Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     width: '300px',
// //     margin: '100px auto',
// //     padding: '20px',
// //     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
// //     borderRadius: '8px',
// //     textAlign: 'center'
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column'
// //   },
// //   input: {
// //     padding: '10px',
// //     margin: '10px 0',
// //     fontSize: '16px'
// //   },
// //   button: {
// //     padding: '10px',
// //     backgroundColor: '#007BFF',
// //     color: '#fff',
// //     fontSize: '16px',
// //     border: 'none',
// //     borderRadius: '4px'
// //   }
// // };

// // export default Login;








