import React from "react";
import "./DesignMenuFilter.css";

// Functional component to display the design filter menu
const DesignMenuFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    // Navigation element for the design filter menu
    <nav className="design-filter-menu">
      {/* Map over the categories and create a button for each */}
      {["All", "Theme", "Wireframes", "StyleGuide"].map((category) => (
        <button
          key={category} // Unique key for each button
          className={`filter-btn ${
            selectedCategory === category ? "active" : "" // Add 'active' class if the category is selected
          }`}
          onClick={() => onSelectCategory(category)} // Call the onSelectCategory function with the category name on button click
        >
          {category.toUpperCase()}{" "}
          {/* Display the category name in uppercase */}
        </button>
      ))}
    </nav>
  );
};

export default DesignMenuFilter;
