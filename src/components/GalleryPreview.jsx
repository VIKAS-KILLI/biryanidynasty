import React from "react";
import "../styles/gallerypreview.css";

const GalleryPreview = () => {
  return (
    <section className="home-gallery-preview container">
      <h2>Our Gallery</h2>
      <div className="home-gallery-grid">
        <img src="food 1.jpg" alt="Food 1" />
        <img src="food 2.jpg" alt="Food 2" />
        <img src="food 3.jpg" alt="Food 3" />
        <img src="food 4.jpg" alt="Food 4" />
      </div>
    </section>
  );
};

export default GalleryPreview;
