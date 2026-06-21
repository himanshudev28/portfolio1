import { motion } from 'framer-motion'

const EXP = [
  {
    date:    'Jun – Jul 2025',
    company: 'Elevatifier Pvt Ltd',
    role:    'Frontend Developer Intern',
    context: 'EdTech · Remote',
    color:   'bg-rose-500',
    points: [
      'Built and optimized responsive UIs using React.js, Tailwind CSS, and JavaScript',
      'Integrated REST APIs and ensured cross-device functionality',
      'Worked with GitHub workflows, debugging, and real-time problem solving',
    ],
  },
  {
    date:    'May – Jun 2025',
    company: 'Edunet Foundation',
    role:    'AI Azure Virtual Intern',
    context: 'Microsoft + AICTE · Remote',
    color:   'bg-violet-500',
    points: [
      'Completed 4-week structured virtual internship on AI and Microsoft Azure',
      'Hands-on exposure to Azure AI services and core machine learning concepts',
    ],
  },
  {
    date:    'Apr – Jun 2025',
    company: 'EduSkills · AICTE',
    role:    'Web Full Stack Developer Intern',
    context: 'Virtual · Remote',
    color:   'bg-amber-500',
    points: [
      'Built interactive and responsive web applications with HTML, CSS, and JavaScript',
      'Strengthened full-stack web development fundamentals through practical challenges',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-5 sm:px-6 md:px-12 bg-bg-base">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-chip">Career</div>
          <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3.2rem)]
                         tracking-[-0.025em] leading-[1.08] mb-3">
            Where I've worked
          </h2>
          <p className="text-ink-sub text-[1rem] leading-[1.8] max-w-[400px] mb-16">
            Real-world experience across frontend, AI, and full-stack engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-0 timeline-track">
          {EXP.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-12
                          py-9 ${i < EXP.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-[40px] -translate-x-[5px]
                              md:relative md:left-auto md:top-auto md:translate-x-0
                              md:flex md:flex-col md:pt-1 md:items-start">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${e.color}
                                   shadow-[0_0_10px_currentColor]
                                   md:hidden`} />
                  <span className="font-mono text-[0.68rem] tracking-[0.06em] text-ink-muted leading-snug">
                    {e.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:border-l md:border-white/[0.06] md:pl-10">
                {/* Top row with dot (desktop) */}
                <div className="flex items-center gap-3 mb-1">
                  <span className={`hidden md:block w-2 h-2 rounded-full shrink-0 ${e.color}`} />
                  <div className="font-display font-bold text-[1.08rem] text-ink">{e.company}</div>
                </div>

                <div className="md:pl-5">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[0.85rem] text-rose-400 font-medium">{e.role}</span>
                    <span className="text-[0.75rem] text-ink-muted font-mono">· {e.context}</span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {e.points.map(pt => (
                      <li key={pt}
                        className="flex gap-2.5 text-[0.87rem] text-ink-sub leading-[1.7]"
                      >
                        <span className="text-ink-muted shrink-0 mt-0.5">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
