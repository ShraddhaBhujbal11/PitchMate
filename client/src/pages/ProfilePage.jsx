// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("investing");

  return (
    <div className="profile-container">
      {/* Cover and Profile Picture */}
      <div className="cover-section">
        <img src="/cover.png" alt="Cover" className="cover-image" />
        <img src="/profile.jpeg" alt="Profile" className="profile-picture" />
      </div>

      {/* Two-Column Grid */}
      <div className="content-grid">
        {/* LEFT SIDE */}
        <div className="left-section">
          <div className="info-section">
            <div className="name-row">
              <h2 className="name">Cooper Sitemanle</h2>
              <span className="verified">Verified by PitchMate</span>
            </div>
            <p className="subtitle">
              General Partner at XYZ Ventures <span className="check">✔</span>
            </p>
            <p className="last-online">Last online - 1h ago</p>

            <div className="follow-stats">
              <div className="stat">
                <strong>765</strong>
                <span>Followers</span>
              </div>
              <div className="stat">
                <strong>17</strong>
                <span>Following</span>
              </div>
            </div>

            <div className="buttons">
              <button>Edit profile</button>
              <button>View saved</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">
          <div className="social-section">
            <h4>Social Media</h4>
            <div className="icons">
              <img src="/LinkedIn.png" alt="LinkedIn" />
              <img src="/Insta.jpg" alt="Instagram" />
              <img src="/Twitter.jpg" alt="X" />
            </div>
          </div>

          <div className="group-card">
            <img src="/gm.jpeg" alt="Group" className="group-icon" />
            <div>
              <p className="group-title">Part of One Side Twice Investor Group</p>
              <p className="group-sub">Verified PitchMate Group</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Section (below profile) */}
      <div className="sticky-tabs">
        <div
          className={`tab ${activeTab === "investing" ? "active" : ""}`}
          onClick={() => setActiveTab("investing")}
        >
          Investing focus
        </div>
        <div
          className={`tab ${activeTab === "track" ? "active" : ""}`}
          onClick={() => setActiveTab("track")}
        >
          Track record and Value added
        </div>
        {/* <div
          className={`tab ${activeTab === "value" ? "active" : ""}`}
          onClick={() => setActiveTab("value")}
        >
          Value added
        </div> */}
      </div>

      <div className="tab-content">
        {activeTab === "investing" && (
  <>
    <section className="section">
      <h2>Investment thesis</h2>
      <p>
        This investor typically backs early-stage startups, from pre-seed
        to Series A, with a focus on sectors like HealthTech, EdTech, and
        scalable solutions that address real-world problems, especially in
        emerging markets such as India and Southeast Asia. Founders and
        impact-driven goals are encouraged to connect.
      </p>
    </section>
    <hr className="section-divider" />

    <section className="section">
      <h2>Startup stage preferences</h2>

      <div className="subsection">
        <h4>Preferred Stages</h4>
        <p>
          This investor focuses on early-stage startups, typically from pre-seed to Series A. They engage at key points where startups are gaining traction, or preparing to scale.
        </p>
      </div>

      <div className="subsection">
        <h4>Ideal Startup Profile</h4>
        <p>
          (You can add Ideal startup criteria here based on sector, traction, team, etc.)
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

export default ProfilePage;
