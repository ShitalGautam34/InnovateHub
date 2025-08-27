import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

import { useAuth } from "../AuthContext";

const Header = ({ navLinks }) => {
  const user = useAuth();

  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">InnovateHub</div>
      </Link>
      <nav>
        {navLinks.map((link) => {
          return (
            <Link to={link.href} key={link.name} className="nav_link">
              {link.name}
            </Link>
          );
        })}
      </nav>

      {user?.user ? (
        <div className="auth">
          <span className="welcome">
            Welcome, {user.user.user_metadata?.username || user.user.email}
          </span>
          <button className="auth_btn" onClick={user.signOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="auth">
          <Link to="/login" className="auth_link">
            Login
          </Link>
          <Link to="/signup" className="auth_link">
            <button className="auth_btn">Sign Up</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
