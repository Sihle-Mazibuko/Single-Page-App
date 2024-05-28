import React from "react";
import "./FullDesignCard.css";
import { XCircle } from "@phosphor-icons/react";

const FullDesignCard = ({ title, content, onClose, image, points }) => {
  const imagePath = process.env.PUBLIC_URL + `/Images/${image}`;

  return (
    <figure className="full-design-card">
      <img src={imagePath} alt={title} className="design-img" />
      <figcaption className="full-design-card-content">
        <button className="close-btn" onClick={onClose}>
          <XCircle />
        </button>
        <h2>{title}</h2>
        <p className="composer">Composer: Sihle Mazibuko</p>

        {points ? (
          <div className="swot-analysis">
            {Object.keys(points).map((category) => (
              <div key={category} className="swot-category">
                <h3>{category}</h3>
                <ul>
                  {points[category].map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <article className="points-contain">
            <p>{content}</p>
          </article>
        )}
      </figcaption>
    </figure>
  );
};

export default FullDesignCard;
