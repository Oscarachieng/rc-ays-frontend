import React, { useState, useEffect } from 'react';

const About = () => {
    const [council, setCouncil] = useState([]) 
    // useEffect(() => {
    //     fetch("")
    // },[])
    // .then(res => res.json())
    // .then(data =>  console.log(data));
    //  console.log(council)
  return (
    <div className='about-us'>
        <h1>About Us</h1>
       <p> Council Members and Members</p> 
       <button>Connect With Us</button>
    </div>
  )
}

export default About;