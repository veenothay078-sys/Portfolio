import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  if (!experienceData || experienceData.length === 0) {
    return null; // Clean, future-ready: does not render anything until experiences are added
  }

  return (
    <section id="experience" style={{ padding: '5.5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">Experience & <span className="gradient-text">Internships</span></h2>
          <p className="section-subtitle">
            Professional and technical experience across engineering, development, and design domains.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderColor: 'var(--border-highlight)',
                position: 'relative'
              }}
            >
              {/* Header Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.25rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                    {exp.company}
                  </div>
                </div>

                <div>
                  <span className="tech-pill" style={{ background: 'rgba(99, 102, 241, 0.12)', borderColor: 'var(--border-highlight)', color: 'var(--accent-indigo)' }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {exp.description}
              </p>

              {/* Responsibilities */}
              {exp.keyPoints && exp.keyPoints.length > 0 && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {exp.keyPoints.map((point, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.925rem', color: '#e2e8f0', lineHeight: '1.6' }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tags */}
              {exp.skills && exp.skills.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="tech-pill" style={{ background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.3)', color: '#ffffff' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
