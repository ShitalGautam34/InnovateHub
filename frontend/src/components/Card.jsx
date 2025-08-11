import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="project-card">
        <div className="card-header">
          <img src="#" alt="" className="card-image" />
          <span className="category-tag">category</span>
        </div>
        <div className="card-body">
          <div className="card-title-section">
            <h3 className="card-title">title</h3>
            <div className="card-rating">
              <span className="rating-score">rating/10</span>
              <span className="rating-count">ratingCount ratings</span>
            </div>
          </div>
          <div className="card-author-info">
            <span>author</span>
            <span className="time-ago">time</span>
          </div>
          <p className="card-description">description</p>
          <div className="card-stats">
            <span>👁️ views</span>
            <span>💬 comments</span>
          </div>
          <div className="card-voting">
            <button className="vote-btn upvote">↑ upvotes</button>
            <button className="vote-btn downvote">↓ downvotes</button>
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
    </div>
  );
};

export default Card;
