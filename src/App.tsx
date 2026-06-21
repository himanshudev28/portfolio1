import { ThemeProvider } from './context/ThemeContext'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import TechStrip    from './components/TechStrip'
import Projects     from './components/Projects'
import Experience   from './components/Experience'
import About        from './components/About'
import Achievements from './components/Achievements'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <TechStrip />
      <Projects />
      <Experience />
      <About />
      <Achievements />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
