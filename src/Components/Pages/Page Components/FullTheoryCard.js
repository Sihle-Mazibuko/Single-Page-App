import React from "react";
import "./FullTheoryCard.css";
import { XCircle } from "@phosphor-icons/react";

const FullTheoryCard = ({ title, content, onClose, image }) => {
  return (
    <figure className="full-theory-card">
      <div className="full-theory-card-image">
        <img src={image} alt="Theory album art" />
      </div>
      <figcaption className="full-theory-card-content">
        <button className="close-btn" onClick={onClose}>
          <XCircle />
        </button>
        <h2>{title}</h2>
        <p className="composer">Composer: Sihle Mazibuko</p>
        <p>{content}</p>
      </figcaption>
    </figure>
  );
};

export default FullTheoryCard;
