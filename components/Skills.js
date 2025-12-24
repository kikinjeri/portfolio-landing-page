export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Git/GitHub",
  ];

  return (
    <section id="skills" className="skills">
      <h2>About & Skills</h2>

      <p>
        I'm a full stack developer who builds clean, modern, user‑focused web
        applications. I enjoy creating tools, dashboards, and polished UI
        experiences.
      </p>

      <div className="skill-badges">
        {skills.map((skill) => (
          <div key={skill} className="skill-badge">{skill}</div>
        ))}
      </div>
    </section>
  );
}

