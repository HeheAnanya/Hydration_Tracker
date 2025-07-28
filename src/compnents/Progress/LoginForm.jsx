// import React,{useEffect, useState} from 'react'
// import './LoginForm.css'
// import dummyUsers from '../DummyData/dummy'

// const LoginForm = ({success}) => {
//     const [email, setEmail]= useState("")
//     const [name, setName]= useState("")
//     const [phone, setPhone]= useState("")
//     const [password, setPassword]= useState("")
//     function handleSubmit(e){
//       e.preventDefault()
//       const customer = dummyUsers.find((user)=>{
//         user.email===email&& user.password===password && user.phone===phone && user.name=== name
//       })
//       if (customer){
//         window.localStorage.setItem("user", JSON.stringify(customer))
//         success(customer)
//         setEmail("")
//         setName("")
//         setPhone("")
//         setPassword("")

//       }
//       else{
//         alert("User Not Found")
//       }



//         }
//     useEffect(()=>{
//         const user = window.localStorage.getItem("user")
//         if (user){
//             let a = JSON.parse(user)
//             if (a.displayName){
//                 setName(a.displayName)
//             }
            
//         }
//     },[])
//   return (
//     <div className='login-page'>
//         <div className='left-section'>
//             <h1>Welcome</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe doloremque error dolores voluptatum similique consectetur adipisci nobis. Similique eveniet odio inventore error autem dolore eligendi, vero labore quam nesciunt?</p>
//         </div>
//         <form className='right-section'>
//                     <label htmlFor='name'>Name:</label>
//         <input id ="name" typeof='text' onChange={(e)=>(setName(e.target.value))} value={name} placeholder='Write your Name'/>
//         <label htmlFor='email'>Email</label>
//         <input id='email' typeof='email' onChange={(e)=>(setEmail(e.target.value))} value={email}  placeholder='Write your Email Id'/>
//         <label htmlFor='phone'>Phone Number</label>
//         <input id='phone' typeof='text' onChange={(e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value.length <= 10) {
//       setPhone(value);
//     }
//   }} value={phone} maxLength={10}  placeholder='Write your Phone Number'/>
//         <label htmlFor='password'>Password:</label>
//         <input id='password' type='password' onChange={(e)=>(setPassword(e.target.value))} value={password}  placeholder='Write your Password'/>
//         <button onClick={handleSubmit} className="login-btn">Submit</button>
//         </form>
//     </div>
//   )
// }

// export default LoginForm


import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import dummyUsers from '../DummyData/dummy';

const LoginForm = ({ success }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const customer = dummyUsers.find((user) =>
      user.email === email &&
      user.password === password &&
      user.phone === phone &&
      user.displayName === name
    );

    if (customer) {
      localStorage.setItem('user', JSON.stringify(customer));
      success(customer); // lifts user to parent
      setEmail('');
      setName('');
      setPhone('');
      setPassword('');
    } else {
      alert('User Not Found');
    }
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      if (parsed.displayName) {
        setName(parsed.displayName);
      }
    }
  }, []);

  return (
    <div className='login-page'>
      <div className='left-section'>
        <h1>Welcome</h1>
        <p>Login to your hydration tracker account and keep your water intake goals consistent!</p>
      </div>

      <form className='right-section' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id="name"
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Write your Name'
        />

        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Write your Email Id'
        />

        <label htmlFor='phone'>Phone Number</label>
        <input
          id='phone'
          type='text'
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value) && value.length <= 10) {
              setPhone(value);
            }
          }}
          value={phone}
          maxLength={10}
          placeholder='Write your Phone Number'
        />

        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Write your Password'
        />

        <button type="submit" className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
