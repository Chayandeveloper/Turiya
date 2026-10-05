import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No items found',
  description = 'Try adjusting your search query or removing filters to discover more records.',
  actionText,
  onAction,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        border: '1px dashed var(--border-light)',
        padding: '3.5rem 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '520px',
        margin: '2rem auto',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-green-light)',
          color: 'var(--primary-green)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
        }}
      >
        {icon || <SearchX size={32} />}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: actionText ? '1.5rem' : 0, maxWidth: '380px' }}>
        {description}
      </p>
      {actionText && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
