import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className="fade-up">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid stagger">
          <ProjectCard title="Recipe App" desc="Full stack app with API integration" />
          <ProjectCard title="Portfolio" desc="Modern Next.js landing page" />
          <ProjectCard title="Dev Tools" desc="Custom utilities for developers" />
        </div>
      </div>
    </section>
  );
}
