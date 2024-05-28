import React, { useState } from "react";
import "./Page Components/Design.css";
import DesignMenuFilter from "./Page Components/DesignMenuFilter";
import themeData from "./Page Components/themes.json";
import wireframeData from "./Page Components/wireframes.json";
import styleGuideData from "./Page Components/styleGuides.json";
import DesignCard from "./Page Components/DesignCard";
import FullDesignCard from "./Page Components/FullDesignCard";

// Functional component for the Design page
const Design = () => {
  // State variables to manage selected category and design
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Combine data from different sources
  const designData = [...themeData, ...wireframeData, ...styleGuideData];

  // Filter data based on selected category
  const filteredData =
    selectedCategory === "All"
      ? designData
      : designData.filter((item) => item.type === selectedCategory);

  // Handler for clicking on a design card
  const handleCardClick = (design) => {
    setSelectedDesign(design);
  };

  // Handler for closing the full design card
  const handleClose = () => {
    setSelectedDesign(null);
  };

  return (
    // Section for the design page
    <section className="design-page">
      {/* Component for filtering design categories */}
      <DesignMenuFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Conditionally render design content or full design card */}
      {selectedDesign ? null : (
        <article className="design-content">
          {/* Map over filtered data and render design cards */}
          {filteredData.map((item, index) => (
            <DesignCard
              key={index}
              name={item.name}
              summary={item.summary}
              image={item.image}
              onClick={() => handleCardClick(item)}
              points={item.points}
            />
          ))}
        </article>
      )}

      {/* Render full design card if a design is selected */}
      {selectedDesign && (
        <FullDesignCard
          title={selectedDesign.name}
          image={selectedDesign.image}
          content={selectedDesign.content}
          onClose={handleClose}
          points={selectedDesign.points}
        />
      )}
    </section>
  );
};

export default Design;
