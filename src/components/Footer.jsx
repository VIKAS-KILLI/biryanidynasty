import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-about">
          <h3>Biryani Dynasty</h3>
          <p>Serving authentic flavors with love. Taste the tradition of true biryani.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Take Away</li>
            <li>Catering</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Hyderabad, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ info@biryanidynasty.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Biryani Dynasty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
