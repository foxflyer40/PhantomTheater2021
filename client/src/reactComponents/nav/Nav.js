// imports for the Nav Bar
import React from "react";
import Logo from "../images/Logo.jpg";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        {/* This is the links on the left side of the nav bar */}
        <ul className="ul-List">
          <Link to="/About" className="tag">About</Link>
          <Link to="/Artist" className="tag">Artists</Link>
        </ul>
        {/* This is the Phantom Theater Logo */}
        <Link to="/"><img className="logo" src={Logo} /></Link>
        { /* This is the links on the right side of the nav bar */}
        <ul className="ul-List">
          <Link className="tag">Place</Link>
          <Link to="/Reserve" className="tag">Reserve</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
