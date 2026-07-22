import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__header reveal" style={{ '--i': 0 }}>
        <span className="section__label">cat education.md</span>
        <h2 className="section__title">Background</h2>
      </div>

      <div className="education__list">
        <div className="education__card reveal" style={{ '--i': 1 }}>
          <div className="education__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div className="education__info">
            <h3 className="education__school">Universitas Mikroskil</h3>
            <p className="education__degree">Bachelor&apos;s degree, Information Technology</p>
            <p className="education__date">Graduated March 2023</p>
          </div>
        </div>

        <div className="education__card education__card--language reveal" style={{ '--i': 2 }}>
          <div className="education__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <div className="education__info">
            <h3 className="education__school">Languages</h3>
            <div className="education__langs">
              <span className="education__lang">Indonesian <span className="education__level">(Native)</span></span>
              <span className="education__lang-sep">·</span>
              <span className="education__lang">English <span className="education__level">(Proficient)</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
