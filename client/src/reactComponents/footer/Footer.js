//---------------------------------------------Imports---------------------------------------------------
import React from 'react'
import './Footer.css'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import { Link } from 'react-router-dom'

//------------ Footer function returning Footer containing Social Media Links and Copyright Info ---------

function Footer() {
  return (
    <div className="footer">
      <div className="social_images">
        <img className='social' src={Facebook} />
        <img className='social' id="insta" src={Instagram} />
      </div>
      <div className="footerLinks"><Link to='/ProposalForm'>For Artists</Link></div>
      <div>
        <p>Copyright Phantom Theater 2020</p>
      </div>
    </div>
  )
}

//------export the component---------
export default Footer
