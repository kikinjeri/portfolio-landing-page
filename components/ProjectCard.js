import "./ProjectCard.css";

export default function ProjectCard({ title, desc }) {
  return (
    <div className="card project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
