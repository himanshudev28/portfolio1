import { motion } from 'framer-motion'

const SKILLS = [
  {
    label: 'Frontend',
    pills: ['React.js','TypeScript','Next.js','Tailwind CSS','ShadCN','HTML / CSS','JavaScript'],
    accent: [0, 1, 2],
  },
  {
    label: 'Backend',
    pills: ['Node.js','Express.js','REST APIs'],
    accent: [0],
  },
  {
    label: 'Database & Auth',
    pills: ['MongoDB','Supabase','PostgreSQL','JWT','OAuth'],
    accent: [],
  },
  {
    label: 'Tools & Languages',
    pills: ['Git / GitHub','Vercel','Java','Python','Tableau','Power BI'],
    accent: [],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-6 h-px bg-rose-500" />
          <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-rose-400">About</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.025em]
                     leading-[1.1] mb-12"
        >
          Who I am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {[
              <>I'm a <strong className="text-ink font-medium">final-year B.Tech student</strong> from
                Bareilly, India, building full-stack web applications that ship to production. I care about
                the entire lifecycle — from architecture to the UI detail that makes someone say "this
                just works."</>,
              <>My stack centers on <strong className="text-ink font-medium">React, TypeScript, and
                Node.js</strong>, with Supabase and MongoDB on the data layer. I treat every project as
                a product problem first.</>,
              <>Outside the browser I've <strong className="text-ink font-medium">won a robotics
                competition</strong> (custom Bluetooth RC car), contributed creative direction at my
                college's <strong className="text-ink font-medium">Innovation Cell</strong>, and served
                on the <strong className="text-ink font-medium">Tech Committee</strong>.</>,
              <><span className="text-rose-400">Open to internships and full-time roles</span> starting
                2026.</>,
            ].map((para, i) => (
              <p key={i} className="text-ink-sub text-[0.97rem] leading-[1.85]">{para}</p>
            ))}

            {/* Education cards */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label:'Education',    name:'B.Tech · Invertis University', meta:'2022 – 2026 · CGPA 8.5' },
                { label:'Certification', name:'Web Development',             meta:'EduSkills Academy · AICTE' },
              ].map(({ label, name, meta }) => (
                <div key={label}
                  className="bg-bg-base border border-white/[0.06] rounded-[10px] p-4 flex-1 min-w-[200px]">
                  <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-ink-muted mb-1">
                    {label}
                  </div>
                  <div className="font-body font-semibold text-[0.9rem] text-ink mb-0.5">{name}</div>
                  <div className="text-[0.8rem] text-ink-sub">
                    {meta.includes('CGPA') ? (
                      <>{meta.split(' · ')[0]} · <span className="text-rose-400 font-medium">{meta.split(' · ')[1]}</span></>
                    ) : meta}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {SKILLS.map(({ label, pills, accent }) => (
              <div key={label}>
                <div className="font-mono text-[0.64rem] tracking-[0.15em] uppercase text-ink-muted mb-2.5">
                  {label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {pills.map((p, i) => (
                    <span
                      key={p}
                      className={`font-body text-[0.82rem] font-medium px-3.5 py-1.5 rounded-full
                                  border transition-all duration-200 cursor-default
                                  hover:border-rose-500/50 hover:text-rose-400 hover:bg-rose-950/30
                                  ${accent.includes(i)
                                    ? 'text-rose-400 border-rose-600/40 bg-rose-950/20'
                                    : 'text-ink border-white/[0.06] bg-bg-base'
                                  }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
