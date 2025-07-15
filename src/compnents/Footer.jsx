import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate= useNavigate()
  
  return (
    <footer className='footer'>
      <div className='footer1'>
        <h3 onClick={()=>navigate("/home")}>HOME</h3>
        <h3 onClick={()=>navigate("/facts")}>FACTS</h3>
        <h3 onClick={()=>navigate("/progress")}>PROGRESS</h3>
        <h3 onClick={()=>navigate("/blog")}>BLOG</h3>
      </div>
     <div className="footer2">
    <h2>© 2025 Hydra. All rights reserved.</h2>

       <h3>Contact Us</h3>
       <p>Email: contact@hydra.com</p>
       <p>Phone: +1 234 567 890</p>
     </div>

    </footer>
    );
};

export default Footer;
