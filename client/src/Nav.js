// imports for the Nav Bar
import React from "react";
import Logo from "./images/Logo.jpg";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav>
          {/* This is the links on the left side of the nav bar */}
        <ul className="ul-List">
          <li className="tag">About</li>
          <li className="tag">Artist Page</li>
        </ul>
        {/* This is the Phantom Theater Logo */}
        <img className="logo" src={Logo} />
        { /* This is the links on the right side of the nav bar */ }
        <ul className="ul-List">
          <li className="tag">Donors</li>
          <li className="tag">Reservations</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
