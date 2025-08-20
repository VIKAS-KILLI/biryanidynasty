import React from "react";
import "../styles/catering.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Catering = () => {
  return (
    <div className="content">

      {/* Hero Section */}
      <section className="catering-hero">
        <div className="container catering-hero-content">
          <h1>Catering Services</h1>
          <p>
            From intimate gatherings to grand celebrations, we make your events
            memorable with authentic flavors.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="catering-packages container">
        <h2>Our Catering Packages</h2>
        <div className="catering-grid">
          <div className="catering-card">
            <h3>Family Feast</h3>
            <p>Perfect for small gatherings of 10-20 guests.</p>
            <span className="price">Starting ₹5,000</span>
          </div>
          <div className="catering-card">
            <h3>Corporate Special</h3>
            <p>Ideal for office parties and team events (50+ guests).</p>
            <span className="price">Starting ₹15,000</span>
          </div>
          <div className="catering-card">
            <h3>Wedding & Events</h3>
            <p>Grand setups for 200+ guests with full customization.</p>
            <span className="price">Custom Pricing</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="catering-why">
        <div className="container">
          <h2>Why Choose Our Catering?</h2>
          <ul className="catering-why-list">
            <li>Authentic Hyderabadi taste, freshly prepared</li>
            <li>Customized menus for every occasion</li>
            <li>Professional service & timely delivery</li>
            <li>Affordable and flexible packages</li>
          </ul>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="catering-form">
        <div className="container">
          <h2>Request a Catering Quote</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Event Details" rows="4" required></textarea>
            <button type="submit" className="btn-primary">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Catering;
