import React from "react";
import "../styles/aboutpreview.css";

const AboutPreview = () => {
  return (
    <section className="home-about-preview">
      <div className="container home-about-content">
        <h2>About Biryani Dynasty</h2>
        <p>
          Bringing the legacy of Hyderabad’s biryani to your table. Our chefs blend tradition with taste, ensuring every plate is a masterpiece.
        </p>
        <button className="btn-primary">Read More</button>
      </div>
    </section>
  );
};

export default AboutPreview;
