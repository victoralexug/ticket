import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../header/Header";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
      <div>
        {<Header />}
      </div>
        <div className="home-container">
          <div className="content">
            <div className="header-row">
              <p className="section-title">Ticket Selection</p>
              <span className="step-indicator">Step 1/3</span>
            </div>
            <div className="progress-line"></div>

            <div className="ticket-desc">
              <h2 className="event-title">Techember Fest '25</h2>
              <p className="event-description">Join us for an unforgettable experience at <span>[Event Name]!</span> Secure your spot now.</p>
              <p className="event-details">📍 <span>[Event Location]</span> || March 15, 2025 | 7:00 PM</p>
            </div>

            <div className="hr"></div>
          
            <div className="ticket-selection">
              <h3>Select Ticket Type:</h3>
              <div className="ticket-options">
                <button className="ticket-button">Regular Access <span>Free</span></button>
                <button className="ticket-button">VIP Access <span>$50</span></button>
                <button className="ticket-button">VVIP Access <span>$150</span></button>
              </div>
            </div>
          
            <div className="ticket-quantity">
              <label htmlFor="ticket-number">Number of Tickets  </label>
              <select id="ticket-number">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          
            <div className="button-group">
              <button className="cancel-button">Cancel</button>
              <button onClick={() => navigate("/ticket-form")} className="cta-button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;