import React from "react";
import "../styles/gallery.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  const images = [
    "gallery 1.jpg",
    "gallery 2.jpg",
  ];

  return (
    <div className="content">

      {/* Page Header */}
      <section className="gallery-header">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>A glimpse of our delicious dishes and warm ambience</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
