'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { STORIES_DATA } from '@/lib/constants/mock-data';
import { MapPin, Calendar, Clock, User, Quote, ArrowLeft, Share2 } from 'lucide-react';

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = STORIES_DATA.find((s) => s.slug === params.slug) || STORIES_DATA[0];

  return (
    <article className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <Breadcrumb
          items={[
            { label: 'Stories', href: '/stories' },
            { label: story.title },
          ]}
        />

        {/* Category & Read Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <Badge variant="green">{story.category}</Badge>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{story.readTime}</span>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <MapPin size={14} color="var(--primary-green)" />
            {story.location}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.25rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: 'var(--navy)',
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.025em',
          }}
        >
          {story.title}
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '2rem' }}>
          {story.subtitle}
        </p>

        {/* Author / Date Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 0',
            borderTop: '1px solid var(--border-light)',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-green-light)',
                color: 'var(--primary-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.9rem',
              }}
            >
              {story.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>{story.author}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Published on {story.date}</div>
            </div>
          </div>
        </div>

        {/* Large Story Cover Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '460px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-lg)',
            border: '4px solid #FFFFFF',
          }}
        >
          <Image
            src={story.image}
            alt={story.title}
            fill
            sizes="(max-width: 1024px) 100vw, 880px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Story Body Content */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            padding: ' clamp(1.75rem, 4vw, 3rem)',
            boxShadow: 'var(--shadow-card)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--navy)',
            marginBottom: '3rem',
          }}
        >
          {story.content.map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: '1.5rem', color: '#243B53' }}>
              {paragraph}
            </p>
          ))}

          {/* Editorial Quote Callout */}
          {story.quote && (
            <div
              style={{
                margin: '2.5rem 0',
                padding: '1.75rem 2rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--primary-green-light)',
                borderLeft: '5px solid var(--primary-green)',
              }}
            >
              <Quote size={28} color="var(--primary-green)" style={{ marginBottom: '0.5rem', opacity: 0.8 }} />
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  color: 'var(--navy)',
                  lineHeight: 1.45,
                  margin: '0 0 0.5rem',
                }}
              >
                "{story.quote.text}"
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
                — {story.quote.author}
              </div>
            </div>
          )}
        </div>

        {/* Return CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="secondary" size="md" href="/stories" icon={<ArrowLeft size={16} />} iconPosition="left">
            Back to Village Stories
          </Button>
        </div>
      </div>
    </article>
  );
}
