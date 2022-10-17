import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ActivityRegister from "./ActivityRegister";


function ActivityDetails({activities}) {
    const [edit, setEdit] = useState(false)

    const params = useParams()
    const my_activity = activities.find(activity => activity.id===parseInt(params.id))
  return (
    <div className="resource-single">
      <section className="image">
        <h3>Title: {my_activity.title}</h3>
      </section>
      <section className="descrip">
        <p>Description: {my_activity.title}</p>
        <p>Theme: {my_activity.category}</p>
      </section>
      <Link to="/activities">
        <button>Back</button>
      </Link>
      <button onClick={()=> setEdit(!edit)}>Register</button>
      {edit ? (
        <ActivityRegister my_activity={my_activity}  />
      ) : null}
    </div>
  );
}

export default ActivityDetails;
