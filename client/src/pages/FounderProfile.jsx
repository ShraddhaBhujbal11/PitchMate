// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import "./FounderProfile.css";

const FounderProfile = () => {
  const [activeTab, setActiveTab] = useState("investing");

  return (
    <div className="profile-container">
      {/* Cover and Profile Picture */}
      <div className="profile-cover-section">
        <img src="/cover.png" alt="Cover" className="profile-cover-image" />
        <img src="/profile.jpeg" alt="Profile" className="profile-picture" />
      </div>

      {/* Two-Column Grid */}
      <div className="profile-content-grid">
        {/* LEFT SIDE */}
        <div className="profile-left-section">
          <div className="profile-info-section">
            <div className="profile-name-row">
              <h2 className="profile-name">Cooper Sitemanle</h2>
              <span className="profile-verified">Verified by PitchMate</span>
            </div>
            <p className="profile-subtitle">
              General Partner at XYZ Ventures <span className="profile-check">✔</span>
            </p>
            <p className="profile-last-online">Last online - 1h ago</p>

            <div className="profile-follow-stats">
              <div className="profile-stat">
                <strong>765</strong>
                <span>Followers</span>
              </div>
              <div className="profile-stat">
                <strong>17</strong>
                <span>Following</span>
              </div>
              <div className="profile-stat">
                <strong>633</strong>
                <span>Upvotes</span>
              </div>
            </div>

            <div className="profile-buttons">
              <button>Edit profile</button>
              <button>View saved</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="profile-right-section">
          <div className="profile-social-section">
            <h4>Social Media</h4>
            <div className="profile-icons">
              <img src="/LinkedIn.png" alt="LinkedIn" />
              <img src="/Insta.jpg" alt="Instagram" />
              <img src="/Twitter.jpg" alt="X" />
            </div>
          </div>

          <div className="profile-group-card">
            <img src="/gm.jpeg" alt="Group" className="profile-group-icon" />
            <div>
              <p className="profile-group-title">
                Part of One Side Twice Investor Group
              </p>
              <p className="profile-group-sub">Verified PitchMate Group</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Section (below profile) */}
      <div className="profile-sticky-tabs">
        <div
          className={`profile-tab ${activeTab === "investing" ? "active" : ""}`}
          onClick={() => setActiveTab("investing")}
        >
          Overview
        </div>
        <div
          className={`profile-tab ${activeTab === "track" ? "active" : ""}`}
          onClick={() => setActiveTab("track")}
        >
          Startup Journey
        </div>
        <div
          className={`profile-tab ${activeTab === "value" ? "active" : ""}`}
          onClick={() => setActiveTab("value")}
        >
          Social proof
        </div>
      </div>
       <div className="profile-meeting-cta">
        <button className="profile-meeting-button">
          Open to Immediate Meetings
        </button>
      </div>

      <div className="profile-tab-content">
        {activeTab === "investing" && (
          <>
            <section className="profile-section">
              <h2>Investment thesis</h2>
              <p>
                This investor typically backs early-stage startups, from pre-seed
                to Series A, with a focus on sectors like HealthTech, EdTech, and
                scalable solutions that address real-world problems, especially in
                emerging markets such as India and Southeast Asia. Founders and
                impact-driven goals are encouraged to connect.
              </p>
            </section>
            <hr className="profile-section-divider" />

            <section className="profile-section">
              <h2>Startup stage preferences</h2>

              <div className="profile-subsection">
                <h4>Preferred Stages</h4>
                <p>
                  This investor focuses on early-stage startups, typically from
                  pre-seed to Series A. They engage at key points where startups
                  are gaining traction, or preparing to scale.
                </p>
              </div>

              <div className="profile-subsection">
                <h4>Ideal Startup Profile</h4>
                <p>
                  (You can add Ideal startup criteria here based on sector,
                  traction, team, etc.)
                </p>
              </div>
            </section>
          </>
        )}

        {activeTab === "track" && <p>Track record content coming soon...</p>}
        {/* {activeTab === "value" && <p>Value added content coming soon...</p>} */}
      </div>
    </div>
  );
};

export default FounderProfile;
