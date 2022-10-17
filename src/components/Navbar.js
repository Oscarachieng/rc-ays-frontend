import React from "react";
import { NavLink } from "react-router-dom";

//condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
     fontWeight : isActive ? "bold" : "normal",
     color: isActive ? "white" : "black",
  }
}

const Navbar = ({isLoggedIn,  onLogout}) => {

  const handleLogout =() => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      onLogout()
      console.log("Logged out")
    });
  }

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
     
     { isLoggedIn ? (
       <button onClick = {handleLogout}>logout</button>
     ):( <NavLink to="/login" style={isActiveLink}>
     Login
   </NavLink>
)}
     
    </nav>)
}

export default Navbar;
