const STACK = [
  'React.js','TypeScript','Next.js','Node.js','Tailwind CSS',
  'MongoDB','Supabase','PostgreSQL','Express.js','ShadCN',
  'Git','Vercel','JWT','REST APIs','Java','Python',
]

const items = [...STACK, ...STACK]

export default function TechStrip() {
  return (
    <div className="overflow-hidden border-y border-white/[0.06] bg-bg-base py-3.5"
         aria-label="Technology stack">
      <div className="flex whitespace-nowrap animate-ticker hover:[animation-play-state:paused]"
           aria-hidden="true">
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-7 px-7
                       font-mono text-[0.7rem] tracking-[0.1em] text-ink-muted
                       after:content-['·'] after:text-rose-600/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
