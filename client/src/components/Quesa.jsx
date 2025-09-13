import React, { useState } from "react";
import "./Quesa.css";

const Quesa = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        {/* Progress Bar */}
        <div className="stepper">
          <div className="step active">Overview</div>
          <div className="step">Essential Information</div>
          <div className="step">Investment Terms</div>
        </div>

        {/* Form Content */}
        <div className="dialog-content">
          <h4>
            1. Startup Name and a brief about your startup (as you'd like it to
            appear to investors)
          </h4>

          <label className="dialog-label">Startup name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="dialog-input"
            placeholder="Enter your startup name"
          />

          <label className="dialog-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="dialog-textarea"
            placeholder="Enter a short description"
          />

          {/* Buttons */}
          <div className="dialog-buttons">
            <button className="btn-back">Back</button>
            <button className="btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quesa;
