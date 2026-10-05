import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'lime' | 'navy' | 'open' | 'upcoming' | 'completed' | 'urgent' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'green',
  size = 'md',
  icon,
  className = '',
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'green':
        return {
          backgroundColor: 'var(--primary-green-light)',
          color: 'var(--primary-green)',
          border: '1px solid rgba(11, 107, 58, 0.2)',
        };
      case 'lime':
        return {
          backgroundColor: '#F7FFE5',
          color: '#4B6300',
          border: '1px solid rgba(216, 255, 62, 0.8)',
        };
      case 'navy':
        return {
          backgroundColor: '#EAEFF5',
          color: 'var(--navy)',
          border: '1px solid rgba(16, 42, 67, 0.12)',
        };
      case 'open':
        return {
          backgroundColor: '#E3F8ED',
          color: '#0B6B3A',
          border: '1px solid rgba(11, 107, 58, 0.25)',
        };
      case 'upcoming':
        return {
          backgroundColor: '#FEF3C7',
          color: '#B45309',
          border: '1px solid rgba(217, 119, 6, 0.25)',
        };
      case 'completed':
        return {
          backgroundColor: '#F1F5F9',
          color: '#475569',
          border: '1px solid #CBD5E1',
        };
      case 'urgent':
        return {
          backgroundColor: '#FEE2E2',
          color: '#B91C1C',
          border: '1px solid rgba(220, 38, 38, 0.25)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-muted)',
          border: '1px solid var(--border-light)',
        };
      default:
        return {};
    }
  };

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    borderRadius: 'var(--radius-pill)',
    fontWeight: 700,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    padding: size === 'sm' ? '0.2rem 0.6rem' : '0.35rem 0.85rem',
    fontSize: size === 'sm' ? '0.7rem' : '0.75rem',
    fontFamily: 'var(--font-label)',
    ...getVariantStyles(),
  };

  return (
    <span style={style} className={`turiya-badge ${className}`}>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </span>
  );
};
