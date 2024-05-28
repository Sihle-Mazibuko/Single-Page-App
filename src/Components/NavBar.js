import React from "react";
import "./NavBar.css"; // Importing CSS styles
import { useNavigate } from "react-router-dom"; // Importing hook for navigation

// Functional component for the navigation bar
const NavBar = () => {
  const navigate = useNavigate(); // Hook for navigating between pages

  // Functions to handle clicks on navigation buttons and navigate to respective pages
  const designClick = () => {
    navigate("/designs"); // Navigate to the Designs page
  };
  const theoryClick = () => {
    navigate("/theory"); // Navigate to the Theory page
  };
  const artClick = () => {
    navigate("/art"); // Navigate to the Art page
  };
  const apiClick = () => {
    navigate("/essay"); // Navigate to the Essays page
  };
  const homeClick = () => {
    navigate("/"); // Navigate to the Home page
  };

  return (
    // Navigation bar container
    <nav className="navbar">
      {/* List of navigation links */}
      <ul className="nav-links">
        {/* Home button */}
        <li>
          <button onClick={homeClick}>Home</button>
        </li>
        {/* Designs button */}
        <li>
          <button onClick={designClick}>Designs</button>
        </li>
        {/* Theory button */}
        <li>
          <button onClick={theoryClick}>Theory</button>
        </li>
        {/* Art button */}
        <li>
          <button onClick={artClick}>Art</button>
        </li>
        {/* Essays button */}
        <li>
          <button onClick={apiClick}>Essays</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
