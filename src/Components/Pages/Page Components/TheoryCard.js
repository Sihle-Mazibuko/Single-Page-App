import React from "react";
import "./TheoryCard.css";

const TheoryCard = ({ name, author, onClick, image }) => {
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  console.log(imagePath);
  return (
    <figure className="theory-card" onClick={onClick}>
      <img
        src={imagePath}
        alt="Cover for music thoery card"
        className="theory-card-image"
      />
      <figcaption className="theory-card-content">
        <h2>{name}</h2>
        <p>{author}</p>
      </figcaption>
    </figure>
  );
};

export default TheoryCard;
