import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "../logo.png";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set title, description, and image from props
  }, []);

  return (
    <header>
      <img className="logo" src={logo} />
      <div className="container">
        <nav>
          <a href="#" className={isMobile ? "active" : ""}>Home</a>
          <a href="#" className={isMobile ? "active" : ""}>About</a>
          <a href="#" className={isMobile ? "active" : ""}>Contact</a>
        </nav>
      </div>
    </header>
  );
};
