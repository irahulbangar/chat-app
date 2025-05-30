import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signup, login } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currentState === "Sign up") {
      await signup(username, email, password);
    } else {
      await login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : null}

        <input
          type="email"
          placeholder="Email address"
          className="form-input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {currentState === "Sign up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrentState("Login")}>click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrentState("Sign up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
