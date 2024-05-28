import React, { useState } from "react";
import essayData from "./Page Components/essays.json";
import EssayCard from "./Page Components/EssayCard";
import IndirectFlightsEssay from "./Page Components/IndirectFlights";
import ExamEssay from "./Page Components/ExamEssay";
import "./Page Components/Essay.css";

// Object mapping essay names to their respective components
const essays = {
  "Indirect Flights essay": <IndirectFlightsEssay />,
  "Exam essay": <ExamEssay />,
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
    <main>
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
          <header>
            <h1>The Essays</h1>
          </header>
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
    </main>
  );
};

export default Essay;
