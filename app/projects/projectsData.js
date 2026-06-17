// All of your project details live here.
// To add a new project later, copy one of these objects and fill it in —
// the detail page builds itself from this data.

export const projects = [
  {
    slug: "specusol",
    title: "Specusol — Solar Energy Market Dashboard",
    tagline: "Modeling surplus Texas solar energy as a tradeable asset — built in 36 hours.",
    status: "live", // "live" or "wip"
    statusLabel: "Live",
    timeframe: "January 2026",
    context: "EnergyHack @ Georgia Tech · my first hackathon · team of 2 · built in 36 hours",
    image: "/dashboard.png",
    imageAlt:
      "Specusol dashboard showing the Houston ERCOT zone with a 24-hour supply and demand model",
    liveUrl: "https://energyhack2026.onrender.com",
    codeUrl: "https://github.com/cindy-muniz/EnergyHack2026",
    overview:
      "EnergyHack challenged teams to turn an energy problem into something tangible in 36 hours. We built Specusol, a dashboard that models surplus solar energy in Texas's ERCOT grid as if it were a tradeable financial asset — pairing real grid zones with supply, demand, and solar-generation data so the surplus is easy to see and reason about. It was my first hackathon, my first time using Git and deploying to the web, and we shipped it live on Render by the deadline.",
    contributions: [
      "Designed and implemented the ERCOT zone map — my idea and my first build of it — using a pure-Python address-to-zone lookup so any Texas location maps to the right grid zone.",
      "Built the supply-and-demand and solar-irradiance / daylight visualizations, including automatic detection of the supply–demand equilibrium point.",
      "Integrated my work with my teammate's stock-tracking layer and jointly deployed the final app to Render.",
    ],
    stack: ["Python", "Plotly Dash", "Leaflet", "NumPy"],
    learnings: [
      "How to collaborate in Git with a teammate — branching, merging two separate repos, and working through the messiness that comes with it.",
      "How to take a project all the way to a live, deployed URL, not just something that runs on my own laptop.",
      "How to scope tightly and make decisions quickly when the clock is the hardest constraint.",
    ],
  },
  {
    slug: "finance-pipeline",
    title: "Personal Finance Data Pipeline",
    tagline: "An end-to-end ETL pipeline that turns raw transactions into insight — with tests and CI.",
    status: "wip",
    statusLabel: "In progress",
    timeframe: "2026 — in progress",
    context: "Self-directed · learning data engineering by building",
    image: null,
    imageAlt: "",
    liveUrl: null,
    codeUrl: null,
    overview:
      "I'm teaching myself data engineering the way I learn best — by building something real. This pipeline ingests personal transaction data, validates and transforms it, stores it in a database, flags unusual spending, and surfaces everything in an interactive dashboard. I'm treating it like production software, with automated tests and continuous integration rather than a one-off script.",
    contributions: [
      "An ETL flow that ingests, validates, transforms, and stores transactions in SQLite.",
      "Anomaly detection that flags unusual transactions using z-scores.",
      "An interactive Plotly Dash dashboard to explore spending over time.",
      "A pytest test suite and a GitHub Actions CI pipeline so changes stay reliable.",
    ],
    stack: ["Python", "pandas", "SQLite", "Plotly Dash", "pytest", "GitHub Actions"],
    learnings: [
      "Designing data flows that are reliable and repeatable, not just runnable once.",
      "Writing tests and setting up CI/CD — habits that carry into any real codebase.",
      "Directing my own learning: diagnosing what I don't know and closing the gap deliberately.",
    ],
  },
];