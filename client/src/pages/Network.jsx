import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Network.css";
import GroupsInfoDialog from "../components/GroupsInfoDialog";

const Network = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // track active tab
  const navigate = useNavigate();

  const handleGroupsClick = () => {
    setShowDialog(true);
  };

  const handleNextInDialog = () => {
    setShowDialog(false);
    navigate("/groups");
  };

  // Different dummy data for tabs
  const conversations = {
    all: [
      {
        name: "Arjun Malhotra",
        role: "Founder",
        status: "Unactive",
        lastMessage: "I will let you know",
        time: "1d",
        avatar: "/profile.jpeg",
        badge: 3,
      },
      {
        name: "Ananya Patel",
        lastMessage: "Typing...",
        avatar: "https://via.placeholder.com/40",
      },
    ],
    pitches: [
      {
        name: "Aanya Patel",
        role: "Founder",
        lastMessage: "Pitch delivered · 35 min",
        status: "Active 2h ago",
        avatar: "/profile.jpeg",
      },
      {
        name: "Rahul Sharma",
        role: "Investor",
        lastMessage: "Pitch delivered · 1h ago",
        status: "Active 5h ago",
        avatar: "https://via.placeholder.com/40",
      },
    ],
    calls: [
      {
        name: "Vikram Singh",
        role: "Investor",
        lastMessage: "Scheduled for 5 PM",
        time: "1d",
        avatar: "https://via.placeholder.com/40",
      },
    ],
    pending: [
      {
        name: "Meera Nair",
        role: "Founder",
        lastMessage: "Awaiting approval",
        time: "3d",
        avatar: "https://via.placeholder.com/40",
      },
    ],
  };

  // Get messages for current tab
  const currentMessages = conversations[activeTab];

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
          <button
            className={`tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All conversations
          </button>
          <button
            className={`tab ${activeTab === "pitches" ? "active" : ""}`}
            onClick={() => setActiveTab("pitches")}
          >
            Received Pitches
          </button>
          <button
            className={`tab ${activeTab === "calls" ? "active" : ""}`}
            onClick={() => setActiveTab("calls")}
          >
            Scheduled calls
          </button>
          <button
            className={`tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
        </div>

        {/* Main content */}
        <div className="network-main">
          {/* Messages section */}
          <div className="messages">
            <h3 className="messages-title">Messages</h3>

            {currentMessages.map((msg, index) => (
              <div
                key={index}
                className={`message-item ${activeTab === "pitches" ? "pitches" : ""}`}
              >
                <img src={msg.avatar} alt={msg.name} className="avatar" />

                {/* Special layout for Received Pitches */}
                {activeTab === "pitches" ? (
                  <div className="pitch-message">
                    <div>
                      <span className="pitch-name">{msg.name}</span>
                      <div className="pitch-sub">{msg.lastMessage}</div>
                    </div>
                    <div className="pitch-role">{msg.role}</div>
                    <div className="pitch-status">{msg.status}</div>
                  </div>
                ) : (
                  // Default chat layout
                  <div className="message-content">
                    <div className="message-header">
                      <span className="name">{msg.name}</span>
                      {msg.badge && <span className="badge">{msg.badge}</span>}
                      {msg.role && <span className="role">{msg.role}</span>}
                      {msg.status && <span className="status">{msg.status}</span>}
                    </div>
                    <div className="message-sub">
                      <span className="last-message">{msg.lastMessage}</span>
                      {msg.time && (
                        <>
                          <span className="dot">·</span>
                          <span className="time">{msg.time}</span>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Vertical separator */}
          <div className="vertical"></div>

          {/* Chat area */}
          <div className="chat-area">
            <img src="/message.png" alt="Your Messages" />
          </div>
        </div>
      </div>

      {/* Groups Info Dialog */}
      <GroupsInfoDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onNext={handleNextInDialog}
      />
    </>
  );
};

export default Network;
