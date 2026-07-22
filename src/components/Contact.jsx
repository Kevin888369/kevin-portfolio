import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="reveal" style={{ '--i': 0 }}>
          <span className="section__label">mail kevin</span>
          <h2 className="contact__heading">Let&apos;s work together</h2>
          <p className="contact__text">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello — feel free to reach out.
          </p>
        </div>

        <div className="contact__channels reveal" style={{ '--i': 1 }}>
          <div className="contact__row">
            <a href="https://linkedin.com/in/kevin-kevin-204856198" target="_blank" rel="noopener noreferrer" className="contact__channel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <div className="contact__channel-info">
                <span className="contact__channel-label">LinkedIn</span>
                <span className="contact__channel-value">linkedin.com/in/kevin</span>
              </div>
            </a>

            <a href="mailto:kevinb51101@gmail.com" className="contact__channel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              <div className="contact__channel-info">
                <span className="contact__channel-label">Email</span>
                <span className="contact__channel-value">kevinb51101@gmail.com</span>
              </div>
            </a>
          </div>

          <div className="contact__row contact__row--single">
            <a href="tel:+6281264372516" className="contact__channel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              <div className="contact__channel-info">
                <span className="contact__channel-label">Phone</span>
                <span className="contact__channel-value">0812 6437 2516</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Ft4 Dense colophon footer */}
      <footer className="contact__footer">
        <div className="contact__colophon">
          v1.0.0
          <span className="contact__colophon-sep">·</span>
          Built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> + <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
          <span className="contact__colophon-sep">·</span>
          <a href="https://fonts.google.com/specimen/Space+Grotesk" target="_blank" rel="noopener noreferrer">Space Grotesk</a> + <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer">Inter</a> + <a href="https://fonts.google.com/specimen/JetBrains+Mono" target="_blank" rel="noopener noreferrer">JetBrains Mono</a>
          <br />
          &copy; {new Date().getFullYear()} Kevin
          <span className="contact__colophon-sep">·</span>
          Medan, Indonesia
          <span className="contact__colophon-sep">·</span>
          Open to opportunities
        </div>
      </footer>
    </section>
  )
}
