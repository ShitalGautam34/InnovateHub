import React from "react";
import "../styles/landing.css";
import { GoLightBulb } from "react-icons/go";
import { RiRefund2Fill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import landing_image from "../assets/landing_img.png";

const Landing = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Startups", href: "/explore" },
    { name: "Post Ideas", href: "/post" },
    { name: "Funders", href: "/funders" },
  ];

  return (
    <div className="wrapper">
      <header>
        <div className="logo">InnovateHub</div>
        <nav>
          {navLinks.map((link) => {
            return (
              <Link to={link.href} key={link.name} className="nav_link">
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="auth">
          <Link to="/login" className="auth_link">
            Login
          </Link>
          <Link to="/signup" className="auth_link">
            <button className="auth_btn">Sign Up</button>
          </Link>
        </div>
      </header>

      <main className="landing">
        <section className="left_section">
          <h1 className="landing_title">Pitch. Validate. Fund. All Online.</h1>
          <h3 className="landing_sub_title">
            Struggling to get your startup idea noticed? Share your vision,
            gather feedback, and connect with potential investors — all in one
            place.
          </h3>
          <div className="cta_btns">
            <button>Explore Startups</button>
            <button>Post Ideas</button>
          </div>
        </section>
        <section className="right_section">
          <img src={landing_image} alt="" />
        </section>
      </main>

      <section className="info_section">
        <div className="how_it_works">
          <h2>How It Works</h2>
          <h3>
            Simple, clean, and effective. Just like the best feedback should be.
          </h3>
          <div className="steps">
            <div className="step">
              <div className="icon">
                <GoLightBulb />
              </div>
              <h3>Post Your Idea</h3>
              <p>
                Share your startup concept with our community including pitch,
                target market, and funding goals.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <FaRegStar />
              </div>
              <h3> Get Rated</h3>
              <p>
                Receive votes and comments from the community to validate your
                idea.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <RiRefund2Fill />
              </div>
              <h3>Connect with Funders</h3>
              <p>
                Investors can reach out to discuss funding opportunities and
                next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer_content">
          <p>© {new Date().getFullYear()} InnovateHub. All rights reserved.</p>
          <div className="footer_links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
