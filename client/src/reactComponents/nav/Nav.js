//-----------------------------imports for the Nav Bar----------------------------------------------
import React from "react";
import Logo from "../images/Logo.jpg";
import "./Nav.css";
import { Link } from "react-router-dom";


//------ Nav Bar component function containing links to About, Artist, Season and Reserve pages---------
function Nav() {


  return (
    <div className="menuNavBar">
      {/*menu */}
      <nav className='menu'>
           <li><Link to="/About">About</Link></li>
           <li><Link to="/">Artists</Link></li>
        {/* <li><Link to="/Artist">Artists</Link></li> */}
        <Link to="/"><div className='logo'>
          <img className="logoimg" src={Logo} />
        </div></Link>
        {/* <li><Link to="/Season">Season</Link></li>
        <li><Link to="/Reserve">Reserve</Link></li> */}
           <li><Link to="/">Season</Link></li>
           <li><Link to="/">Reserve</Link></li>
      </nav>
    </div>

  );
}

//------export the component---------
export default Nav;
