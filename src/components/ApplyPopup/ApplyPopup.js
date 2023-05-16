import React from 'react';
import "./ApplyPopup.scss";

function Popup({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
       <h3>You've Just Applied!</h3>
        <button className="popup-__button" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
