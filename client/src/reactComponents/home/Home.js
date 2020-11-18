import React from "react";
import Image from "../images/phantomdinner.jpg";
import Image2 from '../images/artist.jpg';
import "./Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <section>
        <div className="imageDiv"><img className="homeImage" src={Image} /></div>
      </section>

      <div className='whatNext'>
        <div className='whatNextImg'><img src={Image2} /></div>
        <div className="whatNextText"><h3>Next Show Title</h3>
          <br />
          <p>20/20/2020- 02/02/0202</p>
        </div>
      </div>


    </div>
  );
}

export default Home;
