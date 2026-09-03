import HistoricalBenchmark from "./historical-benchmark";

const currentStack = [
  "TypeScript",
  "Node.js",
  "Firebase",
  "Google Cloud",
  "Temporal",
];

const broaderToolkit = [
  "Nx",
  "Python",
  "Django REST Framework",
  "PHP",
  "Laravel",
  "Drupal",
  "PostgreSQL",
  "MySQL",
  "BigQuery",
  "dbt",
  "Airbyte",
  "Docker",
  "Kubernetes",
  "Helm",
  "Stripe",
  "CI/CD",
];

const systems = [
  {
    eyebrow: "Platform engineering",
    title: "Multi-tenant SaaS foundations",
    description:
      "Backend architecture spanning identity, authorization, subscriptions, entitlements, external integrations, and production operations.",
    technologies: ["TypeScript", "Node.js", "Firebase", "Stripe", "GCP"],
  },
  {
    eyebrow: "Data engineering",
    title: "From messy inputs to useful data",
    description:
      "Ingestion and reporting pipelines that turn emailed spreadsheets and third-party APIs into governed, testable warehouse data.",
    technologies: ["Cloud Storage", "Airbyte", "BigQuery", "dbt"],
  },
  {
    eyebrow: "Backend systems",
    title: "Real-estate listings API",
    description:
      "A documented, tested platform for listings synchronization, authentication, saved searches, and production delivery on Kubernetes.",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "GKE"],
  },
  {
    eyebrow: "Developer experience",
    title: "Tooling that removes friction",
    description:
      "Monorepo boundaries, CI pipelines, release automation, typed integrations, and open-source improvements for Nx and Node.js workflows.",
    technologies: ["Nx", "GitHub Actions", "CircleCI", "npm"],
  },
];

const electronicThings = [
  {
    name: "Cinesense",
    description:
      "A tiny hardware adapter that automatically controls Bose Cinemate speakers by sensing an audio signal.",
    detail: "ATtiny85 · C++ · product design",
    href: "https://github.com/jaytavares/cinesense",
  },
  {
    name: "WestSideLights",
    description:
      "A networked holiday-light installation that translated public Twitter commands into animated lighting programs.",
    detail: "Processing · Java · physical computing",
    href: "https://github.com/jaytavares/WestSideLights",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay Tavares",
  url: "https://jasontavares.com",
  jobTitle: "Senior Backend & Cloud Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Providence",
    addressRegion: "RI",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/jaytavares",
    "https://www.linkedin.com/in/jasontavares",
  ],
  knowsAbout: currentStack,
};

const houseBuiltYear = 1891;
const houseAge = new Date().getFullYear() - houseBuiltYear;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <header className="site-header shell">
        <a className="monogram" href="#top" aria-label="Jay Tavares, home">
          JT
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:workwith@jasontavares.com">
          <span aria-hidden="true" /> Open to opportunities
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker">
            Backend &amp; cloud engineer · Providence, Rhode Island
          </p>
          <h1>
            I build systems that survive contact with <em>reality.</em>
          </h1>
          <p className="hero-intro">
            I’m Jay Tavares—a developer of web applications and longtime hacker
            of electronic things. I design, ship, and operate APIs, SaaS
            platforms, integrations, and data systems.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-action" href="mailto:workwith@jasontavares.com">
              workwith@jasontavares.com
            </a>
          </div>
        </div>

        <div
          className="system-card"
          aria-label="The kind of engineering work I enjoy"
        >
          <div className="system-card__head">
            <span>system / production</span>
            <span className="status">
              <i /> healthy
            </span>
          </div>
          <div className="system-flow" aria-hidden="true">
            <div className="flow-node">
              <small>01</small>Product idea
            </div>
            <span>→</span>
            <div className="flow-node active">
              <small>02</small>Backend
            </div>
            <span>→</span>
            <div className="flow-node">
              <small>03</small>Reliable service
            </div>
          </div>
          <div className="system-card__log">
            <p>
              <span>14:22:04</span> edge case reproduced
            </p>
            <p>
              <span>14:37:19</span> observability improved
            </p>
            <p>
              <span>15:03:42</span> boring fix deployed
            </p>
          </div>
          <p className="system-card__note">
            The best infrastructure eventually becomes unremarkable.
          </p>
        </div>
      </section>

      <section className="current-band" aria-labelledby="current-heading">
        <div className="shell current-band__inner">
          <p id="current-heading">Currently you’ll find me working with</p>
          <ul>
            {currentStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work</p>
          <h2>Backend ownership, from first model to production incident.</h2>
          <p>
            My work tends to live behind the interface: the services, data
            flows, and operational decisions that make a product dependable.
          </p>
        </div>
        <div className="work-grid">
          {systems.map((system, index) => (
            <article className="work-card" key={system.title}>
              <div className="work-card__number">0{index + 1}</div>
              <p className="eyebrow">{system.eyebrow}</p>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <ul aria-label={`${system.title} technologies`}>
                {system.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="kicker">A wider toolkit</p>
            <h2>Different problems call for different tools.</h2>
          </div>
          <div className="about-copy">
            <p>
              My broader toolkit has been shaped by a range of client projects.
              I care less about collecting technologies than about understanding
              where each one earns its place.
            </p>
            <ul className="toolkit">
              {broaderToolkit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section shell electronics"
        aria-labelledby="electronics-title"
      >
        <div className="section-heading compact">
          <p className="kicker">Electronic things</p>
          <h2 id="electronics-title">Sometimes the project has wires.</h2>
        </div>
        <div className="electronics-list">
          {electronicThings.map((project) => (
            <a
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p className="eyebrow">{project.detail}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section
        className="section about-me-section"
        aria-labelledby="about-me-title"
      >
        <div className="shell about-me-grid">
          <p className="about-me-label" aria-label="About me">
            About Me
          </p>
          <div>
            <p className="kicker">Off the clock</p>
            <h2 id="about-me-title">
              <HistoricalBenchmark />
            </h2>
            <p>
              I live on the West Side of Providence with my wife and daughter.
              In my spare time, you&apos;ll find me working away on my house
              which is currently {houseAge} years old. If you want to get me
              going, ask about the doorknobs in my house.
            </p>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="kicker">Let’s talk</p>
        <h2>Have a difficult systems problem?</h2>
        <p>
          I’m currently open to backend and platform engineering opportunities.
        </p>
        <div className="contact-links">
          <a className="primary-action" href="mailto:workwith@jasontavares.com">
            Send me an email <ArrowIcon />
          </a>
          <a
            href="https://github.com/jaytavares"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1-.33 3.3 1.23a11.38 11.38 0 0 1 6.02 0c2.29-1.56 3.29-1.23 3.29-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.63-2.82 5.64-5.5 5.93.43.37.81 1.12.81 2.25v3.34c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jasontavares"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.92 5.4a1.56 1.56 0 0 1 .02 3.1ZM5.5 10.1h2.88v9.4H5.5v-9.4Zm5.5 0h2.75v1.29h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.9 3.44 4.38v5.22h-2.88v-4.89c0-1.16-.02-2.66-1.62-2.66-1.63 0-1.88 1.27-1.88 2.58v4.97H11V10.1Z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>© {new Date().getFullYear()} Jay Tavares</p>
        <p>Designed, built, and occasionally debugged in Providence.</p>
      </footer>
    </main>
  );
}
