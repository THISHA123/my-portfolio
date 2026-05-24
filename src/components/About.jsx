import './About.css';
import profileImg from '../assets/my1.jpeg';
const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'Tech University',
    year: '2020 - 2024',
    icon: '🎓',
  },
  {
    degree: 'Higher National Diploma - IT',
    school: 'City College',
    year: '2018 - 2020',
    icon: '📚',
  },
];

const experience = [
  {
    role: 'Aspiring Full Stack Developer',
    company: 'Open for Hire',
    year: 'Present',
    description: 'Enthusiastic to learn and apply modern web technologies. Ready to contribute and grow in a professional environment.',
    icon: '💼',
  }
];

const interests = ['☕ Coffee Lover', '🎮 Gaming', '📸 Photography', '🌏 Travelling', '🎵 Music', '📖 Reading'];

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Get to know the person behind the code</p>
        </div>

        <div className="about__grid">
          {/* Bio Card */}
          <div className="about__bio glass">
            <div className="about__bio-img">
              <img src={profileImg} alt="Thamilselvam Thishanthani" />
              <div className="about__bio-badge">
                <span>🧑‍💻</span>
                <span>Dev</span>
              </div>
            </div>
            <div className="about__bio-info">
              <h3>Thamilselvam Thishanthani</h3>
              <p className="about__bio-role gradient-text">Full Stack Developer</p>
              <div className="about__bio-details">
                <div className="about__bio-detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Badulla, Sri Lanka</span>
                </div>
                <div className="about__bio-detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                  </svg>
                  <span>Open to Remote & On-site</span>
                </div>
                <div className="about__bio-detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>thishanthani09@gmail.com</span>
                </div>
              </div>

              {/* Interests */}
              <div className="about__interests">
                <h4>My Interests</h4>
                <div className="about__interest-tags">
                  {interests.map((i) => (
                    <span key={i} className="about__interest-tag">{i}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="about__timeline">
            {/* Who Am I */}
            <div className="about__paragraph glass">
              <h3>Who Am I? 🤔</h3>
              <p>
                I'm a passionate <strong>Full Stack Developer</strong> with a love for creating elegant,
                high-performance web applications. I enjoy turning complex problems into simple,
                beautiful, and intuitive digital experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or sipping coffee while planning my next project. I believe in writing clean, maintainable code
                and never stop learning.
              </p>
            </div>

            {/* Education */}
            <div className="about__section-group">
              <h3 className="about__group-title">
                <span>🎓</span> Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="about__timeline-item glass">
                  <div className="about__timeline-icon">{edu.icon}</div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <h4>{edu.degree}</h4>
                      <span className="about__timeline-year">{edu.year}</span>
                    </div>
                    <p>{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="about__section-group">
              <h3 className="about__group-title">
                <span>💼</span> Experience
              </h3>
              {experience.map((exp) => (
                <div key={exp.role} className="about__timeline-item glass">
                  <div className="about__timeline-icon">{exp.icon}</div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <h4>{exp.role}</h4>
                      <span className="about__timeline-year">{exp.year}</span>
                    </div>
                    <p className="about__timeline-company">{exp.company}</p>
                    <p className="about__timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
