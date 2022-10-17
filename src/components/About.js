import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const About = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get("/members")
      .then((response) => {
        const council = response.data.filter((councilor) => councilor.council);
        setMembers(council);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(members);
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p> Following after the model left by Jesus, the General Conference Youth Ministries Department has adopted a servant-leadership model. Our team is responsible for seeing the vision and direction of the leadership of the Seventh-day Adventist® Church implemented. Each person is responsible for their area of ministry to plan, implement, and execute the overall vision and focus of the Youth Ministries Department of the Seventh-day Adventist® Church.</p>
      <Link to="/registration">
        <button>Join Us</button>
      </Link>
      <section className="leadership">
        <h1>Current Leadership</h1>
        <section className="executive">
          {members.map((member) => {
            return (
              <div className="exec-details">
                <img  src="#" alt=""></img>
                <h2>{member.first_name} {member.last_name}</h2>
                <h4>Role :{member.council.role}</h4>
                <h5>{member.council.responsibilities}</h5>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default About;
