import React from "react";
import ACtivityCard from "./ACtivityCard";

function Activities({ activities }) {
  return (
    <div className="activities">
      <div className="right">
        <h3>Upcoming Activities/Events</h3>
        {activities.map((activity) => (
          <ACtivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default Activities;
