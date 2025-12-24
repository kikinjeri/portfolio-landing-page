const projects = [
  {
    name: "JSON README Generator",
    description:
      "A developer tool that converts structured JSON into a polished, professional README. Built to automate documentation and enforce consistency across projects.",
    stack: ["Node.js", "CLI", "Markdown"],
    link: "https://github.com/kikinjeri/json-readme-generator",
  },
  {
    name: "Finance Dashboard",
    description:
      "A responsive financial analytics dashboard featuring charts, transactions, and category insights. Designed with a clean UI and real‑time data visualization.",
    stack: ["React", "Next.js", "Charts.js"],
    link: "https://github.com/kikinjeri/Finance-dashboard",
  },
  {
    name: "Recipe App",
    description:
      "A full‑stack recipe manager with search, filtering, and detailed recipe views. Built with clean UI components and modular architecture.",
    stack: ["Next.js", "API Routes", "CSS Modules"],
    link: "https://github.com/kikinjeri/recipe-app",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="projects-header fade-up">
          <div>
            <div className="text-eyebrow">Selected work</div>
            <h2 className="heading-section">Projects</h2>
          </div>
          <p className="text-body">
            A few recent builds that highlight my approach to clean interfaces
            and reliable architecture.
          </p>
        </div>

        <div className="projects-grid fade-up">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-meta">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
