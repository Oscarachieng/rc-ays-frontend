import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

//condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
     fontWeight : isActive ? "bold" : "normal",
     color: isActive ? "white" : "black",
  }
}

const Navbar = ({isLoggedIn, setisLoggedIn,  onLogout}) => {

  const navigate = useNavigate()

  const handleLogout =() => {
    fetch("https://rc-ays.herokuapp.com/logout", {
      method: "DELETE",
    }).then(() => {
      localStorage.clear()
      setisLoggedIn(null)
      setTimeout(() => {
        navigate('/')
      }, 2000);
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

      { isLoggedIn ?( <NavLink to="/createactivity" style={isActiveLink}>
        Create Act
       </NavLink>
      ):null}

     { isLoggedIn ?( <NavLink to="/createresource" style={isActiveLink}>
        Create Material
       </NavLink>
      ):null}
     
     { isLoggedIn ? (
       <button onClick = {handleLogout}>logout</button>
     ):( <NavLink to="/login" style={isActiveLink}>
     Login
   </NavLink>
)}
     
    </nav>)
}

export default Navbar;
