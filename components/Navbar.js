"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="nav fade-up">
      <div className="nav-links">
        <a href="#hero" className="nav-link">
          Home
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>

      <button
        className="theme-toggle-btn"
        onClick={() => setDark((prev) => !prev)}
      >
        <span>{dark ? "●" : "○"}</span>
        <span>{dark ? "Dark" : "Light"}</span>
      </button>
    </nav>
  );
}
