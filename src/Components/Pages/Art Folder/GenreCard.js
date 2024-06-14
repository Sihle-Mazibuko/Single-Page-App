import React from "react";
import "./GenreCard.css";
import { XCircle } from "@phosphor-icons/react";

const GenreCard = ({ genre, onClose }) => {
  return (
    <div className="genre-card">
      {/* Genre Card Header */}
      <div className="genre-card-header">
        <h3>{genre.name}</h3> {/* Displaying the name of the genre */}
        <button className="back-button" onClick={onClose}>
          <XCircle /> {/* Close button with XCircle icon */}
        </button>
      </div>
      {/* Genre Card Info */}
      <div className="genre-card-info">
        <p>{genre.info}</p>{" "}
        {/* Displaying additional information about the genre */}
      </div>
    </div>
  );
};

export default GenreCard;
