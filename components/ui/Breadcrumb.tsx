import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          color: 'var(--text-muted)',
          transition: 'color 0.15s ease',
        }}
      >
        <Home size={14} />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight size={13} color="#94A3B8" />
            {isLast || !item.href ? (
              <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{item.label}</span>
            ) : (
              <Link
                href={item.href}
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.15s ease',
                }}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
