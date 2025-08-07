import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="intro">
        <h1 className="intro-title">Join RateMyStartup</h1>
        <h3 className="intro-sub_title">
          Create your account and start sharing your startup ideas
        </h3>
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
        <button className="signup">Create Account</button>
        <div className="footer">
          <p>Or continue with</p>
          <button className="with_google">
            <FaGoogle />
            Google
          </button>
        </div>

        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">
              Login
              <FaArrowRight />
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
