import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <EmailLink />

      <main className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        {/* hero */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <p className="font-mono text-accent text-base mb-5 tracking-wider">
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-tight tracking-tight mb-3">
            Tuguldur.
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary leading-tight tracking-tight mb-8">
            I love building things.
          </h2>
          <p className="text-secondary text-lg max-w-xl leading-relaxed mb-12">
            I&apos;m a software engineer focused on crafting clean, fast, and
            accessible digital experiences. Right now I&apos;m into full-stack
            development and always looking for interesting problems to solve.
          </p>
          <a
            href="#work"
            className="font-mono text-sm text-accent border border-accent px-7 py-4 w-fit hover:bg-accent/10 transition-colors"
          >
            Check out my work!
          </a>
        </section>

        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}
