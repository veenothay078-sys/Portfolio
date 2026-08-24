import React from 'react';
import { User, Code2, Brain, CheckCircle2, Globe, Sparkles, Compass } from 'lucide-react';
import { personalInfo, languagesData, hobbiesData } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      title: "Software Engineering & Problem Solving",
      icon: <Code2 size={24} color="var(--accent-indigo)" />,
      description: "Applying foundational programming in Java, data structures, algorithms, and modular software architecture to build reliable applications.",
      borderColor: "var(--border-highlight)"
    },
    {
      title: "Web & Mobile Technologies",
      icon: <Compass size={24} color="var(--accent-cyan)" />,
      description: "Developing cross-platform mobile apps with Flutter & Firebase, alongside responsive modern web frontends using React, HTML5, and CSS3.",
      borderColor: "var(--border-cyan-highlight)"
    },
    {
      title: "Continuous Learning & Technical Growth",
      icon: <Brain size={24} color="var(--accent-purple)" />,
      description: "Constantly expanding knowledge across diverse technical domains, including Cloud Computing and IoT through formal NPTEL coursework.",
      borderColor: "rgba(168, 85, 247, 0.3)"
    }
  ];

  return (
    <section id="about" style={{ padding: '5.5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About <span className="gradient-text">{personalInfo.name}</span></h2>
          <p className="section-subtitle">
            Computer Science Engineering student focused on building practical technology solutions, solving analytical problems, and continuously learning.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Authentic Profile Narrative */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
              Academic & Professional Direction
            </h3>
            
            <p style={{ color: '#cbd5e1', lineHeight: '1.75', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
              {personalInfo.bio}
            </p>

            <p style={{ color: '#cbd5e1', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: '0.975rem' }}>
              Currently pursuing a <strong>Bachelor of Engineering in Computer Science Engineering</strong> at <strong>{personalInfo.college}</strong> (2023 – 2027) with an academic record of <strong>{personalInfo.cgpa}</strong>. My coursework and practical projects have equipped me with hands-on experience in full-stack web and mobile application development.
            </p>

            {/* Core Competencies Matrix */}
            <div style={{
              padding: '1.25rem',
              background: 'rgba(15, 23, 42, 0.65)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                Core Strengths & Mindset
              </div>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.6rem' }}>
                {[
                  "Software Engineering Fundamentals",
                  "Mobile & Web App Development",
                  "Analytical Problem Solving",
                  "Continuous Skill Acquisition",
                  "Cross-Functional Teamwork",
                  "Clean & Accessible Code"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={15} color="var(--accent-indigo)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages & Hobbies Container */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {/* Languages */}
              <div style={{
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.65)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Globe size={14} /> Languages
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {languagesData.map((l, i) => (
                    <span key={i} className="tech-pill" style={{ background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.25)', color: '#ffffff' }}>
                      {l.language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hobbies / Interests */}
              <div style={{
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.65)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-indigo)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={14} /> Hobbies & Interests
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {hobbiesData.map((h, i) => (
                    <span key={i} className="tech-pill" style={{ background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.25)', color: '#ffffff', fontSize: '0.78rem' }}>
                      {h.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.6rem',
                  borderColor: pillar.borderColor,
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  padding: '0.85rem',
                  borderRadius: '14px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {pillar.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.35rem', color: '#ffffff' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
