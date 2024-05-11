import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit vitae tenetur qui, maiores velit commodi blanditiis dignissimos omnis nobis dicta veniam quas voluptatem voluptatum at, libero natus tempore id recusandae!</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2> 
            <ul>
                <li>+1-244-678-567</li>
                <li>Contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 @ tomato.com- all right reserved
      </p>
    </div>
  )
}

export default Footer
