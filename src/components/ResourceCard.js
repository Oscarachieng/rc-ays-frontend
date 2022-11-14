import React from 'react'
import { Link } from 'react-router-dom';

function ResourceCard({resource}) {
      console.log(resource)

  return (
    <div className="resources">
      
        
          <div className="resource-details" key={resource.id}>
            <img src={resource.image_url} alt= "" />
           
            <h3>{resource.title}</h3>
            <Link to={`/resources/${resource.id}`}>
              <h4>more info</h4>
            </Link>
          </div>

    </div>
  )
}

export default ResourceCard