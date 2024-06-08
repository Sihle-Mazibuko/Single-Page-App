import React from "react";
import "./PageFilter.css";

// Functional component to display the theory menu bar
const MenuBar = ({ selectedCategory, onSelectCategory }) => {
  return (
    // Navigation element for the theory filter menu
    <nav className="menu-filter">
      {/* Map over the categories and create a button for each */}
      {["All", "Blogs", "Research"].map((category) => (
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

export default MenuBar;
