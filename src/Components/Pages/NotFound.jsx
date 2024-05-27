import React from "react";
import { Link } from "react-router-dom";
import "./Page Components/NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-container">
      <article className="not-found-content">
        <h2 className="not-found-title">404 - Not Found</h2>
        <p className="not-found-text">
          Oops! There was an error loading the page you are trying to access.
        </p>
        <Link to="/" className="not-found-link">
          Go to home page
        </Link>
      </article>
    </section>
  );
};

export default NotFound;
