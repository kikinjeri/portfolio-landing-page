export default function TechScroller() {
  const tech = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "CSS / MUI",
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
