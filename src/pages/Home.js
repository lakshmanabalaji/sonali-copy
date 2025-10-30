import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
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
        {/* Chatbox popup */}
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
            <button className="chat-btn">
              Chat with us →
            </button>
          </div>
        )}

        {/* WhatsApp icon button */}
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
  );
};

export default Home;
