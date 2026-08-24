import { ArrowRight, Download, Mail, Phone, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      padding: '4.5rem 0 3.5rem 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Brand & Hero Messaging */}
          <div>
            {/* Top Clean Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: 'var(--accent-indigo)',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '1.25rem'
            }}>
              <Sparkles size={14} />
              <span>Dr. N.G.P. Institute of Technology</span>
              <span style={{ color: 'var(--border-subtle)' }}>•</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Computer Science Engineering</span>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}>
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Main Title */}
            <h2 style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontWeight: '700',
              color: '#e2e8f0',
              marginBottom: '0.5rem',
              lineHeight: '1.3'
            }}>
              {personalInfo.title}
            </h2>

            {/* Brand Positioning Tagline */}
            <p style={{
              fontSize: '0.925rem',
              fontWeight: '600',
              color: 'var(--accent-cyan)',
              marginBottom: '1.25rem',
              letterSpacing: '0.01em'
            }}>
              {personalInfo.focus}
            </p>

            {/* Profile Intro */}
            <p style={{
              fontSize: '1rem',
              color: '#94a3b8',
              lineHeight: '1.7',
              marginBottom: '1.75rem',
              maxWidth: '540px'
            }}>
              {personalInfo.bio}
            </p>

            {/* Clean Highlight Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.55rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.85rem',
                color: '#e2e8f0'
              }}>
                <CheckCircle2 size={15} color="var(--accent-cyan)" />
                <span><strong>8.01 CGPA</strong> (2023–2027)</span>
              </div>

              <div style={{
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.55rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.85rem',
                color: '#e2e8f0'
              }}>
                <GraduationCap size={15} color="var(--accent-indigo)" />
                <span>Dr. N.G.P. Institute of Technology</span>
              </div>
            </div>

            {/* Action Buttons - Clean Row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <button 
                className="btn-primary" 
                onClick={() => scrollToSection('projects')}
                id="hero-cta-projects"
              >
                View Projects <ArrowRight size={16} />
              </button>

              <button 
                className="btn-secondary" 
                onClick={() => scrollToSection('contact')}
                id="hero-cta-contact"
              >
                Contact Me <Mail size={16} />
              </button>

              <button 
                className="btn-secondary"
                onClick={onOpenResume}
                id="hero-cta-resume"
                style={{ borderColor: 'rgba(6, 182, 212, 0.3)', color: 'var(--accent-cyan)' }}
              >
                <Download size={16} /> Resume
              </button>
            </div>

            {/* Verified Quick Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                CONNECT:
              </span>
              
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                title="Official GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>

              {personalInfo.linkedin && (
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: '#0077b5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  title="Official LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={17} />
                </a>
              )}

              <a 
                href={`mailto:${personalInfo.email}`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                title={`Send Email: ${personalInfo.email}`}
                aria-label="Email Address"
              >
                <Mail size={17} />
              </a>

              <a 
                href={`tel:${personalInfo.phone}`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                title={`Call: ${personalInfo.phone}`}
                aria-label="Phone Number"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* Right Column: Clean & Neat Profile Overview Card */}
          <div>
            <div className="glass-card" style={{
              padding: '2.25rem 2rem',
              background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid var(--border-highlight)',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {/* Monogram Avatar & Name */}
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  margin: '0 auto 1rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-indigo) 0%, var(--accent-cyan) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  boxShadow: '0 0 25px rgba(99, 102, 241, 0.3)'
                }}>
                  VY
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.2rem', color: '#ffffff' }}>
                  {personalInfo.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                  {personalInfo.title}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {personalInfo.college}
                </p>
              </div>

              {/* 4 Clean Summary Metric Tiles */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.85rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Academics
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>
                    8.01 CGPA
                  </div>
                </div>

                <div style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Degree Program
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-indigo)' }}>
                    B.E. CSE
                  </div>
                </div>

                <div style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Institution
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff' }}>
                    Dr. N.G.P. IT
                  </div>
                </div>

                <div style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Batch
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>
                    2023 – 2027
                  </div>
                </div>
              </div>

              {/* Core Skill Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                justifyContent: 'center'
              }}>
                {['Java', 'React', 'Flutter', 'Firebase', 'HTML/CSS', 'Power BI', 'Figma'].map((skill, i) => (
                  <span key={i} className="tech-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
