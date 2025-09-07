import React from 'react';
import './SearchComponent.css'; // Import your CSS file

function SearchComponent({ onClose }) {
  return (
    <div className="search-overlay">
      <div className="search-container">
        {/* Header with input + close button */}
        <div className="search-header">
          <input
            type="text"
            placeholder="investors, founders, startups"
            className="search-input"
            autoFocus
          />
          <span className="close-button" onClick={onClose}>✖</span>
        </div>

        {/* Content area with filters + recent searches */}
        <div className="search-content">
          <div className="filter-options">
            <button className="filter-button">Funding Requirement</button>
            <button className="filter-button">Location</button>
            <button className="filter-button">Team size</button>
            <button className="filter-button">Founder Background / Expertise</button>
            <button className="filter-button">Education / Institution</button>
            <button className="filter-button">Business Model</button>
            <button className="filter-button">Funding Sought</button>
            <button className="filter-button">Joined Recently</button>
          </div>

          <div className="recent-searches-section">
            <h3>Recent searches</h3>
            <ul>
              <li>best founders 2025</li>
              <li>new startups</li>
              <li>founders</li>
              <li>More...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
