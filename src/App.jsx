import React from "react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const fullText = "Frontend Developer";
  const cursorRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = ["about", "projects", "contact"];

  const projects = [
    {
      title: "Personal Portfolio",
      desc: "This portfolio website — designed and built from scratch using React and Vite. My first real project and the one you're looking at right now.",
      tags: ["React", "Vite", "CSS"],
      year: "2026",
    },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Git", "C++"
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080a0f;
          --bg2: #0d1017;
          --surface: #111520;
          --border: #1e2535;
          --accent: #4fd1c5;
          --accent2: #7c6af5;
          --text: #e8eaf2;
          --muted: #5a627a;
          --font-display: 'Syne', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-display);
          overflow-x: hidden;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 48px;
          backdrop-filter: blur(16px);
          background: rgba(8,10,15,0.8);
          border-bottom: 1px solid var(--border);
          transition: padding 0.3s;
        }

        .nav-logo {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent);
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links li {
          font-size: 13px;
          font-family: var(--font-mono);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
          cursor: pointer;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links li:hover, .nav-links li.active { color: var(--text); }
        .nav-links li.active::after {
          content: '';
          position: absolute; bottom: -4px; left: 0; right: 0;
          height: 1px; background: var(--accent);
        }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 4px;
        }
        .hamburger span {
          width: 22px; height: 1.5px; background: var(--text);
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none; position: fixed; inset: 0; z-index: 99;
          background: var(--bg);
          flex-direction: column; align-items: center; justify-content: center;
          gap: 40px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu li {
          font-size: 28px; font-weight: 700;
          list-style: none; cursor: pointer;
          color: var(--muted); transition: color 0.2s;
        }
        .mobile-menu li:hover { color: var(--accent); }

        /* HERO */
        #hero {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 0 48px;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute; inset: 0; pointer-events: none;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(79,209,197,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,209,197,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79,209,197,0.06) 0%, transparent 70%);
          top: -100px; right: -100px;
          animation: pulse 6s ease-in-out infinite;
        }
        .hero-glow2 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,106,245,0.06) 0%, transparent 70%);
          bottom: -50px; left: 200px;
          animation: pulse 8s ease-in-out infinite reverse;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }

        .hero-content { position: relative; max-width: 800px; }

        .hero-tag {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--accent);
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
          animation: fadeUp 0.8s ease both;
        }
        .hero-tag::before {
          content: ''; width: 40px; height: 1px; background: var(--accent);
        }

        .hero-name {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -2px;
          margin-bottom: 16px;
          animation: fadeUp 0.8s 0.1s ease both;
        }
        .hero-name .first { color: var(--text); }
        .hero-name .last {
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,234,242,0.3);
        }

        .hero-role {
          font-family: var(--font-mono);
          font-size: clamp(14px, 2vw, 18px);
          color: var(--muted);
          margin-bottom: 40px;
          min-height: 28px;
          animation: fadeUp 0.8s 0.2s ease both;
        }
        .cursor {
          display: inline-block; width: 2px; height: 1.2em;
          background: var(--accent); vertical-align: middle;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .hero-desc {
          font-size: 16px; line-height: 1.8;
          color: var(--muted); max-width: 480px;
          margin-bottom: 48px;
          animation: fadeUp 0.8s 0.3s ease both;
        }

        .hero-cta {
          display: flex; gap: 16px; flex-wrap: wrap;
          animation: fadeUp 0.8s 0.4s ease both;
        }

        .btn-primary {
          padding: 14px 32px;
          background: var(--accent);
          color: var(--bg);
          border: none; border-radius: 2px;
          font-family: var(--font-mono);
          font-size: 13px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          position: relative; overflow: hidden;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,209,197,0.3);
        }

        .btn-secondary {
          padding: 14px 32px;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 2px;
          font-family: var(--font-mono);
          font-size: 13px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .hero-scroll {
          position: absolute; bottom: 40px; left: 48px;
          display: flex; align-items: center; gap: 12px;
          font-family: var(--font-mono); font-size: 11px;
          color: var(--muted); letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeUp 0.8s 0.6s ease both;
        }
        .scroll-line {
          width: 1px; height: 48px; background: var(--border);
          animation: scrollLine 2s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* SECTION BASE */
        section { padding: 120px 48px; }

        .section-label {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--accent);
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 16px;
          display: flex; align-items: center; gap: 16px;
        }
        .section-label::after {
          content: ''; flex: 1; max-width: 60px;
          height: 1px; background: var(--accent);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800; letter-spacing: -1px;
          margin-bottom: 64px;
          line-height: 1.1;
        }

        /* ABOUT */
        #about { background: var(--bg2); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
          max-width: 1100px;
        }

        .about-text p {
          font-size: 16px; line-height: 1.9;
          color: var(--muted); margin-bottom: 20px;
        }
        .about-text p span { color: var(--text); }
        .about-text p em { color: var(--accent); font-style: normal; }

        .skills-title {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--muted);
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 20px; margin-top: 40px;
        }

        .skills-grid {
          display: flex; flex-wrap: wrap; gap: 10px;
        }
        .skill-tag {
          font-family: var(--font-mono);
          font-size: 12px;
          padding: 6px 14px;
          border: 1px solid var(--border);
          border-radius: 2px;
          color: var(--muted);
          transition: all 0.2s;
          cursor: default;
        }
        .skill-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(79,209,197,0.05);
        }

        .about-aside {
          position: sticky; top: 120px;
        }

        .stat-card {
          border: 1px solid var(--border);
          padding: 32px;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: var(--accent); }
        .stat-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 3px; height: 100%;
          background: var(--accent);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s;
        }
        .stat-card:hover::before { transform: scaleY(1); }

        .stat-num {
          font-size: 48px; font-weight: 800;
          color: var(--accent); line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--muted);
          letter-spacing: 2px; text-transform: uppercase;
        }

        /* PROJECTS */
        #projects { background: var(--bg); }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          max-width: 1100px;
        }

        .project-card {
          border: 1px solid var(--border);
          padding: 40px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          background: var(--bg);
        }
        .project-card:hover {
          background: var(--surface);
          border-color: rgba(79,209,197,0.3);
        }
        .project-card::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(79,209,197,0.03) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .project-card:hover::after { opacity: 1; }

        .project-year {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--muted);
          letter-spacing: 2px; margin-bottom: 24px;
        }

        .project-title {
          font-size: 22px; font-weight: 700;
          margin-bottom: 12px; color: var(--text);
          transition: color 0.2s;
        }
        .project-card:hover .project-title { color: var(--accent); }

        .project-desc {
          font-size: 14px; line-height: 1.7;
          color: var(--muted); margin-bottom: 28px;
        }

        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .project-tag {
          font-family: var(--font-mono);
          font-size: 11px; padding: 4px 10px;
          background: rgba(79,209,197,0.06);
          border: 1px solid rgba(79,209,197,0.15);
          color: var(--accent); border-radius: 2px;
        }

        .project-arrow {
          position: absolute; top: 40px; right: 40px;
          font-size: 20px; color: var(--border);
          transition: all 0.3s;
        }
        .project-card:hover .project-arrow {
          color: var(--accent);
          transform: translate(4px, -4px);
        }

        /* CONTACT */
        #contact { background: var(--bg2); }
        .contact-inner {
          max-width: 700px;
        }

        .contact-intro {
          font-size: 16px; line-height: 1.8;
          color: var(--muted); margin-bottom: 56px;
        }
        .contact-intro span { color: var(--text); }

        .contact-form { display: flex; flex-direction: column; gap: 20px; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--muted);
          letter-spacing: 2px; text-transform: uppercase;
        }
        .form-group input,
        .form-group textarea {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 14px 18px;
          color: var(--text);
          font-family: var(--font-display);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
          resize: none;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(79,209,197,0.06);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder { color: var(--muted); opacity: 0.5; }

        .contact-links {
          display: flex; gap: 24px; margin-top: 48px;
          padding-top: 40px; border-top: 1px solid var(--border);
        }
        .contact-link {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--muted);
          letter-spacing: 2px; text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s;
          display: flex; align-items: center; gap: 8px;
        }
        .contact-link:hover { color: var(--accent); }
        .contact-link::after { content: '↗'; font-size: 10px; }

        /* FOOTER */
        footer {
          padding: 32px 48px;
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
          background: var(--bg);
        }
        .footer-copy {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--muted);
          letter-spacing: 1px;
        }
        .footer-accent { color: var(--accent); }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.visible { opacity: 1; transform: translateY(0); }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          section { padding: 80px 24px; }
          #hero { padding: 0 24px; }
          .hero-scroll { left: 24px; }
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-aside { position: static; }
          .projects-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          footer { padding: 24px; flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo" onClick={() => scrollTo("hero")}>FBS</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item}
              className={activeSection === item ? "active" : ""}
              onClick={() => scrollTo(item)}
            >
              {item}
            </li>
          ))}
          <li><a href="/resume" style={{ color: "inherit", textDecoration: "none" }}>Resume</a></li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* MOBILE MENU */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item} onClick={() => scrollTo(item)}>{item}</li>
        ))}
      </ul>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-glow2" />
        </div>
        <div className="hero-content">
          <div className="hero-tag">Open to opportunities</div>
          <h1 className="hero-name">
            <span className="first">Furaat<br /></span>
            <span className="last">bint Saad</span>
          </h1>
          <div className="hero-role">
            {typed}<span className="cursor" />
          </div>
          <p className="hero-desc">
            A high school student learning to build beautiful things for the web.
            Passionate about design, code, and growing every day.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View Work
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
            <a href="/resume" className="btn-secondary" style={{ textDecoration: "none" }}>
              My Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">01 — About</div>
        <div className="section-title">Who I Am</div>
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              Hey — I'm <span>Furaat</span>, a high school student and aspiring
              frontend developer who loves building things for the web.
            </p>
            <p>
              I'm still early in my journey, but I've been learning fast —
              picking up <em>HTML, CSS, JavaScript, Python and React</em>, earning
              certifications, and building real projects along the way.
            </p>
            <p>
              I care about making things that look great and feel right.
              Every project is a chance to learn something new.
            </p>
            <div className="skills-title">Tech Stack</div>
            <div className="skills-grid">
              {skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="about-aside fade-in">
            {[
              { num: "2", label: "Years Learning" },
              { num: "5+", label: "Certificates" },
              { num: "1", label: "Internship" },
            ].map(({ num, label }) => (
              <div key={label} className="stat-card">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">02 — Projects</div>
        <div className="section-title">Selected Work</div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card fade-in">
              <div className="project-arrow">↗</div>
              <div className="project-year">{p.year}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label">03 — Contact</div>
        <div className="section-title">Let's Talk</div>
        <div className="contact-inner">
          <p className="contact-intro">
            Have a <span>project in mind</span>, want to collaborate, or just want to say hi?
            Drop me a message — I read everything.
          </p>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={6} placeholder="Tell me about your project..." />
            </div>
            <button className="btn-primary" style={{ alignSelf: "flex-start" }}>
              Send Message
            </button>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="https://github.com/iCoder-dev" target="_blank" rel="noreferrer">GitHub</a>
            <a className="contact-link" href="https://www.linkedin.com/in/furaat-bint-saad-729397311/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="contact-link" href="mailto:furufuru755@gmail.com">Email</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">
          © 2026 <span className="footer-accent">Furaat bint Saad</span>
        </div>
        <div className="footer-copy">Designed & Built with care</div>
      </footer>

      {/* Intersection observer for fade-in */}
      <FadeInObserver />
    </>
  );
}

function FadeInObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
