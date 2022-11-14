import React from "react";
import ResourceCard from "./ResourceCard";



function Resources({resources, setResources}) {

  console.log(resources)
  
  return (
    <div className="resources">
      <h1>Our Materials</h1>
      {resources.map((resource) => <ResourceCard key={resource.product_id} resource={resource} setResources={setResources}/>
      )}
    
    </div>
  );
}

export default Resources;
