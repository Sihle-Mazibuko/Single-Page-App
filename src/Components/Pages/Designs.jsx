import React, { useState } from "react";
import "./Page Components/Design.css";
import DesignMenuFilter from "./Page Components/DesignMenuFilter";
import themeData from "./Page Components/themes.json";
import wireframeData from "./Page Components/wireframes.json";
import styleGuideData from "./Page Components/styleGuides.json";
import DesignCard from "./Page Components/DesignCard";
import FullDesignCard from "./Page Components/FullDesignCard";
import { Play } from "@phosphor-icons/react";

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const designData = [...themeData, ...wireframeData, ...styleGuideData];

  const filteredData =
    selectedCategory === "All"
      ? designData
      : designData.filter((item) => item.type === selectedCategory);

  const handleCardClick = (design) => {
    setSelectedDesign(design);
  };

  const handleClose = () => {
    setSelectedDesign(null);
  };

  return (
    <section className="design-page">
      <div className="now-playing-wrapper">
        <h2 className="now-playing">
          <Play size={24} /> Now playing: Design Content
        </h2>
      </div>
      <DesignMenuFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <article className="design-content">
        {filteredData.map((item, index) => (
          <DesignCard
            key={index}
            name={item.name}
            summary={item.summary}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </article>
      {selectedDesign && (
        <FullDesignCard
          title={selectedDesign.name}
          content={selectedDesign.content}
          onClose={handleClose}
        />
      )}
    </section>
  );
};

export default Design;
