import React from 'react';
import './App.css' // Import the CSS module

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='column'>
        <div className='heading'>About</div>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Flipkart Stories</p>
        <p>Press</p>
        <p>Flipkart Wholesale</p>
      </div>
      <div className='column'>
        <div className='heading'>Help</div>
        <p>Payments</p>
        <p>Shipping</p>
        <p>Cancellation and returns</p>
        <p>Faq</p>
        <p>Report infringement</p>
      </div>
      <div className='column'>
        <div className='heading'>Policy</div>
        <p>Return Policy</p>
        <p>Terms of Use</p>
        <p>Security</p>
        <p>Privacy</p>
        <p>Sitemap</p>
        <p>EPR Compliance</p>
      </div>
      <div className='column'>
        <div className='heading'>Social</div>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Youtube</p>
      </div>
      <div className='column'>
        <div className='heading'>Mail Us</div>
        <p>Flipkart Internet Private Limited,</p>
        <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103, Karnataka, India</p>
      </div>
      <div className='column'>
        <div className='heading'>Registered Office Address</div>
        <p>Flipkart Internet Private Limited,</p>
        <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103, Karnataka, India</p>
        <p>CIN : U51109KA2012PTC066107</p>
        <p>Telephone: 1800 202 9898</p>
      </div>
    </footer>
  );
}

export default Footer;