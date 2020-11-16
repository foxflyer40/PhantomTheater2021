import React from "react";
import Image from "../images/kooza-show.jpg";
import "./CurrentShow.css";

function CurrentShow() {
  return (
    <div className="currentShowContainer">
      <div className="imageBox">
        <div className="image_row">
          <img src={Image} />
          <div>
          <h3>Show Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          </div>
        </div>
        <div className="image_row">
          <img src={Image} />
          <div>
          <h3>Show Title</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
        </div>
        <div className="image_row">
        
          <img src={Image} />
          <div>
          <h3>Show Title</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentShow;
