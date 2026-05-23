export default function EmailLink() {
  return (
    <div className="fixed bottom-0 right-6 lg:right-10 hidden md:flex flex-col items-center gap-4">
      <a
        href="mailto:togoldor8995@gmail.com"
        className="font-mono text-base text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl] tracking-widest"
      >
        togoldor8995@gmail.com
      </a>
      <div className="w-px h-24 bg-secondary/50" />
    </div>
  );
}
