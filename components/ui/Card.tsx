import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = true,
  padding = 'md',
  bordered = true,
  className = '',
  style,
  ...props
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'sm':
        return '1rem';
      case 'lg':
        return '2rem';
      case 'md':
      default:
        return '1.5rem';
    }
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: 'var(--radius-lg)',
    padding: getPadding(),
    border: bordered ? '1px solid var(--border-light)' : 'none',
    boxShadow: 'var(--shadow-card)',
    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    overflow: 'hidden',
    position: 'relative',
    ...style,
  };

  return (
    <div
      style={cardStyle}
      className={`turiya-card ${hoverable ? 'turiya-card-hoverable' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
