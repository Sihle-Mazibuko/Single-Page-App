import React from "react";
import "./DesignCard.css";

// Functional component to display a design card
const DesignCard = ({ name, summary, onClick, image }) => {
  // Construct the path to the image file
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  return (
    // Figure element for the design card, with an onClick handler
    <figure className="design-card" onClick={onClick}>
      {/* Container for the image and release date */}
      <div className="design-card-image">
        {/* Image element with dynamic source and alt text */}
        <img src={imagePath} alt={name} className="theory-card-image" />
      </div>

      {/* Caption for the design card */}
      <figcaption className="design-card-content">
        {/* Display the design name */}
        <h3>{name}</h3>
        {/* Display the design summary */}
        <p>{summary}</p>
      </figcaption>
    </figure>
  );
};

export default DesignCard;
