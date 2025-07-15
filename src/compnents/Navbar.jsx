// import React, {useEffect, useState} from 'react'
// import logo from '../assets/logo.png'
// import './Navbar.css'
// import Login from './Login'
// import { useNavigate } from 'react-router-dom'
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


// const Navbar = () => {
//     const navigate= useNavigate()
//     const [user, setUser] = useState(null)
//     const auth = getAuth()
//     useEffect(()=>
//     {
//         const unsub= onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
//         return ()=> unsub()
//     },[])
//     const handleLogout=()=> {
//         signOut(auth).then(()=>{setUser(null)
//             alert("Logged Out")

//         }).catch((er)=>(alert(er)))
//     }

//     return (
//         <>
//         <div className='nav-main'>
//                 <img src={logo} alt="Hydra logo" className='logo' onClick={()=>(navigate("/home"))}/>
//                     <ul className='topics'>
//                         <li onClick={()=>(navigate("/")) }><a href="#">HOME</a></li>
//                         <li onClick={()=>(navigate("/facts"))}><a href="#">FACTS</a></li>
//                         <li onClick={()=>(navigate("/progress"))}><a href="#">PROGRESS</a></li>
//                         <li onClick={()=>(navigate("/blog"))}><a href="#">BLOG</a></li>

//                     </ul>
//      <div className="formality">
//         {user ? (
//           <>
//             <span style={{ color: "white" }}>Hi, {user.displayName || user.email}</span>
//             <button className="login" onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <button className="login">Login</button> // Your existing logic
//         )}
//       </div>
//     </div>

//         {/* </div> */}

//             </>
//     )
// }

// export default Navbar





import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase";

const Navbar = () => {
    const navigate= useNavigate()

    const [name, setName] = useState(null);
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setName(user);
                window.localStorage.setItem("user", JSON.stringify(user));
            })
            .catch((error) => {
                console.error("Error during login:", error);
            });
    };

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      setName(null);
    //   window.location.reload();  // force UI to update
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};


    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setName(JSON.parse(user));
        }
    }, []);

    return (
    <>
            <div className='nav-main'>
                <img src={logo} alt="Hydra logo" className='logo' onClick={() => (navigate("/home"))} />
                <ul className='topics'>
                    <li onClick={() => (navigate("/"))}><a href="#">HOME</a></li>
                    <li onClick={() => (navigate("/facts"))}><a href="#">FACTS</a></li>
                    <li onClick={() => (navigate("/progress"))}><a href="#">PROGRESS</a></li>
                    <li onClick={() => (navigate("/blog"))}><a href="#">BLOG</a></li>

                </ul>

                <div className="formality">
                    {name ? (
                        <>
                            <button className="login">{name.displayName}</button>
                            <button className="login" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <button onClick={handleLogin} className="login">Login</button>
                    )}
                </div>
            
            </div>
        </>
            )
}

export default Navbar
