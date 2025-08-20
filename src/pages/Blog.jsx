import React from "react";
import "../styles/blog.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Secret Behind Hyderabadi Biryani",
      excerpt:
        "Discover the rich history and unique flavors that make Hyderabadi biryani the king of all biryanis.",
      image: "/images/blog1.jpg",
    },
    {
      title: "Why Spices Matter in Indian Cooking",
      excerpt:
        "From saffron to cardamom, learn why spices are the heart of Indian cuisine and how they add magic to food.",
      image: "/images/blog2.jpg",
    },
    {
      title: "Catering Tips for a Perfect Event",
      excerpt:
        "Planning a wedding, party, or corporate event? Here’s how catering can make or break your occasion.",
      image: "/images/blog3.jpg",
    },
  ];

  return (
    <div className="content">

      {/* Page Header */}
      <section className="blog-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Food stories, tips, and the world of biryani</p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="blog-list container">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-card-content">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <button className="btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
