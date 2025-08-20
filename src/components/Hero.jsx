import React from "react";
import "../styles/hero.css";  // Make sure to style it in hero.css

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="container home-hero-content">
        <h1>Authentic Biryani, Served with Love</h1>
        <p>Experience the rich flavors of Hyderabad with every bite.</p>
        <button className="btn-primary">Order Now</button>
      </div>
    </section>
  );
};

export default Hero;
