import React, { useState } from "react";
import "../styles/takeaway.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TakeAway = () => {
  const [activeCategory, setActiveCategory] = useState("Biryani");

  const menuItems = {
    Biryani: [
      { name: "Chicken Biryani", desc: "Classic Hyderabadi style", price: "₹250", img: "chicken biryani.jpg" },
      { name: "Mutton Biryani", desc: "Tender mutton with spices", price: "₹350", img: "mutton biryani.jpg" },
    ],
    Starters: [
      { name: "Chicken 65", desc: "Crispy & spicy starter", price: "₹180", img: "chicken 65.jpg" },
      { name: "Paneer Tikka", desc: "Marinated paneer grilled to perfection", price: "₹200", img: "paneer tikka.jpg" },
    ],
    Desserts: [
      { name: "Double Ka Meetha", desc: "Hyderabadi bread pudding", price: "₹120", img: "double ka meetha.jpg" },
      { name: "Qubani Ka Meetha", desc: "Apricot delight", price: "₹150", img: "khubani ka meetha.jpg" },
    ],
    Beverages: [
      { name: "Sweet Lassi", desc: "Refreshing yogurt drink", price: "₹80", img: "sweet lassi.jpg" },
      { name: "Masala Chai", desc: "Traditional Indian spiced tea", price: "₹50", img: "masala chai.jpg" },
    ],
  };

  return (
    <div className="content">

      {/* Page Header */}
      <section className="takeaway-header">
        <div className="container">
          <h1>Take Away Menu</h1>
          <p>Delicious food, ready to go!</p>
        </div>
      </section>

      {/* Categories */}
      <section className="takeaway-categories container">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Menu Items */}
      <section className="takeaway-menu container">
        <div className="menu-grid">
          {menuItems[activeCategory].map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="price">{item.price}</span>
              <button className="btn-primary">Order Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TakeAway;
