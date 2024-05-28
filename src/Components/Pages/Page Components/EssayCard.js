import React from "react";
import "./EssayCard.css";

const EssayCard = ({ name, author, image, onClick }) => {
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  return (
    <figure className="essay-card" onClick={onClick}>
      <img src={imagePath} alt={name} className="essay-card-image" />
      <figcaption className="essay-card-content">
        <h2>{name}</h2>
        <p>by {author}</p>
      </figcaption>
    </figure>
  );
};

export default EssayCard;
