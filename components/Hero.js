"use client";

import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero fade-up">
      <div className="container hero-inner">

        <div className="hero-img-wrapper">
          <Image
            src="/images/two.jpg"
            width={260}
            height={260}
            alt="Mwihaki"
            className="hero-img"
          />
        </div>

        <h1 className="hero-title">Mwihaki Githii</h1>
        <p className="hero-subtitle">Full Stack Developer</p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">Projects</a>
          <a href="#contact" className="secondary-btn">Contact</a>
        </div>

      </div>
    </section>
  );
}
