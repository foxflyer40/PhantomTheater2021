//-----------------------------Imports---------------------------------------------------------------
import React from "react";
import Image from "../images/barn3.jpeg";
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
              <h1>Website Under Construction</h1>
              <h3>See you this summer!</h3>
          {/* <p>07/25/2020</p> */}
        </div>
      </div>

      {/* <div className="whatNext">
        <div className="whatNextImg">
          <img id="nextImage" src={Image2} />
        </div>
        <div className="whatNextText">
          <h2>MRV Performance Platform</h2>
          <p>08/08/2020- 08/09/2020</p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
