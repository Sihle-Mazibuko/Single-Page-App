import React, { useState } from "react";
import essayData from "./Page Components/essays.json";
import EssayCard from "./Page Components/EssayCard";
import IndirectFlightsEssay from "./Page Components/IndirectFlights";
import NetArt from "./Page Components/NetArtTheory";
import "./Page Components/Essay.css";
import { Play } from "@phosphor-icons/react";

// Object mapping essay names to their respective components
const essays = {
  "Indirect Flights": <IndirectFlightsEssay />,
  "Music and Net Art": <NetArt />,
};

// Functional component for the Essay page
const Essay = () => {
  // State variable to manage the selected essay
  const [selectedEssay, setSelectedEssay] = useState(null);

  // Handler for clicking on an essay card
  const handleCardClick = (essayName) => {
    setSelectedEssay(essays[essayName]); // Set the selected essay based on its name
  };

  // Handler for clicking the back button
  const handleBackClick = () => {
    setSelectedEssay(null); // Clear the selected essay to return to the essay list
  };

  return (
    <section>
      <div className="now-playing-wrapper">
        <h2 className="now-playing">
          <Play size={24} /> Now playing: Essays Relating to The WebApp - Sihle
          Mazibuko
        </h2>
      </div>
      {/* Render the selected essay or the list of essays */}
      {selectedEssay ? (
        // If an essay is selected, display it along with a back button
        <article>
          <button onClick={handleBackClick} className="close-button">
            Back
          </button>
          {selectedEssay}
        </article>
      ) : (
        // If no essay is selected, display the list of essays
        <section>
          <header></header>
          {/* Container for essay cards */}
          <div className="essay-card-container">
            {/* Map over essay data and render essay cards */}
            {essayData.map((essay) => (
              <EssayCard
                key={essay.name}
                name={essay.name}
                author={essay.author}
                image={essay.image}
                onClick={() => handleCardClick(essay.name)}
              />
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Essay;
