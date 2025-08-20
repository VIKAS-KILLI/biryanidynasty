import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  // Use the Layout component
import Home from "./pages/Home";  // Home Page
import About from "./pages/About";  // About Page (Example)
import Contact from "./pages/Contact";  // Contact Page (Example)
import Blog from "./pages/Blog";  // Blog Page (Example)
import Catering from "./pages/Catering";  // Catering Page (Example)
import Gallery from "./pages/Gallery";  // Gallery Page (Example)
import TakeAway from "./pages/TakeAway";  // Takeaway Page (Example)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* Home Page */}
          <Route path="about" element={<About />} />  {/* About Page */}
          <Route path="contact" element={<Contact />} />  {/* Contact Page */}
          <Route path="blog" element={<Blog />} />  {/* Blog Page */}
          <Route path="catering" element={<Catering />} />  {/* Catering Page */}
          <Route path="gallery" element={<Gallery />} />  {/* Gallery Page */}
          <Route path="takeaway" element={<TakeAway />} />  {/* Takeaway Page */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
