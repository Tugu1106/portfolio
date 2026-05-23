"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Work", href: "#work" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 md:px-12 ${
          scrolled ? "bg-navy/95 shadow-lg py-4" : "py-6"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-accent text-lg font-semibold hover:opacity-75 transition-opacity"
          >
            &lt;/&gt;
          </Link>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ol className="flex items-center gap-8 list-none m-0 p-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-mono text-sm text-secondary hover:text-accent transition-colors"
                  >
                    <span className="text-accent text-xs">{l.num}. </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent border border-accent px-4 py-2 hover:bg-accent/10 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* hamburger */}
          <button
            className="md:hidden relative z-50 flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label="toggle menu"
          >
            <span
              className={`block w-6 h-px bg-accent transition-all duration-300 origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-accent transition-all duration-300 ${
                open ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block w-6 h-px bg-accent transition-all duration-300 origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-navy/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* side drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs z-40 bg-navy-light flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ol className="flex flex-col items-center gap-7 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex flex-col items-center gap-1 font-mono"
                onClick={() => setOpen(false)}
              >
                <span className="text-accent text-xs">{l.num}.</span>
                <span className="text-primary text-base">{l.label}</span>
              </Link>
            </li>
          ))}
        </ol>
        <a
          href="/resume.pdf"
          target="_blank"
          className="font-mono text-sm text-accent border border-accent px-6 py-3 hover:bg-accent/10 transition-colors mt-2"
        >
          Resume
        </a>
      </aside>
    </>
  );
}
