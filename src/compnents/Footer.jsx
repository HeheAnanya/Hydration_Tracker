import React from 'react';
import './Footer.css';
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import tw from '../assets/tw.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer1">
        <div className="footer2">
          <h3>Quick Links</h3>
          <ul>
            <li><a href='#' className='link'>Home</a> </li>
            <li><a href='#' className='link'>About Us</a></li>
            <li><a href='#' className='link'>Facts</a></li>
            <li><a href='#' className='link'>Progress</a></li>
          </ul>
        </div>

        <div className="footer2">
          <h3>Contact Us</h3>
          <p>Email: contact@hydra.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <div className="footer2">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img src={insta}></img>
            <img src={linkedin}></img>
            <img src={tw}></img>
            <img src={facebook}></img>
            
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Hydra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;



















// import React from 'react'
// import './Footer.css'
// import logo from '../assets/logo.png'

// const Footer = () => {
//   return (
//     <>
//         <div className='footer'>
//             <div>
//             <img src={logo} className='footerLogo'/>
//             <h2 className='companyName'>Hydra</h2>
//             </div>
//             <div className='nav'>
//                 <div className='footerTopic'>
//                <h3>Quick Links</h3>
//                 <ul>
//                         <li><a href="#">About Us</a></li>
//                         <li><a href="#">Blog</a></li>
//                         <li><a href="#" >Terms of Service</a></li>
//                     </ul>
//                 </div>



//         </div>

//     </div>
//     </>

//   )
// }

// export default Footer
