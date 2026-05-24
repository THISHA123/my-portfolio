import { useState } from 'react';
import './Projects.css';

const categories = ['All', 'Graphic Design'];

const projects = [
  {
    id: 1,
    title: 'Creative Poster 1',
    category: 'Graphic Design',
    description: 'A creative poster design showcasing visual communication and layout skills.',
    image: '/poster1.jpeg',
    color: '#7c3aed',
    emoji: '🎨',
    tech: ['Graphic Design', 'Visuals'],
    github: 'https://github.com/THISHA123',
    live: '/poster1.jpeg',
    featured: true,
  },
  {
    id: 2,
    title: 'Creative Poster 2',
    category: 'Graphic Design',
    description: 'Event poster designed for community engagement, focusing on modern aesthetics.',
    image: '/poster2.jpeg',
    color: '#2563eb',
    emoji: '🎨',
    tech: ['Posters', 'Typography'],
    github: 'https://github.com/THISHA123',
    live: '/poster2.jpeg',
    featured: true,
  },
  {
    id: 3,
    title: 'Creative Poster 3',
    category: 'Graphic Design',
    description: 'Promotional poster with vibrant colors, created for showcasing events.',
    image: '/poster3.jpeg',
    color: '#06b6d4',
    emoji: '🎨',
    tech: ['Illustrator', 'Design'],
    github: 'https://github.com/THISHA123',
    live: '/poster3.jpeg',
    featured: false,
  },
  {
    id: 4,
    title: 'Creative Poster 4',
    category: 'Graphic Design',
    description: 'Another graphic design piece focusing on layout and visual hierarchy.',
    image: '/poster4.jpeg',
    color: '#ec4899',
    emoji: '🎨',
    tech: ['Photoshop', 'Art'],
    github: 'https://github.com/THISHA123',
    live: '/poster4.jpeg',
    featured: false,
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A showcase of things I've built with passion</p>
        </div>

        {/* Filter */}
        <div className="projects__filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`projects__card glass ${project.featured ? 'projects__card--featured' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ '--project-color': project.color }}
            >
              {/* Card Image / Preview */}
              <div className="projects__card-preview">
                {project.image ? (
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="projects__card-bg" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                    <span className="projects__card-emoji">{project.emoji}</span>
                  </div>
                )}
                {project.featured && (
                  <span className="projects__featured-badge">⭐ Featured</span>
                )}
                <div className="projects__card-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="projects__link" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="projects__link" title="Live Demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="projects__card-content">
                <div className="projects__card-meta">
                  <span className="projects__card-category">{project.category}</span>
                </div>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects__cta">
          <a href="https://github.com/THISHA123" target="_blank" rel="noreferrer" className="btn btn--secondary">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
