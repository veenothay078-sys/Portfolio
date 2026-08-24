import React from 'react';
import { X, ExternalLink, Info } from 'lucide-react';

const NoticeModal = ({ isOpen, onClose, title, message, url }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-indigo)'
          }}>
            <Info size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{title || 'Demo Preview Notice'}</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Project & Link Status</span>
          </div>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {message || 'This live project demo link is configured with a placeholder handle. It is fully ready for custom deployment URL integration.'}
        </p>

        {url && (
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(15, 23, 42, 0.6)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.85rem',
            color: 'var(--accent-cyan)',
            wordBreak: 'break-all',
            marginBottom: '1.5rem',
            fontFamily: 'monospace'
          }}>
            Target URL: {url}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button className="btn-secondary" onClick={onClose} style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
            Got It
          </button>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
              onClick={onClose}
            >
              Open Placeholder <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
