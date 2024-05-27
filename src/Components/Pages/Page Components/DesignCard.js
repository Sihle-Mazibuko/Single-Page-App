import React from "react";
import "./DesignCard.css";

const DesignCard = ({ name, summary, onClick, image }) => {
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  return (
    <figure className="design-card" onClick={onClick}>
      <div className="design-card-image">
        <img src={imagePath} alt={name} className="theory-card-image" />

        <p className="released">Released: 2024</p>
      </div>

      <figcaption className="design-card-content">
        <h3>{name}</h3>
        <p>{summary}</p>
      </figcaption>
    </figure>
  );
};

export default DesignCard;
