import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Work',       href: '#work'       },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
]

function SunIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenu]       = useState(false)
  const shimmerRef                = useRef<HTMLDivElement>(null)
  const { theme, toggle }         = useTheme()
  const isDark                    = theme === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* Restart liquid shimmer on mouse-enter */
  const restartShimmer = () => {
    const el = shimmerRef.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetWidth              // reflow
    el.style.animation = 'liquidDrift 1.4s cubic-bezier(0.4,0,0.2,1) forwards'
  }

  /* Theme-aware color helpers */
  const navBg = scrolled
    ? isDark ? 'rgba(8,8,8,0.65)' : 'rgba(248,247,245,0.85)'
    : isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'

  const navBorder     = isDark ? 'rgba(255,255,255,0.11)' : 'rgba(0,0,0,0.10)'
  const navBorderTop  = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.14)'

  const navShadow = scrolled
    ? isDark
      ? ['inset 0 1px 0 rgba(255,255,255,0.14)', 'inset 0 -1px 0 rgba(0,0,0,0.25)',
         '0 8px 40px rgba(0,0,0,0.55)', '0 0 0 1px rgba(244,63,94,0.06)',
         '0 4px 24px rgba(244,63,94,0.06)'].join(', ')
      : ['0 4px 24px rgba(0,0,0,0.10)', '0 0 0 1px rgba(244,63,94,0.08)'].join(', ')
    : isDark
      ? ['inset 0 1px 0 rgba(255,255,255,0.10)', 'inset 0 -1px 0 rgba(0,0,0,0.12)',
         '0 4px 24px rgba(0,0,0,0.25)'].join(', ')
      : '0 2px 16px rgba(0,0,0,0.07)'

  const shimmerColor = isDark
    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent)'
    : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.04), transparent)'

  const edgeHighlight = isDark
    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)'
    : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)'

  const menuBg = isDark ? 'rgba(8,8,8,0.92)' : 'rgba(248,247,245,0.96)'

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[100] flex justify-center pt-4 px-4"
      >
        {/* ── Glass pill ── */}
        <nav
          onMouseEnter={restartShimmer}
          className="relative flex items-center gap-1 px-2 py-2 rounded-full
                     overflow-hidden transition-all duration-500 cursor-default"
          style={{
            background:           navBg,
            backdropFilter:       'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            border:           `1px solid ${navBorder}`,
            borderTopColor:   navBorderTop,
            boxShadow:        navShadow,
            transition:       'background 0.3s ease, box-shadow 0.5s ease, border-color 0.3s ease',
          }}
        >
          {/* ── Rose-to-violet tint layer ── */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'linear-gradient(105deg, rgba(244,63,94,0.06) 0%, transparent 45%, rgba(139,92,246,0.05) 100%)',
            }}
          />

          {/* ── Liquid shimmer sweep ── */}
          <div
            ref={shimmerRef}
            className="absolute inset-y-0 w-1/3 pointer-events-none rounded-full"
            style={{
              background:  shimmerColor,
              transform:  'translateX(-120%) skewX(-15deg)',
            }}
          />

          {/* ── Top-edge glass highlight ── */}
          <div
            className="absolute inset-x-6 top-0 h-px pointer-events-none"
            style={{ background: edgeHighlight }}
          />

          {/* ── Logo ── */}
          <a
            href="#"
            className="relative z-10 font-display font-bold text-sm
                       px-4 py-1.5 mr-1 rounded-full
                       hover:bg-white/[0.05] transition-all duration-200"
            style={{
              background:           'linear-gradient(135deg, #FDA4AF, #F43F5E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}
          >
            HS
          </a>

          {/* ── Desktop links ── */}
          <ul className="relative z-10 hidden md:flex items-center gap-0.5">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="px-4 py-1.5 rounded-full
                             font-mono text-[0.67rem] tracking-[0.09em] uppercase
                             text-ink-sub hover:text-ink hover:bg-white/[0.06]
                             transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Theme toggle — desktop ── */}
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative z-10 hidden md:flex items-center justify-center
                       w-8 h-8 ml-1 rounded-full
                       border border-white/[0.08] text-ink-sub
                       hover:text-ink hover:bg-white/[0.06] hover:border-white/15
                       transition-all duration-200"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* ── Hire Me CTA ── */}
          <a
            href="mailto:himanshu28071994@gmail.com"
            className="relative z-10 hidden md:inline-flex items-center
                       ml-1 px-4 py-1.5 rounded-full
                       font-mono text-[0.67rem] tracking-[0.08em] uppercase
                       bg-rose-500 text-white
                       hover:bg-rose-400
                       hover:shadow-[0_4px_20px_rgba(244,63,94,0.55)]
                       transition-all duration-200"
          >
            Hire Me
          </a>

          {/* ── Theme toggle — mobile ── */}
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative z-10 md:hidden flex items-center justify-center
                       w-8 h-8 rounded-full
                       border border-white/[0.08] text-ink-sub
                       hover:text-ink hover:bg-white/[0.06]
                       transition-all duration-200"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* ── Hamburger (mobile) ── */}
          <button
            onClick={() => setMenu(true)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            className="relative z-10 md:hidden p-2.5 rounded-full
                       hover:bg-white/[0.06] transition-colors"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block w-5 h-[1.5px] bg-ink rounded-full" />
              <span className="block w-5 h-[1.5px] bg-ink rounded-full" />
              <span className="block w-5 h-[1.5px] bg-ink rounded-full" />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8"
            style={{
              background:           menuBg,
              backdropFilter:       'blur(40px) saturate(160%)',
              WebkitBackdropFilter: 'blur(40px) saturate(160%)',
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* Close */}
            <button
              onClick={() => setMenu(false)}
              aria-label="Close navigation"
              className="absolute top-6 right-6 w-9 h-9 rounded-full
                         flex items-center justify-center
                         border border-white/10 text-ink-sub
                         hover:text-ink hover:border-white/20 transition-all"
            >
              ✕
            </button>

            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMenu(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[2.5rem] text-ink
                           hover:text-rose-400 transition-colors duration-200"
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="mailto:himanshu28071994@gmail.com"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              className="mt-4 px-8 py-3 rounded-full
                         bg-rose-500 text-white font-mono text-sm
                         tracking-widest uppercase
                         hover:bg-rose-400 transition-colors"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
