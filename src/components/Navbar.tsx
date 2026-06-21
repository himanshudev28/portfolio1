import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work',       href: '#work'       },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [solid, setSolid]   = useState(false)
  const [menuOpen, setMenu] = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 48)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMobile = () => setMenu(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between
                    px-6 md:px-10 py-5 transition-all duration-400
                    ${solid ? 'bg-bg-deep/88 backdrop-blur-xl border-b border-white/[0.06]' : ''}`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-[1.1rem] tracking-[-0.02em]
                     bg-gradient-to-br from-rose-200 to-rose-400
                     bg-clip-text text-transparent"
        >
          HS
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-[0.7rem] tracking-[0.1em] uppercase
                           text-ink-sub hover:text-ink transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire CTA */}
        <a
          href="mailto:himanshu28071994@gmail.com"
          className="hidden md:inline-flex items-center px-4 py-2
                     font-mono text-[0.7rem] tracking-[0.06em] text-rose-400
                     border border-rose-600/40 rounded-[5px]
                     hover:bg-rose-950/40 hover:border-rose-400/60
                     transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenu(true)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          className="md:hidden p-2 flex flex-col gap-[5px]"
        >
          {[0,1,2].map((i) => (
            <span key={i} className="block w-5 h-0.5 bg-ink rounded" />
          ))}
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-bg-deep/96 backdrop-blur-2xl
                       flex flex-col items-center justify-center gap-10"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <button
              onClick={closeMobile}
              aria-label="Close navigation"
              className="absolute top-5 right-6 text-ink-sub text-2xl p-2 hover:text-ink transition-colors"
            >
              ✕
            </button>
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={closeMobile}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[2.25rem] text-ink
                           hover:text-rose-400 transition-colors duration-200"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
