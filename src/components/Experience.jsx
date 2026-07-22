import './Experience.css'

const ROLES = [
  {
    company: 'Pundi Mas Berjaya',
    role: 'Android Developer',
    period: 'Sep 2021 — Present',
    projects: [
      {
        name: 'Jova Resto (POS)',
        playStore: 'https://play.google.com/store/apps/details?id=com.pmberjaya.jovaresto',
        highlights: [
          'POS app reaching 64+ installs, 76% install base, 70 MAU (+9%) across a major Batam food court and 10+ stores handling hundreds of daily transactions',
          'Built offline mode with Room DB, improving load speed by 20% and keeping the app usable during outages',
          'Combined inventory management, split billing, self-ordering, shift tracking, and role-based auth into one system across 10+ stores',
        ],
      },
      {
        name: 'Dex Team',
        playStore: 'https://play.google.com/store/apps/details?id=pmb.attendance.app',
        highlights: [
          'Employee attendance app with 128+ installs and 173 MAU (+6%)',
          'Daily check-in/out and employee directory functionality',
          'Replaced paper leave requests with digital forms + in-app notifications',
        ],
      },
      {
        name: 'Dhammadipa',
        playStore: 'https://play.google.com/store/apps/details?id=com.pmberjaya.dhammadipa',
        highlights: [
          'Interactive calendar + event reminder system with 100+ downloads',
        ],
      },
      {
        name: 'Suara Sutra',
        webLink: 'https://suara-sutra.kotasatelit.com/',
        highlights: [
          'Website for a Buddhist monastery with an Indonesian-to-Pali translator',
          'Downloadable digital editions of the Suttapiṭaka scriptures',
        ],
      },
    ],
  },
  {
    company: 'Frontend Web Developer',
    role: 'Freelance',
    period: 'Aug 2021 — Oct 2021',
    projects: [
      {
        name: 'waiOS',
        webLink: 'https://jolly-turing-351e9b.netlify.app/',
        highlights: [
          'Built an interactive web experience with Next.js, TypeScript, and Tailwind CSS',
          'Won 1st place at Falcon Web Design (Falcon Project 11)',
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__header reveal" style={{ '--i': 0 }}>
        <span className="section__label">cat experience.log</span>
        <h2 className="section__title">Where I&apos;ve worked</h2>
      </div>

      <div className="experience__list">
        {ROLES.map((role, idx) => (
          <div key={role.company} className="experience__role reveal" style={{ '--i': idx + 1 }}>
            <div className="experience__role-header">
              <div className="experience__role-info">
                <h3 className="experience__company">
                  <span className="experience__company-arrow">→</span>
                  {role.company}
                </h3>
                <span className="experience__role-title">{role.role}</span>
              </div>
              <span className="experience__period">{role.period}</span>
            </div>

            <div className="experience__projects">
              {role.projects.map((project) => (
                <div key={project.name} className="experience__project">
                  <h4 className="experience__project-name">
                    # {project.name}
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__link-badge"
                        title="View on Google Play"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                        Play Store
                      </a>
                    )}
                    {project.webLink && (
                      <a
                        href={project.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__link-badge"
                        title="Visit website"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                        Visit
                      </a>
                    )}
                  </h4>

                  <ul className="experience__highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="experience__highlight">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
