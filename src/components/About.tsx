import { motion } from 'framer-motion'

const SKILLS: { label: string; items: { name: string; hot?: boolean }[] }[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', hot: true },
      { name: 'TypeScript', hot: true },
      { name: 'Next.js', hot: true },
      { name: 'Tailwind CSS' },
      { name: 'ShadCN' },
      { name: 'HTML / CSS' },
      { name: 'JavaScript' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', hot: true },
      { name: 'Express.js' },
      { name: 'REST APIs' },
    ],
  },
  {
    label: 'Database & Auth',
    items: [
      { name: 'MongoDB' },
      { name: 'Supabase' },
      { name: 'PostgreSQL' },
      { name: 'JWT' },
      { name: 'OAuth' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git / GitHub' },
      { name: 'Vercel' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'Tableau' },
      { name: 'Power BI' },
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-chip">About</div>
          <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3.2rem)]
                         tracking-[-0.025em] leading-[1.08] mb-14">
            Who I am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20">

          {/* ── Bio column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {[
              <>I'm a <strong className="text-ink font-medium">final-year B.Tech student</strong> from
                Bareilly, India, building full-stack web apps that ship to production. I care about the
                entire lifecycle — architecture to the UI detail that makes someone say "this just works."</>,
              <>My stack centers on <strong className="text-ink font-medium">React, TypeScript, and
                Node.js</strong>, with Supabase and MongoDB on the data layer. Every project is a product
                problem first.</>,
              <>Outside the browser I've <strong className="text-ink font-medium">won a robotics
                competition</strong> (custom Bluetooth RC car), led creative direction at my college's{' '}
                <strong className="text-ink font-medium">Innovation Cell</strong>, and served on the{' '}
                <strong className="text-ink font-medium">Tech Committee</strong>.</>,
              <><span className="text-rose-400">Open to internships and full-time roles</span> starting
                2026.</>,
            ].map((para, i) => (
              <p key={i} className="text-ink-sub text-[0.97rem] leading-[1.9]">{para}</p>
            ))}

            {/* Education/Cert cards */}
            <div className="flex flex-wrap gap-3 pt-3">
              {[
                {
                  chip:  'Education',
                  title: 'B.Tech · Invertis University',
                  meta:  '2022 – 2026',
                  highlight: 'CGPA 8.5',
                },
                {
                  chip:  'Certification',
                  title: 'Web Development',
                  meta:  'EduSkills · AICTE',
                  highlight: null,
                },
              ].map(({ chip, title, meta, highlight }) => (
                <div
                  key={chip}
                  className="bg-bg-base border border-white/[0.07] rounded-[12px] p-4
                             flex-1 min-w-[180px] hover:border-white/10
                             transition-colors duration-200"
                >
                  <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase
                                  text-ink-muted mb-1.5">
                    {chip}
                  </div>
                  <div className="font-body font-semibold text-[0.9rem] text-ink mb-0.5">{title}</div>
                  <div className="text-[0.8rem] text-ink-sub">
                    {meta}
                    {highlight && (
                      <> · <span className="text-rose-400 font-medium">{highlight}</span></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Skills column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-7"
          >
            {SKILLS.map(({ label, items }) => (
              <div key={label}>
                <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase
                                text-ink-muted mb-3 flex items-center gap-2">
                  <span className="w-3 h-px bg-rose-500/60" />
                  {label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, hot }) => (
                    <span
                      key={name}
                      className={`font-body text-[0.82rem] font-medium px-3.5 py-1.5 rounded-full
                                  border cursor-default transition-all duration-200
                                  hover:border-rose-500/45 hover:text-rose-300 hover:bg-rose-950/20
                                  ${hot
                                    ? 'text-rose-300 border-rose-600/45 bg-rose-950/20'
                                    : 'text-ink-sub border-white/[0.07] bg-bg-base'}`}
                    >
                      {name}
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
