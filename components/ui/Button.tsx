'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'lime' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--primary-green)',
          color: '#FFFFFF',
          border: '1px solid var(--primary-green)',
          boxShadow: '0 2px 8px rgba(11, 107, 58, 0.25)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--primary-green-light)',
          color: 'var(--primary-green)',
          border: '1px solid rgba(11, 107, 58, 0.15)',
        };
      case 'lime':
        return {
          backgroundColor: 'var(--lime)',
          color: 'var(--navy)',
          fontWeight: 700,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 2px 10px rgba(216, 255, 62, 0.4)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--navy)',
          border: '1.5px solid var(--border-light)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--navy)',
          border: 'none',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.45rem 0.9rem',
          fontSize: '0.85rem',
          borderRadius: 'var(--radius-pill)',
        };
      case 'lg':
        return {
          padding: '0.9rem 1.85rem',
          fontSize: '1.05rem',
          borderRadius: 'var(--radius-pill)',
        };
      case 'md':
      default:
        return {
          padding: '0.7rem 1.35rem',
          fontSize: '0.925rem',
          borderRadius: 'var(--radius-pill)',
        };
    }
  };

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.65 : 1,
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-label)',
    letterSpacing: '0.01em',
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  const content = (
    <>
      {isLoading && (
        <span
          style={{
            width: '14px',
            height: '14px',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.6s linear infinite',
          }}
        />
      )}
      {!isLoading && icon && iconPosition === 'left' && <span style={{ display: 'flex' }}>{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span style={{ display: 'flex' }}>{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} style={baseStyle} className={`turiya-btn ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      style={baseStyle}
      className={`turiya-btn ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
