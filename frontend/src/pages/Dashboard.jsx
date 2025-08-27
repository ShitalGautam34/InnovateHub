import React from "react";
import "../styles/dashboard.css";
// --- Sub-Components ---

const IdeaListItem = ({ idea }) => (
  <li className="idea-list-item">
    <div className="idea-info">
      <img src={idea.imageUrl} alt={`${idea.name} logo`} />
      <div className="idea-details">
        <div className="idea-title-status">
          <h3>{idea.name}</h3>
          <span className="status-badge">{idea.status}</span>
        </div>
        <p className="idea-description">{idea.description}</p>
        <div className="idea-stats">
          <span>
            ⭐ {idea.rating} ({idea.ratingCount})
          </span>
          <span>👁️ {idea.views}</span>
          <span>💬 {idea.comments}</span>
        </div>
      </div>
    </div>
    <div className="progress-bar-container">
      <div className="progress-bar-labels">
        <span>Funding Progress</span>
        <span>
          ${idea.funded.toLocaleString()} / ${idea.goal.toLocaleString()}
        </span>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fg"
          style={{ width: `${(idea.funded / idea.goal) * 100}%` }}
        ></div>
      </div>
    </div>
    <div className="idea-actions">
      <div className="idea-votes">
        <span>⬆️ {idea.upvotes}</span>
        <span>⬇️ {idea.downvotes}</span>
      </div>
      <button className="details-btn">View Details</button>
    </div>
  </li>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-widget">
      <h3 className="widget-title">Quick Stats</h3>
      <ul
        style={{ listStyle: "none", padding: 0, margin: 0 }}
        className="quick-stats-list"
      >
        <li>
          <span className="stat-label">This Week's Views</span>
          <span className="stat-value positive">+234</span>
        </li>
        <li>
          <span className="stat-label">New Ratings</span>
          <span className="stat-value positive">+12</span>
        </li>
        <li>
          <span className="stat-label">Funding This Month</span>
          <span className="stat-value blue">$5,000</span>
        </li>
        <li>
          <span className="stat-label">Comment Replies</span>
          <span className="stat-value">8</span>
        </li>
      </ul>
    </div>
    <div className="sidebar-widget">
      <h3 className="widget-title">Recent Activity</h3>
      <ul
        style={{ listStyle: "none", padding: 0, margin: 0 }}
        className="activity-list"
      >
        <li>
          <span className="activity-icon"></span>
          <span className="activity-text">
            New comment on <strong>EcoDeliver</strong>
          </span>
          <span className="activity-graph"></span>
        </li>
        <li>
          <span
            className="activity-icon"
            style={{ backgroundColor: "var(--accent-secondary)" }}
          ></span>
          <span className="activity-text">
            <strong>SmartGarden Pro</strong> was funded
          </span>
          <span className="activity-graph"></span>
        </li>
      </ul>
    </div>
  </aside>
);

// --- Main Dashboard Component ---

export default function Dashboard() {
  const userIdeas = [
    {
      name: "EcoDeliver",
      status: "Active",
      description: "Carbon-neutral delivery service using electric bikes",
      rating: "8.7/10",
      ratingCount: 23,
      views: 1234,
      comments: 18,
      funded: 25000,
      goal: 50000,
      upvotes: 156,
      downvotes: 12,
      imageUrl: "https://placehold.co/128x128/E5E7EB/6B7280?text=Eco",
    },
  ];

  return (
    <div className="dashboard-container">
      <section className="summary-grid">
        <p>summary card</p>
        <p>summary card</p>
        <p>summary card</p>
      </section>
      <main className="main-content">
        <section className="your-ideas-section">
          <div className="ideas-header">
            <h2>Your Ideas</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {userIdeas.map((idea, index) => (
              <IdeaListItem key={index} idea={idea} />
            ))}
          </ul>
        </section>
        <Sidebar />
      </main>
    </div>
  );
}
