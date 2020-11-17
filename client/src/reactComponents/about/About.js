import React from "react";
import Masks from "../images/masks.jpg";
import Google from "../images/google.jpg";
import "./About.css";

//about us/contact us form/sponsors
function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1>About Us</h1>
        <p>
          <div className="aboutImgDiv1">
            <img className="aboutImage1" src={Masks} />
          </div>
          <br />
          Phantom Theater was created in Warren, Vermont in 1985. Since its
          inception, Phantom has brought professional theater artists from
          Vermont as well as many cities throughout the country to act, direct,
          dance, teach workshops, and compose and play music. Phantom’s mission
          is to explore and experiment with theatrical, musical, and
          dance/movement ideas by supporting the authentic vision of each artist
          or student. The theater presents original works of art, serving as
          both a venue for polished performances and a laboratory for the
          development of new pieces. THE EDGCOMB BARN Direct from a Sears
          Roebuck catalog kit, the historic Edgcomb Barn is Phantom Theater's
          home.{" "}
        </p>
        <div className="line"></div>
      </div>

      <div className="contactWrapper">
        <h1>Contact Us</h1>
        <p>
          <div className="aboutImgDiv2">
            <img className="aboutImage2" src={Google} />
          </div>
          <br />
          PHANTOM THEATER BOX 416 WARREN, VT 05674 (802) 496-5997 PHANTOM
          THEATER IS LOCATED AT THE CORNER OF AIRPORT and DUMP ROADS IN WARREN,
          VERMONT. Please respect our neighbors' wishes and access Phantom
          Theater from East Warren Road.{" "}
        </p>
        <div className="line"></div>
      </div>

      <div className="sponsorsWrapper">
        <h1>Sponsors</h1>
        <p className="sponsorsList">
          About Being
          <br />
          American Flatbread
          <br />
          Artisans Hand
          <br />
          Baked Beads
          <br />
          John Barkhausen
          <br />
          Dana Barrows
          <br />
          Better Travel
          <br />
          Big Town Gallery
          <br />
          Broadleaf Landscape Architecture
          <br />
          Bliss Ridge
          <br />
          Bundy Modern
          <br />
          Butternut Systems
          <br />
          Chooseco
          <br />
          Complexions
          <br />
          Darrad Services
          <br />
          The Design Group
          <br />
          Elevation Physical Therapy
          <br />
          East Warren Community Market
          <br />
          Green Toolbox
          <br />
          High Country Hair
          <br />
          Trish Hopkins
          <br />
          Michael Levengood
          <br />
          Maclay Architects
          <br />
          Mad River Massage
          <br />
          Mad River Web
          <br />
          Mad River Hydro
          <br />
          Mad River Massage
          <br />
          Medusa Studio
          <br />
          Mehurons
          <br />
          Northern Reliability
          <br />
          The Pitcher Inn
          <br />
          R. H. Travers Company
          <br />
          Sanford Strauss Architects
          <br />
          Scout's Honor Creamery
          <br />
          Sellers & Company Architecture
          <br />
          Sugarhouse Soundworks
          <br />
          MacKenzie & Joel Taplin
          <br />
          The Tree House Guys
          <br />
          Tonewood Maple
          <br />
          Verilux
          <br />
          Vees Flowers
          <br />
          The Warren Store
          <br />
          <br />
        </p>
        <div className="line"></div>
        <div className="sponsorHowTo">
          <p>
            Our sponsors help keep ticket prices low, make special events
            possible, and spread the word about the varied events we present
            each summer.
            <br />
            <br />
            To become a sponsor or make a donation, please email us at
            tracy@madriver.com or call (802) 496-5997.
            <br />
            <br />
            SPECIAL THANKS TO THE WARREN ARTS COMMITTEE﻿ AND THE ZOOT FUND OF
            THE VERMONT COMMUNITY FOUNDATION FOR HELPING US PURCHASE ALL NEW
            FLOORING FOR OUR STAGE IN 2013!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
