import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./TicketForm.css";
import Header from "../header/Header";

const TicketForm = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatarUrl: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("ticketFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ticketFormData", JSON.stringify(formData));
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email";
    if (!formData.avatarUrl.trim()) newErrors.avatarUrl = "Avatar URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("ticketData", JSON.stringify(formData)); 
      navigate("/ticket"); 
    }
  };

  return (
    <div className="ticket-form">
      <Header />
      <div className="ticket-form-container">
        <div className="ticket-form-header">
          <h2>Attendee Details</h2>
          <span className="step-indicator">Step 2/3</span>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Enter your name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
          <br></br>
          <label>Enter your email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
          <br></br>
          <label>Avatar URL</label>
          <input type="url" name="avatarUrl" value={formData.avatarUrl} onChange={handleChange} />
          {errors.avatarUrl && <span className="error">{errors.avatarUrl}</span>}
          <br></br>
          <div className="form-buttons">
            <button type="button" className="back-button" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="submit-button">Get My Free Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;