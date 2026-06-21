import { motion } from 'framer-motion'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/himanshudev28',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/himanshu2807',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: '+91 91207 41461',
    href: 'tel:+919120741461',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12">
      <div className="max-w-[680px] mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-6 h-px bg-rose-500" />
          <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-rose-400">
            Let's connect
          </span>
          <span className="w-6 h-px bg-rose-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.025em]
                     leading-[1.1] mb-4"
        >
          Ready to build<br />something together?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.14 }}
          className="text-ink-sub text-[1rem] leading-[1.75] max-w-[380px] mx-auto mb-10"
        >
          Whether it's a job opportunity, a collaboration, or just a hello — reach out and let's talk.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }}
          href="mailto:himanshu28071994@gmail.com"
          className="inline-block font-display font-bold text-[clamp(0.95rem,2.2vw,1.45rem)]
                     tracking-[-0.01em] text-ink border-b border-white/10
                     hover:text-rose-400 hover:border-rose-500/50
                     transition-all duration-200 pb-1 mb-10"
        >
          himanshu28071994@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.26 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.08em]
                         text-ink-sub border border-white/[0.06] rounded-[7px] px-5 py-2.5
                         hover:text-ink hover:border-white/10 hover:bg-white/[0.02]
                         transition-all duration-200"
            >
              {icon}
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
