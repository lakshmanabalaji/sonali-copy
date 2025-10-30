import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className="home-container">
        <div className="overlay">
          <h1>
            Sonali <br /> <span>wires.</span>
          </h1>
          <h3>Stronger trust.</h3>
          <p>
            Safe, reliable, and innovative copper wiring solutions powering homes,
            industries & agriculture.
          </p>

          <div className="button-group">
            <button className="btn btn-red">
              Explore Our Products <span className="arrow">→</span>
            </button>
            <button className="btn btn-blue">
              Find a Dealer <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* WhatsApp Floating Chat */}
        <div className="whatsapp-container">
          {showChat && (
            <div className="chat-popup">
              <button className="close-btn" onClick={() => setShowChat(false)}>
                ×
              </button>
              <h4>Welcome to our website!</h4>
              <p>
                Nice to meet you! If you have any questions about our products,
                feel free to contact us.
              </p>
              <button className="chat-btn">Chat with us →</button>
            </div>
          )}

          <button
            className="whatsapp-icon"
            onClick={() => setShowChat(true)}
            aria-label="Chat with us on WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
          </button>
        </div>
      </div>

      {/* About Us Section - Moved outside home-container */}
      <div className="about-container">
        <div className="about-left">
          <h2>About Us</h2>
          <h3>
            Welcome to <br />
            <span class="highlight-text">Sonali Wires LLP</span>
          </h3>

          <div className="who-we-are">
            <h3>WHO <br />WE ARE</h3>
            <a href="#about" class="know-more-btn">
              Know More <span class="arrow">→</span>
            </a>

          </div>
        </div>

        <div className="about-right">
          <p>
            At Sonali Wires LLP, we are committed to delivering safe, BIS-certified
            copper wires and cables designed for every sector — residential,
            industrial, and agricultural. Our advanced manufacturing processes and
            rigorous testing ensure products that last longer, perform better, and
            keep you safe.
          </p>
          <h3><strong>Our Vision</strong></h3>
          <p>
            We are committed to a vision of positioning not only our organization
            but our country India as the number one supplier of Non-Ferrous
            metal products in the world.
          </p>
          <br />
          <br />
          <p>Since 1996</p>
        </div>
      </div>
    </>
  );
};

export default Home;