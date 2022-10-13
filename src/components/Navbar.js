import React from "react";
import { NavLink } from "react-router-dom";

//condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
     fontWeight : isActive ? "bold" : "normal",
     color: isActive ? "white" : "black",
  }
}

const Navbar = () => {

    console.log("oSCAR")
  return (
    <nav className="navs">
      <NavLink exact to="/" style={isActiveLink} end>
        Home
      </NavLink>

      <NavLink to="/about" style={isActiveLink}>
        ABOUT US
        </NavLink>
      <NavLink to="/resources" style={isActiveLink}>
        Resources
      </NavLink>

      <NavLink to="/activities" style={isActiveLink}>
        What We Do
      </NavLink>
     

      <NavLink to="/registration" style={isActiveLink}>
        Join Us
      </NavLink>

    </nav>)
}

export default Navbar;
