//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
//import Activities from './components/Activities';
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";
import Resources from "./components/Resources";
import Registration from "./components/Registration";
import Login from "./components/Login";
import CreateMaterial from "./components/CreateMaterial";
import CreateActivity from "./components/CreateActivity";
import ResourceDetails from "./components/ResourceDetails";
import ActivityDetails from "./components/ActivityDetails";
import axios from "axios";

function App() {
  const initialUser = JSON.parse(localStorage.getItem('isLoggedIn'))
  const [resources, setResources] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(initialUser);
  //const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("https://rc-ays.herokuapp.com/activities")
      .then((response) => {
        console.log(response.data)
        setActivities(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },[]);

  useEffect(() => {
    fetch("https://rc-ays.herokuapp.com/resources")
      .then((response) => response.json())
      .then((data) => {
        setResources(data);
      });
  }, []);


  const handleCreatedResource=(resource)=> {
    setResources([...resources, resource])
  }

  useEffect(() => {
    fetch("https://rc-ays.herokuapp.com/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setisLoggedIn(user));
      }
    });
  }, []);

  // const onLogout = () => {
  //   setisLoggedIn(null);
  // };

  if (isLoggedIn) {
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn = {setisLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities activities={activities}/>} />
          <Route
            path="resources"
            element={<Resources resources={resources} setResources={setResources} />}
          />
          <Route path="registration" element={<Registration />} />
         
        <Route path="createresource" element={<CreateMaterial resources={resources} handleCreatedResource={handleCreatedResource} />} />
          <Route path="createactivity" element={<CreateActivity />} />
          <Route
            path="resources/:id"
            element={<ResourceDetails resources={resources} setResources={setResources} />}
          />

          <Route path="activities/:id" element={<ActivityDetails activities={activities}/>}/>
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn = {setisLoggedIn} />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities activities={activities}/>} />
          <Route path="resources" element={<Resources resources={resources} setResources={setResources} />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login setisLoggedIn={setisLoggedIn} />} />
         
          <Route
            path="resources/:id"
            element={<ResourceDetails resources={resources} />}
            isLoggedIn={isLoggedIn}
          />
          <Route path="activities/:id" element={<ActivityDetails activities={activities}/>}/>
        </Routes>
      </div>
    );
  }
  
}

export default App;
