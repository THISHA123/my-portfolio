import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'thishanthani09@gmail.com',
    href: 'mailto:thishanthani09@gmail.com',
    color: '#ec4899',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+94 71 234 5678',
    href: 'tel:+94712345678',
    color: '#22c55e',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Badulla, Sri Lanka',
    href: 'https://maps.google.com/?q=Badulla,Sri+Lanka',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/thamilselvam-thishanthani-89a221293',
    href: 'https://www.linkedin.com/in/thamilselvam-thishanthani-89a221293',
    color: '#2563eb',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's build something amazing together!</p>
        </div>

        <div className="contact__grid">
          {/* Left — Info */}
          <div className="contact__info">
            <div className="contact__info-card glass">
              <h3>Let's Talk! 🤝</h3>
              <p>
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of something great.
                Feel free to reach out — I usually respond within 24 hours!
              </p>

              <div className="contact__info-items">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="contact__info-item"
                    style={{ '--contact-color': item.color }}
                  >
                    <div className="contact__info-icon" style={{ color: item.color, background: `${item.color}18` }}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="contact__info-label">{item.label}</span>
                      <span className="contact__info-value">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="contact__availability">
                <div className="contact__availability-dot"></div>
                <div>
                  <strong>Available for Freelance & Full-time</strong>
                  <p>Currently open to new opportunities. Response time: ~24hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form glass" onSubmit={handleSubmit}>
              <h3>Send a Message 💌</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Thamilselvam Thishanthani"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="thishanthani09@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`contact__submit btn btn--primary ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="contact__spinner"></span>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>✅ Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
