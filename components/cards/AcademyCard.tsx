'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, UserCheck, ArrowRight } from 'lucide-react';
import { Academy } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface AcademyCardProps {
  academy: Academy;
}

export const AcademyCard: React.FC<AcademyCardProps> = ({ academy }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="turiya-card-hoverable"
    >
      {/* Academy Photo */}
      <div style={{ position: 'relative', width: '100%', height: '190px', backgroundColor: '#E2E8F0' }}>
        <Image
          src={academy.image}
          alt={academy.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.35)' }} />

        {/* Age Groups Badge list top left */}
        <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', display: 'flex', gap: '0.35rem' }}>
          {academy.ageGroups.slice(0, 3).map((ag) => (
            <Badge key={ag} variant="lime" size="sm">{ag}</Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.25, marginBottom: '0.5rem' }}>
          {academy.name}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={15} color="var(--primary-green)" />
            <span>{academy.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <UserCheck size={15} color="var(--primary-green)" />
            <span>Coach {academy.headCoach} ({academy.coachLicense})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={15} color="var(--primary-green)" />
            <span>{academy.trainingDays}</span>
          </div>
        </div>

        {/* Action */}
        <div style={{ marginTop: 'auto' }}>
          <Link
            href={`/academies/${academy.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.65rem 1rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--primary-green-light)',
              color: 'var(--primary-green)',
              fontSize: '0.875rem',
              fontWeight: 700,
              transition: 'all 0.2s ease',
            }}
          >
            <span>View Academy</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
