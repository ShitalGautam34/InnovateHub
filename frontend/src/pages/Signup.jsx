import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "../styles/auth.css";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="intro">
        <h1 className="intro-title">Join RateMyStartup</h1>
      </div>
      <form className="login-form">
        <div className="field">
          <label htmlFor="username">Username</label>
          <input type="text" required placeholder="@Username" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" required placeholder="Enter your email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" required placeholder="Enter your password" />
        </div>
        <div className="field">
          <label htmlFor="role">Join as a</label>
          <select name="role" id="role">
            <option>Founder</option>
            <option>Funder</option>
          </select>
        </div>
        <button className="btn signup">
          Create Account <FaArrowRight />
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

export default Signup;
