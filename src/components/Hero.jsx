import { useState, useEffect } from 'react'
import useTypewriter from '../hooks/useTypewriter'
import './Hero.css'

export default function Hero() {
  const { displayed, done } = useTypewriter(
    'Building fast, reliable apps for Android & Web',
    18,
    400
  )

  const [panelVisible, setPanelVisible] = useState(false)

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => setPanelVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [done])

  return (
    <section id="hero" className="hero">
      <div className="hero__layout">
        {/* ── Left: Terminal greeting + content ── */}
        <div className="hero__terminal">
          {/* Terminal greeting line */}
          <div className="hero__greeting" style={{ '--i': 0 }}>
            <span className="hero__prompt">$</span>
            <span className="hero__command">echo &ldquo;hello, world&rdquo;</span>
            <span className="hero__output">// hello, world</span>
          </div>

          {/* Main name heading */}
          <div className="hero__name-block" style={{ '--i': 1 }}>
            <h1 className="hero__name">
              I&apos;m <span className="hero__name-accent">Kevin</span>
            </h1>
            <p className="hero__title">Android &amp; Frontend Developer</p>
            <p className="hero__tagline hero__tagline--typing">
              {displayed}
              {!done && <span className="hero__type-cursor" aria-hidden="true">▮</span>}
            </p>
          </div>

          {/* Terminal info block */}
          <div className={`hero__info ${done ? 'hero__info--visible' : ''}`} style={{ '--i': 2 }}>
            <div className="hero__info-line">
              <span className="hero__info-key">location</span>
              <span className="hero__info-value">Medan, Indonesia</span>
            </div>
            <div className="hero__info-line">
              <span className="hero__info-key">status</span>
              <span className="hero__info-value">Open to opportunities &amp; freelance</span>
            </div>
            <div className="hero__info-line">
              <span className="hero__info-key">experience</span>
              <span className="hero__info-value">5+ years shipping production apps</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={`hero__links ${done ? 'hero__links--visible' : ''}`} style={{ '--i': 3 }}>
            <a
              href="mailto:kevinb51101@gmail.com"
              className="hero__link hero__link--primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              Hire me
            </a>
            <a
              href="https://linkedin.com/in/kevin-kevin-204856198"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link hero__link--secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href="tel:+6281264372516"
              className="hero__link hero__link--secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Phone
            </a>
          </div>
        </div>

        {/* ── Right: Terminal neofetch panel ── */}
        <aside className={`hero__panel ${panelVisible ? 'hero__panel--visible' : ''}`}>
          <div className="hero__panel-header">
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-title">neofetch</span>
          </div>

          <div className="hero__panel-body">
            <div className="hero__panel-line">
              <span className="hero__panel-key">OS</span>
              <span className="hero__panel-val">Android Studio · API 35</span>
            </div>
            <div className="hero__panel-line">
              <span className="hero__panel-key">Shell</span>
              <span className="hero__panel-val">Kotlin · React · TypeScript</span>
            </div>
            <div className="hero__panel-line">
              <span className="hero__panel-key">Editor</span>
              <span className="hero__panel-val">Android Studio · VS Code</span>
            </div>
            <div className="hero__panel-line">
              <span className="hero__panel-key">Arch</span>
              <span className="hero__panel-val">MVVM · Offline-first · Hilt</span>
            </div>

            <div className="hero__panel-divider" />

            <div className="hero__panel-line">
              <span className="hero__panel-key">apps</span>
              <span className="hero__panel-val">10+ production apps shipped</span>
            </div>
            <div className="hero__panel-line">
              <span className="hero__panel-key">users</span>
              <span className="hero__panel-val">240+ monthly active</span>
            </div>
            <div className="hero__panel-line">
              <span className="hero__panel-key">award</span>
              <span className="hero__panel-val">1st — Falcon Web Design</span>
            </div>

            <div className="hero__panel-prompt">
              <span className="hero__panel-prompt-sign">$</span>
              <span className="hero__panel-cursor" aria-hidden="true">▮</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
