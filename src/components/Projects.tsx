import { motion } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    title: 'SeatSync',
    type: 'Team · Live',
    typeColor: 'text-green-400 bg-green-400/10',
    liveUrl: 'https://seat-sync-five.vercel.app/',
    desc: 'A full-stack event ticketing platform with real-time interactive seat selection, conflict-safe 10-minute holds, and a complete admin dashboard for event management and revenue analytics.',
    bullets: [
      'Interactive seat maps with conflict-safe 10-minute timed holds',
      'JWT + Google OAuth auth with QR-code ticket generation and check-in validation',
      'Admin dashboard for event management, booking analytics, and revenue tracking',
      'Serverless Node.js REST APIs on MongoDB for scalable booking flows',
    ],
    tags: ['React','TypeScript','Node.js','MongoDB','Tailwind CSS','ShadCN','REST APIs'],
    featured: true,
  },
  {
    num: '02',
    title: 'ChapterWave',
    type: 'Solo · Live',
    typeColor: 'text-amber-400 bg-amber-400/10',
    liveUrl: 'https://inkwell-spark-64.lovable.app/',
    desc: 'An AI-powered eBook writing platform where authors create, organize, and publish books in a rich Markdown editor with drag-and-drop chapter management.',
    bullets: [
      'Drag-and-drop chapter management with live Markdown preview',
      'Writing analytics dashboards and PDF / Markdown export',
      'Supabase for auth, database, and role-based access control',
    ],
    tags: ['React','TypeScript','Supabase','Tailwind CSS','ShadCN'],
  },
  {
    num: '03',
    title: 'Fried&Crispy',
    type: 'Solo · Vercel',
    typeColor: 'text-rose-400 bg-rose-400/10',
    liveUrl: 'https://friedandcrispy.vercel.app/',
    desc: 'A modern responsive restaurant website with an immersive landing experience and rich menu showcase, deployed on Vercel with mobile-first reusable components.',
    bullets: [
      'Mobile-first reusable UI components with React + ShadCN',
      'Rich landing page with menu showcase and smooth transitions',
      'Consistent cross-device rendering deployed on Vercel',
    ],
    tags: ['React','TypeScript','Tailwind CSS','ShadCN'],
  },
]

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const card = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  }),
}

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-6 h-px bg-rose-500" />
          <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-rose-400">
            Selected Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.025em]
                     leading-[1.1] mb-3"
        >
          Things I've built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: 0.14 }}
          className="text-ink-sub text-[1rem] leading-[1.75] max-w-[420px] mb-12"
        >
          Production-deployed applications — each solving a real problem, from event management
          to AI-powered publishing.
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`group relative bg-bg-card border border-white/[0.06] rounded-[14px]
                          p-8 overflow-hidden transition-all duration-300
                          hover:border-rose-600/35 hover:-translate-y-1
                          hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(124,58,237,0.12)]
                          ${p.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none
                              bg-gradient-to-br from-rose-600/5 to-transparent" />

              <div className={p.featured ? 'grid md:grid-cols-2 gap-8 md:gap-12' : ''}>
                <div>
                  <div className="font-mono text-[0.65rem] tracking-[0.12em] text-ink-muted mb-4">
                    {p.num} / 03
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-[1.32rem] tracking-[-0.01em] text-ink">
                      {p.title}
                    </h3>
                    <span className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase
                                     px-2.5 py-1 rounded-[4px] shrink-0 ${p.typeColor}`}>
                      {p.type}
                    </span>
                  </div>
                  <p className="text-ink-sub text-[0.88rem] leading-[1.75] mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t}
                        className="font-mono text-[0.65rem] tracking-[0.04em] text-ink-muted
                                   bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-[4px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/himanshudev28" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[0.7rem]
                                 tracking-[0.08em] uppercase text-rose-400 hover:text-ink
                                 transition-colors duration-200">
                      <GitHubIcon /> GitHub
                    </a>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.7rem]
                                   tracking-[0.08em] uppercase text-rose-400 hover:text-ink
                                   transition-colors duration-200">
                        <ExternalIcon /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {p.featured && (
                  <ul className="flex flex-col gap-2.5 mt-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[0.86rem] text-ink-sub leading-[1.65]">
                        <span className="text-rose-400 shrink-0 mt-0.5">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {!p.featured && (
                <ul className="mt-5 flex flex-col gap-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[0.84rem] text-ink-sub leading-[1.6]">
                      <span className="text-rose-400 shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
