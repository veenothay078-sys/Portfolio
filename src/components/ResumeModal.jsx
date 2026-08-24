import React from 'react';
import { X, Download, FileText, GraduationCap, Award, Code2, CheckCircle2, Mail, Phone, Globe, User } from 'lucide-react';
import { personalInfo, educationData, projectsData, certificationsData, achievementsData, skillsData, languagesData, hobbiesData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `================================================================================
VEENOTHA Y - RESUME
Computer Science Engineering Student
Dr. N.G.P Institute of Technology (2023 - 2027) | CGPA: 8.01
================================================================================

CONTACT INFORMATION:
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- GitHub: ${personalInfo.github}
${personalInfo.linkedin ? `- LinkedIn: ${personalInfo.linkedin}\n` : ''}- Institution: ${personalInfo.college}

PROFILE:
${personalInfo.bio}

EDUCATION:
${educationData.map(edu => `* ${edu.degree}\n  ${edu.institution} (${edu.period}) | Grade: ${edu.grade}\n  ${edu.description}`).join('\n\n')}

ACADEMIC & PRACTICAL PROJECTS:
${projectsData.map(proj => `* ${proj.title} (${proj.category})\n  Technologies: ${proj.techStack.join(', ')}\n  Overview: ${proj.overview}\n  Features:\n` + proj.keyFeatures.map(f => `    - ${f}`).join('\n')).join('\n\n')}

TECHNICAL SKILLS:
- Programming Languages: ${skillsData.programmingLanguages.map(s => s.name).join(', ')}
- Web & Mobile Technologies: ${skillsData.webAndMobile.map(s => s.name).join(', ')}
- Data & Analytics Tools: ${skillsData.dataAndTools.map(s => s.name).join(', ')}
- Soft Skills: ${skillsData.softSkills.join(', ')}

CERTIFICATIONS & WORKSHOPS:
${certificationsData.map(c => `* ${c.title} (${c.issuer}) - ${c.category}`).join('\n')}

ACHIEVEMENTS:
${achievementsData.map(a => `* ${a.text}`).join('\n')}

LANGUAGES:
${languagesData.map(l => `* ${l.language}`).join('\n')}

HOBBIES & INTERESTS:
${hobbiesData.map(h => `* ${h.title}`).join('\n')}

================================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Veenotha_Y_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: '2rem' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close resume modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText color="var(--accent-cyan)" size={24} />
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>Veenotha Y — Resume</h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Computer Science Engineering Student</span>
            </div>
          </div>

          <button className="btn-primary" onClick={handleDownload} style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
            <Download size={16} /> Download Resume File
          </button>
        </div>

        {/* Formatted Scrollable Resume Document */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          maxHeight: '62vh',
          overflowY: 'auto'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px dashed rgba(255,255,255,0.12)', paddingBottom: '1rem' }}>
            <h1 style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              {personalInfo.name}
            </h1>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              {personalInfo.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Mail size={14} color="var(--accent-indigo)" /> {personalInfo.email}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Phone size={14} color="var(--accent-cyan)" /> {personalInfo.phone}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Globe size={14} color="var(--accent-purple)" /> github.com/veenothay078-sys</span>
              {personalInfo.linkedin && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Globe size={14} color="#0077b5" /> linkedin.com/in/veenotha-yogeshwaran
                </span>
              )}
            </div>
          </div>

          {/* Profile */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={16} /> Profile
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.65' }}>{personalInfo.bio}</p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GraduationCap size={16} /> Education
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '0.85rem', paddingLeft: '0.75rem', borderLeft: '2px solid var(--accent-cyan)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '0.9rem', color: '#ffffff' }}>
                  <span>{edu.degree}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.825rem' }}>{edu.period}</span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {edu.institution} — <strong style={{ color: '#fbbf24' }}>{edu.grade}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Code2 size={16} /> Academic & Practical Projects
            </h3>
            {projectsData.map((p, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#f1f5f9' }}>
                  {p.title} <span style={{ fontWeight: '400', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>({p.techStack.join(', ')})</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: '#94a3b8' }}>{p.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} /> Certifications
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {certificationsData.map((c, i) => (
                <span key={i} className="tech-pill" style={{ background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.3)', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={12} color="var(--accent-cyan)" /> {c.title}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Code2 size={16} /> Technical Skills
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              <strong>Languages:</strong> Java, JavaScript, Python, C++<br/>
              <strong>Web & Mobile:</strong> HTML5, CSS3, React, Flutter, Firebase, WampServer<br/>
              <strong>Data & Tools:</strong> Power BI, MS Excel, Figma
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose} style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
