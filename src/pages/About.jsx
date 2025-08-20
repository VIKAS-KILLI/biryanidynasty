import React from "react";
import "../styles/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="content">
      <div className="content"></div>
      {/* Intro Story */}
      <section className="about-intro">
        <div className="container about-intro-content">
          <h1>About Us</h1>
          <p>
            At Biryani Dynasty, we believe food is more than a meal — it’s an
            experience. Our journey began with a passion to serve authentic
            Hyderabadi biryani, crafted with love and traditional recipes.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-who">
        <div className="container about-who-content">
          <div className="about-who-text">
            <h2>Who We Are</h2>
            <p>
              Biryani Dynasty is more than just a restaurant — it’s a heritage.
              Our chefs bring years of expertise, blending rich spices and
              authentic techniques to create flavors that linger in memory.
            </p>
          </div>
          <div className="about-who-img">
            <img src="pantry.jpg" alt="Our Chef" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="about-team-grid">
            <div className="team-card">
              <img src="Rahman.png" alt="Chef" />
              <h3>Chef Rahman</h3>
              <p>Head Chef</p>
            </div>
            <div className="team-card">
              <img src="Aliya.jpg" alt="Chef" />
              <h3>Chef Aliya</h3>
              <p>Pastry & Desserts</p>
            </div>
            <div className="team-card">
              <img src="Imran.jpg" alt="Chef" />
              <h3>Chef Imran</h3>
              <p>Biryani Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="container">
          <h2>Why Choose Biryani Dynasty?</h2>
          <ul className="about-why-list">
            <li>Authentic Hyderabadi flavors</li>
            <li>Fresh and handpicked ingredients</li>
            <li>Passionate and experienced chefs</li>
            <li>Warm hospitality and quick service</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
