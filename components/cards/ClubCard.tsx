'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Award, Shield, ArrowRight } from 'lucide-react';
import { Club } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface ClubCardProps {
  club: Club;
}

export const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
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
      {/* Cover with Logo Overlay */}
      <div style={{ position: 'relative', width: '100%', height: '140px', backgroundColor: '#E2E8F0' }}>
        <Image
          src={club.coverUrl}
          alt={club.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.45)' }} />

        {/* Club Logo Avatar */}
        <div
          style={{
            position: 'absolute',
            bottom: '-24px',
            left: '1.25rem',
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            border: '3px solid #FFFFFF',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}
        >
          <Image
            src={club.logoUrl}
            alt={`${club.name} logo`}
            fill
            sizes="64px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Founded badge */}
        <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
          <Badge variant="navy">Est. {club.foundedYear}</Badge>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem 1.4rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.25, margin: 0 }}>
            {club.name}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            <MapPin size={13} color="var(--primary-green)" />
            <span>{club.location}</span>
          </div>
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1rem', fontSize: '0.825rem' }}>
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Head Coach</div>
            <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{club.coach}</div>
          </div>
          <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Squad Size</div>
            <div style={{ fontWeight: 700, color: 'var(--primary-green)' }}>{club.playersCount} Registered</div>
          </div>
        </div>

        {/* Top Achievement */}
        {club.achievements.length > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              color: 'var(--navy)',
              backgroundColor: 'var(--primary-green-light)',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '1.25rem',
              fontWeight: 600,
            }}
          >
            <Award size={14} color="var(--primary-green)" />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {club.achievements[0]}
            </span>
          </div>
        )}

        {/* Action Link */}
        <div style={{ marginTop: 'auto' }}>
          <Link
            href={`/clubs/${club.slug}`}
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
            <span>View Club</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
