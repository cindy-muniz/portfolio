"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Sun, Moon, ChevronLeft, ChevronRight } from "lucide-react";
import { places } from "./travelData";
import { countries, project, MAP_W, MAP_H } from "./europeMap";

const placesByCountry = places.reduce((m, p) => ((m[p.country] ||= []).push(p), m), {});

export default function TravelsPage() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark(true);
  }, []);
  const toggleDark = () => {
    setDark(d => { localStorage.setItem("theme", !d ? "dark" : "light"); return !d; });
  };
  const d = dark;

  const [spot, setSpot] = useState(places[0]);
  const [photoIdx, setPhotoIdx] = useState(0);
  const strip = useRef(null);
  const selectSpot = (p) => { if (p !== spot) { setSpot(p); setPhotoIdx(0); } };
  const slide = (dir) => strip.current.scrollBy({ left: dir * strip.current.clientWidth, behavior: "smooth" });

  const css = `
  .trv {
    --cream:#F1EFE8; --blush:#FBEAF0; --lav:#EEEDFE; --peri:#E6F1FB; --white:#fff;
    --rose:#993556; --indigo:#534AB7; --blue:#185FA5;
    --pinkTagBg:#F4C0D1; --pinkTagTx:#72243E;
    --purpTagBg:#CECBF6; --purpTagTx:#3C3489;
    --ink:#2C2C2A; --muted:#5F5E5A;
    --pinkLine:#F4C0D1; --blueLine:#B5D4F4;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
    background:var(--cream); color:var(--ink); font-family:var(--sans);
    line-height:1.6; min-height:100vh; transition:background .25s, color .25s;
  }
  .trv.dark {
    --cream:#1a1625; --blush:#2e1f2a; --lav:#1e2240; --peri:#1e2240; --white:#241e33;
    --rose:#f4a0b0; --indigo:#c9a0f4; --blue:#a0b4f4;
    --pinkTagBg:#3d1f2e; --pinkTagTx:#f4a0b0;
    --purpTagBg:#2a2050; --purpTagTx:#c9a0f4;
    --ink:#f0eaf8; --muted:#9b92b3;
    --pinkLine:#3d2a40; --blueLine:#2a3260;
  }
  .trv * { box-sizing:border-box; }
  .trv a { color:inherit; text-decoration:none; }
  .trv .wrap { max-width:1060px; margin:0 auto; padding:0 22px; }
  .trv .nav {
    position:sticky; top:0; z-index:20; background:rgba(241,239,232,0.86);
    backdrop-filter:blur(8px); border-bottom:1px solid var(--pinkLine); transition:background .25s, border-color .25s;
  }
  .trv.dark .nav { background:rgba(26,22,37,0.88); }
  .trv .nav-in { display:flex; align-items:center; justify-content:space-between; height:60px;
                 max-width:1060px; margin:0 auto; padding:0 22px; }
  .trv .brand { font-size:20px; font-weight:600; color:var(--rose); letter-spacing:-0.01em; white-space:nowrap; }
  .trv .brand .star { color:var(--indigo); }
  .trv .nav-right { display:flex; align-items:center; gap:14px; }
  .trv .back { font-size:14px; color:var(--muted); display:flex; align-items:center; gap:6px; }
  .trv .back:hover { color:var(--rose); }
  .trv .dm-btn { background:none; border:1px solid var(--pinkLine); border-radius:8px;
    width:32px; height:32px; display:flex; align-items:center; justify-content:center;
    cursor:pointer; color:var(--muted); transition:background .15s, color .15s; }
  .trv .dm-btn:hover { background:var(--blush); color:var(--rose); }

  .trv .head { padding:42px 0 22px; }
  .trv .eyebrow { font-family:var(--mono); font-size:12px; color:var(--rose); letter-spacing:0.05em; margin:0 0 10px; }
  .trv h1 { font-size:28px; font-weight:600; letter-spacing:-0.01em; margin:0 0 8px; }
  .trv .stat { font-family:var(--mono); font-size:12px; color:var(--rose); letter-spacing:0.04em; margin:0 0 8px; }
  .trv .sub { font-size:15px; color:var(--muted); margin:0; max-width:620px; }
  .trv:not(.dark) .sub { color:#3a3a37; }
  @media (max-width:480px){ .trv h1 { font-size:23px; } }

  .trv .card { background:var(--white); border:1px solid var(--pinkLine); border-radius:16px; transition:background .25s, border-color .25s; }
  .trv .tag { font-size:11.5px; border-radius:999px; padding:2px 10px; }
  .trv .t-pink { background:var(--pinkTagBg); color:var(--pinkTagTx); }
  .trv .t-purp { background:var(--purpTagBg); color:var(--purpTagTx); }

  .tv { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,1fr); gap:18px; align-items:start; padding-bottom:60px; }
  @media (max-width:780px){ .tv { grid-template-columns:1fr; } }
  .tv-map { padding:0; overflow:hidden; background:var(--peri); }
  .tv-map svg { width:100%; height:auto; display:block; }
  .tv-land { fill:var(--white); stroke:var(--blueLine); stroke-width:0.7; transition:fill .25s; }
  .tv-land.v { fill:var(--pinkTagBg); stroke:var(--white); stroke-width:1; }
  .tv-pin { cursor:pointer; }
  .tv-pin circle { fill:var(--rose); stroke:var(--white); stroke-width:1.5; transition:r .15s; }
  .tv-pin .halo { fill:var(--rose); opacity:0.22; stroke:none; }
  .tv-pin.home circle { fill:var(--indigo); }
  .tv-side { display:flex; flex-direction:column; gap:14px; }
  .tv-card { padding:16px 18px; }
  .tv-card .c { font-family:var(--mono); font-size:11px; color:var(--rose); letter-spacing:0.05em;
                text-transform:uppercase; margin:0 0 3px; }
  .tv-card .n { font-size:17px; font-weight:600; margin:0; }
  .tv-card .note { font-size:13.5px; color:var(--muted); margin:4px 0 0; }
  .tv-photos { position:relative; margin-top:12px; }
  .tv-strip { display:flex; overflow-x:auto; scroll-snap-type:x mandatory; border-radius:10px;
              background:var(--lav); scrollbar-width:none; }
  .tv-strip::-webkit-scrollbar { display:none; }
  .tv-strip img { flex:0 0 100%; width:100%; height:320px; object-fit:contain; scroll-snap-align:start; display:block; }
  .tv-arr { position:absolute; top:50%; transform:translateY(-50%); width:30px; height:30px; border-radius:50%;
            border:none; background:rgba(255,255,255,0.88); color:var(--rose); cursor:pointer;
            display:flex; align-items:center; justify-content:center; }
  .trv.dark .tv-arr { background:rgba(36,30,51,0.88); }
  .tv-arr.l { left:8px; } .tv-arr.r { right:8px; }
  .tv-count { position:absolute; bottom:8px; right:10px; font-family:var(--mono); font-size:11px;
              background:rgba(0,0,0,0.5); color:#fff; border-radius:999px; padding:1px 8px; }
  .tv-list { display:flex; flex-direction:column; gap:10px; }
  .tv-row { display:flex; gap:10px; align-items:baseline; }
  .tv-row .label { font-family:var(--mono); font-size:11.5px; color:var(--muted); min-width:104px; }
  .tv-row .chips { display:flex; gap:7px; flex-wrap:wrap; }
  .tv-chip { border:none; font-family:inherit; cursor:pointer; transition:background .15s, color .15s; }
  .tv-chip.on { background:var(--rose); color:var(--white); }
  .tv-chip.on.home { background:var(--indigo); }
  @media (max-width:480px){ .tv-row { flex-direction:column; gap:6px; } .tv-strip img { height:260px; } }
  `;

  return (
    <div className={`trv${d ? " dark" : ""}`}>
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
          <p className="eyebrow">// travels</p>
          <h1>Where I&apos;ve explored</h1>
          <p className="stat">{Object.keys(placesByCountry).length} countries · {places.length} places · 1 semester abroad</p>
          <p className="sub">In Fall 2025 I lived in Metz, France, and spent my weekends saying yes to places I&apos;d never been. Being somewhere unfamiliar is where I learn the most.</p>
        </header>
        <div className="tv">
          <div className="card tv-map">
            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label="Map of Europe showing the places I've traveled">
              {countries.map((c) => <path key={c.id} d={c.d} className={`tv-land${c.visited ? " v" : ""}`} />)}
              {places.map((p) => {
                const [x, y] = project(p.lon, p.lat);
                const on = p === spot;
                return (
                  <g key={p.name} className={`tv-pin${p.home ? " home" : ""}`} onMouseEnter={() => selectSpot(p)} onClick={() => selectSpot(p)} aria-hidden="true">
                    {(on || p.home) && <circle className="halo" cx={x} cy={y} r={on ? 11 : 8} />}
                    <circle cx={x} cy={y} r={on ? 6 : p.home ? 5 : 3.5} />
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="tv-side">
            <div className="card tv-card" aria-live="polite">
              <p className="c">{spot.country}</p>
              <p className="n">{spot.name}</p>
              {spot.note && <p className="note">{spot.note}</p>}
              {spot.photos && (
                <div className="tv-photos">
                  <div className="tv-strip" key={spot.name} ref={strip}
                    onScroll={(e) => setPhotoIdx(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}>
                    {spot.photos.map((src, i) => (
                      <img key={src} src={src} loading="lazy" alt={`${spot.name}, ${spot.country}, photo ${i + 1} of ${spot.photos.length}`} />
                    ))}
                  </div>
                  {spot.photos.length > 1 && (
                    <>
                      <button className="tv-arr l" onClick={() => slide(-1)} aria-label="Previous photo"><ChevronLeft size={18} /></button>
                      <button className="tv-arr r" onClick={() => slide(1)} aria-label="Next photo"><ChevronRight size={18} /></button>
                      <span className="tv-count">{photoIdx + 1} / {spot.photos.length}</span>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="tv-list">
              {Object.entries(placesByCountry).map(([country, ps]) => (
                <div className="tv-row" key={country}>
                  <span className="label">{country.toLowerCase()}</span>
                  <span className="chips">
                    {ps.map((p) => (
                      <button key={p.name} className={`tag ${p.home ? "t-purp home" : "t-pink"} tv-chip${p === spot ? " on" : ""}`}
                        onMouseEnter={() => selectSpot(p)} onClick={() => selectSpot(p)}>{p.name}</button>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
