import React from "react";
import gsap from "gsap"
import "./Flie.css";

function Flie() {
  const numFlies = 10;
  const maxHeight = window.innerWidth;
  const maxWidth = window.innerHeight;

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  for (var i = 0; i < numFlies; i++) {
    let theDiv = document.getElementsByClassName("flies")
    let div = document.createElement("div");
    div.setAttribute("class", "firefly");
    document.body.appendChild(theDiv);
  }
  var fireflies = document.querySelectorAll(".firefly");
  for (var i = 0; i < numFlies; i++) {
    let ix = random(-10, maxWidth + 10);
    let fx = random(-10, maxWidth + 10);

    let iy = random(-10, maxHeight + 10);
    let fy = random(-10, maxHeight + 10);

    gsap.fromTo(
      fireflies[i],
      {
        x: ix,
        y: iy,
      },
      {
        x: fx,
        y: fy,
        duration: random(5, 15),
        // ease: "slow (0.7, 0.7, false)",
        ease:
          "rough ({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp:false})",
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo(
      fireflies[i],
      {
        boxShadow: "0 0 0 0px rgba(154, 205, 50, 0)",
      },
      {
        boxShadow: "0 0 0 3px rgba(154, 205, 50, 0.4)",
        duration: random(2, 4),
        ease: "slow (0.7, 0.7, false)",
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo(
      fireflies[i],
      {
        opacity: 0,
      },
      {
        duration: random(1, 5),
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
      }
    );
  }
  
  return (<div className="flies">
    
  </div>);
}

export default Flie;
