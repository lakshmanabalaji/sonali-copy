import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Innovation from "./pages/Innovation";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import "./App.css";
import logo from "./images/logo.jpeg";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="Sonali Wires Logo" />
          </NavLink>
          <p>Sonali <br />Wires</p>
        </div>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Our Products</NavLink>
          </li>
          <li>
            <NavLink to="/innovation">Innovation & Quality</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/media">Media & Resources</NavLink>
          </li>


          {/* 🔍 Search Icon & Input */}
          <li className="search-item">
            {showSearch ? (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                autoFocus
                onBlur={() => setShowSearch(false)} // hide when user clicks away
              />
            ) : (
              <button
                className="search-icon"
                onClick={() => setShowSearch(true)}
              >
                🔍
              </button>
            )}
          </li>

          {/* 🟡 Contact Us Button */}
          <li>
            <NavLink to="/contact">
              <button className="contact-btn">Contact Us</button>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
