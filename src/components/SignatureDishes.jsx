import React from "react";
import "../styles/signatureDishes.css";

const SignatureDishes = () => {
  return (
    <section className="home-dishes container">
      <h2>Our Signature Dishes</h2>
      <div className="home-dish-grid">
        <div className="dish-card">
          <img src="chicken biryani.jpg" alt="Chicken Biryani" />
          <h3>Chicken Biryani</h3>
          <p>Fragrant rice with tender chicken, slow-cooked to perfection.</p>
        </div>
        <div className="dish-card">
          <img src="mutton biryani.jpg" alt="Mutton Biryani" />
          <h3>Mutton Biryani</h3>
          <p>A royal dish with authentic spices and juicy mutton pieces.</p>
        </div>
        <div className="dish-card">
          <img src="veg biryani.jpg" alt="Veg Biryani" />
          <h3>Veg Biryani</h3>
          <p>A delightful mix of vegetables and aromatic rice.</p>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
