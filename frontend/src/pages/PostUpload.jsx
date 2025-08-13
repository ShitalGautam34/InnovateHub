import React from "react";
import "../styles/postUpload.css";

const PostUpload = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-title">
          Launch <span>Your Idea</span>
        </h2>
        <p className="form-subtitle">
          Fill out the details below to get your startup idea in front of
          investors.
        </p>
      </div>
      <div className="form-wrapper">
        <form className="upload-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              placeholder="e.g., EcoDeliver"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              placeholder="Describe your startup idea in a few sentences..."
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="niche" className="form-label">
              Niche / Category
            </label>
            <select id="niche" name="niche" className="form-select" required>
              <option>Technology</option>
              <option>Sustainability</option>
              <option>Health Tech</option>
              <option>EdTech</option>
              <option>E-commerce</option>
              <option>Finance</option>
              <option>Entertainment</option>
            </select>
          </div>

          <div className="from-group">
            <label htmlFor="visibility" className="form-label">
              Visibility
            </label>
            <select
              name="visibility"
              id="visibility"
              className="form-select"
              required
            >
              <option>All Users</option>
              <option>Investors Only</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ytUrl" className="form-label">
              YouTube Video URL (opional)
            </label>
            <input
              type="url"
              id="ytUrl"
              name="ytUrl"
              className="form-input"
              placeholder="https://youtube.com/watch?v=example"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fundingGoal" className="form-label">
              Funding Goal ($)
            </label>
            <input
              type="number"
              id="fundingGoal"
              name="fundingGoal"
              className="form-input"
              placeholder="e.g., 50000"
              min="0"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostUpload;
