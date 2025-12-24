"use client";

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="fade-up">
      <div className="container contact">
        <h2 className="section-title">Contact</h2>

        <p>Email: <a href="mailto:mwihaki@example.com">mwihaki@example.com</a></p>
        <p>GitHub: <a href="https://github.com/kikinjeri">github.com/kikinjeri</a></p>
        <p>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
      </div>
    </section>
  );
}
