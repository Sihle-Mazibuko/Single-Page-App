import React, { useState } from "react";
import {
  Play,
  SkipBack,
  SkipForward,
  House,
  Palette,
  NotePencil,
  PaintBrush,
  Globe,
} from "@phosphor-icons/react";
import "./MusicCard.css";

const MusicCard = ({ image }) => {
  const pageNames = [
    "Home Page",
    "Designs & Style Guide Section",
    "Theory Section",
    "Internet Artwork",
    "The API",
  ];

  const iconMapping = {
    "Home Page": <House />,
    "Designs & Style Guide Section": <Palette />,
    "Theory Section": <NotePencil />,
    "Internet Artwork": <PaintBrush />,
    "The API": <Globe />,
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pageNames.length) % pageNames.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageNames.length);
  };

  return (
    <section>
      <h3>Explore More Works By The Artist</h3>

      <article className="music-card">
        <figure className="album-art">
          {iconMapping[pageNames[currentIndex]]}
        </figure>

        <figcaption className="info">
          <h4 className="title">{pageNames[currentIndex]}</h4>
          <p className="artist">Sihle Mazibuko</p>

          <div className="progress-bar">
            <span className="time-start">0:44 </span>
            <div className="bar">
              <div className="progress"></div>
            </div>
            <span className="time-end">5:13</span>
          </div>
        </figcaption>

        <div className="controls">
          <button className="control-btn prev-btn" onClick={handlePrev}>
            <SkipBack size={24} />
          </button>
          {/* {#TODO: MAKE PLAY BUTTON WORK} */}
          <button className="control-btn play-btn">
            <Play size={24} />
          </button>
          <button className="control-btn next-btn" onClick={handleNext}>
            <SkipForward size={24} />
          </button>
        </div>
      </article>
    </section>
  );
};

export default MusicCard;
