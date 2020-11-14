import React from 'react'
import './Footer.css'
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'

//copyright info
//social media buttons
//
function Footer() {
  return (
    <div className="footer">
      <h1>This is the footer</h1>
      <div>
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
