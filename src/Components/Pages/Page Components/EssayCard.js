import React from "react";
import "./EssayCard.css";

// Functional component to display an essay card
const EssayCard = ({ name, author, image, onClick }) => {
  // Construct the path to the image file
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  return (
    // Figure element for the essay card, with an onClick handler
    <figure className="essay-card" onClick={onClick}>
      {/* Image element with dynamic source and alt text */}
      <img src={imagePath} alt={name} className="essay-card-image" />

      {/* Caption for the essay card */}
      <figcaption className="essay-card-content">
        {/* Display the essay name */}
        <h2>{name}</h2>
        {/* Display the author's name */}
        <p>by {author}</p>
      </figcaption>
    </figure>
  );
};

export default EssayCard;
