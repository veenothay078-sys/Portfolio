import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'rgba(9, 13, 22, 0.96)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '3.5rem 0 2rem 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
              border: '1px solid var(--border-highlight)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <Code2 size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.25rem' }}>
                {personalInfo.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {personalInfo.title}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            <a href="#home" style={{ transition: 'color 0.2s' }}>Home</a>
            <a href="#about" style={{ transition: 'color 0.2s' }}>About</a>
            <a href="#skills" style={{ transition: 'color 0.2s' }}>Skills</a>
            <a href="#projects" style={{ transition: 'color 0.2s' }}>Projects</a>
            <a href="#design" style={{ transition: 'color 0.2s' }}>Design</a>
            <a href="#certifications" style={{ transition: 'color 0.2s' }}>Certifications</a>
            <a href="#education" style={{ transition: 'color 0.2s' }}>Education</a>
            <a href="#contact" style={{ transition: 'color 0.2s' }}>Contact</a>
          </div>

          {/* Social & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}
              title="GitHub Profile"
            >
              <GithubIcon size={16} /> GitHub
            </a>

            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem', color: '#38bdf8', borderColor: 'rgba(0, 119, 181, 0.3)' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            )}

            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}
              title="Email Veenotha Y"
            >
              <Mail size={16} /> Email
            </a>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}
              title="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright & verified attribution */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © 2026 Veenotha Y. All rights reserved.
          </div>
          <div>
            Dr. N.G.P Institute of Technology • Computer Science Engineering
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
