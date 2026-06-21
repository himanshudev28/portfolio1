import { motion } from 'framer-motion'

const EXP = [
  {
    date: 'Jun – Jul 2025',
    company: 'Elevatifier Pvt Ltd',
    role: 'Frontend Web Developer Intern · EdTech · Remote',
    points: [
      'Built and optimized responsive UIs using React.js, Tailwind CSS, and JavaScript',
      'Collaborated with team to integrate APIs and ensure cross-device functionality',
      'Gained hands-on experience with GitHub workflows, debugging, and real-time problem solving',
    ],
  },
  {
    date: 'May – Jun 2025',
    company: 'Edunet Foundation',
    role: 'AI Azure Virtual Intern · Microsoft + AICTE · Remote',
    points: [
      'Completed a 4-week structured virtual internship on AI and Microsoft Azure',
      'Gained hands-on exposure to Azure AI services and core machine learning concepts',
    ],
  },
  {
    date: 'Apr – Jun 2025',
    company: 'EduSkills · AICTE',
    role: 'Web Full Stack Developer Virtual Intern · Remote',
    points: [
      'Built interactive and responsive web applications with HTML, CSS, and JavaScript',
      'Tackled practical challenges to strengthen full-stack web development fundamentals',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-bg-base">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-6 h-px bg-rose-500" />
          <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-rose-400">Career</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.025em]
                     leading-[1.1] mb-3"
        >
          Where I've worked
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.14 }}
          className="text-ink-sub text-[1rem] leading-[1.75] max-w-[420px] mb-14"
        >
          Real-world experience across frontend development, AI, and full-stack engineering.
        </motion.p>

        <div className="flex flex-col">
          {EXP.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8
                          ${i < EXP.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
            >
              <div className="font-mono text-[0.7rem] tracking-[0.06em] text-ink-muted pt-0.5">
                {e.date}
              </div>
              <div>
                <div className="font-display font-bold text-[1.05rem] text-ink mb-1">{e.company}</div>
                <div className="text-[0.84rem] text-rose-400 mb-3">{e.role}</div>
                <ul className="flex flex-col gap-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[0.87rem] text-ink-sub leading-[1.65]">
                      <span className="text-ink-muted shrink-0">·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
