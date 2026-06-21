import { motion } from 'framer-motion'

const ITEMS = [
  {
    emoji:   '🏆',
    accent:  'from-amber-500/20 to-orange-500/10 border-amber-500/20',
    iconBg:  'bg-amber-500/15 text-amber-400',
    title:   'Robo Rumble — 2nd Prize',
    desc:    'Built a custom Bluetooth RC car from scratch and won second place at the college robotics competition.',
  },
  {
    emoji:   '🛠',
    accent:  'from-rose-500/20 to-pink-500/10 border-rose-500/20',
    iconBg:  'bg-rose-500/15 text-rose-400',
    title:   'Tech Committee Member',
    desc:    'Core member of the college Tech Committee — driving web projects, events, and internal tooling.',
  },
  {
    emoji:   '💡',
    accent:  'from-violet-500/20 to-blue-500/10 border-violet-500/20',
    iconBg:  'bg-violet-500/15 text-violet-400',
    title:   'IIC Creative Lead',
    desc:    'Delivered digital content, UI/UX direction, and video editing for the Innovation and Incubation Cell.',
  },
  {
    emoji:   '📜',
    accent:  'from-emerald-500/20 to-teal-500/10 border-emerald-500/20',
    iconBg:  'bg-emerald-500/15 text-emerald-400',
    title:   'Web Dev Certified',
    desc:    'Earned Web Development Certification from EduSkills Academy through the AICTE virtual internship program.',
  },
]

export default function Achievements() {
  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 md:px-12 bg-bg-base">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-chip">Recognition</div>
          <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3.2rem)]
                         tracking-[-0.025em] leading-[1.08] mb-3">
            Beyond the code
          </h2>
          <p className="text-ink-sub text-[1rem] leading-[1.8] max-w-[380px] mb-14">
            Activities and achievements that round out the engineering work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map(({ emoji, accent, iconBg, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative grad-border p-6 overflow-hidden
                          transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Gradient top accent on hover */}
              <div className={`absolute inset-x-0 top-0 h-[1px]
                               bg-gradient-to-r ${accent}
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                   aria-hidden />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center
                                 text-xl mb-5 ${iconBg}`}>
                  {emoji}
                </div>

                <div className="font-display font-bold text-[0.97rem] text-ink mb-2.5 leading-snug">
                  {title}
                </div>
                <div className="text-[0.83rem] text-ink-sub leading-[1.7]">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
