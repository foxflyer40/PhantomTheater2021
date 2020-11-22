// imports for the Nav Bar
import React from "react";
import Logo from "../images/Logo.jpg";
import "./BurgerNav.css";
import { Link } from "react-router-dom";

function BurgerNav() {


  return (
    <div className="burgerNavBar">
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

export default BurgerNav;
