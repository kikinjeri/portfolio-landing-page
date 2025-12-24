export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} Mwihaki Githii</span>
        <span>Full Stack Developer</span>
      </div>
    </footer>
  );
}
