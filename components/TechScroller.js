import "./TechScroller.css";

export default function TechScroller() {
  const tech = ["React", "Next.js", "Node.js", "Express", "MongoDB"];

  return (
    <div className="tech-scroller fade-up">
      <div className="scroll-inner">
        {tech.map((t) => <span key={t}>{t}</span>)}
        {tech.map((t) => <span key={t + "-2"}>{t}</span>)}
      </div>
    </div>
  );
}
