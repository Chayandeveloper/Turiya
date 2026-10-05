'use client';

import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  action?: React.ReactNode;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  action,
  light = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={isCentered ? 'centered-section-header' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
        justifyContent: 'center',
        textAlign: align,
        maxWidth: isCentered ? '820px' : '720px',
        marginLeft: isCentered ? 'auto' : undefined,
        marginRight: isCentered ? 'auto' : undefined,
        marginBottom: '2.5rem',
        position: 'relative',
      }}
    >
      {/* Eyebrow Pill */}
      {eyebrow && (
        <div style={{ marginBottom: '0.85rem' }}>
          <span
            className="heading-eyebrow-pill"
            style={{
              backgroundColor: light ? 'rgba(255, 255, 255, 0.16)' : 'rgba(234, 246, 239, 0.95)',
              color: light ? '#86EFAC' : 'var(--primary-green)',
              border: light ? '1px solid rgba(134, 239, 172, 0.45)' : '1px solid rgba(11, 107, 58, 0.22)',
              boxShadow: light ? '0 2px 12px rgba(134, 239, 172, 0.15)' : '0 2px 10px rgba(11, 107, 58, 0.08)',
              margin: '0 auto',
            }}
          >
            {/* Live Pulsing Beacon Dot */}
            <span
              style={{
                position: 'relative',
                display: 'flex',
                width: '8px',
                height: '8px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: light ? '#4ADE80' : 'var(--primary-green)',
                  opacity: 0.85,
                  animation: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: light ? '#4ADE80' : 'var(--primary-green)',
                }}
              />
            </span>
            <span>{eyebrow}</span>
          </span>
        </div>
      )}

      {/* CONTINUOUS ANIMATED LUXURY HEADING */}
      <h2
        className={light ? 'animated-heading-shimmer-light' : 'animated-heading-shimmer'}
        style={{
          fontSize: 'clamp(2rem, 3.8vw, 3.05rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          textTransform: 'uppercase',
          letterSpacing: '0.025em',
          marginBottom: 0,
          fontFamily: 'var(--font-heading)',
          textAlign: align,
        }}
      >
        {title}
      </h2>

      {/* Decorative Gradient Accent Line */}
      {isCentered && (
        <div
          className="heading-decorative-line"
          style={{
            background: light
              ? 'linear-gradient(90deg, transparent, #86EFAC, #D8FF3E, transparent)'
              : 'linear-gradient(90deg, transparent, var(--primary-green), var(--bright-green), transparent)',
          }}
        />
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className="heading-subtitle-centered"
          style={{
            color: light ? 'rgba(255, 255, 255, 0.92)' : 'var(--text-muted)',
            marginTop: isCentered ? 0 : '0.65rem',
            textAlign: align,
            maxWidth: '680px',
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Centered Action Button */}
      {action && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCentered ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
            marginTop: '1.25rem',
            width: '100%',
          }}
        >
          {action}
        </div>
      )}
    </div>
  );
};

