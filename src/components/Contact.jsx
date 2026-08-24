import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">
            Open for entry-level Software Engineer opportunities, collaborative projects, and professional inquiries.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Contact Details */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>
              Direct Contact Details
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '2rem' }}>
              Feel free to reach out directly via email, phone, or explore my code on GitHub.
            </p>

            {/* Email Box */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-indigo)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</div>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', wordBreak: 'break-all' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                  style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
                  title="Open mail client"
                >
                  Send <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Phone Box */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: 'var(--accent-cyan)'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</div>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  onClick={handleCopyPhone}
                  className="btn-secondary"
                  style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                  {copiedPhone ? 'Copied' : 'Copy'}
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="btn-primary"
                  style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
                  title="Call number"
                >
                  Call <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-main)'
                }}>
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Official GitHub</div>
                  <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>veenothay078-sys</span>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
              >
                Visit Profile <ArrowUpRight size={14} />
              </a>
            </div>

            {/* LinkedIn Card */}
            {personalInfo.linkedin && (
              <div style={{
                background: 'rgba(15, 23, 42, 0.65)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    padding: '0.6rem',
                    borderRadius: '12px',
                    background: 'rgba(0, 119, 181, 0.15)',
                    color: '#0077b5'
                  }}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LinkedIn Profile</div>
                    <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>Veenotha Yogeshwaran</span>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderColor: 'rgba(0, 119, 181, 0.3)', color: '#38bdf8' }}
                >
                  Connect <ArrowUpRight size={14} />
                </a>
              </div>
            )}

            {/* Academic Institute */}
            <div style={{
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              fontSize: '0.85rem',
              color: '#cbd5e1'
            }}>
              <strong>Institution:</strong> {personalInfo.college}<br/>
              <strong>Program:</strong> {personalInfo.degree}
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '1.75rem' }}>
              Have a job opportunity or technical question? Submit a message below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter / Engineering Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Entry-Level Software Engineer Position"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Message Confirmation Modal */}
        {isSubmitted && (
          <div className="modal-overlay" onClick={() => setIsSubmitted(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: 'var(--accent-emerald)'
              }}>
                <CheckCircle2 size={32} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>Thank You!</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Your message has been captured. You can also reach <strong>{personalInfo.name}</strong> directly at <strong style={{ color: 'var(--accent-cyan)' }}>{personalInfo.email}</strong>.
              </p>

              <button className="btn-primary" onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
