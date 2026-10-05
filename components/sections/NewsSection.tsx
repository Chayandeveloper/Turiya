'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { NewsCard } from '@/components/cards/NewsCard';
import { NewsItem } from '@/types';
import { ArrowRight } from 'lucide-react';

export interface NewsSectionProps {
  news: NewsItem[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  return (
    <section
      className="section-py"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'radial-gradient(ellipse at 50% -10%, rgba(25, 196, 99, 0.15) 0%, transparent 65%), radial-gradient(circle at 8% 85%, rgba(11, 107, 58, 0.08) 0%, transparent 45%), radial-gradient(circle at 92% 20%, rgba(216, 255, 62, 0.08) 0%, transparent 45%), linear-gradient(180deg, #F4F9F5 0%, #FFFFFF 42%, #EDF6F1 100%)',
        borderTop: '1px solid #E2EAE5',
        borderBottom: '1px solid #E2EAE5',
      }}
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND AMBIENT GLOWS & TACTICAL DISPATCH WATERMARK */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Floating Ambient Emerald Light 1 (Top-Left) */}
        <motion.div
          animate={{
            x: [0, 40, -25, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-5%',
            left: '12%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 196, 99, 0.14) 0%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />

        {/* Floating Ambient Forest Light 2 (Bottom-Right) */}
        <motion.div
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.94, 1.12, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '-8%',
            right: '8%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11, 107, 58, 0.1) 0%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* Tactical Press Dispatches SVG Watermark */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ opacity: 0.85 }}
        >
          {/* Subtle Outer Field Boundary Line */}
          <rect
            x="60"
            y="40"
            width="1320"
            height="770"
            rx="24"
            stroke="rgba(11, 107, 58, 0.06)"
            strokeWidth="1.75"
            strokeDasharray="8 8"
          />

          {/* Broadcast Dispatch Ripple Arcs (Representing live match dispatches) */}
          <circle cx="720" cy="90" r="140" stroke="rgba(25, 196, 99, 0.07)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="720" cy="90" r="240" stroke="rgba(25, 196, 99, 0.05)" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="720" cy="90" r="340" stroke="rgba(25, 196, 99, 0.035)" strokeWidth="1.5" strokeDasharray="8 8" />

          {/* Coordinate Crosshairs */}
          <g stroke="rgba(11, 107, 58, 0.18)" strokeWidth="1.5">
            <line x1="200" y1="180" x2="220" y2="180" />
            <line x1="210" y1="170" x2="210" y2="190" />

            <line x1="1230" y1="200" x2="1250" y2="200" />
            <line x1="1240" y1="190" x2="1240" y2="210" />

            <line x1="140" y1="680" x2="160" y2="680" />
            <line x1="150" y1="670" x2="150" y2="690" />

            <line x1="1280" y1="660" x2="1300" y2="660" />
            <line x1="1290" y1="650" x2="1290" y2="670" />
          </g>

          {/* Technical Dots */}
          <circle cx="210" cy="180" r="3" fill="rgba(25, 196, 99, 0.35)" />
          <circle cx="1240" cy="200" r="3" fill="rgba(25, 196, 99, 0.35)" />
          <circle cx="150" cy="680" r="3" fill="rgba(11, 107, 58, 0.3)" />
          <circle cx="1290" cy="660" r="3" fill="rgba(11, 107, 58, 0.3)" />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* 2. SECTION CONTENT                                        */}
      {/* ========================================================= */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="FIELD DISPATCHES"
          title="WHAT'S HAPPENING."
          subtitle="Latest match reports, tournament announcements, player scouting breakthroughs, and academy partnerships."
          action={
            <Button variant="secondary" href="/stories" icon={<ArrowRight size={15} />}>
              View All Dispatches
            </Button>
          }
        />

        <div className="grid-4">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

