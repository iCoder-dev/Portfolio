import { useEffect } from "react";
import React from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = [
    {
      title: "Python Level 1",
      issuer: "CodeHS",
      year: "May 2025",
      desc: "Passed the CodeHS Python Level 1 Certification exam, proving mastery of foundational programming skills.",
      img: "/cert-python.jpg",
      verify: "https://codehs.com/certifications/exam/qz28U",
    },
    {
      title: "Advanced React",
      issuer: "Meta — Coursera",
      year: "May 2025",
      desc: "Completed an advanced React course authorized by Meta, covering hooks, performance, and modern patterns.",
      img: "/c0be26e4-1.png",
      verify: "https://coursera.org/verify/P5LXSSBL80F6",
    },
    {
      title: "HTML and CSS in Depth",
      issuer: "Meta — Coursera",
      year: "Feb 2025",
      desc: "Mastered advanced HTML and CSS techniques including layouts, animations, and responsive design.",
      img: "/212b7a64-1.png",
      verify: "https://coursera.org/verify/V6B8SVN32NN4",
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta — Coursera",
      year: "Jan 2025",
      desc: "Completed a comprehensive JavaScript programming course covering core concepts and modern JS features.",
      img: "/520dbad7-1.png",
      verify: "https://coursera.org/verify/NBWUWN0I5BJ8",
    },
    {
      title: "Version Control",
      issuer: "Meta — Coursera",
      year: "Feb 2025",
      desc: "Learned Git and version control workflows, including branching, merging, and collaborative development.",
      img: "/f7f4db96-1.png",
      verify: "https://coursera.org/verify/NDOU37K2BMDR",
    },
    {
      title: "Summer Internship Program",
      issuer: "Bayyinah",
      year: "Aug 2025",
      desc: "Completed the Bayyinah Summer Internship Program with outstanding completion, finishing 8 hours over a 2-month program. Signed by Nouman Ali Khan, Founder of Bayyinah.",
      img: "/public/bayycert.png",
      verify: null,
    },
  ];

  const extracurriculars = [
    {
      title: "Robotics Club",
      role: "Member",
      period: "2025 — Present",
      desc: "Designing, building, and programming robots for competitions and school projects. Collaborated with a team to solve engineering challenges.",
    },
    {
      title: "National Honor Society",
      role: "Member",
      period: "2026",
      desc: "To create an enthusiasm for scholarship, to stimulate a desire to render service, to promote worthy leadership, and to encourage the development of character",
    }
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
        }
        .nav-logo {
          font-family: var(--font-mono);
          font-size: 13px; color: var(--accent);
          letter-spacing: 2px; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
        }
        .nav-back {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--muted);
          letter-spacing: 2px; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          display: flex; align-items: center; gap: 8px;
          transition: color 0.2s;
        }
        .nav-back:hover { color: var(--accent); }

        /* PAGE HERO */
        .page-hero {
          padding: 160px 48px 80px;
          position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .page-hero-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(79,209,197,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,209,197,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .page-hero-glow {
          position: absolute; top: -100px; right: -100px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(79,209,197,0.05) 0%, transparent 70%);
        }
        .page-tag {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--accent);
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
          animation: fadeUp 0.6s ease both;
        }
        .page-tag::before { content: ''; width: 40px; height: 1px; background: var(--accent); }
        .page-title {
          font-size: clamp(40px, 7vw, 80px);
          font-weight: 800; letter-spacing: -2px;
          line-height: 1.0; margin-bottom: 20px;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .page-title span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,234,242,0.25);
        }
        .page-sub {
          font-family: var(--font-mono);
          font-size: 14px; color: var(--muted);
          max-width: 480px; line-height: 1.7;
          animation: fadeUp 0.6s 0.2s ease both;
          margin-bottom: 36px;
        }

        .download-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px;
          background: var(--accent); color: var(--bg);
          border: none; border-radius: 2px;
          font-family: var(--font-mono); font-size: 13px;
          font-weight: 500; letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s;
          text-decoration: none;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,209,197,0.3);
        }
        .download-btn svg { width: 14px; height: 14px; }

        /* MAIN CONTENT */
        .resume-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 80px;
          align-items: start;
        }

        /* SECTION */
        .resume-section { margin-bottom: 72px; }
        .resume-section:last-child { margin-bottom: 0; }

        .section-label {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--accent);
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 32px;
          display: flex; align-items: center; gap: 16px;
        }
        .section-label::after {
          content: ''; flex: 1;
          height: 1px; background: var(--border);
        }

        /* EDUCATION */
        .edu-card {
          border: 1px solid var(--border);
          padding: 36px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s;
        }
        .edu-card:hover { border-color: rgba(79,209,197,0.3); }
        .edu-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, var(--accent), var(--accent2));
        }

        .edu-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 8px;
          flex-wrap: wrap; gap: 12px;
        }
        .edu-name {
          font-size: 20px; font-weight: 700; color: var(--text);
        }
        .edu-period {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--accent);
          letter-spacing: 1px;
          background: rgba(79,209,197,0.08);
          border: 1px solid rgba(79,209,197,0.15);
          padding: 4px 12px; border-radius: 2px;
        }
        .edu-degree {
          font-family: var(--font-mono);
          font-size: 13px; color: var(--muted);
          margin-bottom: 16px; letter-spacing: 0.5px;
        }
        .edu-detail {
          font-size: 14px; line-height: 1.7; color: var(--muted);
        }
        .edu-detail span { color: var(--text); }

        /* CERTIFICATES */
        .cert-list { display: flex; flex-direction: column; gap: 20px; }

        .cert-card {
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all 0.3s; position: relative;
          display: grid;
          grid-template-columns: 200px 1fr;
        }
        .cert-card:hover {
          border-color: rgba(79,209,197,0.3);
          background: var(--surface);
        }

        .cert-img-wrap {
          overflow: hidden;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          min-height: 130px;
        }
        .cert-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .cert-card:hover .cert-img-wrap img { transform: scale(1.04); }

        .cert-body {
          padding: 24px 28px;
          display: flex; flex-direction: column; justify-content: space-between;
        }

        .cert-top { margin-bottom: 10px; }

        .cert-title {
          font-size: 16px; font-weight: 700;
          color: var(--text); margin-bottom: 4px;
        }
        .cert-meta {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--muted);
          letter-spacing: 1px; margin-bottom: 10px;
        }
        .cert-desc {
          font-size: 13px; line-height: 1.6; color: var(--muted);
        }

        .cert-footer {
          display: flex; align-items: center;
          justify-content: space-between; margin-top: 16px;
          flex-wrap: wrap; gap: 8px;
        }
        .cert-year {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--accent);
          letter-spacing: 1px;
          background: rgba(79,209,197,0.08);
          border: 1px solid rgba(79,209,197,0.15);
          padding: 3px 10px; border-radius: 2px;
        }
        .cert-verify {
          font-family: var(--font-mono);
          font-size: 10px; color: var(--muted);
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; transition: color 0.2s;
        }
        .cert-verify:hover { color: var(--accent); }

        /* EXTRACURRICULARS */
        .extra-list { display: flex; flex-direction: column; gap: 16px; }

        .extra-card {
          border: 1px solid var(--border);
          padding: 28px 32px;
          transition: all 0.3s; position: relative;
        }
        .extra-card:hover {
          border-color: rgba(124,106,245,0.3);
          background: var(--surface);
        }
        .extra-card::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 3px; height: 100%;
          background: var(--accent2);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s;
        }
        .extra-card:hover::after { transform: scaleY(1); }

        .extra-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 6px;
          flex-wrap: wrap; gap: 8px;
        }
        .extra-title {
          font-size: 16px; font-weight: 700; color: var(--text);
        }
        .extra-period {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--muted);
          letter-spacing: 1px;
        }
        .extra-role {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--accent2);
          margin-bottom: 10px; letter-spacing: 0.5px;
        }
        .extra-desc {
          font-size: 13px; line-height: 1.6; color: var(--muted);
        }

        /* SIDEBAR */
        .resume-sidebar { position: sticky; top: 100px; }

        .sidebar-card {
          border: 1px solid var(--border);
          padding: 28px;
          margin-bottom: 16px;
          transition: border-color 0.3s;
        }
        .sidebar-card:hover { border-color: rgba(79,209,197,0.2); }

        .sidebar-title {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--accent);
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 20px;
        }

        .info-row {
          display: flex; justify-content: space-between;
          align-items: center; padding: 10px 0;
          border-bottom: 1px solid var(--border);
          font-size: 13px;
        }
        .info-row:last-child { border-bottom: none; }
        .info-label {
          font-family: var(--font-mono);
          font-size: 11px; color: var(--muted);
          letter-spacing: 1px;
        }
        .info-value { color: var(--text); font-weight: 600; }

        .skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-chip {
          font-family: var(--font-mono);
          font-size: 11px; padding: 5px 12px;
          border: 1px solid var(--border); border-radius: 2px;
          color: var(--muted); transition: all 0.2s; cursor: default;
        }
        .skill-chip:hover {
          border-color: var(--accent); color: var(--accent);
          background: rgba(79,209,197,0.05);
        }

        /* FOOTER */
        footer {
          padding: 28px 48px;
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer-copy {
          font-family: var(--font-mono);
          font-size: 12px; color: var(--muted); letter-spacing: 1px;
        }
        .footer-accent { color: var(--accent); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .resume-body { grid-template-columns: 1fr; gap: 0; padding: 48px 24px; }
          .resume-sidebar { position: static; margin-top: 40px; }
          .page-hero { padding: 120px 24px 60px; }
          nav { padding: 20px 24px; }
          footer { padding: 24px; flex-direction: column; gap: 10px; }
          .cert-card { grid-template-columns: 1fr; }
          .cert-img-wrap { min-height: 180px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="/">FBS</a>
        <a className="nav-back" href="/">← Back to Portfolio</a>
      </nav>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="page-tag">Student Profile</div>
        <h1 className="page-title">
          My <span>Journey</span>
        </h1>
        <p className="page-sub">
          Education, certifications, and activities that have shaped who I am as a developer and student.
        </p>
        <a className="download-btn" href="/resume.pdf" download>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download CV
        </a>
      </div>

      {/* BODY */}
      <div className="resume-body">
        <div>
          {/* EDUCATION */}
          <div className="resume-section">
            <div className="section-label">Education</div>
            <div className="edu-card">
              <div className="edu-header">
                <div className="edu-name">Texas Senior High School</div>
                <div className="edu-period">2024 — 2028</div>
              </div>
              <div className="edu-degree">High School Diploma — in progress</div>
              <div className="edu-detail">
                Currently pursuing my high school diploma with a focus on
                <span> technology, mathematics, and computer science</span>.
                Actively involved in extracurricular activities and independent
                learning projects outside the classroom.
              </div>
            </div>
          </div>

          {/* CERTIFICATES */}
          <div className="resume-section">
            <div className="section-label">Certificates</div>
            <div className="cert-list">
              {certificates.map((c, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-img-wrap">
                    <img src={c.img} alt={c.title} />
                  </div>
                  <div className="cert-body">
                    <div className="cert-top">
                      <div className="cert-title">{c.title}</div>
                      <div className="cert-meta">{c.issuer}</div>
                      <div className="cert-desc">{c.desc}</div>
                    </div>
                    <div className="cert-footer">
                      <span className="cert-year">{c.year}</span>
                      {c.verify && <a className="cert-verify" href={c.verify} target="_blank" rel="noreferrer">Verify ↗</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXTRACURRICULARS */}
          <div className="resume-section">
            <div className="section-label">Extracurriculars</div>
            <div className="extra-list">
              {extracurriculars.map((e, i) => (
                <div key={i} className="extra-card">
                  <div className="extra-header">
                    <div className="extra-title">{e.title}</div>
                    <div className="extra-period">{e.period}</div>
                  </div>
                  <div className="extra-role">{e.role}</div>
                  <div className="extra-desc">{e.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="resume-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-title">Quick Info</div>
            {[
              { label: "Status", value: "Student" },
              { label: "School", value: "Texas Senior High" },
              { label: "Role", value: "Developer" },
              { label: "Location", value: "Texas, US" },
              { label: "Available", value: "For oppurtunities" },
            ].map(({ label, value }) => (
              <div key={label} className="info-row">
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="sidebar-card">
            <div className="sidebar-title">Skills</div>
            <div className="skills-wrap">
              {["JavaScript", "React", "Python", "Node.js", "Git", "HTML/CSS", "Robotics"].map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-card">
            <div className="sidebar-title">Currently</div>
            {[
              { label: "Learning", value: "Full-Stack Dev" },
              { label: "Building", value: "This portfolio, Fork lift robot" },
              { label: "Reading", value: "The pragmatic programmer" },
            ].map(({ label, value }) => (
              <div key={label} className="info-row">
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-copy">© 2026 <span className="footer-accent">Furaat bint Saad</span></div>
        <div className="footer-copy">Student · Developer · Builder</div>
      </footer>
    </>
  );
}
