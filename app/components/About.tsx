import { type IconType } from "react-icons";
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiElectron,
  SiNodedotjs, SiExpress,
  SiPostgresql, SiSupabase, SiSqlite,
  SiGnubash, SiGit, SiGithub, SiVercel, SiRender, SiPostman, SiGooglechrome,
} from "react-icons/si";

type TechItem = { Icon: IconType; name: string };

const stack: { category: string; items: TechItem[] }[] = [
  {
    category: "Languages",
    items: [
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: SiHtml5, name: "HTML" },
      { Icon: SiCss, name: "CSS" },
      { Icon: SiPython, name: "Python" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { Icon: SiReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
      { Icon: SiElectron, name: "Electron" },
    ],
  },
  {
    category: "Backend",
    items: [
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiExpress, name: "Express.js" },
    ],
  },
  {
    category: "Databases",
    items: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiSupabase, name: "Supabase" },
      { Icon: SiSqlite, name: "SQLite" },
    ],
  },
  {
    category: "Tools & Other",
    items: [
      { Icon: SiGnubash, name: "Bash" },
      { Icon: SiGit, name: "Git" },
      { Icon: SiGithub, name: "GitHub" },
      { Icon: SiVercel, name: "Vercel" },
      { Icon: SiRender, name: "Render" },
      { Icon: SiPostman, name: "Postman" },
      { Icon: SiGooglechrome, name: "Chrome APIs" },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-2xl font-bold text-primary whitespace-nowrap">
          <span className="font-mono text-accent mr-2">01.</span>About Me
        </h2>
        <div className="flex-1 h-px bg-secondary/20" />
      </div>

      {/* bio + photo */}
      <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
        <div className="md:col-span-3 space-y-5 text-secondary text-lg leading-relaxed">
          <p>
            I&apos;m a full-stack developer from Ulaanbaatar who loves turning ideas into
            working applications. From appointment booking systems to browser extensions,
            I build software that people actually use.
          </p>
          <p>
            Recently graduated, currently seeking junior developer opportunities where I
            can contribute and continue learning.
          </p>

          <div className="pt-2">
            <p className="mb-3">
              I specialize in building web applications with modern technologies.
              My recent work includes:
            </p>
            <ul className="space-y-2">
              {[
                "Full-stack appointment booking platforms",
                "Chrome extensions with 500+ active users",
                "Desktop productivity applications",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* photo placeholder */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="w-56 h-56 md:w-64 md:h-64 bg-navy-light border border-accent/30 rounded flex items-center justify-center font-mono text-5xl font-bold text-accent/60">
              TG
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent rounded -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* tech stack */}
      <div className="space-y-8">
        <h3 className="text-primary font-semibold text-lg">
          Technologies I work with
        </h3>

        {stack.map(({ category, items }) => (
          <div key={category}>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              {category}
            </p>
            <div className="flex flex-wrap gap-3">
              {items.map(({ Icon, name }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center justify-center gap-2 w-[88px] h-[76px] rounded border border-secondary/10 hover:border-accent/30 hover:bg-navy-light transition-all duration-200 cursor-default"
                >
                  <Icon
                    size={26}
                    className="text-secondary group-hover:text-accent transition-colors duration-200"
                  />
                  <span className="font-mono text-[10px] text-secondary/60 group-hover:text-secondary text-center leading-tight transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
