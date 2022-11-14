import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CreateMaterial from "./CreateMaterial";

function ResourceDetails({ resources, setResources }) {
  const [edit, setEdit] = useState(false)
  const params = useParams();

  console.log(params)
  console.log(resources)

  const my_resource = resources.find(
    (resource) =>  resource.id === parseInt(params.id)
  );

  //console.log(resource.id)
  const handleEdit = () => {
     setEdit(!edit)

  }
  return (
    <div className="resource-single">
      <section className="image">
        <img src={my_resource.image_url} alt="resource_image"/>
        <h3>{my_resource.title}</h3>
      </section>
      <section className="descrip">
        <p>{my_resource.title}</p>
      </section>
      <Link to='/resources'><button>Back</button></Link>
      <button onClick={handleEdit}>Edit form</button>
      { edit? <CreateMaterial my_resource={my_resource} resources={resources} setResources={setResources} handleEdit ={handleEdit} /> : null}
    </div>
  );
}

export default ResourceDetails;
