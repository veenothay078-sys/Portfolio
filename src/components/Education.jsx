import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & <span className="gradient-text">Qualifications</span></h2>
          <p className="section-subtitle">
            Formal academic journey in Computer Science Engineering and foundational schooling based on resume records.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderColor: idx === 0 ? 'var(--border-highlight)' : 'var(--border-subtle)',
                position: 'relative'
              }}
            >
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                    <div style={{
                      padding: '0.45rem',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.2)',
                      color: 'var(--accent-indigo)'
                    }}>
                      <BookOpen size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800' }}>{item.degree}</h3>
                  </div>

                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                    {item.institution}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <span className="tech-pill" style={{ background: 'rgba(99, 102, 241, 0.12)', borderColor: 'var(--border-highlight)', color: '#ffffff' }}>
                    <Calendar size={13} color="var(--accent-indigo)" /> {item.period}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Award size={14} /> {item.grade}
                  </span>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {item.highlights.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={15} color="var(--accent-cyan)" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
