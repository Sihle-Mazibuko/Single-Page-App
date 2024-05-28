import React from "react";
import "./TheoryMenu.css";

const MenuBar = ({ selectedCategory, onSelectCategory }) => {
  return (
    <nav className="theory-filter-menu">
      {["All", "Blogs", "Research"].map((category) => (
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

export default MenuBar;
