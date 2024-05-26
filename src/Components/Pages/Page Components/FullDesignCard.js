import React from "react";
import "./FullDesignCard.css";

const FullDesignCard = ({ title, content, onClose }) => {
  return (
    <div className="full-design-card">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default FullDesignCard;
