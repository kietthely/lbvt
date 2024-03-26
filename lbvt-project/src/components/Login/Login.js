import React, { useState } from "react";

const Login = ({ setLoggedIn, setEmail }) => {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");

  // retrieve email/ account ... firebase query
  function submitForm() {}
  return (
    <div className="login-wrapper">
      <h1>Welcome to UniSA</h1>
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
          <button type="button" onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
