import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Header from "../components/Header";
import "../styles/auth.css";

const Signup = () => {
  return (
    <>
      <Header navLinks={[]} />
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
    </>
  );
};

export default Signup;
