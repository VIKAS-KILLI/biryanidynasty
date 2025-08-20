import React from "react";
import "../styles/gallery.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
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
