import React from "react";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

function Landing() {
  return (
    <div className="landing-app">
      {/* Hero Section with Navbar and Text */}
      <section className="landing-hero">
        <img
          src="land.jpg"
          alt="team handshake"
          className="landing-hero-img"
        />
        <div className="landing-overlay"></div>

        {/* Navbar */}
        <nav className="landing-navbar">
          <div className="landing-logo">
            Pitch<span>Mate</span>
          </div>

          <ul className="landing-nav-links">
            <li>
              <NavLink to="/HowItWorks" className="landing-nav-link">
                How it works <MdKeyboardArrowDown className="landing-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Events" className="landing-nav-link">
                Events <MdKeyboardArrowDown className="landing-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="landing-nav-link">
                About <MdKeyboardArrowDown className="landing-icon" />
              </NavLink>
            </li>
          </ul>

          <div className="landing-nav-buttons">
            <button className="landing-btn landing-sign-up">Sign up</button>
            <button className="landing-btn landing-log-in">Log in</button>
          </div>
        </nav>

        {/* Left-aligned text */}
        <div className="landing-hero-text">
          <h1>Build it. Back it. Believe in it.</h1>
          <div className="landing-buttons">
            <button className="landing-btn landing-primary">Investor</button>
            <button className="landing-btn landing-primary">Founder</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
