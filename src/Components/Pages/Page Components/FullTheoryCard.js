import React from "react";
import "./FullTheoryCard.css";
import { XCircle } from "@phosphor-icons/react";

// Functional component to display a full theory card with detailed information
const FullTheoryCard = ({ title, onClose, author, content, link, ref }) => {
  return (
    // Figure element for the full theory card
    <figure className="full-theory-card">
      {/* Caption for the full theory card */}
      <figcaption className="full-theory-card-content">
        {/* Button to close the full theory card */}
        <button className="close-btn" onClick={onClose}>
          <XCircle />
        </button>

        {/* Display the title */}
        <h2>{title}</h2>

        <a href={link}>Link to research</a>

        {/* Display the author */}
        <p className="composer">{author}</p>

        {/* Display the content */}
        <p>{content}</p>
      </figcaption>

      <p className="reference">Credit: {ref}</p>
    </figure>
  );
};

export default FullTheoryCard;
