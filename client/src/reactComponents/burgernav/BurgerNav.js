// imports for the Nav Bar -----------------
import React from "react";
import Logo from "../images/Logo.jpg";
import "./BurgerNav.css";
import { Link } from "react-router-dom";


// Nav Bar functionality with links to home, about , artists, season and reserve components
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

//------export the component---------
export default BurgerNav;
