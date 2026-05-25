import { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    label: 'All',
    key: 'all',
  },
  {
    label: 'Frontend',
    key: 'frontend',
  },
  {
    label: 'Backend',
    key: 'backend',
  },
  {
    label: 'Tools',
    key: 'tools',
  },
];

const skills = [
  // Frontend
  { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="24" height="24" />, level: 90, category: 'frontend', color: '#61dafb' },
  { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" />, level: 88, category: 'frontend', color: '#f7df1e' },
  { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="24" height="24" />, level: 75, category: 'frontend', color: '#3178c6' },
  { name: 'HTML5', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" width="24" height="24" />, level: 95, category: 'frontend', color: '#e34c26' },
  { name: 'CSS3', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width="24" height="24" />, level: 90, category: 'frontend', color: '#1572b6' },
  { name: 'Next.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" width="24" height="24" style={{ filter: 'invert(1)' }} />, level: 70, category: 'frontend', color: '#ffffff' },
  { name: 'Tailwind', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" width="24" height="24" />, level: 80, category: 'frontend', color: '#06b6d4' },
  // Backend
  { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="24" height="24" />, level: 82, category: 'backend', color: '#68a063' },
  { name: 'Express.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width="24" height="24" style={{ filter: 'invert(1)' }} />, level: 80, category: 'backend', color: '#999999' },
  { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width="24" height="24" />, level: 70, category: 'backend', color: '#3776ab' },
  { name: 'MongoDB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="24" height="24" />, level: 78, category: 'backend', color: '#47a248' },
  { name: 'MySQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" width="24" height="24" />, level: 72, category: 'backend', color: '#00758f' },
  { name: 'REST APIs', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, level: 85, category: 'backend', color: '#ff6b6b' },
  // Tools
  { name: 'Git & GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" width="24" height="24" style={{ filter: 'invert(1)' }} />, level: 88, category: 'tools', color: '#f1502f' },
  { name: 'VS Code', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" width="24" height="24" />, level: 95, category: 'tools', color: '#007acc' },
  { name: 'Figma', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" width="24" height="24" />, level: 70, category: 'tools', color: '#f24e1e' },
  { name: 'Docker', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" width="24" height="24" />, level: 55, category: 'tools', color: '#2496ed' },
  { name: 'Postman', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="24" height="24" />, level: 85, category: 'tools', color: '#ff6c37' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I work with daily</p>
        </div>

        {/* Filter Tabs */}
        <div className="skills__tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              className={`skills__tab ${activeCategory === cat.key ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="skills__card glass"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skills__card-top">
                <span className="skills__icon">{skill.icon}</span>
                <span className="skills__percent">{skill.level}%</span>
              </div>
              <h4 className="skills__name">{skill.name}</h4>
              <div className="skills__bar-track">
                <div
                  className="skills__bar-fill"
                  style={{
                    width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="skills__legend">
          <div className="skills__legend-item">
            <div className="skills__legend-dot" style={{ background: '#22c55e' }}></div>
            <span>Expert (90%+)</span>
          </div>
          <div className="skills__legend-item">
            <div className="skills__legend-dot" style={{ background: '#a78bfa' }}></div>
            <span>Proficient (70-89%)</span>
          </div>
          <div className="skills__legend-item">
            <div className="skills__legend-dot" style={{ background: '#f59e0b' }}></div>
            <span>Learning (50-69%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
