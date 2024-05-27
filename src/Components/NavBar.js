import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const designClick = () => {
    navigate("/designs");
  };
  const theoryClick = () => {
    navigate("/theory");
  };
  const artClick = () => {
    navigate("/art");
  };
  const apiClick = () => {
    navigate("/api");
  };
  const homeClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button onClick={homeClick}>Home</button>
        </li>
        <li>
          <button onClick={designClick}>Designs</button>
        </li>
        <li>
          <button onClick={theoryClick}>Theory</button>
        </li>
        <li>
          <button onClick={artClick}>Art</button>
        </li>
        <li>
          <button onClick={apiClick}>API</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
