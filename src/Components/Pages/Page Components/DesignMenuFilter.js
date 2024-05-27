import React from "react";
import "./DesignMenuFilter.css";

const DesignMenuFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <nav className="design-filter-menu">
      {["All", "Theme", "Wireframes", "StyleGuide"].map((category) => (
        <button
          key={category}
          className={`filter-btn ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default DesignMenuFilter;
