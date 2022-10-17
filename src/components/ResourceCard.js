import React from 'react'
import { Link } from 'react-router-dom';

function ResourceCard({resources}) {


  return (
    <div className="resources">
      {resources.map((resource) => {
        return (
          <div className="resource-details" key={resource.id}>
            <img src={resource.image_url} alt= "" />
            {console.log(resource.id)}
            <h3>{resource.title}</h3>
            <Link to={`/resources/${resource.id}`}>
              <h4>more info</h4>
            </Link>
          </div>
        )
      }
      )}

    </div>
  )
}

export default ResourceCard