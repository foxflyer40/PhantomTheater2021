import React from 'react'
import './Footer.css'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'

//copyright info
//social media buttons
//
function Footer() {
  return (
    <div className="footer">
      <div className="social_images">
        <img className='social' src={Facebook} />
        <img className='social' id="insta" src={Instagram} />
      </div>
      <div>
        <p>Copyright Phantom Theater 2020</p>
      </div>
    </div>
  )
}

export default Footer
