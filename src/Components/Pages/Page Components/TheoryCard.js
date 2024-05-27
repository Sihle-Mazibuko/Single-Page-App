import React from "react";
import "./TheoryCard.css";

const TheoryCard = ({ name, summary, onClick, image }) => {
  return (
    <figure className="theory-card" onClick={onClick}>
      <div className="theory-card-image">
        <img src={image} alt="Theory" />
      </div>
      <figcaption className="theory-card-content">
        <h2>{name}</h2>
        <p>{summary}</p>
      </figcaption>
    </figure>
  );
};

export default TheoryCard;
