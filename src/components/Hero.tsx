import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const Robot3D = lazy(() => import('./Robot3D'))

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  { num: '3+',   suffix: '',  label: 'Projects' },
  { num: '3',    suffix: '×', label: 'Internships' },
  { num: '8.5',  suffix: '',  label: 'CGPA' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col justify-center
                 pt-24 pb-16 md:pt-28 md:pb-20
                 px-5 sm:px-6 md:px-12 
                 dot-grid"
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="blob absolute -top-[20%] right-[-5%]
                        w-[700px] h-[700px]
                        bg-rose-900/[0.13]" />
        <div className="blob absolute bottom-[-10%] left-[-5%]
                        w-[500px] h-[500px]
                        bg-violet-900/[0.09]" />
        <div className="blob absolute top-[40%] left-[30%]
                        w-[300px] h-[300px]
                        bg-rose-800/[0.06]" />
      </div>

      {/* ── Gradient line at very top ── */}
      <div className="absolute top-0 inset-x-0 h-px
                      bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"
           aria-hidden />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-6 xl:gap-14">

          {/* ── LEFT: Content ── */}
          <div className="flex-1 min-w-0">

            {/* Availability pill */}
            <motion.div {...up(0)} className="inline-flex items-center gap-2.5 mb-8
                                               px-4 py-2 rounded-full
                                               bg-white/[0.04] border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400
                               shadow-[0_0_8px_rgba(74,222,128,0.9)]
                               animate-breathe" />
              <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-ink-sub">
                Available · Uttar Pradesh, India
              </span>
            </motion.div>

            {/* Name headline */}
            <motion.h1
              {...up(0.07)}
              className="font-display leading-[0.9] tracking-[-0.03em] mb-6"
            >
              <span
                className="block text-[clamp(40px,5.5vw,86px)] select-none"
                style={{
                  background: 'linear-gradient(90deg, #FDA4AF 0%, #F43F5E 50%, #FB7185 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                HIMANSHU
              </span>
              <span
                className="block text-[clamp(40px,5.5vw,86px)] select-none"
                style={{
                  WebkitTextStroke: '1.5px var(--name-stroke)',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                SINGH
              </span>
            </motion.h1>

            {/* Role / Tagline */}
            <motion.div {...up(0.14)} className="mb-8">
              <p className="text-ink-sub text-[clamp(0.9rem,1.4vw,1.08rem)] leading-[1.85] max-w-[500px]">
                <span className="text-ink font-medium">Full Stack Developer</span> who ships
                production-ready web apps.<br />
                B.Tech 2026 · Invertis University ·{' '}
                <span className="text-rose-400">CGPA 8.5</span>
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...up(0.20)} className="flex flex-wrap gap-3 mb-12">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                           bg-rose-500 text-white font-medium text-[0.88rem]
                           hover:bg-rose-400
                           hover:shadow-[0_8px_32px_rgba(244,63,94,0.55)]
                           transition-all duration-250 active:scale-95"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M17 8l4 4-4 4M3 12h18" />
                </svg>
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                           border border-white/10 text-ink-sub font-medium text-[0.88rem]
                           hover:border-rose-500/40 hover:text-rose-400 hover:bg-rose-950/20
                           transition-all duration-250"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div {...up(0.27)} className="flex flex-wrap gap-4 sm:gap-5">
              {STATS.map(({ num, suffix, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-0.5 pr-4 sm:pr-5
                             border-r border-white/[0.06] last:border-r-0"
                >
                  <div className="font-display font-bold text-[2rem] leading-none text-ink">
                    {num}
                    <span className="text-rose-400 text-[1.4rem]">{suffix}</span>
                  </div>
                  <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-ink-muted">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 3D robot + floating cards ── */}
          <div className="relative flex-shrink-0
                          w-full max-w-[260px] mx-auto h-[240px]
                          sm:max-w-[320px] sm:h-[280px]
                          lg:max-w-none lg:w-[400px] xl:w-[480px]
                          lg:h-[500px] xl:h-[540px]">

            {/* Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-rose-500 border-t-transparent
                                  animate-spin" />
                </div>
              }>
                <Robot3D />
              </Suspense>
            </motion.div>

            {/* Floating badge — top-left */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="hidden lg:flex absolute top-[12%] -left-10
                         glass px-3.5 py-2.5 rounded-xl
                         items-center gap-2.5
                         animate-floatY"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-rose-400 text-lg">⚡</span>
              <div>
                <div className="font-display font-bold text-[0.82rem] text-ink leading-none">
                  React + TS
                </div>
                <div className="font-mono text-[0.6rem] text-ink-sub mt-0.5">Primary stack</div>
              </div>
            </motion.div>

            {/* Floating badge — bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="hidden lg:flex absolute bottom-[15%] -right-8
                         glass px-3.5 py-2.5 rounded-xl
                         items-center gap-2.5
                         animate-floatY"
              style={{ animationDelay: '1.8s' }}
            >
              <span className="text-green-400 text-lg">✦</span>
              <div>
                <div className="font-display font-bold text-[0.82rem] text-ink leading-none">
                  3 Projects
                </div>
                <div className="font-mono text-[0.6rem] text-ink-sub mt-0.5">In production</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Bottom scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-1.5 text-ink-muted"
        aria-hidden
      >
        <span className="font-mono text-[0.58rem] tracking-[0.18em] uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-rose-500/60 to-transparent" />
      </motion.div>
    </section>
  )
}
