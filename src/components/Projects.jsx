import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ShieldAlert, CheckCircle2, Info, Smartphone } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData, verifiedGithubRepos, personalInfo } from '../data/portfolioData';

const Projects = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showAllRepos, setShowAllRepos] = useState(false);

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Software</span>
          </div>
          <h2 className="section-title">Projects & <span className="gradient-text">Applications</span></h2>
          <p className="section-subtitle">
            Practical software projects addressing critical healthcare needs and civic governance, supported by verified public GitHub repositories.
          </p>
        </div>

        {/* Featured Case Study Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                borderColor: 'var(--border-subtle)'
              }}
            >
              <div>
                {/* Header Category & Badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: project.id === 'plasma-donation-system' 
                      ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                      : 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                    border: '1px solid var(--border-highlight)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}>
                    {project.id === 'plasma-donation-system' ? <Smartphone size={24} /> : <ShieldAlert size={24} />}
                  </div>

                  <span className="tech-pill" style={{ background: 'rgba(99, 102, 241, 0.15)', borderColor: 'var(--accent-indigo)', color: '#ffffff' }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '0.4rem', color: '#ffffff' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '1rem' }}>
                  {project.subtitle}
                </p>

                <p style={{ fontSize: '0.925rem', color: '#cbd5e1', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  {project.overview}
                </p>

                {/* Key Verified Features */}
                <div style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-indigo)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                    Verified Features & Architecture:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {project.keyFeatures.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                        <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.65rem', fontSize: '0.875rem' }}
                  >
                    <GithubIcon size={16} /> View Source
                  </a>
                ) : (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.65rem', fontSize: '0.875rem' }}
                  >
                    <GithubIcon size={16} /> View on GitHub
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                  title="View Case Study Details"
                >
                  <Info size={16} /> Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Public GitHub Repositories Showcase */}
        <div style={{
          background: 'rgba(17, 24, 39, 0.6)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <GithubIcon size={20} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff' }}>
                  Public GitHub Repositories
                </h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Directly verified from <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>github.com/veenothay078-sys</a>
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}
            >
              <GithubIcon size={16} /> Visit Full GitHub Profile
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {(showAllRepos ? verifiedGithubRepos : verifiedGithubRepos.slice(0, 6)).map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                className="glass-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', wordBreak: 'break-all' }}>
                      {repo.name}
                    </h4>
                    <ExternalLink size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
                  </div>

                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {repo.description}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>
                    ● {repo.language}
                  </span>
                  <span className="tech-pill" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                    {repo.badge}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {verifiedGithubRepos.length > 6 && (
            <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
              <button
                className="btn-secondary"
                onClick={() => setShowAllRepos(!showAllRepos)}
                style={{ fontSize: '0.875rem', padding: '0.55rem 1.25rem' }}
              >
                {showAllRepos ? 'Show Less Repositories' : `View All ${verifiedGithubRepos.length} Repositories`}
              </button>
            </div>
          )}
        </div>

        {/* Detailed Case Study Modal */}
        {activeModalProject && (
          <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{activeModalProject.title}</h3>
                <span className="tech-pill" style={{ background: 'rgba(99, 102, 241, 0.15)', borderColor: 'var(--accent-indigo)' }}>
                  {activeModalProject.category}
                </span>
              </div>

              <p style={{ color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.925rem' }}>
                {activeModalProject.subtitle}
              </p>

              <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {activeModalProject.overview}
              </p>

              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-indigo)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Architectural & Implementation Details:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', color: '#e2e8f0', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {activeModalProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem' }}>{feat}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
                  >
                    <GithubIcon size={16} /> Open GitHub Repository
                  </a>
                )}
                <button className="btn-secondary" onClick={() => setActiveModalProject(null)} style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
