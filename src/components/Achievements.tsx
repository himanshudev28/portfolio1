import { motion } from 'framer-motion'

const ITEMS = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        <path d="M15 7a3 3 0 11-6 0 3 3 0 016 0zM20.07 4.93A10 10 0 003.93 19.07" />
      </svg>
    ),
    title: 'Robo Rumble — 2nd Prize',
    desc: 'Built a custom Bluetooth RC car from scratch and won second place at the college robotics competition.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Tech Committee Member',
    desc: 'Core member of the college Tech Committee — driving web development projects, events, and internal tooling.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'IIC Creative Lead',
    desc: 'Delivered digital content, UI/UX direction, and video editing for the college Innovation and Incubation Cell.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Web Dev Certified',
    desc: 'Earned a Web Development Certification from EduSkills Academy through the AICTE virtual internship program.',
  },
]

export default function Achievements() {
  return (
    <section className="py-24 px-6 md:px-12 bg-bg-base">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-6 h-px bg-rose-500" />
          <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-rose-400">Recognition</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.025em]
                     leading-[1.1] mb-3"
        >
          Beyond the code
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.14 }}
          className="text-ink-sub text-[1rem] leading-[1.75] max-w-[400px] mb-12"
        >
          Activities and achievements that round out the engineering work.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-card border border-white/[0.06] rounded-[12px] p-5
                         hover:border-amber-500/25 hover:bg-amber-500/[0.03]
                         transition-all duration-250"
            >
              <div className="w-9 h-9 bg-amber-500/10 rounded-[8px] flex items-center justify-center
                              mb-4 text-amber-400">
                <div className="w-5 h-5">{icon}</div>
              </div>
              <div className="font-display font-bold text-[0.97rem] text-ink mb-2">{title}</div>
              <div className="text-[0.84rem] text-ink-sub leading-[1.65]">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
