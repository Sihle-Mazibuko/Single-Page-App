import React, { useState, useEffect } from "react";
import "./ToTopBtn.css";
import { ArrowLineUp } from "@phosphor-icons/react";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 200 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`to-top-button ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <ArrowLineUp size={24} />
    </button>
  );
};

export default ToTopButton;
