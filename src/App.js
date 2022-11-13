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
  const [resources, setResources] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("/activities")
      .then((response) => {
        console.log(response.data)
        setActivities(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },[]);

  useEffect(() => {
    fetch("/resources",{ mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => {
        setResources(data);
      });
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const onLogout = () => {
    setisLoggedIn(null);
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities activities={activities}/>} />
          <Route
            path="resources"
            element={<Resources resources={resources} />}
          />
          <Route path="registration" element={<Registration />} />
         
          <Route path="createresource" element={<CreateMaterial />} />
          <Route path="createactivity" element={<CreateActivity />} />
          <Route
            path="resources/:id"
            element={<ResourceDetails resources={resources} />}
          />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities activities={activities}/>} />
          <Route path="resources" element={<Resources resources={resources} />} />
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
