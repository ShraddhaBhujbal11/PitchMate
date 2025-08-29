// GroupsInfoDialog.jsx
import React, { useState } from "react";
import "./GroupsInfoDialog.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GroupsInfoDialog = ({ open, onClose }) => {
  const [understood, setUnderstood] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNextClick = () => {
    if (understood) {
      onClose(); // Close the dialog
      navigate('/groups'); // Navigate to the groups page
    }
  };

  if (!open) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>In case you don’t understand Groups section</h2>
        <p>
          Join investor, founder, or mixed groups to meet new people and expand your network.
          Investors can join founder groups, and founders can connect directly with investors.
          You can always check the About section on the Navigation bar.
        </p>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={understood}
            onChange={(e) => setUnderstood(e.target.checked)}
          />
          I understand
        </label>

        <button
          className={`next-btn ${understood ? "active" : "disabled"}`}
          disabled={!understood}
          onClick={handleNextClick} // Use the new handler
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GroupsInfoDialog;