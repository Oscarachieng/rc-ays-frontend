import React from "react";
import { Link } from "react-router-dom";

function ACtivityCard({ activity }) {
  return (
    <div key={activity.id} className="details">
      <h4>{activity.category}</h4>
      <h5>{activity.title}</h5>
      <h6>{activity.price}</h6>
      <Link to={`/activities/${activity.id}`}>
        <h6>More Info</h6>
      </Link>
    </div>
  );
}

export default ACtivityCard;
