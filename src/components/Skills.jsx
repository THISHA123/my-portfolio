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
  { name: 'React', icon: '⚛️', level: 90, category: 'frontend', color: '#61dafb' },
  { name: 'JavaScript', icon: '🟨', level: 88, category: 'frontend', color: '#f7df1e' },
  { name: 'TypeScript', icon: '🔷', level: 75, category: 'frontend', color: '#3178c6' },
  { name: 'HTML5', icon: '🌐', level: 95, category: 'frontend', color: '#e34c26' },
  { name: 'CSS3', icon: '🎨', level: 90, category: 'frontend', color: '#1572b6' },
  { name: 'Next.js', icon: '▲', level: 70, category: 'frontend', color: '#ffffff' },
  { name: 'Tailwind', icon: '💨', level: 80, category: 'frontend', color: '#06b6d4' },
  // Backend
  { name: 'Node.js', icon: '🟢', level: 82, category: 'backend', color: '#68a063' },
  { name: 'Express.js', icon: '🚂', level: 80, category: 'backend', color: '#999999' },
  { name: 'Python', icon: '🐍', level: 70, category: 'backend', color: '#3776ab' },
  { name: 'MongoDB', icon: '🍃', level: 78, category: 'backend', color: '#47a248' },
  { name: 'MySQL', icon: '🐬', level: 72, category: 'backend', color: '#00758f' },
  { name: 'REST APIs', icon: '🔌', level: 85, category: 'backend', color: '#ff6b6b' },
  // Tools
  { name: 'Git & GitHub', icon: '🐱', level: 88, category: 'tools', color: '#f1502f' },
  { name: 'VS Code', icon: '💻', level: 95, category: 'tools', color: '#007acc' },
  { name: 'Figma', icon: '🎭', level: 70, category: 'tools', color: '#f24e1e' },
  { name: 'Docker', icon: '🐳', level: 55, category: 'tools', color: '#2496ed' },
  { name: 'Postman', icon: '📬', level: 85, category: 'tools', color: '#ff6c37' },
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
