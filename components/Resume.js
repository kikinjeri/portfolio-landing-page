"use client";

import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Download My Resume</h2>
      <p>You can download a copy of my resume below.</p>

      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}
