import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <p>© {new Date().getFullYear()} InnovateHub. All rights reserved.</p>
        <div className="footer_links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <style>{`footer.footer {
  padding: 2rem;
  text-align: center;
  width: 100%;
  background: #0A0A25;
  color: #ffffff;
  margin: 0;
}

.footer_content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.footer_content p {
  font-size: 1.2rem;
}

.footer_links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer_links a {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}
`}</style>
    </footer>
  );
};

export default Footer;
