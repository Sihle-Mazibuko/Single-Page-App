import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Designs</button>
        </li>
        <li>
          <button>Theory</button>
        </li>
        <li>
          <button>Art</button>
        </li>
        <li>
          <button>API</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
