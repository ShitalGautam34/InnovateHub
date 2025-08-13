import React from "react";
import "../styles/landing.css";
import { GoLightBulb } from "react-icons/go";
import { RiRefund2Fill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import landing_image from "../assets/landing_img.png";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <main className="landing">
        <section className="left_section">
          <h1 className="landing_title">Pitch. Validate. Fund. All Online.</h1>
          <h3 className="landing_sub_title">
            Struggling to get your startup idea noticed? Share your vision,
            gather feedback, and connect with potential investors — all in one
            place.
          </h3>
          <div className="cta_btns">
            <button onClick={() => navigate("/explore")}>
              Explore Startups
            </button>
            <button
              onClick={() => {
                navigate("/post");
              }}
            >
              Post Ideas
            </button>
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
    </div>
  );
};

export default Landing;
