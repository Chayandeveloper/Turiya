'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Story } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface StoryCardProps {
  story: Story;
  featured?: boolean;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, featured = false }) => {
  if (featured) {
    return (
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-card)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="turiya-card-hoverable"
      >
        <div style={{ position: 'relative', minHeight: '340px', backgroundColor: '#E2E8F0' }}>
          <Image
            src={story.image}
            alt={story.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
            <Badge variant="lime">{story.category}</Badge>
          </div>
        </div>

        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={13} color="var(--primary-green)" />
              {story.location}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={13} />
              {story.readTime}
            </span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 800,
              color: 'var(--navy)',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            {story.title}
          </h3>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {story.excerpt}
          </p>

          <Link
            href={`/stories/${story.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--primary-green)',
              fontWeight: 800,
              fontSize: '0.95rem',
              marginTop: 'auto',
            }}
          >
            <span>Read Complete Story</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

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
      <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#E2E8F0' }}>
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <Badge variant="lime">{story.category}</Badge>
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
          <span>{story.location}</span>
          <span>•</span>
          <span>{story.readTime}</span>
        </div>

        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            color: 'var(--navy)',
            lineHeight: 1.3,
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em',
          }}
        >
          {story.title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            marginBottom: '1.25rem',
            WebkitLineClamp: 3,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {story.excerpt}
        </p>

        <div style={{ marginTop: 'auto' }}>
          <Link
            href={`/stories/${story.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--primary-green)',
              fontWeight: 700,
              fontSize: '0.875rem',
            }}
          >
            <span>Read Story</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
