import React from "react";
import "./HowItWorks.css";
import demoImg from "../assets/demo-chart.jpg"; // <-- replace with your image

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      {/* Top Heading */}
      <h1 className="howitworks-heading">
        <span className="brand">Pitch</span>Mate visual demonstration
      </h1>

      {/* White Box Content */}
      <div className="howitworks-box">
        {/* Left Section */}
        <div className="howitworks-text">
          <h2>How it works</h2>

          <h4>Who It's For ?</h4>
          <ul>
            <li>Founders looking for funding</li>
            <li>Investors looking for promising startups</li>
            <li>Solo entrepreneurs, early-stage teams, VCs, angels, etc.</li>
          </ul>

          <p className="highlight-text">
            Get a complete visual walkthrough of{" "}
            <span className="brand">PitchMate</span> — from creating your
            profile, connecting with the right people to every feature.
          </p>

          <button className="video-btn">
            See video <span className="video-icon">🎥</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="howitworks-image">
          <img src={demoImg} alt="PitchMate demo" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
