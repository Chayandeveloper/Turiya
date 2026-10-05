'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Opportunity } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface OpportunityCardProps {
  opportunity: Opportunity;
  onApplyClick?: (opportunity: Opportunity) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity, onApplyClick }) => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    router.push(`/opportunities/${opportunity.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="turiya-card-hoverable"
    >
      {/* Top Header with Category Badge and Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.5rem' }}>
        <Badge variant="green">{opportunity.category.toUpperCase()} OPPORTUNITY</Badge>
        <Badge variant={opportunity.status === 'Active' ? 'open' : 'upcoming'} size="sm">
          {opportunity.status}
        </Badge>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.25, marginBottom: '0.4rem' }}>
        {opportunity.title}
      </h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--primary-green)', fontWeight: 700, marginBottom: '1rem' }}>
        {opportunity.organization}
      </p>

      {/* Meta Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={15} color="var(--primary-green)" />
          <span>{opportunity.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={15} color="var(--primary-green)" />
          <span>Event Date: <strong>{opportunity.date}</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <CheckCircle2 size={15} color="var(--primary-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{opportunity.eligibility}</span>
        </div>
      </div>

      {/* Description excerpt */}
      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem', WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {opportunity.description}
      </p>

      {/* Actions */}
      <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
        <Link
          href={`/opportunities/${opportunity.slug}`}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--primary-green-light)',
            color: 'var(--primary-green)',
            fontSize: '0.875rem',
            fontWeight: 700,
            transition: 'all 0.2s ease',
          }}
        >
          <span>View Opportunity</span>
          <ArrowRight size={14} />
        </Link>

        {onApplyClick ? (
          <button
            onClick={() => onApplyClick(opportunity)}
            style={{
              padding: '0.65rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--primary-green)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: 'none',
              transition: 'background-color 0.2s ease',
            }}
          >
            Apply Now
          </button>
        ) : (
          <Link
            href={`/opportunities/${opportunity.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.65rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--primary-green)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );
};
