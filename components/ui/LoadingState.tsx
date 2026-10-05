import React from 'react';

export interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading Turiya platform records...' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '38px',
          height: '38px',
          border: '3px solid var(--primary-green-light)',
          borderTopColor: 'var(--primary-green)',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
          marginBottom: '1rem',
        }}
      />
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>{message}</p>
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
