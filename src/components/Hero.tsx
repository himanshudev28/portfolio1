import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const Robot3D = lazy(() => import('./Robot3D'))

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden
                 px-6 md:px-12 pt-28 pb-16 dot-grid"
    >
      {/* Ambient glow orbs — rose not violet */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[15%] right-[-10%] w-[650px] h-[650px] rounded-full
                        bg-rose-900/12 blur-[90px]" />
        <div className="absolute bottom-[5%] left-[5%] w-[380px] h-[380px] rounded-full
                        bg-amber-900/8 blur-[70px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-6 lg:gap-10">

          {/* ── Left: content ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-2.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-green-400
                               shadow-[0_0_10px_rgba(74,222,128,0.65)]
                               animate-breathe" />
              <span className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-ink-sub">
                Available for opportunities · Bareilly, India
              </span>
            </motion.div>

            {/* SIGNATURE: gradient fill + ghost outline */}
            <motion.h1 {...fadeUp(0.08)} className="font-display leading-[0.9] tracking-[-0.03em] mb-7">
              {/* Filled — warm coral gradient, completely unlike AI violet */}
              <span className="block text-[clamp(48px,7.5vw,118px)]
                               bg-gradient-to-br from-rose-200 via-rose-400 to-rose-600
                               bg-clip-text text-transparent select-none">
                HIMANSHU
              </span>
              {/* Outlined — same rose tint, subtle */}
              <span className="block text-[clamp(48px,7.5vw,118px)]
                               text-transparent select-none
                               [-webkit-text-stroke:1.5px_rgba(251,113,133,0.35)]">
                SINGH
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p {...fadeUp(0.16)}
              className="text-ink-sub text-[clamp(0.9rem,1.5vw,1.1rem)] leading-[1.8]
                         max-w-[480px] mb-9"
            >
              <strong className="text-ink font-medium">Full Stack Developer</strong> who ships
              production-ready web applications.<br />
              B.Tech 2026 · Invertis University ·{' '}
              <span className="text-rose-400">CGPA 8.5</span>
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3 mb-12">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[6px]
                           bg-rose-600 hover:bg-rose-500 text-white font-medium text-[0.9rem]
                           border border-rose-600 hover:border-rose-500
                           transition-all duration-200 hover:-translate-y-0.5
                           hover:shadow-[0_10px_30px_rgba(244,63,94,0.38)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M17 8l4 4-4 4M3 12h18" />
                </svg>
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[6px]
                           bg-transparent text-ink font-medium text-[0.9rem]
                           border border-white/10 hover:border-rose-500/40
                           hover:text-rose-400 hover:bg-rose-950/20
                           transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-8">
              {[
                { num: '3+',   label: 'Projects Shipped' },
                { num: '3×',   label: 'Internships'      },
                { num: '8.5',  label: 'CGPA'             },
                { num: '2026', label: 'Graduating'        },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-[1.75rem] text-ink leading-none">
                    {num.replace(/[+×]/, '')}
                    <span className="text-amber-400 text-[0.85em]">{num.match(/[+×]/)?.[0]}</span>
                  </div>
                  <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ink-muted mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D robot ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0
                       w-full max-w-[300px] mx-auto h-[280px]
                       md:max-w-none md:w-[360px] lg:w-[440px] xl:w-[500px]
                       md:h-[480px] lg:h-[540px]"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
              </div>
            }>
              <Robot3D />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
