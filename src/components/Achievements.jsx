import './Achievements.css'

const ACHIEVEMENTS = [
  {
    title: '1st Place Winner',
    event: 'Falcon Web Design (Falcon Project 11)',
    org: 'School of Information Science and Technology, Universitas Pelita Harapan',
  },
  {
    title: 'Finalist',
    event: 'Falcon Web Design (Falcon Project 10)',
    org: 'School of Information Science and Technology, Universitas Pelita Harapan',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="section__header reveal" style={{ '--i': 0 }}>
        <span className="section__label">cat achievements.md</span>
        <h2 className="section__title">Recognition &amp; awards</h2>
      </div>

      <div className="achievements__list">
        {ACHIEVEMENTS.map((a, idx) => (
          <div key={a.title} className="achievements__card reveal" style={{ '--i': idx + 1 }}>
            <div className="achievements__icon">
              {idx === 0 ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              )}
            </div>
            <div className="achievements__info">
              <h3 className="achievements__title">{a.title}</h3>
              <p className="achievements__event">{a.event}</p>
              <p className="achievements__org">{a.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
