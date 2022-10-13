import React, { useState, useEffect } from 'react'


function Resources() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "7310622931msh9f6735caf0bf519p1c820cjsn2c95afa5cfdc",
              "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
            },
          };
        
          fetch("https://amazon24.p.rapidapi.com/api/todaydeals", options)
            .then((response) => response.json())
            .then((data) => {
              
              setResources(data.products_docs)
            })
    },[])
  return (
    <div className='resources'>
        <h1>Our Materials</h1>
        {resources.map(resource => {
            return (
                <div className='resource-details' key={resource.product_id}> 
                <img src={resource.product_main_image_url}/>
                <h3>{resource.product_title}</h3>
                <h4>{resource.original_price}</h4>
                </div>
            )
        })}
        Our Materials
        </div>
  )
}

export default Resources