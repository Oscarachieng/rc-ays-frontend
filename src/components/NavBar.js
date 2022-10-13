import React from "react";
import { NavLink } from "react-router-dom";

// condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
     fontWeight : isActive ? "bold" : "normal",
     color: isActive ? "white" : "black",
  }
}

export default function NavBar() {
  return (
    <nav className="navbuttons">
      <NavLink exact to="/"  style= {isActiveLink}>
        Home
      </NavLink>

      <NavLink to="/about" style={isActiveLink}>
        Who we Are
        </NavLink>
      <NavLink to="/productlist" style={isActiveLink}>
        Resources
      </NavLink>

      <NavLink to="/mycart" style={isActiveLink}>
        What We Do
      </NavLink>
      <NavLink to="/reviews" style={isActiveLink}>
        Council
      </NavLink>

      <NavLink to="/sign" style={isActiveLink}>
        Join Us
      </NavLink>

    </nav>)
}
