import React from "react";
import { NavLink } from "react-router-dom";

//condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
     fontWeight : isActive ? "bold" : "normal",
     color: isActive ? "white" : "black",
  }
}

const Navbar = ({isLoggedIn, setisLoggedIn,  onLogout}) => {

  const handleLogout =() => {
    fetch("https://rc-ays.herokuapp.com/logout", {
      method: "DELETE",
    }).then(() => {
      localStorage.clear()
      setisLoggedIn(null)
      console.log("Logged out")

    });
  }

    //console.log("oSCAR")
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
