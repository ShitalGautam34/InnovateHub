import React from "react";
import "../styles/explore.css";
import { FiFilter } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import Card from "../components/Card";

const Explore = () => {
  return (
    <div className="explore">
      <div className="intro">
        <h1>
          Browse<span> Startup Ideas</span>
        </h1>
        <h3>
          Discover innovative ideas from entrepreneurs worldwide. Rate, comment,
          and support the next big thing.
        </h3>
      </div>
      <div className="filter-section">
        <input
          type="text"
          name="search"
          placeholder="Search Startup Ideas..."
        />
        <button>
          <FiFilter />
          Filter
        </button>
        <button>
          <FiTrendingUp />
          Top Rated
        </button>
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Explore;
