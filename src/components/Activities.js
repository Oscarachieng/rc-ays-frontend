import React from "react";
import { useState, useEffect } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/?_limit=5")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  console.log(activities);
  //fetch an external date for the activities lists
  return (
    <div className="activities">
      <div className="right">
        {activities.map((activity) => {
          return (
            <div key={activity.id} className = "details">
              <h4>{activity.category}</h4>
              <h5>{activity.title}</h5>
              <h6>{activity.price}</h6>
            </div>
          );
        })}
      </div>
      Activities
    </div>
  );
}

export default Activities;
