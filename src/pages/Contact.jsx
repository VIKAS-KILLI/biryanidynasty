import React from "react";
import "../styles/contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="content">

      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out for orders, catering, or inquiries.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info container">
        <div className="info-box">
          <h3>📍 Address</h3>
          <p>123 Biryani Street, Hyderabad, India</p>
        </div>
        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-box">
          <h3>✉ Email</h3>
          <p>info@biryanidynasty.com</p>
        </div>
      </section>

      {/* Google Map */}
      <section className="contact-map">
        <iframe
          title="Biryani Dynasty Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.556818829168!2d78.48667141536034!3d17.385044307171265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9755a7414c91%3A0x7d2f72ef3fc8a2c!2sHyderabad!5e0!3m2!1sen!2sin!4v1673523567762!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <div className="container">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="contact-hours">
        <div className="container">
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 11 AM - 11 PM</p>
          <p>Saturday - Sunday: 12 PM - 12 AM</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
