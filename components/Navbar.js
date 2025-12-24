"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
  }, [light]);

  return (
    <nav className="nav fade-up">
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <button
        className="theme-toggle"
        onClick={() => setLight(!light)}
      >
        {light ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}


