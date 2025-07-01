import React,{useState} from 'react'
import './Home.css'

const Home = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mess,setMess] = useState("")
  const [data,setData] = useState([])
  function query(e){
    e.preventDefault()
    setData([...data, {"id": Date.now(), "name": name, "email": email, "message":mess}])
    setEmail("")
    setMess("")
    setName("")
    console.log(data)
  }
  return (
<div className='main'>
  <div className='mess'>
    <div className='left-text'>
      <h1>Hydrate Smart, Live Well.</h1>
      <p>Your one-stop solution for all hydration needs.</p>
    </div>
  </div>
  <div className='data'>
    <form>
      <h2>Get in Touch</h2>
      <div className='form-container'>
      <div className='form-inputs'>
      <input placeholder='Your Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input placeholder='Your Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <textarea placeholder='Your Message'  value={mess} onChange={(e)=>setMess(e.target.value)}/>
      </div>
      <button onClick={query}>Post your Message</button>
      </div>
    </form>
  </div>
</div>  )
}

export default Home