import React from "react";
import Image from "../images/performance.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <img className="homeImage" src={Image} />
      <div className="whatPlay">
        <h1>Check What's Playing</h1>
        <button className="playButton">What's Playing</button>
      </div>
    </div>
  );
}

export default Home;
