import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login( { setisLoggedIn } ) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [errors, setErrors] = useState([]);
  const [loginalert, setLoginalert] = useState('')

  const navigate = useNavigate();

  async function handleSubmitClick(e) {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };
    const response = await fetch(
      "https://rc-ays.herokuapp.com/login",
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
      setisLoggedIn(data)
      setLoginalert("Login Successfull")
      setEmail("");
      setPassword("");
      setTimeout(()=> navigate('/'), 500)
     
    } else {
      
      setErrors([data.error]);
    }
  }
  console.log(errors)
  return (
    <div className="registration">
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => {
            return (
            <li key={error}>{error}</li>
          )})
         }
        </ul>
      )
      }
      <h4 style={{color:"green"}}>{loginalert}</h4>
      <form onSubmit={handleSubmitClick}>
        <h5>email:</h5>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Enter your First Name here"
          required
        />
        <h5>Password:</h5>
        <input
          type="Password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Enter your Last Password here"
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to={"/registration"}>Sign Up</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
