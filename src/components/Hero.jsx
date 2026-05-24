import { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/my1.jpeg';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      {/* Background Orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      {/* Grid Pattern */}
      <div className="hero__grid"></div>

      <div className="container hero__content">
        <div className="hero__left">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Available for Work
          </div>

          {/* Greeting */}
          <p className="hero__greeting">Hi there, I'm 👋</p>

          {/* Name */}
          <h1 className="hero__name">
            <span className="gradient-text">Thamilselvam Thishanthani</span>
          </h1>

          {/* Typewriter Role */}
          <div className="hero__role">
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero__description">
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about clean code, pixel-perfect design, and solving real problems.
          </p>



          {/* CTA Buttons */}
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn--secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
              Get In Touch
            </a>
            <a href="/resume.pdf" download className="btn btn--ghost" title="Download Resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
            <a href="https://github.com/THISHA123" target="_blank" rel="noreferrer" className="hero__social" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/thamilselvam-thishanthani-89a221293" target="_blank" rel="noreferrer" className="hero__social" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:thishanthani09@gmail.com" className="hero__social" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>

          </div>
        </div>

        {/* Right — Profile Visual */}
        <div className="hero__right">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring"></div>
            <div className="hero__avatar-ring hero__avatar-ring--2"></div>
            <div className="hero__avatar">
              <img src={profileImg} alt="Thamilselvam Thishanthani - Developer" />
            </div>
            {/* Floating Badges */}
            <div className="hero__badge-float hero__badge-float--1">
              <span>⚛️</span> React
            </div>
            <div className="hero__badge-float hero__badge-float--2">
              <span>🎨</span> Design
            </div>
            <div className="hero__badge-float hero__badge-float--3">
              <span>🚀</span> Node.js
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
