import React,{useEffect, useState} from 'react'
import './LoginForm.css'
import { signInWithPopup } from "firebase/auth";
import { auth, provider,  } from "../../Firebase";

const LoginForm = () => {
    const [email, setEmail]= useState("")
    const [name, setName]= useState("")
    const [phone, setPhone]= useState("")
    const [password, setPassword]= useState("")
    function handleSubmit(){
        const customer ={
            displayName:name,
            password:password,
            email:email,
            phone:phone
        }
        window.localStorage.setItem("user", JSON.stringify(customer))
        setEmail("")
        setName("")
        setPhone("")
        setPassword("")
window.location.reload();
        }
    useEffect(()=>{
        const user = window.localStorage.getItem("user")
        if (user){
            let a = JSON.parse(user)
            if (a.displayName){
                setName(a.displayName)
            }
            
        }
    },[])
    function HandleGoogle(){
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setName(user)
        console.log(result)
        window.localStorage.setItem("user", JSON.stringify({ displayName: user.displayName }));
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
    }

  return (
    <div className='login-page'>
        <div className='left-section'>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe doloremque error dolores voluptatum similique consectetur adipisci nobis. Similique eveniet odio inventore error autem dolore eligendi, vero labore quam nesciunt?</p>
        </div>
        <form className='right-section'>
                    <label htmlFor='name'>Name:</label>
        <input id ="name" typeof='text' onChange={(e)=>(setName(e.target.value))} value={name} placeholder='Write your Name'/>
        <label htmlFor='email'>Email</label>
        <input id='email' typeof='email' onChange={(e)=>(setEmail(e.target.value))} value={email}  placeholder='Write your Email Id'/>
        <label htmlFor='phone'>Phone Number</label>
        <input id='phone' typeof='text' onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  }} value={phone} maxLength={10}  placeholder='Write your Phone Number'/>
        <label htmlFor='password'>Password:</label>
        <input id='password' type='password' onChange={(e)=>(setPassword(e.target.value))} value={password}  placeholder='Write your Password'/>
        <button onClick={handleSubmit} className="login-btn">Submit</button>
        <button className='google-btn' onClick={HandleGoogle}>Google</button>

        </form>
    </div>
  )
}

export default LoginForm
