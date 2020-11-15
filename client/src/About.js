import React from 'react'
import Nav from './reactComponents/nav/Nav'
import Footer from './reactComponents/footer/Footer'
import Masks from "./reactComponents/images/masks.jpg"
import Dance from "./reactComponents/images/moderndance.jpg"
import Stage from "./reactComponents/images/stage.jpg"
import './About.css'

//about us/contact us form/sponsors
function About() {
  return (
    <div className='about'>
      <div className='aboutWrapper'>
        <h3>About Us</h3>
        <p><img className="aboutImage1" src={Masks} />
        Phantom Theater was created in Warren, Vermont in 1985.  Since its inception, Phantom has brought professional theater artists from Vermont as well as many cities throughout the country to act, direct, dance, teach workshops, and compose and play music.

        Phantom’s mission is to explore and experiment with theatrical, musical, and dance/movement ideas by supporting the authentic vision of each artist or student.  The theater presents original works of art, serving as both a venue for polished performances and a laboratory for the development of new pieces.

        THE EDGCOMB BARN
Direct from a Sears Roebuck catalog kit, the historic Edgcomb Barn is Phantom Theater's home. </p>

      </div>

      <div className="contactWrapper">
        <h3>Contact Us</h3>
        <p><img className="aboutImage2" src={Dance} />
        PHANTOM THEATER
        BOX 416
        WARREN, VT 05674
(802) 496-5997
PHANTOM THEATER IS LOCATED AT THE CORNER OF AIRPORT & DUMP ROADS IN WARREN, VERMONT.
Please respect our neighbors' wishes and access Phantom Theater from East Warren Road. </p>

      </div>

      <div className="sponsorsWrapper">
        <h3>Sponsors</h3>
        <p><img className="aboutImage3" src={Stage} />
        About Being

        American Flatbread
        Artisans Hand
        Baked Beads

        John Barkhausen

        Dana Barrows
        Better Travel
        Big Town Gallery
        Broadleaf Landscape Architecture
        Bliss Ridge

        Bundy Modern
        Butternut Systems

        Chooseco

        Complexions
        Darrad Services
        The Design Group
        Elevation Physical Therapy

        East Warren Community Market

        Green Toolbox
        High Country Hair

        Trish Hopkins

        Michael Levengood
        Maclay Architects

        Mad River Massage
        Mad River Web

        Mad River Hydro

        Mad River Massage

        Medusa Studio
        Mehurons
        Northern Reliability

        The Pitcher Inn
        R. H. Travers Company

        Sanford Strauss Architects
        Scout's Honor Creamery
        Sellers & Company Architecture

        Sugarhouse Soundworks

        MacKenzie & Joel Taplin
        The Tree House Guys

        Tonewood Maple
        Verilux

        Vees Flowers
        The Warren Store


        Our sponsors help keep ticket prices low,
        make special events possible, and spread
        the word about the varied events we present each summer.

        To become a sponsor or make a donation, please email us at tracy@madriver.com
        or call (802) 496-5997.


SPECIAL THANKS TO THE WARREN ARTS COMMITTEE﻿ AND THE ZOOT FUND OF THE VERMONT COMMUNITY FOUNDATION FOR HELPING US PURCHASE ALL NEW FLOORING FOR OUR STAGE IN 2013!f</p>

      </div>
    </div>
  )
}

export default About
