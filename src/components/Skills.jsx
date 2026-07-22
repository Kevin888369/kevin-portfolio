import './Skills.css'

const SKILL_GROUPS = [
  {
    name: 'Mobile',
    skills: ['Kotlin', 'Kotlin Coroutines', 'MVVM', 'Hilt', 'Retrofit', 'Room', 'GraphQL (Apollo)', 'LiveData', 'ViewBinding', 'Bluetooth ESC/POS Printing'],
  },
  {
    name: 'Web',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Bootstrap', 'HTML'],
  },
  {
    name: 'Other',
    skills: ['AI-Assisted Development', 'Prompt Engineering'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__header reveal" style={{ '--i': 0 }}>
        <span className="section__label">ls skills/</span>
        <h2 className="section__title">Technologies &amp; tools</h2>
      </div>

      <div className="skills__grid">
        {SKILL_GROUPS.map((group, idx) => (
          <div key={group.name} className="skills__group reveal" style={{ '--i': idx + 1 }}>
            <h3 className="skills__group-name">{group.name}</h3>
            <div className="skills__tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skills__tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
