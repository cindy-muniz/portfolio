import React from "react";
import Link from "next/link";
import {
  Mail, MapPin, ExternalLink, GraduationCap, Heart, Globe, FileText,
} from "lucide-react";

const RESUME = "/Cindy_Muniz_Portfolio_Resume.pdf";

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56v-2.1c-3.34.71-4.04-1.4-4.04-1.4-.55-1.36-1.34-1.72-1.34-1.72-1.09-.72.08-.71.08-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.78 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.29-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.29-.54-1.46.12-3.05 0 0 1.01-.31 3.3 1.21a11.6 11.6 0 0 1 3-.39c1.02 0 2.05.13 3 .39 2.28-1.52 3.29-1.21 3.29-1.21.66 1.59.24 2.76.12 3.05.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.36.81 1.07.81 2.16v3.2c0 .31.21.68.82.56C20.57 21.91 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
  </svg>
);

export default function Home() {
  const css = `
  .site {
    --cream:#F1EFE8; --blush:#FBEAF0; --lav:#EEEDFE; --peri:#E6F1FB; --white:#fff;
    --rose:#993556; --indigo:#534AB7; --blue:#185FA5;
    --pinkTagBg:#F4C0D1; --pinkTagTx:#72243E;
    --purpTagBg:#CECBF6; --purpTagTx:#3C3489;
    --blueTagBg:#B5D4F4; --blueTagTx:#0C447C;
    --ink:#2C2C2A; --muted:#5F5E5A;
    --pinkLine:#F4C0D1; --blueLine:#B5D4F4;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
    background:var(--cream); color:var(--ink); font-family:var(--sans);
    line-height:1.6; min-height:100vh;
  }
  .site * { box-sizing:border-box; }
  .site a { color:inherit; text-decoration:none; }
  .wrap { max-width:1060px; margin:0 auto; padding:0 22px; }
  .sec { scroll-margin-top:78px; }

  .nav {
    position:sticky; top:0; z-index:20; background:rgba(241,239,232,0.86);
    backdrop-filter:blur(8px); border-bottom:1px solid var(--pinkLine);
  }
  .nav-in { display:flex; align-items:center; justify-content:space-between; height:60px; }
  .brand { font-size:20px; font-weight:600; color:var(--rose); letter-spacing:-0.01em; }
  .brand .star { color:var(--indigo); }
  .nav-links { display:flex; gap:22px; font-size:14.5px; color:var(--muted); }
  .nav-links a:hover { color:var(--rose); }

  .dash { display:grid; grid-template-columns:248px 1fr; gap:16px; padding:30px 0 8px; }
  @media (max-width:780px){ .dash { grid-template-columns:1fr; } }

  .card { background:var(--white); border:1px solid var(--pinkLine); border-radius:16px; }
  .col { display:flex; flex-direction:column; gap:14px; }

  .profile { padding:20px; text-align:center; }
  .avatar {
    width:90px; height:90px; border-radius:50%; object-fit:cover; object-position:center;
    display:block; margin:0 auto 12px; border:2px solid var(--white);
    box-shadow:0 0 0 1px var(--pinkLine);
  }
  .pname { font-size:18px; font-weight:600; margin:0; }
  .prole { font-size:13.5px; color:var(--muted); margin:3px 0 0; }
  .pmeta { font-size:13px; color:var(--muted); display:flex; align-items:center;
           justify-content:center; gap:6px; margin-top:10px; }
  .socials { display:flex; justify-content:center; gap:10px; margin-top:14px; }
  .soc { width:34px; height:34px; border-radius:10px; border:1px solid var(--pinkLine);
         display:flex; align-items:center; justify-content:center; color:var(--rose);
         transition:background .15s; }
  .soc:hover { background:var(--blush); }

  .status { background:var(--peri); border-radius:16px; padding:16px 16px 18px;
            font-family:var(--mono); }
  .status h4 { color:var(--blue); font-size:12.5px; margin:0 0 11px; font-weight:600;
               letter-spacing:0.02em; }
  .status .row { font-size:12.5px; color:var(--blueTagTx); display:flex; gap:10px;
                 align-items:baseline; margin-bottom:9px; }
  .status .row:last-child { margin-bottom:0; }
  .status .k { color:var(--blue); font-weight:600; text-transform:uppercase;
               letter-spacing:0.05em; font-size:10.5px; min-width:72px; flex:none; }

  .hero { background:var(--blush); border-radius:16px; padding:22px 24px; }
  .eyebrow { font-family:var(--mono); font-size:12px; color:var(--rose);
             letter-spacing:0.04em; margin:0 0 9px; }
  .hero h1 { font-size:25px; line-height:1.35; font-weight:600; color:var(--pinkTagTx);
             margin:0; letter-spacing:-0.01em; }
  @media (max-width:480px){ .hero h1 { font-size:21px; } }

  .pgrid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  @media (max-width:620px){ .pgrid { grid-template-columns:1fr; } }

  .proj { padding:0; overflow:hidden; transition:transform .18s ease, box-shadow .18s ease; }
  .proj:hover { transform:translateY(-3px); box-shadow:0 10px 24px rgba(153,53,86,0.10); }

  .preview-img { position:relative; }
  .preview-img img { width:100%; height:172px; object-fit:cover; object-position:center top;
                     display:block; border-bottom:1px solid var(--pinkLine); }

  .preview { position:relative; background:var(--lav); padding:18px 16px 16px;
             border-bottom:1px solid var(--pinkLine); }
  .preview .wordmark { font-weight:700; font-size:15px; letter-spacing:0.04em; text-align:center;
                       color:var(--indigo); }
  .preview .tag2 { text-align:center; font-size:10.5px; color:#7a72c4; margin-top:2px; letter-spacing:0.03em; }

  .badge-live { position:absolute; top:12px; right:12px; font-size:10.5px; font-weight:600;
                color:#0F6E56; background:#9FE1CB; border-radius:999px; padding:2px 9px;
                display:flex; align-items:center; gap:5px; z-index:2; }
  .badge-live .dot { width:6px; height:6px; border-radius:50%; background:#0F6E56; }
  .badge-wip { position:absolute; top:12px; right:12px; font-size:10.5px; font-weight:600;
               color:var(--purpTagTx); background:var(--purpTagBg); border-radius:999px; padding:2px 9px; }

  .pbody { padding:15px 16px 16px; }
  .pbody h3 { font-size:15px; font-weight:600; margin:0 0 6px; }
  .pbody p { font-size:13px; color:var(--muted); margin:0 0 12px; line-height:1.55; }
  .tags { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:13px; }
  .tag { font-size:11.5px; border-radius:999px; padding:2px 10px; }
  .t-pink { background:var(--pinkTagBg); color:var(--pinkTagTx); }
  .t-purp { background:var(--purpTagBg); color:var(--purpTagTx); }
  .t-blue { background:var(--blueTagBg); color:var(--blueTagTx); }
  .plinks { display:flex; gap:16px; font-size:13px; font-weight:500; }
  .plinks a { display:flex; align-items:center; gap:5px; color:var(--rose); }
  .plinks a:hover { text-decoration:underline; }
  .plinks .muted { color:var(--muted); cursor:default; }

  .updates { background:var(--lav); border-radius:16px; padding:14px 18px; margin-top:14px; }
  .updates h4 { font-family:var(--mono); font-size:12px; color:var(--indigo); margin:0 0 9px;
                font-weight:600; letter-spacing:0.02em; }
  .updates .u { font-size:12.5px; color:var(--purpTagTx); display:flex; gap:10px;
                align-items:baseline; margin-bottom:6px; }
  .updates .u:last-child { margin-bottom:0; }
  .updates .when { font-family:var(--mono); color:var(--indigo); font-weight:600;
                   text-transform:uppercase; letter-spacing:0.05em; font-size:10.5px;
                   min-width:72px; flex:none; }

  .block { padding:46px 0 6px; }
  .ktitle { font-size:13px; font-family:var(--mono); color:var(--rose); letter-spacing:0.05em;
            margin:0 0 16px; }
  .block h2 { font-size:22px; font-weight:600; margin:0 0 14px; letter-spacing:-0.01em; }
  .about p { font-size:15px; color:#3a3a37; margin:0 0 14px; }
  .about p:last-child { margin-bottom:0; }

  .about-flex { display:flex; gap:34px; align-items:flex-start; }
  .about-text { flex:1; min-width:0; }

  .scrapbook { flex:none; width:248px; padding-top:6px; }
  .polaroid { background:#fff; margin:0; padding:9px 9px 10px; border-radius:3px; width:158px;
              box-shadow:0 6px 16px rgba(0,0,0,0.16); position:relative;
              transition:transform .22s ease, box-shadow .22s ease; }
  .polaroid img { width:100%; height:176px; object-fit:cover; display:block; }
  .polaroid figcaption { text-align:center; margin-top:9px; font-size:13.5px; color:#3a3a37;
                         font-family:"Segoe Script","Bradley Hand","Comic Sans MS",cursive; }
  .polaroid:nth-child(1){ transform:rotate(-5deg); margin-left:6px; z-index:3; }
  .polaroid:nth-child(2){ transform:rotate(4deg); margin-top:-34px; margin-left:58px; z-index:2; }
  .polaroid:nth-child(3){ transform:rotate(-3deg); margin-top:-30px; margin-left:12px; z-index:1; }
  .polaroid:hover { transform:rotate(0deg) scale(1.04); z-index:5;
                    box-shadow:0 12px 28px rgba(0,0,0,0.22); }

  @media (max-width:680px){
    .about-flex { flex-direction:column; align-items:center; }
    .about-text { width:100%; }
    .scrapbook { margin:14px auto 0; }
  }
  @media (prefers-reduced-motion: reduce){ .polaroid { transition:none; } }

  .skills { display:flex; flex-direction:column; gap:14px; }
  .skrow { display:flex; gap:14px; align-items:baseline; flex-wrap:wrap; }
  .sklabel { font-family:var(--mono); font-size:12.5px; color:var(--muted); min-width:96px; }
  .skset { display:flex; gap:7px; flex-wrap:wrap; }

  .honors { display:flex; gap:9px; flex-wrap:wrap; }
  .honor { font-size:13px; border-radius:12px; padding:7px 14px; background:var(--white);
           border:1px solid var(--pinkLine); display:flex; align-items:center; gap:7px; color:var(--ink); }
  .honor svg { color:var(--rose); }

  .foot { margin-top:50px; background:var(--blush); border-top:1px solid var(--pinkLine); }
  .foot-in { padding:38px 0 30px; }
  .foot h2 { font-size:22px; font-weight:600; margin:0 0 8px; color:var(--pinkTagTx); }
  .foot p { font-size:14.5px; color:var(--muted); margin:0 0 18px; max-width:460px; }
  .fbtns { display:flex; gap:11px; flex-wrap:wrap; }
  .fbtn { display:flex; align-items:center; gap:8px; font-size:14px; font-weight:500;
          background:var(--white); border:1px solid var(--pinkLine); border-radius:12px;
          padding:10px 15px; color:var(--rose); transition:background .15s; }
  .fbtn:hover { background:var(--lav); }
  .copyright { margin-top:26px; font-size:12px; color:var(--muted); }

  @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  .dash { animation:fadeUp .6s ease both; }
  .block { animation:fadeUp .6s ease both; }
  .foot { animation:fadeUp .6s ease both; }

  @media (prefers-reduced-motion: reduce){
    .proj { transition:none; }
    .dash, .block, .foot { animation:none; }
  }
  `;

  return (
    <div className="site">
      <style>{css}</style>

      <nav className="nav">
        <div className="wrap nav-in">
          <span className="brand">Cindy Muniz <span className="star">✦</span></span>
          <div className="nav-links">
            <a href="#projects">projects</a>
            <a href="#about">about</a>
            <a href={RESUME} target="_blank" rel="noopener">résumé</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      <div className="wrap dash">
        <div className="col">
          <div className="card profile">
            <img className="avatar" src="/Professional_pic.jpg" alt="Cindy Muniz" />
            <p className="pname">Cindy Muniz</p>
            <p className="prole">CS @ Georgia Tech</p>
            <p className="pmeta"><MapPin size={14} /> Atlanta, GA</p>
            <p className="pmeta"><Globe size={14} /> Bilingual · EN / ES</p>
            <div className="socials">
              <a className="soc" href="https://github.com/cindy-muniz" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><GithubIcon size={17} /></a>
              <a className="soc" href="https://www.linkedin.com/in/cindy-muniz-664906366" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={17} /></a>
              <a className="soc" href="mailto:cmuniz31@gatech.edu" aria-label="Email"><Mail size={17} /></a>
              <a className="soc" href={RESUME} target="_blank" rel="noopener" aria-label="Résumé"><FileText size={17} /></a>
            </div>
          </div>

          <div className="status">
            <h4>// currently</h4>
            <div className="row"><span className="k">building</span><span>a personal finance data pipeline</span></div>
            <div className="row"><span className="k">studying</span><span>data structures &amp; algorithms</span></div>
            <div className="row"><span className="k">into</span><span>the globalization of technology</span></div>
            <div className="row"><span className="k">offscreen</span><span>community service &amp; music</span></div>
          </div>
        </div>

        <div className="col">
          <div className="hero">
            <p className="eyebrow">cs student · builder · community leader</p>
            <h1>Hi, I'm Cindy — I build data-driven tools and show up for the communities I'm part of.</h1>
          </div>

          <div id="projects" className="sec pgrid">
            <div className="card proj">
              <div className="preview-img">
                <span className="badge-live"><span className="dot" /> live</span>
                <img src="/dashboard.png" alt="Specusol dashboard — verified Houston ERCOT zone with the 24-hour supply and demand model" />
              </div>
              <div className="pbody">
                <h3>Specusol — Solar Energy Market Dashboard</h3>
                <p>Built in 24 hours at EnergyHack @ Georgia Tech (my first hackathon). I designed and built the ERCOT zone map and the supply/demand &amp; daylight visualizations; my teammate built the stock tracker. Deployed on Render.</p>
                <div className="tags">
                  <span className="tag t-pink">Python</span>
                  <span className="tag t-blue">Plotly Dash</span>
                  <span className="tag t-purp">Leaflet</span>
                  <span className="tag t-blue">NumPy</span>
                </div>
                <div className="plinks">
                  <a href="https://energyhack2026.onrender.com" target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Live demo</a>
                  <a href="https://github.com/cindy-muniz/EnergyHack2026" target="_blank" rel="noopener noreferrer"><GithubIcon size={14} /> Code</a>
                  <Link href="/projects/specusol">Details →</Link>
                </div>
              </div>
            </div>

            <div className="card proj">
              <div className="preview">
                <span className="badge-wip">in progress</span>
                <div className="wordmark">Finance Data Pipeline</div>
                <div className="tag2">ETL · anomaly detection · dashboard</div>
                <svg viewBox="0 0 300 70" style={{ width: "100%", height: 56, marginTop: 8, display: "block" }}>
                  <g stroke="#9a90e0" strokeWidth="2" fill="none" opacity="0.85">
                    <path d="M10,55 L70,55 L70,30 L130,30 L130,45 L190,45 L190,20 L250,20 L250,40 L290,40" />
                  </g>
                  <circle cx="70" cy="30" r="3.5" fill="#534AB7" />
                  <circle cx="190" cy="20" r="3.5" fill="#534AB7" />
                </svg>
              </div>
              <div className="pbody">
                <h3>Personal Finance Data Pipeline</h3>
                <p>An end-to-end ETL pipeline in Python that ingests, validates, and stores transactions, flags anomalies with z-scores, and surfaces it all in an interactive dashboard. Building now, with tests and CI.</p>
                <div className="tags">
                  <span className="tag t-pink">Python</span>
                  <span className="tag t-blue">pandas</span>
                  <span className="tag t-purp">SQLite</span>
                  <span className="tag t-blue">Plotly</span>
                </div>
                <div className="plinks">
                  <Link href="/projects/finance-pipeline">Details →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="updates">
            <h4>// recent updates</h4>
            <div className="u"><span className="when">jun 2026</span>polished &amp; documented my hackathon repos</div>
            <div className="u"><span className="when">jan 2026</span>shipped Specusol at EnergyHack @ Georgia Tech</div>
            <div className="u"><span className="when">fall 2025</span>studied abroad at GT-Europe in Metz, France</div>
          </div>
        </div>
      </div>

      <div id="about" className="wrap sec block about">
        <p className="ktitle">// about</p>
        <h2>A little about me</h2>
        <div className="about-flex">
          <div className="about-text">
            <p>I'm a first-generation college student and a bilingual (English/Spanish) Computer Science student at Georgia Tech, on the People and Systems &amp; Architecture threads. I learned to navigate the world without a guide — figuring out college, financial aid, and a whole new system while teaching my parents along the way. I'm also a Gates, QuestBridge, and HSF scholar and my high school's valedictorian, but what I care about most is using what I learned the hard way to open doors for other people.</p>
            <p>Because finding my own path was isolating, I didn't want other students in my town's Latino community to face the same hurdles. As president of my school's HoPe chapter, I organized a county-wide FAFSA Night and walked 30+ families through their financial-aid applications in both English and Spanish, shared scholarship opportunities every week, secured up to $1,500 from local businesses for educational events, and mentored younger students. The chapter doubled to 200+ members, and I now work in Georgia Tech's Office of Scholarships &amp; Financial Aid, still helping students reach the resources that open doors.</p>
            <p>In Fall 2025 I studied abroad at Georgia Tech-Europe in Metz, France, completing 13 credit hours while traveling to ten countries. Seeing that much of the world in one semester reshaped how I think about technology, too — the best tools meet people where they are, across languages and cultures.</p>
            <p>Computer science humbled me early. I walked into my first object-oriented programming midterm overconfident and got a 50, which forced me to admit that memorizing my way through wasn't going to work. I rebuilt how I study from the ground up — deliberate practice, working problems one at a time, and using AI as a study partner by leading with my own thinking and using it to go deeper rather than skip the work. I brought my last midterm up to a 90, and that approach is now how I teach myself new things, like the data engineering behind my finance pipeline.</p>
            <p>Outside of code, I'm into graphic design, music, and anything at the intersection of technology and global community. Right now I'm looking for internships where I can build real things and keep learning from people who know more than I do.</p>
          </div>
          <div className="scrapbook">
            <figure className="polaroid"><img src="/scrapbook1.jpg" alt="Cindy at the Eiffel Tower in Paris, France" /><figcaption>Paris</figcaption></figure>
            <figure className="polaroid"><img src="/scrapbook2.jpg" alt="Cindy in Interlaken, Switzerland" /><figcaption>Interlaken</figcaption></figure>
            <figure className="polaroid"><img src="/scrapbook3.jpg" alt="Cindy in the Netherlands" /><figcaption>Netherlands</figcaption></figure>
          </div>
        </div>
      </div>

      <div className="wrap block">
        <p className="ktitle">// skills</p>
        <h2>What I work with</h2>
        <div className="skills">
          <div className="skrow">
            <span className="sklabel">languages</span>
            <span className="skset">
              <span className="tag t-pink">Python</span>
              <span className="tag t-pink">Java</span>
              <span className="tag t-pink">JavaScript</span>
              <span className="tag t-pink">SQL</span>
            </span>
          </div>
          <div className="skrow">
            <span className="sklabel">tools</span>
            <span className="skset">
              <span className="tag t-blue">Git / GitHub</span>
              <span className="tag t-blue">pandas</span>
              <span className="tag t-blue">SQLite</span>
              <span className="tag t-blue">pytest</span>
              <span className="tag t-blue">JUnit</span>
              <span className="tag t-blue">GitHub Actions</span>
              <span className="tag t-blue">HTML</span>
            </span>
          </div>
          <div className="skrow">
            <span className="sklabel">design</span>
            <span className="skset">
              <span className="tag t-purp">Canva</span>
              <span className="tag t-purp">Graphic design</span>
            </span>
          </div>
        </div>
      </div>

      <div className="wrap block">
        <p className="ktitle">// honors</p>
        <h2>Recognition</h2>
        <div className="honors">
          <span className="honor"><GraduationCap size={15} /> Gates Scholar</span>
          <span className="honor"><GraduationCap size={15} /> QuestBridge Scholar</span>
          <span className="honor"><GraduationCap size={15} /> HSF Scholar</span>
          <span className="honor"><Heart size={15} /> Dean's List</span>
          <span className="honor"><Heart size={15} /> Valedictorian</span>
        </div>
      </div>

      <footer id="contact" className="sec foot">
        <div className="wrap foot-in">
          <h2>Let's connect</h2>
          <p>I'm always happy to talk about software, community work, or a good project. The fastest way to reach me is email.</p>
          <div className="fbtns">
            <a className="fbtn" href="mailto:cmuniz31@gatech.edu"><Mail size={16} /> cmuniz31@gatech.edu</a>
            <a className="fbtn" href={RESUME} target="_blank" rel="noopener"><FileText size={16} /> Résumé</a>
            <a className="fbtn" href="https://github.com/cindy-muniz" target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /> GitHub</a>
            <a className="fbtn" href="https://www.linkedin.com/in/cindy-muniz-664906366" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={16} /> LinkedIn</a>
          </div>
          <p className="copyright">© 2026 Cindy Muniz · built with care</p>
        </div>
      </footer>
    </div>
  );
}