// GenreCard.js
import React from "react";
import "./GenreCard.css"; // Import CSS for styling
import { XCircle } from "@phosphor-icons/react";

const GenreCard = ({ genre, onClose }) => {
  return (
    <div className="genre-card">
      <div className="genre-card-header">
        <h3>{genre.name}</h3>
        <button className="back-button" onClick={onClose}>
          <XCircle />
        </button>
      </div>
      <div className="genre-card-info">
        <p>{genre.info}</p>
      </div>
    </div>
  );
};

export default GenreCard;
