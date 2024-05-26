import React from "react";
import "./TheoryCard.css";

const TheoryCard = ({ name, summary, onClick }) => {
  return (
    <div className="theory-card" onClick={onClick}>
      <h3>{name}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default TheoryCard;
