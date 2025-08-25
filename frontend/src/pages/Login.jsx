import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../styles/auth.css";
import { loginUser } from "../auth/userAuth";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    const { error } = loginUser({ email, password });
    if (error) alert(error.message);
    else {
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="intro">
        <h1 className="intro-title">Welcome Back!</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn signin">
          Sign In <FaArrowRight />
        </button>
        <div className="footer">
          <p>Or continue with</p>
          <button className="with_google">
            <FaGoogle />
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
