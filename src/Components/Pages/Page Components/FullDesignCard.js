import React from "react";
import "./FullDesignCard.css";
import { XCircle } from "@phosphor-icons/react";

// Functional component to display a full design card with detailed information
const FullDesignCard = ({ title, content, onClose, image, points }) => {
  // Construct the path to the image file
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  return (
    // Figure element for the full design card
    <figure className="full-design-card">
      {/* Image element with dynamic source and alt text */}
      <img src={imagePath} alt={title} className="design-img" />

      {/* Caption for the full design card */}
      <figcaption className="full-design-card-content">
        {/* Button to close the full design card */}
        <button className="close-btn" onClick={onClose}>
          <XCircle />
        </button>

        {/* Display the title */}
        <h2>{title}</h2>

        {/* Static text for the composer's name */}
        <p className="composer">Composer: Sihle Mazibuko</p>

        {/* Conditionally render the SWOT analysis or the content */}
        {points ? (
          // If points are provided, render the SWOT analysis
          <div className="swot-analysis">
            {Object.keys(points).map((category) => (
              <div key={category} className="swot-category">
                {/* Display the category name */}
                <h3>{category}</h3>
                {/* List the points for the category */}
                <ul>
                  {points[category].map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          // If no points are provided, render the content
          <article className="points-contain">
            <p>{content}</p>
          </article>
        )}
      </figcaption>
    </figure>
  );
};

export default FullDesignCard;
