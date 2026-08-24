import React from 'react';
import { Palette, Search, Layout, Users, Sparkles } from 'lucide-react';
import { FigmaIcon } from './BrandIcons';
import { designAspects } from '../data/portfolioData';

const UIUXShowcase = () => {
  const getAspectIcon = (idx) => {
    switch (idx % 6) {
      case 0:
        return <Palette size={22} color="var(--accent-cyan)" />;
      case 1:
        return <Search size={22} color="var(--accent-indigo)" />;
      case 2:
        return <Layout size={22} color="var(--accent-purple)" />;
      case 3:
        return <FigmaIcon size={22} />;
      case 4:
        return <Sparkles size={22} color="var(--accent-emerald)" />;
      case 5:
      default:
        return <Users size={22} color="#38bdf8" />;
    }
  };

  return (
    <section id="design" style={{ padding: '5.5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Palette size={14} />
            <span>Design & Prototyping</span>
          </div>
          <h2 className="section-title">Design & <span className="gradient-text-cyan">UI/UX</span></h2>
          <p className="section-subtitle">
            Applying structured user research, responsive wireframing in Figma, and human-centered design principles to build intuitive interfaces.
          </p>
        </div>

        {/* Framework Focus Banner */}
        <div className="glass-card" style={{
          padding: '2rem',
          marginBottom: '3rem',
          border: '1px solid var(--border-highlight)',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                padding: '0.6rem',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.2)',
                color: 'var(--accent-indigo)'
              }}>
                <FigmaIcon size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>
                  UI/UX Design Framework & Methodology
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
                  User-Centered Design • Figma Prototyping • Interface Usability
                </span>
              </div>
            </div>

            <span className="tech-pill" style={{ background: 'rgba(6, 182, 212, 0.15)', borderColor: 'var(--accent-cyan)', color: '#ffffff' }}>
              Figma • Wireframing • Usability
            </span>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '900px' }}>
            Bridging the gap between software functionality and user expectations. My design approach integrates foundational user research, structured Figma wireframing, and iterative usability evaluation to build clean, accessible, and developer-friendly digital interfaces.
          </p>
        </div>

        {/* Core Design Aspects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {designAspects.map((aspect, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                borderColor: 'var(--border-subtle)'
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
                {getAspectIcon(idx)}
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.4rem', color: '#ffffff' }}>
                  {aspect.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {aspect.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXShowcase;
