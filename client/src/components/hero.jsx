// HeroSection.jsx
import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Meet Game-Changing Founders</h1>
          <button className="hero-button">Check out</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
