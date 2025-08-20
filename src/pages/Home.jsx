import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";  // Import Hero component
import SignatureDishes from "../components/SignatureDishes";  // New modular section for signature dishes
import AboutPreview from "../components/AboutPreview";  // New modular section for About preview
import CateringHighlight from "../components/CateringHighlight";  // New modular section for Catering
import GalleryPreview from "../components/GalleryPreview";  // New modular section for Gallery preview
import "../styles/home.css";

const Home = () => {
  return (
    <div className="content">

      {/* Hero Section */}
      <Hero />

      {/* Signature Dishes */}
      <SignatureDishes />

      {/* About Preview */}
      <AboutPreview />

      {/* Catering Highlight */}
      <CateringHighlight />

      {/* Gallery Preview */}
      <GalleryPreview />
    </div>
  );
};

export default Home;
