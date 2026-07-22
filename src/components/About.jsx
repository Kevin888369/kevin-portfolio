import AnimatedNumber from './AnimatedNumber'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__header reveal" style={{ '--i': 0 }}>
        <span className="section__label">cat about.md</span>
        <h2 className="section__title">Android &amp; Frontend developer with a track record of shipping production apps</h2>
      </div>

      <div className="about__layout">
        <div className="about__content reveal" style={{ '--i': 1 }}>
          <div className="about__body">
            <p>
              I build Android applications and web experiences that solve real business problems.
              From POS systems handling hundreds of daily transactions across 10+ stores in Batam,
              to award-winning web projects, I focus on reliability, performance, and user experience.
            </p>
            <p>
              My work spans the full stack of mobile development — offline-first architectures with
              Room DB, real-time attendance tracking, role-based auth, and Bluetooth printing — as
              well as modern web with Next.js, React, and TypeScript.
            </p>
          </div>
        </div>

        <div className="about__stats reveal" style={{ '--i': 2 }}>
          <div className="about__stat">
            <span className="about__stat-number">
              <AnimatedNumber value="3+" />
            </span>
            <span className="about__stat-label">Production Apps</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">
              <AnimatedNumber value="200+" />
            </span>
            <span className="about__stat-label">Total Installs</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">
              <AnimatedNumber value="240+" />
            </span>
            <span className="about__stat-label">Monthly Active Users</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">
              <AnimatedNumber value="1st" />
            </span>
            <span className="about__stat-label">Falcon Web Design</span>
          </div>
        </div>
      </div>
    </section>
  )
}
