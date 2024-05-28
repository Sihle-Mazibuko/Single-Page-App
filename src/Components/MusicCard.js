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
} from "@phosphor-icons/react"; // Importing icons from Phosphor Icons library
import "./MusicCard.css"; // Importing CSS styles
import { useNavigate } from "react-router-dom"; // Importing hook for navigation

// Functional component for the Music Card
const MusicCard = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [currentIndex, setCurrentIndex] = useState(0); // State for current index

  // Array of page names
  const pageNames = [
    "Home Page",
    "Designs & Style Guide Section",
    "Theory Section",
    "Internet Artwork",
    "The API",
  ];

  // Mapping of page names to icons
  const iconMapping = {
    "Home Page": <House />,
    "Designs & Style Guide Section": <Palette />,
    "Theory Section": <NotePencil />,
    "Internet Artwork": <PaintBrush />,
    "The API": <Globe />,
  };

  // Handler for previous button
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pageNames.length) % pageNames.length
    );
  };

  // Handler for next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageNames.length);
  };

  // Function to determine next page based on current title
  const determineNextPage = (currentTitle) => {
    return "/designs"; // Example of determining next page
  };

  // Handler for play button
  const handlePlay = () => {
    const nextPage = determineNextPage(pageNames[currentIndex]); // Determine next page
    navigate(nextPage); // Navigate to next page
  };

  return (
    // Section for Music Card
    <section>
      {/* Article for the Music Card */}
      <article className="music-card">
        {/* Album art or icon */}
        <figure className="album-art">
          {iconMapping[pageNames[currentIndex]]}
        </figure>

        {/* Information section */}
        <figcaption className="info">
          {/* Title of the page */}
          <h4 className="title">{pageNames[currentIndex]}</h4>
          {/* Artist (hardcoded in this case) */}
          <p className="artist">Sihle Mazibuko</p>

          {/* Progress bar */}
          <div className="progress-bar">
            <span className="time-start">0:44 </span>
            <div className="bar">
              <div className="progress"></div>
            </div>
            <span className="time-end">5:13</span>
          </div>
        </figcaption>

        {/* Controls for navigation */}
        <div className="controls">
          {/* Previous button */}
          <button
            className="control-btn prev-btn"
            onClick={handlePrev}
            data-tooltip="Prev page"
          >
            <SkipBack size={24} />
          </button>

          {/* Play button */}
          <button
            className="control-btn play-btn"
            onClick={handlePlay}
            data-tooltip="Go to page"
          >
            <Play size={24} />
          </button>

          {/* Next button */}
          <button
            className="control-btn next-btn"
            onClick={handleNext}
            data-tooltip="Next page"
          >
            <SkipForward size={24} />
          </button>
        </div>
      </article>
    </section>
  );
};

export default MusicCard;
