'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
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
      <div style={{ position: 'relative', width: '100%', height: '180px', backgroundColor: '#E2E8F0' }}>
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem' }}>
          <Badge variant="green" size="sm">{news.category}</Badge>
        </div>
      </div>

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          <Calendar size={13} color="var(--primary-green)" />
          <span>{news.date}</span>
          <span>•</span>
          <span>{news.readTime}</span>
        </div>

        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            color: 'var(--navy)',
            lineHeight: 1.3,
            marginBottom: '0.65rem',
          }}
        >
          {news.title}
        </h3>

        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            marginBottom: '1rem',
            WebkitLineClamp: 2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {news.excerpt}
        </p>

        <div style={{ marginTop: 'auto' }}>
          <Link
            href={`/stories`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--primary-green)',
              fontWeight: 700,
              fontSize: '0.85rem',
            }}
          >
            <span>Read More</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};
