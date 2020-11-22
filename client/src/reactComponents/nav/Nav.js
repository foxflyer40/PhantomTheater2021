// imports for the Nav Bar
import React from "react";
import Logo from "../images/Logo.jpg";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {


  return (
    <div className="menuNavBar">
      {/*logo */}
      <div className='logo'>
        <img className="logoimg" src={Logo} />
      </div>
      {/*burger menu */}
      {/*menu */}
      <nav className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Artist">Artists</Link></li>
        <li><Link to="/Season">Season</Link></li>
        <li><Link to="/Reserve">Reserve</Link></li>
      </nav>
    </div>

  );
}

export default Nav;
