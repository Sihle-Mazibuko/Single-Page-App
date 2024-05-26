import React from "react";
import "./DesignCard.css";

const DesignCard = ({ name, summary, onClick }) => {
  return (
    <div className="design-card" onClick={onClick}>
      <h3>{name}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default DesignCard;
