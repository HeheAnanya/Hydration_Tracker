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



import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            hello here I will add icons
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
