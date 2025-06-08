import React from 'react'
import './Home.css'

const Home = () => {
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
      <input placeholder='Your Name' type='text' required/>
      <input placeholder='Your Email' type='email' required/>
      <textarea placeholder='Your Message' />
      </div>
      <button>Post your Message</button>
      </div>
    </form>
  </div>
</div>  )
}

export default Home