import React from "react";
import "./FullTheoryCard.css";
import { XCircle } from "@phosphor-icons/react";

const FullTheoryCard = ({ title, onClose, author, content }) => {
  return (
    <figure className="full-theory-card">
      <figcaption className="full-theory-card-content">
        <button className="close-btn" onClick={onClose}>
          <XCircle />
        </button>
        <h2>{title}</h2>
        <p className="composer">{author}</p>
        <p>{content}</p>
      </figcaption>
    </figure>
  );
};

export default FullTheoryCard;
