import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import TechStrip   from './components/TechStrip'
import Projects    from './components/Projects'
import Experience  from './components/Experience'
import About       from './components/About'
import Achievements from './components/Achievements'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStrip />
      <Projects />
      <hr className="border-none h-px bg-white/[0.06] mx-8" />
      <Experience />
      <hr className="border-none h-px bg-white/[0.06] mx-8" />
      <About />
      <hr className="border-none h-px bg-white/[0.06] mx-8" />
      <Achievements />
      <hr className="border-none h-px bg-white/[0.06] mx-8" />
      <Contact />
      <Footer />
    </>
  )
}
