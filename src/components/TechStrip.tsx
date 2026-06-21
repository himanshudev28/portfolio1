const STACK = [
  'React.js','TypeScript','Next.js','Node.js','Tailwind CSS',
  'MongoDB','Supabase','PostgreSQL','Express.js','ShadCN',
  'Git','Vercel','JWT','REST APIs','Java','Python',
]

const items = [...STACK, ...STACK]

export default function TechStrip() {
  return (
    <div
      className="overflow-hidden py-4 bg-bg-base relative"
      aria-label="Technology stack"
    >
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 z-10
                      bg-gradient-to-r from-bg-base to-transparent pointer-events-none" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-24 z-10
                      bg-gradient-to-l from-bg-base to-transparent pointer-events-none" aria-hidden />

      <div
        className="flex whitespace-nowrap animate-ticker hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 px-8
                       font-mono text-[0.65rem] tracking-[0.12em] text-ink-muted
                       after:content-['·'] after:text-rose-600/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
