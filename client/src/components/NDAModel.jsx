// NDAModal.jsx
import React from 'react';
import './NDAModel.css';

const NDAModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="nda-modal-overlay">
      <div className="nda-modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Non-Disclosure Agreement(NDA) Required</h2>
        <p>
          To protect the founder’s confidential information, you'll need to sign a one-time NDA before accessing the full details of this startup.
        </p>
        <p>
          By signing, you agree to keep all sensitive business, product, and financial information private.
        </p>
        <button className="nda-view-btn">View NDA</button>
      </div>
    </div>
  );
};

export default NDAModal;
