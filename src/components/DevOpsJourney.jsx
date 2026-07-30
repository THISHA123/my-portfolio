import './DevOpsJourney.css';

const journeyItems = [
  {
    title: 'Linux Administration',
    desc: 'Learning system administration, shell scripting, and user management to ensure solid server foundations.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm0 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"/><path d="M4 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2zm12 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z"/></svg>
  },
  {
    title: 'Docker & Containerization',
    desc: 'Exploring how to containerize applications to guarantee consistency across different environments.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    title: 'Git Workflows',
    desc: 'Practicing advanced Git techniques and team collaboration workflows for robust version control.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
  },
  {
    title: 'CI/CD Pipelines',
    desc: 'Understanding automated testing, building, and deployment using continuous integration and delivery concepts.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  },
  {
    title: 'Microsoft Azure',
    desc: 'Gaining hands-on experience with cloud computing platforms, virtual machines, and managed services.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
  },
  {
    title: 'Infrastructure Automation',
    desc: 'Learning the fundamentals of treating infrastructure as code to provision environments reliably.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  }
];

export default function DevOpsJourney() {
  return (
    <section id="devops" className="devops section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title">DevOps & Cloud <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">Transitioning into the world of infrastructure and automation</p>
        </div>

        <p className="devops__intro">
          I am currently expanding my knowledge in DevOps and Cloud Engineering through hands-on learning and practical exploration. Here are the key areas I'm focusing on:
        </p>

        <div className="devops__grid">
          {journeyItems.map((item) => (
            <div key={item.title} className="devops__card glass">
              <div className="devops__icon">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
