import React from "react";
import "./FullDesignCard.css";
import { XCircle } from "@phosphor-icons/react";

const FullDesignCard = ({ title, content, onClose, image }) => {
  return (
    <figure className="full-design-card">
      <div className="full-design-card-image">
        <img src={image} alt="Design Album Art" />
      </div>

      <figcaption className="full-design-card-content">
        <button className="close-btn" onClick={onClose}>
          {<XCircle />}
        </button>
        <h2>{title}</h2>
        <p className="composer">Composer: Sihle Mazibuko</p>
        <p>{content}</p>
      </figcaption>
    </figure>
  );
};

export default FullDesignCard;
