import React from 'react';
import { Trophy, CheckCircle2, Award, Cpu, Code2, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const Achievements = () => {
  const getIcon = (index) => {
    switch (index % 4) {
      case 0:
        return <Cpu size={22} color="var(--accent-cyan)" />;
      case 1:
        return <Sparkles size={22} color="var(--accent-indigo)" />;
      case 2:
        return <Code2 size={22} color="var(--accent-purple)" />;
      case 3:
      default:
        return <Award size={22} color="var(--accent-emerald)" />;
    }
  };

  return (
    <section id="achievements" style={{ padding: '5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Highlights & Milestones</span>
          </div>
          <h2 className="section-title">Key <span className="gradient-text">Achievements</span></h2>
          <p className="section-subtitle">
            Authentic academic accomplishments, technical certifications, and project milestones directly from resume.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderColor: 'rgba(99, 102, 241, 0.2)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <div style={{
                padding: '0.75rem',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getIcon(idx)}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={13} /> Verified Achievement
                </div>
                <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.6', fontWeight: '500' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
