import { useState, useEffect } from 'react'
import './Nav.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`nav-term ${scrolled ? 'nav-term--scrolled' : ''}`}>
      <pre className="nav-term__line">
        <span className="nav-term__prompt">&gt;</span>
        <span className="nav-term__brand">kevin</span>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`nav-term__link ${active === item.href ? 'nav-term__link--active' : ''}`}
          >
            --{item.label.toLowerCase()}
          </a>
        ))}
        <span className="nav-term__caret" aria-hidden="true">▮</span>
      </pre>
    </header>
  )
}
