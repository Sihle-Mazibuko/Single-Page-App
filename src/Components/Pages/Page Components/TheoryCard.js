import React from "react";
import "./TheoryCard.css";

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "..."; // Truncate and add ellipsis
  }
  return title;
};

const TheoryCard = ({ name, author, onClick, image }) => {
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;
  const truncatedName = truncateTitle(name, 35); // Adjust maxLength as needed

  return (
    <figure className="theory-card" onClick={onClick}>
      <img
        src={imagePath}
        alt="Cover for music thoery card"
        className="theory-card-image"
      />
      <figcaption className="theory-card-content">
        <h2>{truncatedName}</h2>
        <p>{author}</p>
      </figcaption>
    </figure>
  );
};

export default TheoryCard;
