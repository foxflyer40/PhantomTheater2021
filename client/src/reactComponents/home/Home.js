//-----------------------------Imports---------------------------------------------------------------
import React from "react";
import Image from "../images/dinner2.png";
import Image2 from "../images/SarahRose.jpg";
import "./Home.css";


//------ Homepage component function with currently playing as central image and next show -----------
function Home() {
 
  return (
    <div className="homeContainer">
      <div className="currentPlay">
        <div className="imageDiv">

        {/* Firefly Divs that draws to the page */}
            <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <img className="homeImage" src={Image} />
        </div>
        <div className="currentPlayText">
          <h1>Phantom Dinner</h1>
          <p>12/1/2020-12/3/2020</p>
        </div>
      </div>

      <div className="whatNext">
        <div className="whatNextImg">
          <img id="nextImage" src={Image2} />
        </div>
        <div className="whatNextText">
          <h2>MRV Performance Platform</h2>
          <p>12/5/2020- 12/8/2020</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
