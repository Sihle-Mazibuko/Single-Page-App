import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#designs ">Designs</a>
        </li>
        <li>
          <a href="#essays">Essays</a>
        </li>
        <li>
          <a href="#art">Art</a>
        </li>

        <li>
          <a href="#api">API</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
