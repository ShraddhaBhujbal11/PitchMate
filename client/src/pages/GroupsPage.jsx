import React from "react";
import "./GroupsPage.css";
import Navbar from "../components/Navbar";

export default function GroupsPage() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      <div className="groups-container">
        {/* Tabs */}
        <div className="chat-groups-toggle">
          <button className="toggle active">Chat</button>
          <button className="toggle">
            Groups
          </button>

        </div>

        {/* Heading */}
        <h2 className="heading">Investor or founder groups for you</h2>

        {/* Groups Row */}


        <div className="groups-row">
          <div className="group-container">
            <div className="group-card">
              <div className="group-top">
                <img
                  src="profile.jpeg"
                  alt="The Capital Connect Investors Group"
                  className="group-avatar"
                />
                <div className="group-info">
                  <h3 className="group-title">The Capital Connect Investors Group</h3>
                  <p className="subtitle">Verified PitchMate Group</p>
                </div>
                <button className="join-btn">Join</button>
              </div>
            </div>
            <div className="spots-info">
              <div className="progress-bar">
                <div className="progress" style={{ width: "35%" }}></div>
              </div>
              <p className="spots-left">Only 65 spots left</p>
            </div>
          </div>
          <div className="group-container">
            <div className="group-card">
              <div className="group-top">
                <img
                  src="profile.jpeg"
                  alt="The Capital Connect Investors Group"
                  className="group-avatar"
                />
                <div className="group-info">
                  <h3 className="group-title">The Capital Connect Investors Group</h3>
                  <p className="subtitle">Verified PitchMate Group</p>
                </div>
                <button className="join-btn">Join</button>
              </div>
            </div>
            <div className="spots-info">
              <div className="progress-bar">
                <div className="progress" style={{ width: "35%" }}></div>
              </div>
              <p className="spots-left">Only 65 spots left</p>
            </div>
          </div>
          <div className="group-container">
            <div className="group-card">
              <div className="group-top">
                <img
                  src="profile.jpeg"
                  alt="The Capital Connect Investors Group"
                  className="group-avatar"
                />
                <div className="group-info">
                  <h3 className="group-title">The Capital Connect Investors Group</h3>
                  <p className="subtitle">Verified PitchMate Group</p>
                </div>
                <button className="join-btn">Join</button>
              </div>
            </div>
            <div className="spots-info">
              <div className="progress-bar">
                <div className="progress" style={{ width: "35%" }}></div>
              </div>
              <p className="spots-left">Only 65 spots left</p>
            </div>
          </div>

          <div className="group-container">
            <div className="group-card">
              <div className="group-top">
                <img
                  src="profile.jpeg"
                  alt="Founders & Funders Founders Group"
                  className="group-avatar"
                />
                <div className="group-info">
                  <h3 className="group-title">Founders & Funders Founders Group</h3>
                  <p className="subtitle">Verified PitchMate Group</p>
                </div>
                <button className="join-btn">Join</button>
              </div>
            </div>
            <div className="spots-info">
              <div className="progress-bar">
                <div className="progress" style={{ width: "20%" }}></div>
              </div>
              <p className="spots-left">Only 98 spots left</p>
            </div>
          </div>
        </div>

        {/* My Group Messages */}
        <h2 className="heading my-groups-heading">My Group Messages</h2>

        <div className="message-card">
          <img src="group3.jpg" alt="Growth Capital founders Group" />
          <div>
            <h4>Growth Capital founders Group</h4>
            <p>
              George Miller : <strong>You go for it too @david_milside</strong> · 1d
            </p>
          </div>
        </div>

        <div className="message-card">
          <img src="group4.jpg" alt="Elite Investors Group" />
          <div>
            <h4>Elite Investors Group</h4>
            <p>There is availability · 30 min</p>
          </div>
        </div>
      </div>
    </>
  );
}
