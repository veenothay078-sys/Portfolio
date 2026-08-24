import React from 'react';
import { Award, Cpu, Cloud, Keyboard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const certIcons = {
    'nptel-iot': <Cpu size={24} color="var(--accent-cyan)" />,
    'nptel-cloud': <Cloud size={24} color="var(--accent-indigo)" />,
    'typewriting-junior': <Keyboard size={24} color="var(--accent-purple)" />,
    'cyber-security': <ShieldCheck size={24} color="var(--accent-emerald)" />
  };

  return (
    <section id="certifications" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">Certifications & <span className="gradient-text">Workshops</span></h2>
          <p className="section-subtitle">
            Formal technical certifications and verified workshop participation from NPTEL and technical education boards.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem'
        }}>
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: 'var(--border-subtle)'
              }}
            >
              <div>
                {/* Header Icon */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    padding: '0.65rem',
                    borderRadius: '14px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {certIcons[cert.id] || <Award size={24} color="var(--accent-indigo)" />}
                  </div>

                  <span className="tech-pill" style={{
                    background: 'rgba(99, 102, 241, 0.12)',
                    borderColor: 'rgba(99, 102, 241, 0.3)',
                    color: '#ffffff',
                    fontSize: '0.75rem'
                  }}>
                    <CheckCircle2 size={12} color="var(--accent-cyan)" /> {cert.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.35rem', color: '#ffffff', lineHeight: '1.35' }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                  Issuer: {cert.issuer}
                </div>

                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  {cert.description}
                </p>
              </div>

              <div style={{
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}>
                <span>Resume Verified:</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
