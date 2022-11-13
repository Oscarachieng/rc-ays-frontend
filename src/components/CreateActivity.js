import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function CreateActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [event_date, setEventDate] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState('')

  const navigate = useNavigate();

  async function handleSubmitClick(event) {
    event.preventDefault();

    const formData = {
      title: title,
      description: description,
      venue: venue,
      event_date: event_date,
    };
    const response = await fetch(
      "/activities",
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
      console.log("Memebr created:", data);
      setSuccess('Registered Successfully!!!')
      setTitle("");
      setDescription("");
      setVenue("");
      setEventDate("");
      setTimeout(() => {
        navigate("/resources");
      }, 5000);
    } else {
      setErrors(data.errors);
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
      <h4 style={{ color: "green" }}>{success}</h4>
      <form onSubmit={handleSubmitClick}>
        <h5>Title:</h5>
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder="Enter your title here"
          required
        />
        <h5>Description:</h5>
        <input
          type="text"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          placeholder="Enter your First Description here"
          required
        />
        <h5>Venue:</h5>
        <input
          type="url"
          name="venue"
          onChange={(event) => setVenue(event.target.value)}
          value={venue}
          placeholder="Add venue"
          required
        />
        <h5>Set Date:</h5>
        <input
          type="text"
          name="event_date"
          onChange={(event) => setEventDate(event.target.value)}
          value={event_date}
          placeholder="Enter your  Date here"
          required
        /><br/>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default CreateActivity;
