import React, { useState } from 'react';
import { Cpu, Code2, Layers, Database, Brain, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'data-tools', label: 'Data & Tools' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  return (
    <section id="skills" style={{ padding: '5.5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">
            Structured, verified skillset spanning core programming languages, web & mobile frameworks, analytics tools, and essential soft skills.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={activeFilter === cat.id ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.5rem 1.15rem', fontSize: '0.875rem' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {/* 1. Programming Languages */}
          {(activeFilter === 'all' || activeFilter === 'languages') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-indigo)'
                }}>
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Programming Languages</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Core Languages & Algorithmic Practice</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
                {skillsData.programmingLanguages.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>
                      {skill.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                      {skill.level}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Web & Mobile Technologies */}
          {(activeFilter === 'all' || activeFilter === 'web-mobile') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: 'var(--accent-cyan)'
                }}>
                  <Layers size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Web & Mobile Development</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Frameworks, Libraries & Platforms</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {skillsData.webAndMobile.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>
                        {tech.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {tech.context}
                      </div>
                    </div>

                    <span className="tech-pill" style={{ background: 'rgba(6, 182, 212, 0.12)', borderColor: 'rgba(6, 182, 212, 0.3)', color: 'var(--accent-cyan)', fontSize: '0.72rem' }}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Data & Tools */}
          {(activeFilter === 'all' || activeFilter === 'data-tools') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  color: 'var(--accent-purple)'
                }}>
                  <Database size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Data, Analytics & Tools</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Analysis, Visualization & Design Software</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
                {skillsData.dataAndTools.map((tool, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>
                      {tool.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple)' }}>
                      {tool.level}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      {tool.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Professional Soft Skills */}
          {(activeFilter === 'all' || activeFilter === 'soft') && (
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--accent-emerald)'
                }}>
                  <Brain size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Soft Skills</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Interpersonal & Problem Solving</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {skillsData.softSkills.map((soft, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.65rem 1.1rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#e2e8f0',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <CheckCircle2 size={15} color="var(--accent-emerald)" />
                    <span>{soft}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
