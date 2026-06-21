export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 md:px-12 py-7">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[0.65rem] tracking-[0.08em] text-ink-muted">
          © 2026 Himanshu Singh
        </span>
        <span className="font-mono text-[0.65rem] tracking-[0.06em] text-ink-muted">
          Built with{' '}
          <span className="text-rose-400/80">React</span>
          {' · '}
          <span className="text-violet-400/80">Three.js</span>
          {' · '}
          <span className="text-amber-400/80">Framer Motion</span>
        </span>
        <a
          href="#"
          className="font-mono text-[0.65rem] tracking-[0.08em] text-ink-muted
                     hover:text-rose-400 transition-colors duration-200"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  )
}
