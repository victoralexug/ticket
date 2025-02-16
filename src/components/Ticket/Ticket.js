import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ticket.css";
import Header from "../header/Header";

const Ticket = () => {
  const navigate = useNavigate();
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const savedTicket = localStorage.getItem("ticketData");
    if (savedTicket) {
      setTicketData(JSON.parse(savedTicket));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!ticketData) return null;

  return (
    <div>
      <Header/>
      <div className="ticket-container">
        <h2>🎟 Your Ticket</h2>
        <div className="ticket-card">
          <img src={ticketData.avatarUrl} alt="User Avatar" className="avatar-preview" />
          <p><strong>Name:</strong> {ticketData.name}</p>
          <p><strong>Email:</strong> {ticketData.email}</p>
        </div>
        <button className="back-button" onClick={() => navigate("/")}>Back to Form</button>
      </div>
    </div>
    
  );
};

export default Ticket;
