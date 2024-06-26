import React from "react";
import "./TheoryCard.css";

// Function to truncate the title if it exceeds a certain length
const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "..."; // Truncate and add ellipsis
  }
  return title;
};

// Functional component to display a theory card
const TheoryCard = ({ name, author, onClick, image, year }) => {
  // Construct the path to the image file
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;
  // Truncate the name if it exceeds 35 characters
  const truncatedName = truncateTitle(name, 35); // Adjust maxLength as needed

  return (
    // Figure element for the theory card, with an onClick handler
    <figure className="theory-card" onClick={onClick}>
      {/* Image element with dynamic source and alt text */}
      <img src={imagePath} alt={truncatedName} className="theory-card-image" />
      {/* Caption for the theory card */}
      <figcaption className="theory-card-content">
        {/* Display the truncated name */}
        <h2>{truncatedName}</h2>
        {/* Display the author */}
        <p>{author}</p>
        <p className="released">Released: {year}</p>
      </figcaption>
    </figure>
  );
};

export default TheoryCard;
