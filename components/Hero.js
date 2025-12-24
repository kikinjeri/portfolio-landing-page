import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section hero-section" id="hero">
      <div className="section-inner">
        <div className="hero-grid fade-up">

          {/* Left: text */}
          <div className="hero-body">
            <div className="hero-kicker">Portfolio</div>

            <h1 className="heading-hero">
              Mwihaki Githii
              <br />
              <span className="accent">Full Stack Developer</span>
            </h1>

            <p className="text-subtitle">
              I design and develop modern, responsive, and interactive web applications with a
              focus on accessibility, usability, and polish.
            </p>

            <div className="hero-meta">
              <div className="hero-meta-item">
                Based in Ottawa · Open to remote, hybrid and freelance roles.
              </div>
              <div className="hero-meta-item">
                React · Next.js · Node · JavaScript · CSS
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: circular avatar only */}
          <div className="hero-visual fade-up">
            <div className="hero-avatar">
              <Image
                src="/two.jpg"
                width={300}
                height={300}
                alt="Mwihaki Githii"
                className="hero-photo"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
