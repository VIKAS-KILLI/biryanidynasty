import {useState} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger & Close icons
import "../styles/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu visibility
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/Biryani Dynasty Logo_.png"
          alt="Biryani Dynasty logo featuring stylized text Biryani Dynasty with warm colors, conveying a welcoming and vibrant atmosphere for an Indian restaurant"
          className="navbar-logo-image"
        />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/takeaway">Take Away</Link></li>
        <li><Link to="/catering">Catering</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/blog">Our Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-button">
        <button>Order Online</button>
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;