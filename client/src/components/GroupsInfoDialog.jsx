// GroupsInfoDialog.jsx
import React, { useState } from "react";
import "./GroupsInfoDialog.css";
import { useNavigate } from "react-router-dom";

const GroupsInfoDialog = ({ open, onClose }) => {
  const [understood, setUnderstood] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (understood) {
      onClose();
      navigate("/groups");
    }
  };

  if (!open) return null;

  return (
    <div className="groups-dialog-overlay">
      <div className="groups-dialog-box">
        <button className="groups-dialog-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="groups-dialog-title">
          In case you don’t understand Groups section
        </h2>
        <p className="groups-dialog-description">
          Join investor, founder, or mixed groups to meet new people and expand
          your network. Investors can join founder groups, and founders can
          connect directly with investors. You can always check the About
          section on the Navigation bar.
        </p>

        <label className="groups-dialog-checkbox">
          <input
            type="checkbox"
            checked={understood}
            onChange={(e) => setUnderstood(e.target.checked)}
          />
          I understand
        </label>

        <button
          className={`groups-dialog-next-btn ${
            understood ? "active" : "disabled"
          }`}
          disabled={!understood}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GroupsInfoDialog;
