"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, ArrowLeft, Sun, Moon } from "lucide-react";
import { projects } from "../projectsData";

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56v-2.1c-3.34.71-4.04-1.4-4.04-1.4-.55-1.36-1.34-1.72-1.34-1.72-1.09-.72.08-.71.08-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.78 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.29-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.29-.54-1.46.12-3.05 0 0 1.01-.31 3.3 1.21a11.6 11.6 0 0 1 3-.39c1.02 0 2.05.13 3 .39 2.28-1.52 3.29-1.21 3.29-1.21.66 1.59.24 2.76.12 3.05.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.36.81 1.07.81 2.16v3.2c0 .31.21.68.82.56C20.57 21.91 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z" />
  </svg>
);

export default function ProjectPage({ params }) {
  const { slug } = React.use(params);
  const project = projects.find((p) => p.slug === slug);

  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark(true);
  }, []);
  const toggleDark = () => {
    setDark(d => { localStorage.setItem("theme", !d ? "dark" : "light"); return !d; });
  };

  if (!project) return <p style={{ padding: 40 }}>Project not found.</p>;
  const isWip = project.status === "wip";
  const d = dark;

  const css = `
  .pjt {
    --cream:#F1EFE8; --blush:#FBEAF0; --lav:#EEEDFE; --peri:#E6F1FB; --white:#fff;
    --rose:#993556; --indigo:#534AB7; --blue:#185FA5;
    --pinkTagBg:#F4C0D1; --pinkTagTx:#72243E;
    --purpTagBg:#CECBF6; --purpTagTx:#3C3489;
    --blueTagBg:#B5D4F4; --blueTagTx:#0C447C;
    --ink:#2C2C2A; --muted:#5F5E5A; --pinkLine:#F4C0D1;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
    background:var(--cream); color:var(--ink); font-family:var(--sans);
    line-height:1.6; min-height:100vh; transition:background .25s, color .25s;
  }
  .pjt.dark {
    --cream:#1a1625; --blush:#2e1f2a; --lav:#1e2240; --white:#241e33;
    --rose:#f4a0b0; --indigo:#c9a0f4; --blue:#a0b4f4;
    --pinkTagBg:#3d1f2e; --pinkTagTx:#f4a0b0;
    --purpTagBg:#2a2050; --purpTagTx:#c9a0f4;
    --blueTagBg:#1e2a50; --blueTagTx:#a0b4f4;
    --ink:#f0eaf8; --muted:#9b92b3; --pinkLine:#3d2a40;
  }
  .pjt * { box-sizing:border-box; }
  .pjt a { color:inherit; text-decoration:none; }
  .pjt .wrap { max-width:780px; margin:0 auto; padding:0 22px; }
  .pjt .nav {
    position:sticky; top:0; z-index:20; background:rgba(241,239,232,0.86);
    backdrop-filter:blur(8px); border-bottom:1px solid var(--pinkLine); transition:background .25s, border-color .25s;
  }
  .pjt.dark .nav { background:rgba(26,22,37,0.88); }
  .pjt .nav-in { display:flex; align-items:center; justify-content:space-between; height:60px;
                 max-width:780px; margin:0 auto; padding:0 22px; }
  .pjt .brand { font-size:20px; font-weight:600; color:var(--rose); letter-spacing:-0.01em; }
  .pjt .brand .star { color:var(--indigo); }
  .pjt .nav-right { display:flex; align-items:center; gap:14px; }
  .pjt .back { font-size:14px; color:var(--muted); display:flex; align-items:center; gap:6px; }
  .pjt .back:hover { color:var(--rose); }
  .pjt .dm-btn { background:none; border:1px solid var(--pinkLine); border-radius:8px;
    width:32px; height:32px; display:flex; align-items:center; justify-content:center;
    cursor:pointer; color:var(--muted); transition:background .15s, color .15s; }
  .pjt .dm-btn:hover { background:var(--blush); color:var(--rose); }
  .pjt .head { padding:40px 0 8px; }
  .pjt .eyebrow { font-family:var(--mono); font-size:12px; color:var(--muted); letter-spacing:0.03em; margin:0 0 12px; }
  .pjt .badge-live { font-size:11px; font-weight:600; color:#0F6E56; background:#9FE1CB;
                     border-radius:999px; padding:3px 11px; display:inline-flex; align-items:center; gap:6px; }
  .pjt.dark .badge-live { color:#9FE1CB; background:#085041; }
  .pjt .badge-live .dot { width:6px; height:6px; border-radius:50%; background:#0F6E56; }
  .pjt.dark .badge-live .dot { background:#9FE1CB; }
  .pjt .badge-wip { font-size:11px; font-weight:600; color:var(--purpTagTx); background:var(--purpTagBg);
                    border-radius:999px; padding:3px 11px; display:inline-block; }
  .pjt h1 { font-size:28px; line-height:1.25; font-weight:600; letter-spacing:-0.01em; margin:14px 0 10px; }
  .pjt .tagline { font-size:16px; color:var(--muted); margin:0 0 16px; }
  .pjt:not(.dark) .tagline { color:#3a3a37; }
  .pjt .context { font-family:var(--mono); font-size:12.5px; color:var(--muted); margin:0 0 20px; }
  .pjt .actions { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:8px; }
  .pjt .btn { display:inline-flex; align-items:center; gap:7px; font-size:14px; font-weight:500;
              border-radius:12px; padding:9px 15px; transition:background .15s, transform .15s; }
  .pjt .btn-primary { background:var(--rose); color:#fff; }
  .pjt.dark .btn-primary { color:#1a1625; }
  .pjt .btn-primary:hover { transform:translateY(-1px); }
  .pjt .btn-ghost { background:var(--white); border:1px solid var(--pinkLine); color:var(--rose); transition:background .25s, border-color .25s; }
  .pjt .btn-ghost:hover { background:var(--blush); }
  .pjt .soon { font-size:13px; color:var(--muted); font-style:italic; }
  .pjt .shot { margin:26px 0 6px; border-radius:16px; overflow:hidden;
               border:1px solid var(--pinkLine); background:var(--white); transition:border-color .25s; }
  .pjt .shot img { width:100%; display:block; }
  .pjt section { padding:28px 0 4px; }
  .pjt h2 { font-family:var(--mono); font-size:13px; color:var(--rose); letter-spacing:0.04em; margin:0 0 14px; }
  .pjt p.body { font-size:15.5px; color:var(--muted); margin:0; }
  .pjt:not(.dark) p.body { color:#3a3a37; }
  .pjt ul { list-style:none; margin:0; padding:0; }
  .pjt li { font-size:15px; color:var(--muted); padding-left:22px; position:relative; margin-bottom:12px; }
  .pjt:not(.dark) li { color:#3a3a37; }
  .pjt li::before { content:""; position:absolute; left:2px; top:9px; width:7px; height:7px;
                    border-radius:50%; background:var(--rose); }
  .pjt .tags { display:flex; gap:8px; flex-wrap:wrap; }
  .pjt .tag { font-size:12.5px; border-radius:999px; padding:4px 12px;
              background:var(--blueTagBg); color:var(--blueTagTx); }
  .pjt .foot { margin-top:36px; padding:30px 0 50px; border-top:1px solid var(--pinkLine); transition:border-color .25s; }
  .pjt .foot a { font-size:14px; color:var(--rose); display:inline-flex; align-items:center; gap:7px; }
  .pjt .foot a:hover { text-decoration:underline; }
  @media (max-width:480px){ .pjt h1 { font-size:23px; } }
  `;

  return (
    <div className={`pjt${d ? " dark" : ""}`}>
      <style>{css}</style>
      <nav className="nav">
        <div className="nav-in">
          <Link href="/" className="brand">Cindy Muniz <span className="star">✦</span></Link>
          <div className="nav-right">
            <Link href="/#projects" className="back"><ArrowLeft size={15} /> Back to projects</Link>
            <button className="dm-btn" onClick={toggleDark} aria-label="Toggle dark mode">
              {d ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </nav>
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{project.timeframe}</p>
          {isWip ? <span className="badge-wip">{project.statusLabel}</span>
            : <span className="badge-live"><span className="dot" /> {project.statusLabel}</span>}
          <h1>{project.title}</h1>
          <p className="tagline">{project.tagline}</p>
          <p className="context">{project.context}</p>
          <div className="actions">
            {project.liveUrl && (
              <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} /> Live demo
              </a>
            )}
            {project.codeUrl && (
              <a className="btn btn-ghost" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={15} /> View code
              </a>
            )}
            {!project.liveUrl && !project.codeUrl && (
              <span className="soon">Code coming soon — building in the open.</span>
            )}
          </div>
        </header>
        {project.image && (
          <div className="shot"><img src={project.image} alt={project.imageAlt} /></div>
        )}
        <section>
          <h2>// overview</h2>
          <p className="body">{project.overview}</p>
        </section>
        <section>
          <h2>{isWip ? "// what I'm building" : "// what I built"}</h2>
          <ul>{project.contributions.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </section>
        <section>
          <h2>// tech stack</h2>
          <div className="tags">{project.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </section>
        <section>
          <h2>{isWip ? "// what I'm focused on" : "// what I learned"}</h2>
          <ul>{project.learnings.map((l, i) => <li key={i}>{l}</li>)}</ul>
        </section>
        <div className="foot">
          <Link href="/#projects"><ArrowLeft size={15} /> Back to all projects</Link>
        </div>
      </div>
    </div>
  );
}
