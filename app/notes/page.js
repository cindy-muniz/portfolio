"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { notes } from "./notesData";

export default function NotesPage() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark(true);
  }, []);
  const toggleDark = () => {
    setDark(d => { localStorage.setItem("theme", !d ? "dark" : "light"); return !d; });
  };
  const d = dark;

  const css = `
  .nts {
    --cream:#F1EFE8; --blush:#FBEAF0; --lav:#EEEDFE; --peri:#E6F1FB; --white:#fff;
    --rose:#993556; --indigo:#534AB7; --blue:#185FA5;
    --blueTagBg:#B5D4F4; --blueTagTx:#0C447C;
    --ink:#2C2C2A; --muted:#5F5E5A; --pinkLine:#F4C0D1;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
    background:var(--cream); color:var(--ink); font-family:var(--sans);
    line-height:1.6; min-height:100vh; transition:background .25s, color .25s;
  }
  .nts.dark {
    --cream:#1a1625; --blush:#2e1f2a; --white:#241e33;
    --rose:#f4a0b0; --indigo:#c9a0f4; --blue:#a0b4f4;
    --blueTagBg:#1e2a50; --blueTagTx:#a0b4f4;
    --ink:#f0eaf8; --muted:#9b92b3; --pinkLine:#3d2a40;
  }
  .nts * { box-sizing:border-box; }
  .nts a { color:inherit; text-decoration:none; }
  .nts .wrap { max-width:720px; margin:0 auto; padding:0 22px; }
  .nts .nav {
    position:sticky; top:0; z-index:20; background:rgba(241,239,232,0.86);
    backdrop-filter:blur(8px); border-bottom:1px solid var(--pinkLine); transition:background .25s, border-color .25s;
  }
  .nts.dark .nav { background:rgba(26,22,37,0.88); }
  .nts .nav-in { display:flex; align-items:center; justify-content:space-between; height:60px;
                 max-width:720px; margin:0 auto; padding:0 22px; }
  .nts .brand { font-size:20px; font-weight:600; color:var(--rose); letter-spacing:-0.01em; }
  .nts .brand .star { color:var(--indigo); }
  .nts .nav-right { display:flex; align-items:center; gap:14px; }
  .nts .back { font-size:14px; color:var(--muted); display:flex; align-items:center; gap:6px; }
  .nts .back:hover { color:var(--rose); }
  .nts .dm-btn { background:none; border:1px solid var(--pinkLine); border-radius:8px;
    width:32px; height:32px; display:flex; align-items:center; justify-content:center;
    cursor:pointer; color:var(--muted); transition:background .15s, color .15s; }
  .nts .dm-btn:hover { background:var(--blush); color:var(--rose); }
  .nts .head { padding:42px 0 6px; }
  .nts .eyebrow { font-family:var(--mono); font-size:12px; color:var(--rose); letter-spacing:0.05em; margin:0 0 10px; }
  .nts h1 { font-size:28px; font-weight:600; letter-spacing:-0.01em; margin:0 0 8px; }
  .nts .sub { font-size:15px; color:var(--muted); margin:0; }
  .nts .list { padding:24px 0 60px; display:flex; flex-direction:column; gap:16px; }
  .nts .note { background:var(--white); border:1px solid var(--pinkLine); border-radius:16px;
               padding:20px 22px; transition:background .25s, border-color .25s; }
  .nts .date { font-family:var(--mono); font-size:11.5px; color:var(--blue);
               text-transform:uppercase; letter-spacing:0.05em; margin:0 0 8px; }
  .nts .note h2 { font-size:17px; font-weight:600; margin:0 0 9px; color:var(--ink); }
  .nts .note p { font-size:14.5px; color:var(--muted); margin:0 0 13px; }
  .nts:not(.dark) .note p { color:#3a3a37; }
  .nts .tags { display:flex; gap:7px; flex-wrap:wrap; }
  .nts .tag { font-size:11.5px; border-radius:999px; padding:2px 11px;
              background:var(--blueTagBg); color:var(--blueTagTx); }
  @media (max-width:480px){ .nts h1 { font-size:23px; } }
  `;

  return (
    <div className={`nts${d ? " dark" : ""}`}>
      <style>{css}</style>
      <nav className="nav">
        <div className="nav-in">
          <Link href="/" className="brand">Cindy Muniz <span className="star">✦</span></Link>
          <div className="nav-right">
            <Link href="/" className="back"><ArrowLeft size={15} /> Back home</Link>
            <button className="dm-btn" onClick={toggleDark} aria-label="Toggle dark mode">
              {d ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </nav>
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">// build log</p>
          <h1>Build log</h1>
          <p className="sub">Short notes on what I'm building and learning as I go.</p>
        </header>
        <div className="list">
          {notes.map((note, i) => (
            <article className="note" key={i}>
              <p className="date">{note.date}</p>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              {note.tags && note.tags.length > 0 && (
                <div className="tags">
                  {note.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
