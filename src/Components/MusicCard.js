import React from "react";
import {
  PlayCircle,
  SkipBack,
  SkipForward,
  Palette,
  NotePencil,
  PaintBrush,
  ArticleNyTimes,
} from "@phosphor-icons/react";
import "./MusicCard.css";
import { useNavigate } from "react-router-dom";

const MusicCard = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const pageNames = [
    "Designs & Style Guide",
    "Theory ",
    "Internet Artwork",
    "Essay ",
  ];

  const iconMapping = {
    "Designs & Style Guide": <Palette />,
    "Theory ": <NotePencil />,
    "Internet Artwork": <PaintBrush />,
    "Essay ": <ArticleNyTimes />,
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pageNames.length) % pageNames.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageNames.length);
  };

  const determineNextPage = (currentTitle) => {
    return "/designs";
  };

  const handlePlayCircle = () => {
    const nextPage = determineNextPage(pageNames[currentIndex]);
    navigate(nextPage);
  };

  return (
    <section className="section-container">
      {/* Hero Info */}
      <article className="hero-info">
        <h1 className="site-name">HeartBeat FM</h1>
        <p className="slogan">Where music keeps you going</p>
        <p className="hero-i">
          Take some time to not only learn about music but get recommendations
          to further expand you diverse taste
        </p>
      </article>

      {/* Music Card */}
      <aside className="music-card">
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
          <button
            className="control-btn prev-btn"
            onClick={handlePrev}
            data-tooltip="Prev page"
          >
            <SkipBack size={24} />
          </button>

          <button
            className="control-btn PlayCircle-btn"
            onClick={handlePlayCircle}
            data-tooltip="Go to page"
          >
            <PlayCircle size={30} />
          </button>

          <button
            className="control-btn next-btn"
            onClick={handleNext}
            data-tooltip="Next page"
          >
            <SkipForward size={24} />
          </button>
        </div>
      </aside>
    </section>
  );
};

export default MusicCard;
