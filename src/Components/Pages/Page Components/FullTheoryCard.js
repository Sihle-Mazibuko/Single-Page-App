import React from "react";
import "./FullTheoryCard.css";
import { XCircle } from "@phosphor-icons/react";

const FullTheoryCard = ({ title, content, onClose }) => {
  return (
    <div className="full-theory-card">
      <button className="close-btn" onClick={onClose}>
        <XCircle />
      </button>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default FullTheoryCard;
