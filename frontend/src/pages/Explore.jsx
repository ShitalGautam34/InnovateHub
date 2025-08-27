import React, { useState, useEffect } from "react";
import "../styles/explore.css";
import { FiFilter } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import Card from "../components/Card";
// import { startupIdeas } from "../be_test/ideas.js";
import { getPosts } from "../auth/getPosts.js";

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
      console.log(posts);
    };
    fetchPosts();
  }, []);

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
      <div className="card-container">
        {posts.map((idea) => (
          <Card key={idea.id} idea={idea} />
        ))}
        {/* <p>from backend test</p>
        {startupIdeas.map((idea) => {
          return <Card key={idea.id} idea={idea} />;
        })} */}
      </div>
    </div>
  );
};

export default Explore;
