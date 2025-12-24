export default function TechScroller() {
  const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "CSS / Tailwind",
    "Testing",
  ];

  const loop = [...tech, ...tech];

  return (
    <div className="tech-strip">
      <div className="tech-strip-inner fade-up">
        <div className="tech-marquee">
          {loop.map((item, idx) => (
            <span className="tech-item" key={idx}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
