import React, { useState } from "react";
import "./Page Components/Theory.css";
import { Play } from "@phosphor-icons/react";
import MenuFilter from "./Page Components/TheoryMenuFilter";
import blogData from "./Page Components/blogs.json";
import researchData from "./Page Components/research.json";
import TheoryCard from "./Page Components/TheoryCard";
import FullTheoryCard from "./Page Components/FullTheoryCard";

// Functional component for the Theory page
const Theory = () => {
  // State variables to manage selected category and theory
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTheory, setSelectedTheory] = useState(null);

  // Combine data from different sources
  const theoryData = [...blogData, ...researchData];

  // Filter data based on selected category
  const filteredData =
    selectedCategory === "All"
      ? theoryData
      : theoryData.filter((item) => item.type === selectedCategory);

  // Handler for clicking on a theory card
  const handleCardClick = (theory) => {
    setSelectedTheory(theory); // Set the selected theory
  };

  // Handler for closing the full theory card
  const handleClose = () => {
    setSelectedTheory(null); // Clear the selected theory
  };

  return (
    // Section for the theory page
    <section className="theory-page">
      {/* Display currently playing theory content */}
      <div className="now-playing-wrapper">
        <h2 className="now-playing">
          <Play size={24} /> Now playing: Designing The WebApp - Sihle Mazibuko
        </h2>
      </div>

      {/* Component for filtering theory categories */}
      <MenuFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Conditionally render theory content or full theory card */}
      {selectedTheory ? null : (
        <article className="theory-content">
          {/* Map over filtered data and render theory cards */}
          {filteredData.map((item, index) => (
            <TheoryCard
              key={index}
              name={item.name}
              image={item.image}
              author={item.author}
              link={item.link}
              content={item.content}
              onClick={() => handleCardClick(item)}
              year={item.year}
            />
          ))}
        </article>
      )}

      {/* Render full theory card if a theory is selected */}
      {selectedTheory && (
        <FullTheoryCard
          title={selectedTheory.name}
          author={selectedTheory.author}
          link={selectedTheory.link}
          cite={selectedTheory.cite}
          onClose={handleClose}
          content={selectedTheory.content}
          year={selectedTheory.year}
        />
      )}
    </section>
  );
};

export default Theory;
