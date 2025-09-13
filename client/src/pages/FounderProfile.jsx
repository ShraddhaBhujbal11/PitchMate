// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import "./FounderProfile.css";

const founderData = {
  coverImg: "/cover.png",
  profileImg: "/profile.jpeg",
  name: "Cooper Sitemanle",
  verifiedBy: "PitchMate",
  subtitle: "General Partner at XYZ Ventures",
  lastOnline: "1h ago",
  stats: {
    followers: 765,
    following: 17,
    upvotes: 633,
  },
  socialLinks: [
    { img: "/LinkedIn.png", alt: "LinkedIn" },
    { img: "/Insta.jpg", alt: "Instagram" },
    { img: "/Twitter.jpg", alt: "X" },
  ],
  group: {
    img: "/gm.jpeg",
    title: "Part of One Side Twice Investor Group",
    sub: "Verified PitchMate Group",
  },
  overview: {
    thesis:
      "This investor typically backs early-stage startups, from pre-seed to Series A, with a focus on sectors like HealthTech, EdTech, and scalable solutions that address real-world problems, especially in emerging markets such as India and Southeast Asia. Founders and impact-driven goals are encouraged to connect.",
    stages:
      "This investor focuses on early-stage startups, typically from pre-seed to Series A. They engage at key points where startups are gaining traction, or preparing to scale.",
    ideal:
      "(You can add Ideal startup criteria here based on sector, traction, team, etc.)",
  },
};

const FounderProfile = () => {
  const [activeTab, setActiveTab] = useState("investing");

  return (
    <div className="profile-container">
      {/* Cover and Profile Picture */}
      <div className="profile-cover-section">
        <img
          src={founderData.coverImg}
          alt="Cover"
          className="profile-cover-image"
        />
        <img
          src={founderData.profileImg}
          alt="Profile"
          className="profile-picture"
        />
      </div>

      {/* Two-Column Grid */}
      <div className="profile-content-grid">
        {/* LEFT SIDE */}
        <div className="profile-left-section">
          <div className="profile-info-section">
            <div className="profile-name-row">
              <h2 className="profile-name">{founderData.name}</h2>
              <span className="profile-verified">
                Verified by {founderData.verifiedBy}
              </span>
            </div>
            <p className="profile-subtitle">
              {founderData.subtitle}{" "}
              <span className="profile-check">✔</span>
            </p>
            <p className="profile-last-online">
              Last online - {founderData.lastOnline}
            </p>

            <div className="profile-follow-stats">
              <div className="profile-stat">
                <strong>{founderData.stats.followers}</strong>
                <span>Followers</span>
              </div>
              <div className="profile-stat">
                <strong>{founderData.stats.following}</strong>
                <span>Following</span>
              </div>
              <div className="profile-stat">
                <strong>{founderData.stats.upvotes}</strong>
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
              {founderData.socialLinks.map((link, idx) => (
                <img key={idx} src={link.img} alt={link.alt} />
              ))}
            </div>
          </div>

          <div className="profile-group-card">
            <img
              src={founderData.group.img}
              alt="Group"
              className="profile-group-icon"
            />
            <div>
              <p className="profile-group-title">{founderData.group.title}</p>
              <p className="profile-group-sub">{founderData.group.sub}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Section */}
      <div className="profile-sticky-tabs">
        <div
          className={`profile-tab ${
            activeTab === "investing" ? "active" : ""
          }`}
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

      {/* Meeting Button */}
      <div className="profile-meeting-cta">
        <button className="profile-meeting-button">
          Open to Immediate Meetings
        </button>
      </div>

      {/* Tab Content */}
      <div className="profile-tab-content">
        {activeTab === "investing" && (
          <>
            <section className="profile-section">
              <h2>Investment thesis</h2>
              <p>{founderData.overview.thesis}</p>
            </section>
            <hr className="profile-section-divider" />

            <section className="profile-section">
              <h2>Startup stage preferences</h2>

              <div className="profile-subsection">
                <h4>Preferred Stages</h4>
                <p>{founderData.overview.stages}</p>
              </div>

              <div className="profile-subsection">
                <h4>Ideal Startup Profile</h4>
                <p>{founderData.overview.ideal}</p>
              </div>
            </section>
          </>
        )}

        {activeTab === "track" && <p>Track record content coming soon...</p>}
        {activeTab === "value" && <p>Value added content coming soon...</p>}
      </div>
    </div>
  );
};

export default FounderProfile;
