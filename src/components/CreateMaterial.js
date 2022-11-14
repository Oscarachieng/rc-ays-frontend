import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMaterial({my_resource, resources, handleCreatedResource}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");
  const [theme, setTheme] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  async function handleSubmitClick(event) {
    event.preventDefault();

    const formData = {
      title: title,
      description: description,
      image_url: image_url,
      theme: theme,
    };
    const response = await fetch(
      'https://rc-ays.herokuapp.com/resources',
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
      console.log("Resource created:", data);
      //console.log(resources)
      handleCreatedResource(data)
      setTitle("");
      setDescription("");
      setImage_url("");
      setTheme("");
      navigate("/resources");
    } else {
      setErrors(data.errors);
    }
  }

  async function handleUpdate(event) {
    event.preventDefault();

    const formData = {
      title: title,
      description: description,
      image_url: image_url,
      theme: theme,
    };
    const response = await fetch(
      `https://rc-ays.herokuapp.com/resources/${my_resource.id}`,
      {
        method: "PATCH",
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
      // console.log(data, resources)
      // setResources([...resources,data])
      setTitle("");
      setDescription("");
      setImage_url("");
      setTheme("");
      console.log(data)
      //navigate("/resources");
    } else {
      setErrors(data.errors);
    }
  }

 

  const handleEDit = (event) => {
    console.log(event.target.textContent)
    setTitle(my_resource.title);
    setDescription(my_resource.title);
    setImage_url(my_resource.image_url);
    setTheme(my_resource.theme);

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
          type="text"
          name="image_url"
          onChange={(event) => setImage_url(event.target.value)}
          value={image_url}
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
        /><br/>
        <button type="submit">create</button>
       
      </form>
      <button onClick={handleEDit}>Edit</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default CreateMaterial;
