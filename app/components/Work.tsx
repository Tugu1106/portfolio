const projects = [
  {
    name: "Appointly",
    description: "A full-stack booking platform that lets users schedule appointments online. Built with React frontend and Node.js backend.",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    github: null,
    live: "https://your-deployed-site.com",
  },
  {
    name: "CCMASTER",
    description:
      "Chrome extension that allows users to customize subtitle appearance on any video streaming platform. Built with React and Chrome Extension APIs.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: null,
    live: "https://chromewebstore.google.com/detail/ccmaster/bjhillnmacglldmofjehkbhpkljbcmie",
  },
  {
    name: "Tugumap",
    description:
      "Map app that allows users to create and share custom maps with personalized markers and routes. Built with React and Mapbox GL JS.",
    tech: ["Python", "FastAPI", "Redis"],
    github: null,
    live: "#",
  },
];

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#64ffda" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 scroll-mt-20">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-2xl font-bold text-primary whitespace-nowrap">
          <span className="font-mono text-accent mr-2">03.</span>Work
        </h2>
        <div className="flex-1 h-px bg-secondary/20" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-navy-light p-6 rounded flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="flex justify-between items-start">
              <FolderIcon />
              <div className="flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    <GithubIcon />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-primary font-semibold text-lg">{p.name}</h3>
            <p className="text-secondary text-sm leading-relaxed flex-1">{p.description}</p>

            <div className="flex flex-wrap gap-3">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
