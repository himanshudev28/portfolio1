export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 py-6
                       flex flex-wrap items-center justify-between gap-3">
      <span className="font-mono text-[0.68rem] tracking-[0.06em] text-ink-muted">
        © 2026 Himanshu Singh
      </span>
      <span className="font-mono text-[0.68rem] tracking-[0.06em] text-ink-muted">
        Built with <span className="text-rose-400">React + Three.js</span>
      </span>
    </footer>
  )
}
