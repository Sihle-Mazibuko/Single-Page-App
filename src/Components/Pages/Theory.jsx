import React, { useState } from "react";
import "./Page Components/Theory.css";
import { Play } from "@phosphor-icons/react";
import MenuFilter from "./Page Components/TheoryMenuFilter";
import essayData from "./Page Components/essays.json";
import blogData from "./Page Components/blogs.json";
import researchData from "./Page Components/research.json";
import TheoryCard from "./Page Components/TheoryCard";
import FullTheoryCard from "./Page Components/FullTheoryCard";

const Theory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTheory, setSelectedTheory] = useState(null);
  const theoryData = [...essayData, ...blogData, ...researchData];

  const filteredData =
    selectedCategory === "All"
      ? theoryData
      : theoryData.filter((item) => item.type === selectedCategory);

  const handleCardClick = (theory) => {
    setSelectedTheory(theory);
  };

  const handleClose = () => {
    setSelectedTheory(null);
  };

  return (
    <section className="theory-page">
      <div className="now-playing-wrapper">
        <h2 className="now-playing">
          <Play size={24} /> Now playing: Theory Content - Sihle Mazibuko
        </h2>
      </div>
      <MenuFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {selectedTheory ? null : (
        <article className="theory-content">
          {filteredData.map((item, index) => (
            <TheoryCard
              key={index}
              name={item.name}
              summary={item.summary}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </article>
      )}
      {selectedTheory && (
        <FullTheoryCard
          title={selectedTheory.name}
          content={selectedTheory.content}
          onClose={handleClose}
        />
      )}
    </section>
  );
};

export default Theory;
