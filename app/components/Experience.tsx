"use client";

import { useState } from "react";

const jobs = [
  {
    company: "National University of Mongolia",
    url: "https://portal.num.edu.mn/en/",
    role: "Software Engineer",
    range: "2020 — 2025",
    points: [
      "Completed a 5-year software engineering program, building projects across web development, databases, and systems programming",
      "Developed a Chrome extension independently that reached 500+ active users while still a student",
      "Built a full-stack appointment booking platform using React, Node.js, and PostgreSQL as a major project",
      "Created desktop productivity applications using Electron, applying cross-platform development skills",
    ],
  },
  {
    company: "Nomin Holding",
    url: "#",
    role: "Software Engineer Intern",
    range: "2023 — 2024",
    points: [
      "Researched and prototyped a Python-based chatbot using NLP techniques to handle internal query automation",
      "Explored machine learning and deep learning concepts, applying them to text classification and language understanding tasks",
      "Studied transformer-based models and NLP pipelines as part of an AI research initiative within the company",
      "Worked with Python ML libraries including experimentation with model training, evaluation, and iteration",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="py-24 scroll-mt-20">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-2xl font-bold text-primary whitespace-nowrap">
          <span className="font-mono text-accent mr-2">02.</span>Experience
        </h2>
        <div className="flex-1 h-px bg-secondary/20" />
      </div>

      <div className="flex flex-col md:flex-row gap-0 md:gap-10">
        {/* tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-secondary/20 shrink-0">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              onClick={() => setActive(i)}
              className={`font-mono text-sm px-5 py-3 text-left whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 -mb-0.5 md:mb-0 md:-ml-0.5 transition-colors ${
                active === i
                  ? "border-accent text-accent bg-navy-light"
                  : "border-transparent text-secondary hover:text-accent hover:bg-navy-light/50"
              }`}
            >
              {j.company}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="pt-6 md:pt-1">
          <h3 className="text-primary font-semibold text-xl mb-1">
            {job.role}{" "}
            <a
              href={job.url}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {job.company}
            </a>
          </h3>
          <p className="font-mono text-xs text-secondary mb-6 tracking-wider">
            {job.range}
          </p>
          <ul className="space-y-3">
            {job.points.map((p) => (
              <li key={p} className="flex gap-3 text-secondary leading-relaxed">
                <span className="text-accent mt-1 shrink-0">▹</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
