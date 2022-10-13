import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateMaterial() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imag_url, setImage_url] = useState("");
  const [theme, setTheme] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  async function handleSubmitClick(event) {
    event.preventDefault();

    const formData = {
      title: title,
      description: description,
      imag_url: imag_url,
      theme: theme,
    };
    const response = await fetch(
      "https://phase-3-sinatra-project.herokuapp.com/login",
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
      setTitle("");
      setDescription("");
      setImage_url("");
      setTheme("");
      navigate("/resources");
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
        <h5>Image_url:</h5>
        <input
          type="url"
          name="imag_url"
          onChange={(event) => setImage_url(event.target.value)}
          value={imag_url}
          placeholder="http://example.com"
          required
        />
        <h5>Theme:</h5>
        <input
          type="text"
          name="theme"
          onChange={(event) => setTheme(event.target.value)}
          value={theme}
          placeholder="Enter your  Password here"
          required
        />
        <button type="submit">Add Resource</button>
      </form>
    </div>
  );
}

export default CreateMaterial;
