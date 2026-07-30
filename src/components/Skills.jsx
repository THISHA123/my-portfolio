import { useState } from 'react';
import './Skills.css';

const skillCategories = [
  { label: 'Programming & Web Technologies', key: 'prog' },
  { label: 'Database & Tools', key: 'db' },
  { label: 'DevOps & Cloud', key: 'devops' },
  { label: 'Design', key: 'design' },
  { label: 'Soft Skills', key: 'soft' },
];

const skills = [
  // Programming & Web Technologies
  { name: 'Java', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" width="24" height="24" />, level: 85, category: 'prog', color: '#5382a1' },
  { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" />, level: 88, category: 'prog', color: '#f7df1e' },
  { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width="24" height="24" />, level: 70, category: 'prog', color: '#3776ab' },
  { name: 'React.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="24" height="24" />, level: 90, category: 'prog', color: '#61dafb' },
  { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="24" height="24" />, level: 82, category: 'prog', color: '#68a063' },
  { name: 'Spring Boot', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" width="24" height="24" />, level: 75, category: 'prog', color: '#6db33f' },
  { name: 'HTML/CSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML/CSS" width="24" height="24" />, level: 95, category: 'prog', color: '#e34c26' },
  { name: 'REST APIs', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, level: 85, category: 'prog', color: '#ff6b6b' },
  
  // Database & Tools
  { name: 'MongoDB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="24" height="24" />, level: 78, category: 'db', color: '#47a248' },
  { name: 'MySQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" width="24" height="24" />, level: 72, category: 'db', color: '#00758f' },
  { name: 'JWT', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>, level: 80, category: 'db', color: '#fbbf24' },
  { name: 'Git/GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" width="24" height="24" style={{ filter: 'invert(1)' }} />, level: 88, category: 'db', color: '#f1502f' },
  { name: 'Postman', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="24" height="24" />, level: 85, category: 'db', color: '#ff6c37' },
  { name: 'LaTeX', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" alt="LaTeX" width="24" height="24" style={{ filter: 'invert(1)' }} />, level: 70, category: 'db', color: '#008080' },

  // DevOps & Cloud
  { name: 'Linux', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" width="24" height="24" />, level: 70, category: 'devops', color: '#fcc624' },
  { name: 'Docker', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" width="24" height="24" />, level: 55, category: 'devops', color: '#2496ed' },
  { name: 'CI/CD Concepts', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, level: 60, category: 'devops', color: '#ec4899' },
  { name: 'Microsoft Azure', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" width="24" height="24" />, level: 45, category: 'devops', color: '#0089d6' },
  { name: 'Cloud Fundamentals', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>, level: 65, category: 'devops', color: '#3b82f6' },
  { name: 'Infrastructure Auto (Learning)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>, level: 40, category: 'devops', color: '#8b5cf6' },

  // Design
  { name: 'Adobe Photoshop', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" width="24" height="24" />, level: 85, category: 'design', color: '#31a8ff' },
  { name: 'Adobe Illustrator', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" alt="Illustrator" width="24" height="24" />, level: 80, category: 'design', color: '#ff9a00' },
  { name: 'Canva', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" width="24" height="24" />, level: 90, category: 'design', color: '#00c4cc' },
  { name: 'UI/UX Principles', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" width="24" height="24" />, level: 75, category: 'design', color: '#f24e1e' },

  // Soft Skills
  { name: 'Leadership', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, level: 90, category: 'soft', color: '#f59e0b' },
  { name: 'Communication', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, level: 85, category: 'soft', color: '#10b981' },
  { name: 'Teamwork', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>, level: 95, category: 'soft', color: '#3b82f6' },
  { name: 'Critical Thinking', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>, level: 80, category: 'soft', color: '#8b5cf6' },
  { name: 'Problem Solving', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 21h4"></path><path d="M10 17h4"></path><path d="M10 13h4"></path><path d="M12 2v6"></path><path d="M22 12A10 10 0 0 0 2 12c0 2.22.68 4.29 1.83 6"></path></svg>, level: 85, category: 'soft', color: '#ec4899' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('prog');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filtered = skills.filter((s) => s.category === activeCategory);

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
