import React from "react";
import ResourceCard from "./ResourceCard";



function Resources({resources}) {
  
  return (
    <div className="resources">
      <h1>Our Materials</h1>
      {resources.map((resource) => <ResourceCard key={resource.product_id} resources = {resources}/>
      )}
    
    </div>
  );
}

export default Resources;
