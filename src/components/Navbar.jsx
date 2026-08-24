import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'design', label: 'Design' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    // Reliable IntersectionObserver for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 900,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(9, 13, 22, 0.94)' : 'rgba(9, 13, 22, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
      padding: scrolled ? '0.75rem 0' : '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}
          aria-label="Veenotha Y Portfolio Home"
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%)',
            border: '1px solid var(--border-highlight)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <Code2 size={20} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
              Veenotha <span className="gradient-text">Y</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              <span>BE CSE</span> • <span>Dr. N.G.P. IT</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', listStyle: 'none' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: isActive ? '700' : '500',
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      padding: '0.4rem 0.65rem',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      background: isActive ? 'rgba(6, 182, 212, 0.1)' : 'transparent'
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '2px',
                        background: 'var(--accent-cyan)',
                        borderRadius: '2px'
                      }} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <button 
            className="btn-primary" 
            onClick={onOpenResume}
            style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Download size={14} /> Resume
          </button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile navigation menu"
          style={{
            display: 'none',
            padding: '0.5rem',
            color: 'var(--text-main)',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.06)'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-highlight)',
          padding: '1.5rem 1.25rem',
          boxShadow: '0 20px 30px rgba(0,0,0,0.7)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.95rem',
                    fontWeight: activeSection === link.id ? '700' : '500',
                    color: activeSection === link.id ? 'var(--accent-cyan)' : 'var(--text-main)',
                    background: activeSection === link.id ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: activeSection === link.id ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid transparent'
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button 
              className="btn-primary" 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={16} /> View & Download Resume
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
