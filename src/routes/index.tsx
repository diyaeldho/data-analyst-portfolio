import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhiya Eldho — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Dhiya Eldho — MBA (Finance & Logistics) and data analyst skilled in Power BI, Excel, SQL and supply chain analytics.",
      },
      { property: "og:title", content: "Dhiya Eldho — Data Analyst Portfolio" },
      {
        property: "og:description",
        content: "Power BI dashboards, supply chain analytics and business insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "diyaeldho585@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/dhiyaeldho";

const skills = ["Power BI", "DAX", "Power Query", "Microsoft Excel", "Pivot Tables", "XLOOKUP", "SQL / MySQL", "KPI Reporting", "Data Cleaning", "Supply Chain Analytics"];

const experience = [
  {
    role: "Data Analytics Intern",
    org: "One Team Solutions",
    date: "Jul 2026 – Present",
    points: [
      "Developing practical skills in data cleaning, data analysis, reporting, and business intelligence.",
      "Working with datasets using Microsoft Excel, Power BI, and SQL/MySQL.",
      "Creating analytical reports and interactive dashboards to present business and operational insights.",
      "Preparing KPI-based reports to support data interpretation and performance monitoring.",
      "Applying Excel functions, Pivot Tables, XLOOKUP, and Power Query for data analysis.",
      "Supporting data preparation, transformation, analysis, and reporting activities.",
      "Analyzing datasets to identify relevant trends, patterns, and business insights.",
      "Interpreting analytical findings and presenting structured insights to support business understanding.",
    ],
  },
  {
    role: "Warehouse Operations Intern",
    org: "DP World, Cochin FTWZ",
    date: "Jun 2025 – Aug 2025",
    points: [
      "Gained practical exposure to warehouse workflows and operational processes within a Free Trade Warehouse Economic Zone.",
      "Assisted warehouse personnel with day-to-day operational activities under supervision.",
    ],
  },
  {
    role: "HR Intern",
    org: "KEL Engineering Co. Ltd",
    date: "May 2023",
    points: [
      "Assisted in preparing company reports and maintaining accurate HR documentation.",
      "Organized and maintained employee records to support efficient data management.",
      "Updated HR records and ensured consistency of employee information.",
      "Supported routine HR documentation and administrative activities.",
    ],
  },
];

const projects = [
  {
    title: "Global Supply Chain Risk Analysis Dashboard",
    tag: "Power BI",
    date: "2026",
    featured: true,
    points: [
      "Developed an interactive Power BI dashboard for monitoring shipment volumes, lead times, disruption rates, carrier reliability, and route-level supply chain risks.",
      "Cleaned and transformed datasets using Power Query to prepare data for analysis.",
      "Created DAX measures for KPI calculations and risk analysis.",
    ],
  },
  {
    title: "Warehouse Automation Study",
    tag: "DP World Cochin FTWZ",
    date: "Jun 2025 – Aug 2025",
    points: [
      "Studied the impact of automation on warehouse productivity and labor cost.",
      "Analyzed the role of technology adoption in improving warehouse process efficiency.",
      "Identified potential improvements in operational accuracy and overall warehouse performance.",
      "Studied the increased demand for skilled labor associated with warehouse automation.",
    ],
  },
  {
    title: "Consumer Buying Behavior",
    tag: "TATA Motors",
    date: "Feb 2023",
    points: [
      "Analyzed factors influencing consumer purchasing decisions and brand perception.",
      "Studied customer preferences and demand patterns.",
      "Evaluated the influence of branding on consumer buying behavior.",
    ],
  },
  {
    title: "Training and Development",
    tag: "KEL Engineering Co. Ltd.",
    date: "",
    points: [
      "Analyzed the impact of employee training and development on performance.",
      "Studied recruitment and training practices as part of HR operations.",
      "Evaluated the importance of effective HR strategies in workforce management.",
    ],
  },
  {
    title: "MOOC on Organic Farming",
    tag: "Certification",
    date: "Mar 2024",
    points: [
      "Completed a structured online program covering sustainable agriculture practices.",
      "Studied organic farming techniques and environmental benefits.",
      "Explored the integration of sustainable practices with supply chain management.",
    ],
  },
];

const education = [
  {
    status: "Postgraduate",
    degree: "Master of Business Administration",
    field: "Logistics and Supply Chain Management · Finance",
    org: "SRM Institute of Science and Technology",
    score: "CGPA 8.6 / 10",
    date: "",
    span: false,
  },
  {
    status: "Undergraduate",
    degree: "Bachelor of Commerce",
    field: "Computer Applications",
    org: "Rajagiri College of Management and Applied Sciences",
    score: "CGPA 6.37 / 10",
    date: "",
    span: false,
  },
  {
    status: "In progress",
    degree: "Data Analytics Course",
    field: "Excel, Power BI, SQL/MySQL, data cleaning, reporting and business intelligence",
    org: "One Team Solutions",
    score: "",
    date: "Jul 2026 – Nov 2026",
    span: true,
  },
];

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-foreground/20 pb-3">
      <span className="font-mono text-sm text-primary">{n}</span>
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl">Dhiya Eldho</a>
          <div className="hidden gap-6 font-mono text-xs uppercase tracking-wider text-foreground/85 sm:flex">
            <a href="#experience" className="hover:text-primary">Experience</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#education" className="hover:text-primary">Education</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-5xl px-6">
        <section className="py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Data Analyst · MBA Finance & Logistics</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
            Turning raw data into <em className="text-primary">clear decisions.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            I'm Dhiya Eldho — an MBA graduate in Finance and Logistics, currently building my data analytics practice
            with Power BI, Excel and SQL. I focus on supply chain, operations and business performance insights.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">Email me</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-md border border-foreground px-5 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background">LinkedIn</a>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border md:grid-cols-4">
            {[["5", "Projects & studies"], ["3", "Internships"], ["MBA", "Finance & Logistics"], ["2026", "Data Analytics course"]].map(([v, l]) => (
              <div key={l} className="bg-card p-5">
                <div className="font-display text-4xl text-primary">{v}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <SectionHead n="01" title="Toolkit" />
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-md border bg-card px-3 py-1.5 font-mono text-sm">{s}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 pb-20">
          <SectionHead n="02" title="Experience" />
          <div className="space-y-12">
            {experience.map((e) => (
              <div key={e.role} className="grid gap-4 md:grid-cols-[220px_1fr]">
                <div className="font-mono text-sm text-muted-foreground">{e.date}</div>
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-primary">{e.org}</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 pb-20">
          <SectionHead n="03" title="Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className={`rounded-md border bg-card p-6 ${p.featured ? "md:col-span-2 border-primary" : ""}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-wider">
                  <span className="text-primary">{p.tag}</span>
                  {p.date && <span className="text-muted-foreground">{p.date}</span>}
                </div>
                <h3 className={`mt-3 font-display ${p.featured ? "text-4xl" : "text-3xl"}`}>{p.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-20 pb-20">
          <SectionHead n="04" title="Education" />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((ed) => (
              <div key={ed.degree} className={`rounded-md border bg-card p-6 ${ed.span ? "md:col-span-2" : ""}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">{ed.status}</p>
                  {ed.score && <p className="font-mono text-xs text-muted-foreground">{ed.score}</p>}
                </div>
                <h3 className="mt-3 font-display text-3xl">{ed.degree}</h3>
                <p className="mt-1 text-sm font-medium">{ed.field}</p>
                {ed.org && <p className="mt-2 text-sm text-muted-foreground">{ed.org}</p>}
                {ed.date && <p className="mt-2 font-mono text-xs text-muted-foreground">{ed.date}</p>}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">05 — Contact</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Let's work with data.</h2>
          <div className="mt-8 flex flex-col items-center gap-3 font-mono text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary">linkedin.com/in/dhiyaeldho</a>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 text-center font-mono text-xs text-muted-foreground">© 2026 Dhiya Eldho</footer>
    </div>
  );
}
