import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [estate, setEstate] = useState("");
  const [email, setEmail] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  async function handleSubmitClick(e) {
    e.preventDefault();

    //form data
    const formData = {
      first_name: first_name,
      last_name: last_name,
      password: password,
      password_confirmation: password_confirmation,
      estate: estate,
      email: email,
      image_url:image_url
    };
    // fetch returns a Promise, we must await it
    const response = await fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      console.log("Memebr created:", data);
      setEmail("");
      setEstate(" ");
      setFirstName(" ");
      setLastName(" ");
      setPassword("");
      setPasswordConfirmation(" ");
      setImageUrl("");
      navigate("/login");
    } else {
      console.log(data.errors);
      setErrors(data.errors);
    }
  }

  return (
    <div className="registration">
      <h1>Register With Us</h1>
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmitClick}>
        <h5>First Name:</h5>
        <input
          type="text"
          name="name"
          onChange={(event) => setFirstName(event.target.value)}
          value={first_name}
          placeholder="Enter your First Name here"
          required
        />
        <h5>Last Name:</h5>
        <input
          type="text"
          name="name"
          onChange={(event) => setLastName(event.target.value)}
          value={last_name}
          placeholder="Enter your Last Name here"
          required
        />
        <h5>Password:</h5>
        <input
          type="Password"
          name="name"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Enter your Password here"
          required
        />
        <h5>Password Confirmation:</h5>
        <input
          type="Password"
          name="name"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          value={password_confirmation}
          placeholder="Enter your Password here"
          required
        />
        <h5>Estate:</h5>
        <input
          type="text"
          name="location"
          onChange={(event) => setEstate(event.target.value)}
          value={estate}
          placeholder="Enter Your Estate"
          required
        />
        <h5>Email_address:</h5>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Enter Your Email"
          required
        />
        <h5>Image_url:</h5>
        <input
          type="url"
          name="image_url"
          onChange={(event) => setImageUrl(event.target.value)}
          value={image_url}
          placeholder="Enter Your Image Url"
          required
        />
        <br />

        <button type="submit">Sign-up</button>
      </form>
      <p>
        Have an Account?
        <br />
        <span className="line">
          <Link to={"/login"}>Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Registration;
