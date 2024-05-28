import React, { useState } from "react";
import essayData from "./Page Components/essays.json";
import EssayCard from "./Page Components/EssayCard";
import IndirectFlightsEssay from "./Page Components/IndirectFlights";
import ExamEssay from "./Page Components/ExamEssay";
import "./Page Components/Essay.css";

const essays = {
  "Indirect Flights essay": <IndirectFlightsEssay />,
  "Exam essay": <ExamEssay />,
};

const Essay = () => {
  const [selectedEssay, setSelectedEssay] = useState(null);

  const handleCardClick = (essayName) => {
    setSelectedEssay(essays[essayName]);
  };

  const handleBackClick = () => {
    setSelectedEssay(null);
  };

  return (
    <main>
      {selectedEssay ? (
        <article>
          <button onClick={handleBackClick} className="close-button">
            Back
          </button>
          {selectedEssay}
        </article>
      ) : (
        <section>
          <header>
            <h1>The Essays</h1>
          </header>
          <div className="essay-card-container">
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
