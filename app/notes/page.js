import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notes } from "./notesData";

export const metadata = {
  title: "Build log · Cindy Muniz",
  description: "Short notes on what Cindy Muniz is building and learning.",
};

export default function NotesPage() {
  const css = `
  .nts {
    --cream:#F1EFE8; --blush:#FBEAF0; --lav:#EEEDFE; --peri:#E6F1FB; --white:#fff;
    --rose:#993556; --indigo:#534AB7; --blue:#185FA5;
    --blueTagBg:#B5D4F4; --blueTagTx:#0C447C;
    --ink:#2C2C2A; --muted:#5F5E5A; --pinkLine:#F4C0D1;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
    background:var(--cream); color:var(--ink); font-family:var(--sans);
    line-height:1.6; min-height:100vh;
  }
  .nts * { box-sizing:border-box; }
  .nts a { color:inherit; text-decoration:none; }
  .nts .wrap { max-width:720px; margin:0 auto; padding:0 22px; }

  .nts .nav {
    position:sticky; top:0; z-index:20; background:rgba(241,239,232,0.86);
    backdrop-filter:blur(8px); border-bottom:1px solid var(--pinkLine);
  }
  .nts .nav-in { display:flex; align-items:center; justify-content:space-between; height:60px;
                 max-width:720px; margin:0 auto; padding:0 22px; }
  .nts .brand { font-size:20px; font-weight:600; color:var(--rose); letter-spacing:-0.01em; }
  .nts .brand .star { color:var(--indigo); }
  .nts .back { font-size:14px; color:var(--muted); display:flex; align-items:center; gap:6px; }
  .nts .back:hover { color:var(--rose); }

  .nts .head { padding:42px 0 6px; }
  .nts .eyebrow { font-family:var(--mono); font-size:12px; color:var(--rose);
                  letter-spacing:0.05em; margin:0 0 10px; }
  .nts h1 { font-size:28px; font-weight:600; letter-spacing:-0.01em; margin:0 0 8px; }
  .nts .sub { font-size:15px; color:var(--muted); margin:0; }

  .nts .list { padding:24px 0 60px; display:flex; flex-direction:column; gap:16px; }
  .nts .note { background:var(--white); border:1px solid var(--pinkLine); border-radius:16px;
               padding:20px 22px; }
  .nts .date { font-family:var(--mono); font-size:11.5px; color:var(--blue);
               text-transform:uppercase; letter-spacing:0.05em; margin:0 0 8px; }
  .nts .note h2 { font-size:17px; font-weight:600; margin:0 0 9px; color:var(--ink); }
  .nts .note p { font-size:14.5px; color:#3a3a37; margin:0 0 13px; }
  .nts .tags { display:flex; gap:7px; flex-wrap:wrap; }
  .nts .tag { font-size:11.5px; border-radius:999px; padding:2px 11px;
              background:var(--blueTagBg); color:var(--blueTagTx); }

  @media (max-width:480px){ .nts h1 { font-size:23px; } }
  `;

  return (
    <div className="nts">
      <style>{css}</style>

      <nav className="nav">
        <div className="nav-in">
          <Link href="/" className="brand">
            Cindy Muniz <span className="star">✦</span>
          </Link>
          <Link href="/" className="back">
            <ArrowLeft size={15} /> Back home
          </Link>
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
                  {note.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}