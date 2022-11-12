import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ActivityRegister({my_activity}) {
     const [full_name, setFullName] = useState('');
     const [contact, setContact] = useState('');
     const [success, setSuccess] = useState('')
     const [errors, setErrors] = useState([]);

     const navigate = useNavigate()

     async function handleSubmitClick(event) {
        event.preventDefault();
    
        const formData = {
          full_name: full_name,
          contact: contact,
          activity_id:my_activity.id,
        };
        const response = await fetch(
          '/activity_registrations',
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        //response.json() returns a Promise, we must await it
        const data = await response.json();
    
        if (response.ok) {
          setFullName("");
          setContact("");
          setSuccess("Resgistration Successfull")
          setTimeout(()=> {
            navigate("/activities");
          },2000)
          
        } else {
          setErrors([data.errors]);
        }
      }
  return (
    <div className="registration">
    {errors.length > 0 && (
      <ul style={{ color: "red" }}>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    )}
    <h3 style={{color:"green"}}>{success}</h3>
    <form onSubmit={handleSubmitClick}>
      <h5>full_name:</h5>
      <input
        type="text"
        name="title"
        onChange={(event) => setFullName(event.target.value)}
        value={full_name}
        placeholder="Enter your full name here"
        required
      />
      <h5>contact:</h5>
      <input
        type="text"
        name="description"
        onChange={(event) => setContact(event.target.value)}
        value={contact}
        placeholder="Enter your Phone Number here"
        required
      />
     <br/>
    <button type="submit">Submit</button>
     
    </form>
  </div>
);
  
}

export default ActivityRegister
