import './About.css';
import profileImg from '../assets/my1.jpeg';
const education = [
  {
    degree: 'BSc in Information Technology',
    school: 'University of Vavuniya',
    year: '2023 - 2026',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  },
  {
    degree: 'G.C.E. Advanced Level — Physical Science',
    school: 'Secondary education',
    year: '2021',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19v-2M20 19v-2M2 22h20M12 3v16M8 10h8M8 14h8"/></svg>,
  }
];

const leadership = [
  {
    role: 'Designing Team',
    organization: 'IEEE',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20z"/><path d="M2 12h20"/></svg>,
  },
  {
    role: 'MKT Leadership Body Manager',
    organization: 'AIESEC in Vavuniya',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    role: 'Showcasing Team',
    organization: 'AIESEC Kandy',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    role: 'lensMedia Secretary',
    organization: 'UniPod',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  },
  {
    role: 'Community Member',
    organization: 'Leo Club',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  },
  {
    role: 'Community Member',
    organization: 'Zero Plastic Vavuniya Community',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20a9 9 0 0 1-9-9V4h7a9 9 0 0 1 9 9v7h-7z"/><path d="M11 20v-8"/></svg>,
  }
];

const interests = ['Coffee Lover', 'Gaming', 'Photography', 'Travelling', 'Music', 'Reading'];

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
                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></span>
                <span>Dev</span>
              </div>
            </div>
            <div className="about__bio-info">
              <h3>Thamilselvam Thishanthani</h3>
              <p className="about__bio-role gradient-text">Full Stack Developer | Aspiring DevOps & Cloud Engineer</p>
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
              <h3>Who Am I?</h3>
              <p>
                I'm a passionate <strong>Full Stack Developer</strong> recently graduated with a BSc in Information Technology from the University of Vavuniya. I am currently transitioning into DevOps and Cloud Engineering, exploring technologies like Linux, Docker, Git, CI/CD, and Microsoft Azure.
              </p>
              <p>
                My ultimate goal is to combine my software development background with DevOps practices to build, deploy, and maintain reliable and highly scalable applications in the cloud.
              </p>
            </div>

            {/* Education */}
            <div className="about__section-group">
              <h3 className="about__group-title">
                Education
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

            {/* Leadership */}
            <div className="about__section-group">
              <h3 className="about__group-title">
                Leadership & Community Experience
              </h3>
              {leadership.map((item) => (
                <div key={item.organization + item.role} className="about__timeline-item glass">
                  <div className="about__timeline-icon">{item.icon}</div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <h4>{item.role}</h4>
                    </div>
                    <p className="about__timeline-company">{item.organization}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="about__section-group">
              <h3 className="about__group-title">Certifications (In Progress)</h3>
              <div className="about__timeline-item glass">
                <div className="about__timeline-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l8-4.5-8-4.5-8 4.5 8 4.5z"/><path d="M12 15v7M4 10.5v7M20 10.5v7"/></svg>
                </div>
                <div className="about__timeline-content">
                  <div className="about__timeline-header">
                    <h4>Linux Foundation Training</h4>
                  </div>
                  <p>In preparation</p>
                </div>
              </div>
              <div className="about__timeline-item glass">
                <div className="about__timeline-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div className="about__timeline-content">
                  <div className="about__timeline-header">
                    <h4>Microsoft Azure Certifications</h4>
                  </div>
                  <p>In preparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
