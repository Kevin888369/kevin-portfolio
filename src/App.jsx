import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider">
          <span className="section-divider__line" />
          <span className="section-divider__prompt">▸ about</span>
          <span className="section-divider__line" />
        </div>
        <About />
        <div className="section-divider">
          <span className="section-divider__line" />
          <span className="section-divider__prompt">▸ experience</span>
          <span className="section-divider__line" />
        </div>
        <Experience />
        <div className="section-divider">
          <span className="section-divider__line" />
          <span className="section-divider__prompt">▸ skills</span>
          <span className="section-divider__line" />
        </div>
        <Skills />
        <div className="section-divider">
          <span className="section-divider__line" />
          <span className="section-divider__prompt">▸ achievements</span>
          <span className="section-divider__line" />
        </div>
        <Achievements />
        <div className="section-divider">
          <span className="section-divider__line" />
          <span className="section-divider__prompt">▸ education</span>
          <span className="section-divider__line" />
        </div>
        <Education />
        <Contact />
      </main>
    </>
  )
}
