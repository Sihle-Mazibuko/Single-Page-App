import React from "react";
import { Play, SkipBack, SkipForward } from "@phosphor-icons/react/dist/ssr";
import "./MusicCard.css";

const MusicCard = ({ image, title }) => {
  return (
    <section>
      <h3>Explore More Works By The Artist</h3>
      <article className="music-card">
        <img src={image} alt={title} className="album-art" />

        <figcaption className="info">
          <h4 className="title">{title}</h4>
          <p className="artist">Sihle Mazibuko</p>
        </figcaption>

        <div className="controls">
          <button className="control-btn prev-btn">
            <SkipBack size={24} />
          </button>
          <button className="control-btn play-btn">
            <Play size={24} />
          </button>
          <button className="control-btn next-btn">
            <SkipForward size={24} />
          </button>
        </div>
      </article>
    </section>
  );
};

export default MusicCard;
