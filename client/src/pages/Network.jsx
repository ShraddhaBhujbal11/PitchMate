import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Network.css";
import GroupsInfoDialog from "../components/GroupsInfoDialog";


const Network = () => {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGroupsClick = () => {
    setShowDialog(true);
  };

  const handleNextInDialog = () => {
    setShowDialog(false); // Close the dialog
    navigate('/groups'); // Navigate to the groups page
  };

  return (
    <>
      <Navbar />

      {/* Toggle: Chat / Groups */}
      <div className="chat-groups-toggle">
        <button className="toggle active">Chat</button>
        <button className="toggle" onClick={handleGroupsClick}>
          Groups
        </button>
      </div>

      <div className="network-page">
        {/* Tabs row */}
        <div className="network-tabs">
          <button className="tab active">All conversations</button>
          <button className="tab">Pitched investors</button>
          <button className="tab">Scheduled calls</button>
          <button className="tab">Interested investors</button>
          <button className="tab">Pending</button>
        </div>

        {/* Added wrapper for messages + vertical + chat */}
        <div className="network-main">
          {/* Messages section */}
          <div className="messages">
            <h3 className="messages-title">Messages</h3>

            {/* Message 1 */}
            <div className="message-item">
              <img
                src="/profile.jpeg"
                alt="Arjun Malhotra"
                className="avatar"
              />
              <div className="message-content">
                <div className="message-header">
                  <span className="name">Arjun Malhotra</span>
                  <span className="badge">3</span>
                  <span className="role">Founder</span>
                  <span className="status">Unactive</span>
                </div>
                <div className="message-sub">
                  <span className="last-message">I will let you know</span>
                  <span className="dot">·</span>
                  <span className="time">1d</span>
                </div>
              </div>
            </div>

            {/* Message 2 */}
            <div className="message-item">
              <img
                src="https://via.placeholder.com/40"
                alt="Ananya Patel"
                className="avatar"
              />
              <div className="message-content">
                <div className="message-header">
                  <span className="name">Ananya Patel</span>
                </div>
                <div className="message-sub">
                  <span className="last-message">Typing...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical separator */}
          <div className="vertical"></div>

          {/* Chat area on RHS */}
          <div className="chat-area">
            <img src="/message.png" alt="Your Messages" />
          </div>
        </div>
      </div>

      {/* Groups Info Dialog */}
      <GroupsInfoDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onNext={handleNextInDialog} // Pass the navigation handler
      />
    </>
  );
};

export default Network;