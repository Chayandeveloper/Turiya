'use client';

import React from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem 1.5rem',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      className="turiya-card-hoverable"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.25rem, 4vw, 3rem)',
            fontWeight: 900,
            color: 'var(--primary-green)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}
        >
          <AnimatedCounter value={value} />
        </span>
        {icon && (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-green-light)',
              color: 'var(--primary-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </div>
        )}
      </div>

      <h3
        style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          color: 'var(--navy)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          marginBottom: description ? '0.35rem' : 0,
        }}
      >
        {label}
      </h3>

      {description && (
        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.45, marginTop: 'auto' }}>
          {description}
        </p>
      )}
    </div>
  );
};
