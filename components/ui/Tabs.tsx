'use client';

import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.35rem',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        maxWidth: '100%',
        overflowX: 'auto',
      }}
      className={`turiya-tabs ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              padding: '0.5rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.875rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              backgroundColor: isActive ? 'var(--primary-green)' : 'transparent',
              color: isActive ? '#FFFFFF' : 'var(--navy)',
              boxShadow: isActive ? '0 2px 6px rgba(11, 107, 58, 0.25)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                style={{
                  fontSize: '0.725rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '10px',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--primary-green-light)',
                  color: isActive ? '#FFFFFF' : 'var(--primary-green)',
                }}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
