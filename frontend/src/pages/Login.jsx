import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../styles/auth.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="intro">
        <h1 className="intro-title">Welcome Back!</h1>
        <h3 className="intro-sub_title">
          Sign in to your account and continue your startup journey
        </h3>
      </div>
      <form className="login-form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" required placeholder="Enter your email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" required placeholder="Enter your password" />
        </div>
        <button className="signin">Sign In</button>
        <div className="footer">
          <p>Or continue with</p>
          <button className="with_google">
            <FaGoogle />
            Google
          </button>
        </div>

        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">
              Sign up
              <FaArrowRight />
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
