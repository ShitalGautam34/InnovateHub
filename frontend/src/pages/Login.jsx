import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../styles/auth.css";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <Header navLinks={[]} />
      <div className="login-container">
        <div className="intro">
          <h1 className="intro-title">Welcome Back!</h1>
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
          <button className="btn signin">
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
    </>
  );
};

export default Login;
