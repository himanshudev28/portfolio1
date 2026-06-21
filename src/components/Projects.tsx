import type React from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    title: 'SeatSync',
    badge: 'Team · Live',
    badgeClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20',
    liveUrl: 'https://seat-sync-five.vercel.app/',
    desc: 'A full-stack event ticketing platform with real-time interactive seat selection, conflict-safe 10-minute holds, and a complete admin dashboard for event management and revenue analytics.',
    bullets: [
      'Interactive seat maps with conflict-safe 10-minute timed holds',
      'JWT + Google OAuth with QR-code ticket generation and check-in validation',
      'Admin dashboard for event management, booking analytics, and revenue tracking',
      'Serverless Node.js REST APIs on MongoDB for scalable booking flows',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'ShadCN'],
    featured: true,
    glowColor: 'rgba(244,63,94,0.18)',
    overlayFrom: 'from-rose-500/[0.06]',
    overlayTo: 'to-violet-500/[0.04]',
    hoverBorder: 'hover:border-rose-500/30',
  },
  {
    num: '02',
    title: 'ChapterWave',
    badge: 'Solo · Live',
    badgeClass: 'text-amber-400 bg-amber-400/10 border-amber-500/20',
    liveUrl: 'https://inkwell-spark-64.lovable.app/',
    desc: 'AI-powered eBook writing platform where authors create, organize, and publish books in a rich Markdown editor with drag-and-drop chapter management.',
    bullets: [
      'Drag-and-drop chapters with live Markdown preview',
      'Writing analytics dashboards and PDF / Markdown export',
      'Supabase auth, database, and role-based access control',
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'ShadCN'],
    featured: false,
    glowColor: 'rgba(245,158,11,0.16)',
    overlayFrom: 'from-amber-500/[0.06]',
    overlayTo: 'to-rose-500/[0.03]',
    hoverBorder: 'hover:border-amber-500/30',
  },
  {
    num: '03',
    title: 'Fried&Crispy',
    badge: 'Solo · Vercel',
    badgeClass: 'text-rose-400 bg-rose-400/10 border-rose-500/20',
    liveUrl: 'https://friedandcrispy.vercel.app/',
    desc: 'Modern responsive restaurant website with immersive landing and rich menu showcase, deployed on Vercel with mobile-first reusable components.',
    bullets: [
      'Mobile-first reusable UI components',
      'Rich landing page with menu and smooth transitions',
      'Consistent cross-device rendering on Vercel',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'ShadCN'],
    featured: false,
    glowColor: 'rgba(244,63,94,0.16)',
    overlayFrom: 'from-rose-600/[0.06]',
    overlayTo: 'to-orange-500/[0.03]',
    hoverBorder: 'hover:border-rose-500/30',
  },
]

function ArrowIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

const card = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  }),
}

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 px-5 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
        >
          <div className="section-chip">Selected Work</div>
          <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3.2rem)]
                         tracking-[-0.025em] leading-[1.08] mb-3">
            Things I've built
          </h2>
          <p className="text-ink-sub text-[1rem] leading-[1.8] max-w-[420px] mb-14">
            Production-deployed apps solving real problems — from event management
            to AI-powered publishing.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              style={{ '--glow': p.glowColor } as React.CSSProperties}
              className={`group relative bg-bg-card border border-white/[0.07] rounded-2xl
                          overflow-hidden transition-all duration-300
                          hover:-translate-y-1 ${p.hoverBorder}
                          hover:shadow-[0_0_60px_var(--glow),0_20px_50px_rgba(0,0,0,0.6)]
                          ${p.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Inner gradient overlay — fades in on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100
                               transition-opacity duration-500 pointer-events-none
                               bg-gradient-to-br ${p.overlayFrom} via-transparent ${p.overlayTo}`}
                   aria-hidden />

              {/* Top glow edge line */}
              <div className="absolute inset-x-0 top-0 h-px
                              bg-gradient-to-r from-transparent via-white/[0.12] to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   aria-hidden />

              <div className="relative z-10 p-5 sm:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.6rem] tracking-[0.14em] text-ink-muted">
                      {p.num}
                    </span>
                    <h3 className="font-display font-bold text-[1.35rem] tracking-[-0.01em] text-ink">
                      {p.title}
                    </h3>
                  </div>
                  <span className={`font-mono text-[0.58rem] tracking-[0.1em] uppercase
                                   px-2.5 py-1 rounded-[5px] border shrink-0 ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                </div>

                <div className={p.featured ? 'grid md:grid-cols-[1fr_auto] gap-8 md:gap-14' : ''}>
                  <div>
                    <p className="text-ink-sub text-[0.88rem] leading-[1.8] mb-5">{p.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-5">
                      <a
                        href="https://github.com/himanshudev28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5
                                   font-mono text-[0.68rem] tracking-[0.08em] uppercase
                                   text-ink-sub hover:text-ink transition-colors duration-200"
                      >
                        <GithubIcon /> GitHub
                      </a>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5
                                     font-mono text-[0.68rem] tracking-[0.08em] uppercase
                                     text-rose-400 hover:text-rose-300 transition-colors duration-200"
                        >
                          <ArrowIcon /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bullets (featured only) */}
                  {p.featured && (
                    <ul className="flex flex-col gap-3 md:min-w-[260px] md:max-w-[320px]">
                      {p.bullets.map(b => (
                        <li key={b}
                          className="flex gap-2.5 text-[0.85rem] text-ink-sub leading-[1.7]"
                        >
                          <span className="text-rose-500/70 shrink-0 mt-0.5 text-[0.8rem]">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bullets (non-featured) */}
                {!p.featured && (
                  <ul className="mt-5 flex flex-col gap-2">
                    {p.bullets.map(b => (
                      <li key={b}
                        className="flex gap-2 text-[0.84rem] text-ink-sub leading-[1.65]"
                      >
                        <span className="text-rose-500/70 shrink-0 text-[0.78rem]">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/himanshudev28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem]
                       tracking-[0.1em] uppercase text-ink-sub
                       border border-white/[0.07] rounded-full px-6 py-2.5
                       hover:text-ink hover:border-white/15
                       transition-all duration-200"
          >
            <GithubIcon />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
