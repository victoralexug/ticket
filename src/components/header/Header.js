import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div >
        <nav className="navbar">
            <div className="logo">🪪 ticz</div>
            <ul className="nav-links">
            <li>Events</li>
            <li>My Tickets</li>
            <li>About Project</li>
            </ul>
            <button className="tickets-button">MY TICKETS →</button>
        </nav>
    </div>
) }
export default Header;