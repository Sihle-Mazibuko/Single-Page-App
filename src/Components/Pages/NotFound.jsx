import React from "react";
import { Link } from "react-router-dom";
import "./Page Components/NotFound.css";

// Functional component for the 404 Not Found page
const NotFound = () => {
  return (
    // Container for the 404 Not Found content
    <section className="not-found-container">
      {/* Content of the 404 Not Found page */}
      <article className="not-found-content">
        {/* Title for the 404 Not Found page */}
        <h2 className="not-found-title">404 - Not Found</h2>
        {/* Text message for the 404 Not Found page */}
        <p className="not-found-text">
          Oops! There was an error loading the page you are trying to access.
        </p>
        {/* Link to the home page */}
        <Link to="/" className="not-found-link">
          Go to home page
        </Link>
      </article>
    </section>
  );
};

export default NotFound;
