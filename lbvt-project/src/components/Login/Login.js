import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn, setEmail }) => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const navigate = useNavigate();
  // retrieve email/ account ... firebase query
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmailState(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPasswordState(e.target.value)}
          />
        </label>
        <div>
          <button type="button" onClick={onButtonClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
