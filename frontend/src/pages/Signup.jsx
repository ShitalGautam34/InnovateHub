import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "../styles/auth.css";
import { signUpUser, signUpWithGoogle } from "../auth/userAuth";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ role: "founder" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username, role } = user;
    const res = await signUpUser({
      email,
      password,
      username,
      role,
    });
    if (res?.error) {
      alert(error);
    } else {
      alert(
        "Signup successful! Please check your email to confirm your account."
      );
      navigate("/");
      setUser({ role: "founder" });
    }
  };

  return (
    <div className="login-container">
      <div className="intro">
        <h1 className="intro-title">Join RateMyStartup</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            placeholder="@Username"
            onChange={handleChange}
            value={user?.username || ""}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            onChange={handleChange}
            value={user?.email || ""}
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
            value={user?.password || ""}
          />
        </div>
        <div className="field">
          <label htmlFor="role">Join as a</label>
          <select
            name="role"
            id="role"
            onChange={handleChange}
            value={user?.role || "founder"}
          >
            <option>Founder</option>
            <option>Funder</option>
          </select>
        </div>
        <button type="submit" className="btn signup">
          Create Account <FaArrowRight />
        </button>
        <div className="footer">
          <p>Or continue with</p>
          <button className="with_google" onClick={signUpWithGoogle}>
            <FaGoogle />
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
