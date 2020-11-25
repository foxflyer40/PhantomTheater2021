//-----------------------------Imports---------------------------------------------------------------
import React from "react";
import Image from "../images/phantomdinner.jpg";
import Image2 from '../images/Flanigan.jpg';
import "./Home.css";

//------ Homepage component function with currently playing as central image and next show -----------
function Home() {
  return (
    <div className="homeContainer">
      <div className="currentPlay">
        <div className="imageDiv"><img className="homeImage" src={Image} /></div>
        <div className="currentPlayText">
          <h1>Currently Playing Show Title</h1>
          <p>11/20/2020-11/26/2020</p>
        </div>
      </div>

      <div className='whatNext'>
        <div className='whatNextImg'><img src={Image2} /></div>
        <div className="whatNextText">
          <h2>Next Show Title</h2>
          <p>20/20/2020- 02/02/0202</p>
        </div>
      </div>


    </div>
  );
}


export default Home;
