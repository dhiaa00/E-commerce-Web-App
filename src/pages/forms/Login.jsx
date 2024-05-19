import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="register-login">
      <h1>Login</h1>
      <form
        action=""
        onClick={(e) => {
          e.preventDefault();
        }}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
        <div className="have-account">
          <p>You don't have an account ?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
