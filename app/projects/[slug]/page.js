import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "../projectsData";

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56v-2.1c-3.34.71-4.04-1.4-4.04-1.4-.55-1.36-1.34-1.72-1.34-1.72-1.09-.72.08-.71.08-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.78 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.29-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.29-.54-1.46.12-3.05 0 0 1.01-.31 3.3 1.21a11.6 11.6 0 0 1 3-.39c1.02 0 2.05.13 3 .39 2.28-1.52 3.29-1.21 3.29-1.21.66 1.59.24 2.76.12 3.05.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.36.81 1.07.81 2.16v3.2c0 .31.21.68.82.56C20.57 21.91 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z" />
  </svg>
);

// Pre-build a page for each project at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Give each project page its own browser-tab title.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} · Cindy Muniz` };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isWip = project.status === "wip";

  const css = `
  .pjt {
    --cream:#F1EFE8; --blush:#FBEAF0; --lav:#EEEDFE; --peri:#E6F1FB; --white:#fff;
    --rose:#993556; --indigo:#534AB7; --blue:#185FA5;
    --pinkTagBg:#F4C0D1; --pinkTagTx:#72243E;
    --purpTagBg:#CECBF6; --purpTagTx:#3C3489;
    --blueTagBg:#B5D4F4; --blueTagTx:#0C447C;
    --ink:#2C2C2A; --muted:#5F5E5A;
    --pinkLine:#F4C0D1;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
    background:var(--cream); color:var(--ink); font-family:var(--sans);
    line-height:1.6; min-height:100vh;
  }
  .pjt * { box-sizing:border-box; }
  .pjt a { color:inherit; text-decoration:none; }
  .pjt .wrap { max-width:780px; margin:0 auto; padding:0 22px; }

  .pjt .nav {
    position:sticky; top:0; z-index:20; background:rgba(241,239,232,0.86);
    backdrop-filter:blur(8px); border-bottom:1px solid var(--pinkLine);
  }
  .pjt .nav-in { display:flex; align-items:center; justify-content:space-between; height:60px;
                 max-width:780px; margin:0 auto; padding:0 22px; }
  .pjt .brand { font-size:20px; font-weight:600; color:var(--rose); letter-spacing:-0.01em; }
  .pjt .brand .star { color:var(--indigo); }
  .pjt .back { font-size:14px; color:var(--muted); display:flex; align-items:center; gap:6px; }
  .pjt .back:hover { color:var(--rose); }

  .pjt .head { padding:40px 0 8px; }
  .pjt .eyebrow { font-family:var(--mono); font-size:12px; color:var(--muted);
                  letter-spacing:0.03em; margin:0 0 12px; }
  .pjt .badge-live { font-size:11px; font-weight:600; color:#0F6E56; background:#9FE1CB;
                     border-radius:999px; padding:3px 11px; display:inline-flex; align-items:center; gap:6px; }
  .pjt .badge-live .dot { width:6px; height:6px; border-radius:50%; background:#0F6E56; }
  .pjt .badge-wip { font-size:11px; font-weight:600; color:var(--purpTagTx); background:var(--purpTagBg);
                    border-radius:999px; padding:3px 11px; display:inline-block; }
  .pjt h1 { font-size:28px; line-height:1.25; font-weight:600; letter-spacing:-0.01em;
            margin:14px 0 10px; }
  .pjt .tagline { font-size:16px; color:#3a3a37; margin:0 0 16px; }
  .pjt .context { font-family:var(--mono); font-size:12.5px; color:var(--muted); margin:0 0 20px; }

  .pjt .actions { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:8px; }
  .pjt .btn { display:inline-flex; align-items:center; gap:7px; font-size:14px; font-weight:500;
              border-radius:12px; padding:9px 15px; transition:background .15s, transform .15s; }
  .pjt .btn-primary { background:var(--rose); color:#fff; }
  .pjt .btn-primary:hover { transform:translateY(-1px); }
  .pjt .btn-ghost { background:var(--white); border:1px solid var(--pinkLine); color:var(--rose); }
  .pjt .btn-ghost:hover { background:var(--blush); }
  .pjt .soon { font-size:13px; color:var(--muted); font-style:italic; }

  .pjt .shot { margin:26px 0 6px; border-radius:16px; overflow:hidden;
               border:1px solid var(--pinkLine); background:var(--white); }
  .pjt .shot img { width:100%; display:block; }

  .pjt section { padding:28px 0 4px; }
  .pjt h2 { font-family:var(--mono); font-size:13px; color:var(--rose); letter-spacing:0.04em;
            margin:0 0 14px; }
  .pjt p.body { font-size:15.5px; color:#3a3a37; margin:0; }

  .pjt ul { list-style:none; margin:0; padding:0; }
  .pjt li { font-size:15px; color:#3a3a37; padding-left:22px; position:relative; margin-bottom:12px; }
  .pjt li::before { content:""; position:absolute; left:2px; top:9px; width:7px; height:7px;
                    border-radius:50%; background:var(--rose); }

  .pjt .tags { display:flex; gap:8px; flex-wrap:wrap; }
  .pjt .tag { font-size:12.5px; border-radius:999px; padding:4px 12px;
              background:var(--blueTagBg); color:var(--blueTagTx); }

  .pjt .foot { margin-top:36px; padding:30px 0 50px; border-top:1px solid var(--pinkLine); }
  .pjt .foot a { font-size:14px; color:var(--rose); display:inline-flex; align-items:center; gap:7px; }
  .pjt .foot a:hover { text-decoration:underline; }

  @media (max-width:480px){ .pjt h1 { font-size:23px; } }
  `;

  return (
    <div className="pjt">
      <style>{css}</style>

      <nav className="nav">
        <div className="nav-in">
          <Link href="/" className="brand">
            Cindy Muniz <span className="star">✦</span>
          </Link>
          <Link href="/#projects" className="back">
            <ArrowLeft size={15} /> Back to projects
          </Link>
        </div>
      </nav>

      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{project.timeframe}</p>
          {isWip ? (
            <span className="badge-wip">{project.statusLabel}</span>
          ) : (
            <span className="badge-live">
              <span className="dot" /> {project.statusLabel}
            </span>
          )}
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
          <div className="shot">
            <img src={project.image} alt={project.imageAlt} />
          </div>
        )}

        <section>
          <h2>// overview</h2>
          <p className="body">{project.overview}</p>
        </section>

        <section>
          <h2>{isWip ? "// what I'm building" : "// what I built"}</h2>
          <ul>
            {project.contributions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>// tech stack</h2>
          <div className="tags">
            {project.stack.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>{isWip ? "// what I'm focused on" : "// what I learned"}</h2>
          <ul>
            {project.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>

        <div className="foot">
          <Link href="/#projects">
            <ArrowLeft size={15} /> Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}