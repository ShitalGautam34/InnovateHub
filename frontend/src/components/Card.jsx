import React from "react";
import { HiOutlineEye } from "react-icons/hi";
import { MdOutlineComment } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Card = ({ idea }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <img
          src={idea.thumbnail}
          alt="Thumbnail Image"
          className="card-image"
        />
        <span className="category-tag">{idea.category}</span>
      </div>
      <div className="card-body">
        <div className="card-title-section">
          <h3 className="card-title">{idea.title}</h3>
          <div className="card-rating">
            <span className="rating-score">{idea.rating}/10</span>
            <span className="rating-count">{idea.ratingCount} ratings</span>
          </div>
        </div>
        <div className="card-author-info">
          <span>{idea.author}</span>
          <span className="time-ago">{idea.time}</span>
        </div>
        <p className="card-description">{idea.description}</p>
        <div className="card-stats">
          <span>
            <HiOutlineEye />
            {idea.views}
          </span>
          <span>
            <MdOutlineComment />
            {idea.comments}
          </span>
        </div>
        <div className="card-voting">
          <button className="vote-btn upvote">
            <FaArrowUp /> {idea.upvotes}
          </button>
          <button className="vote-btn downvote">
            <FaArrowDown /> {idea.downvotes}
          </button>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn-secondary">Comment</button>
        <button className="btn-primary">Fund</button>
      </div>
      <div className="card-details-link">
        <a href="#">View Details & Rate</a>
      </div>
    </div>
  );
};

export default Card;
