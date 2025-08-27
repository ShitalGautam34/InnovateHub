import React, { useState } from "react";
import "../styles/postUpload.css";
import { uploadPost, uploadFile } from "../auth/postUpload";

const PostUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    niche: "Technology",
    thumbnail_url: "",
    fundersOnly: false,
    ytUrl: "",
    fundingGoal: "",
  });

  //file upload state and handler
  const [file, setFile] = useState(null);
  const handleFileUpload = (e) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "visibility") {
      const fundersOnly = value === "Investors Only"; // to get boolean value
      setFormData({ ...formData, [fundersOnly]: fundersOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data to be Submitted:", formData);

    let thumbnailUrl = "";
    if (file) {
      thumbnailUrl = await uploadFile(file); //call the uploadFile function to get the public URL
    }
    const newFormData = { ...formData, thumbnail_url: thumbnailUrl };

    const res = await uploadPost(
      //keep the arguments same order as in uploadPost function parameters
      formData.title,
      formData.description,
      formData.niche,
      newFormData.thumbnail_url,
      formData.ytUrl,
      formData.fundingGoal,
      formData.fundersOnly
    );

    if (res?.success) {
      alert("Post uploaded successfully!");
      // Reset form after successful submission
      setFormData({
        title: "",
        description: "",
        niche: "Technology",
        thumbnail_url: "",
        fundersOnly: false,
        ytUrl: "",
        fundingGoal: "",
      });
      setFile(null);
    }
  };
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
        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Project Title
            </label>
            <input
              value={formData.title}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
            <select
              value={formData.niche}
              onChange={handleChange}
              id="niche"
              name="niche"
              className="form-select"
              required
            >
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
              onChange={handleChange}
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
              onChange={handleFileUpload}
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
              value={formData.ytUrl}
              onChange={handleChange}
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
              value={formData.fundingGoal}
              onChange={handleChange}
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
