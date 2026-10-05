'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TournamentCard } from '@/components/cards/TournamentCard';
import { Tournament } from '@/types';
import {
  ArrowRight,
  Trophy,
  ShieldCheck,
  Flame,
  Calendar,
  CheckCircle2,
  Sparkles,
  RotateCw,
  Zap,
} from 'lucide-react';

export interface TournamentSectionProps {
  tournaments: Tournament[];
  onRegisterTeam: (tournament: Tournament) => void;
}

export const TournamentSection: React.FC<TournamentSectionProps> = ({
  tournaments,
  onRegisterTeam,
}) => {
  const [filter, setFilter] = useState('All');

  const tabs = [
    { id: 'All', label: 'All Tournaments', count: tournaments.length, icon: Trophy },
    {
      id: 'Registration Open',
      label: 'Registration Open',
      count: tournaments.filter((t) => t.status === 'Registration Open').length,
      icon: Flame,
    },
    {
      id: 'Upcoming',
      label: 'Upcoming',
      count: tournaments.filter((t) => t.status === 'Upcoming').length,
      icon: Calendar,
    },
    {
      id: 'Completed',
      label: 'Completed',
      count: tournaments.filter((t) => t.status === 'Completed').length,
      icon: CheckCircle2,
    },
  ];

  const filteredTournaments = tournaments.filter((t) => {
    if (filter === 'All') return true;
    return t.status === filter;
  });

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#F5F9F6',
        backgroundImage:
          'radial-gradient(ellipse at 50% 5%, rgba(25, 196, 99, 0.16) 0%, transparent 62%), radial-gradient(ellipse at 10% 90%, rgba(11, 107, 58, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 90% 90%, rgba(216, 255, 62, 0.08) 0%, transparent 50%), linear-gradient(180deg, #F3F8F5 0%, #FFFFFF 46%, #ECF5F0 100%)',
        overflow: 'hidden',
        borderTop: '1px solid #DFEBE3',
        borderBottom: '1px solid #DFEBE3',
        paddingTop: '2rem',
        paddingBottom: '3.25rem',
      }}
    >
      {/* 1. ANIMATED TACTICAL STADIUM FLOODLIGHTS & AUTHENTIC PITCH WATERMARK */}
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
        {/* Stadium Floodlight Cone 1 (Top-Left) */}
        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.94, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-12%',
            left: '8%',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 196, 99, 0.16) 0%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />

        {/* Stadium Floodlight Cone 2 (Top-Right / Midfield) */}
        <motion.div
          animate={{
            x: [0, -40, 25, 0],
            y: [0, 35, -20, 0],
            scale: [1, 0.92, 1.12, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '6%',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11, 107, 58, 0.10) 0%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* Center Kick-off Radiant Spotlight */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '480px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(25, 196, 99, 0.16) 0%, rgba(216, 255, 62, 0.08) 40%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        {/* Tactical Pitch Markings SVG Watermark (Light Football Turf Theme) */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ opacity: 0.95 }}
        >
          {/* Mown Lawn Turf Stripes */}
          <g fill="rgba(11, 107, 58, 0.02)">
            <rect x="60" y="40" width="132" height="820" />
            <rect x="324" y="40" width="132" height="820" />
            <rect x="588" y="40" width="132" height="820" />
            <rect x="852" y="40" width="132" height="820" />
            <rect x="1116" y="40" width="132" height="820" />
          </g>

          {/* Outer Pitch Boundary Line */}
          <rect
            x="60"
            y="40"
            width="1320"
            height="820"
            rx="20"
            stroke="rgba(11, 107, 58, 0.12)"
            strokeWidth="1.75"
          />

          {/* Center Midfield Line */}
          <line
            x1="720"
            y1="40"
            x2="720"
            y2="860"
            stroke="rgba(11, 107, 58, 0.14)"
            strokeWidth="2"
          />

          {/* Center Circle & Spot */}
          <circle
            cx="720"
            cy="450"
            r="160"
            stroke="rgba(11, 107, 58, 0.12)"
            strokeWidth="1.75"
          />
          <circle
            cx="720"
            cy="450"
            r="18"
            fill="rgba(25, 196, 99, 0.14)"
          />
          <circle
            cx="720"
            cy="450"
            r="7"
            fill="var(--primary-green)"
          />
          <circle
            cx="720"
            cy="450"
            r="3"
            fill="#FFFFFF"
          />

          {/* Left Penalty Box */}
          <rect
            x="60"
            y="260"
            width="220"
            height="380"
            stroke="rgba(11, 107, 58, 0.10)"
            strokeWidth="1.75"
          />
          <path
            d="M 280 370 A 90 90 0 0 1 280 530"
            stroke="rgba(11, 107, 58, 0.10)"
            strokeWidth="1.75"
          />

          {/* Right Penalty Box */}
          <rect
            x="1160"
            y="260"
            width="220"
            height="380"
            stroke="rgba(11, 107, 58, 0.10)"
            strokeWidth="1.75"
          />
          <path
            d="M 1160 370 A 90 90 0 0 0 1160 530"
            stroke="rgba(11, 107, 58, 0.10)"
            strokeWidth="1.75"
          />

          {/* Corner Kick Arcs */}
          <path d="M 60 80 A 40 40 0 0 1 100 40" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="1.75" />
          <path d="M 1340 40 A 40 40 0 0 1 1380 80" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="1.75" />
          <path d="M 60 820 A 40 40 0 0 0 100 860" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="1.75" />
          <path d="M 1340 860 A 40 40 0 0 0 1380 820" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="1.75" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* 2. MODERN CENTERED COMPACT SECTION HEADER */}
        <div
          className="centered-section-header"
          style={{
            maxWidth: '840px',
            margin: '0 auto 1.25rem auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Eyebrow + Live Indicator */}
          <div style={{ marginBottom: '0.45rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary-green-light)',
                border: '1px solid rgba(11, 107, 58, 0.25)',
                color: 'var(--primary-green)',
                fontSize: '0.725rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-label)',
                backdropFilter: 'blur(12px)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Pulsing Green Live Circuit Beacon */}
              <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-green)',
                    opacity: 0.85,
                    animation: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-green)',
                    boxShadow: '0 0 8px rgba(11, 107, 58, 0.4)',
                  }}
                />
              </span>
              <span>Grassroots Tournament Circuit 2026</span>
            </span>
          </div>

          {/* Quick Metrics Bar Centered */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--navy)',
              fontFamily: 'var(--font-label)',
              marginBottom: '0.45rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Trophy size={14} color="#D97706" />
              <span>₹2,00,000+ Prize Pools</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="var(--primary-green)" />
              <span>Certified Match Officials</span>
            </div>
          </div>

          {/* Main Heading with Animated Shimmer */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)',
              color: 'var(--navy)',
              letterSpacing: '0.01em',
              lineHeight: 1.15,
              margin: '0.1rem 0 0.4rem 0',
            }}
          >
            COMPETE. PERFORM.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0B6B3A 0%, #19C463 50%, #0B6B3A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 25px rgba(25, 196, 99, 0.25)',
              }}
            >
              GET DISCOVERED.
            </span>
          </h2>

          {/* Decorative Gradient Line */}
          <div
            style={{
              height: '2.5px',
              width: '100px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, transparent, #0B6B3A 20%, #19C463 50%, #F59E0B 80%, transparent)',
              margin: '0.35rem auto 0 auto',
            }}
          />
        </div>

        {/* 3. UNIFIED MODERN TOOLBAR ROW (Tabs + Actions) */}
        <div
          style={{
            marginBottom: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          {/* Spring-physics active indicator tabs */}
          <div
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.35rem',
              backgroundColor: '#FFFFFF',
              backdropFilter: 'blur(20px)',
              borderRadius: '9999px',
              border: '1.5px solid var(--border-light)',
              boxShadow: '0 4px 16px rgba(16, 42, 67, 0.06)',
              overflowX: 'auto',
              maxWidth: '100%',
            }}
          >
            {tabs.map((tab) => {
              const isActive = tab.id === filter;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 1.05rem',
                    borderRadius: '9999px',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-label)',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    backgroundColor: 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                    zIndex: 1,
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--primary-green)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {/* Sliding Active Pill Background with Spring Physics */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTournamentTabIndicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, #065F46 0%, #0B6B3A 55%, #10B981 100%)',
                        borderRadius: '9999px',
                        boxShadow: '0 4px 16px rgba(11, 107, 58, 0.35)',
                        zIndex: -1,
                      }}
                    />
                  )}

                  <Icon
                    size={14}
                    color={isActive ? '#FFFFFF' : 'var(--primary-green)'}
                    style={{ transition: 'color 0.25s ease' }}
                  />

                  <span>{tab.label}</span>

                  {/* Count Chip */}
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.12rem 0.45rem',
                      borderRadius: '9999px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--primary-green-light)',
                      color: isActive ? '#FFFFFF' : 'var(--primary-green)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Action Cluster: Explore Button + Flip Hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Link
              href="/tournaments"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.52rem 1.15rem',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--primary-green)',
                color: 'var(--primary-green)',
                fontSize: '0.825rem',
                fontWeight: 800,
                fontFamily: 'var(--font-label)',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(16, 42, 67, 0.05)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 107, 58, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = 'var(--primary-green)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 42, 67, 0.05)';
              }}
            >
              <span>Explore All</span>
              <ArrowRight size={14} />
            </Link>

            {/* Interactive 3D Flip Hint Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border-light)',
                boxShadow: '0 2px 8px rgba(16, 42, 67, 0.05)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-label)',
              }}
            >
              <RotateCw size={12} color="var(--primary-green)" />
              <span>Hover card to flip</span>
            </div>
          </div>
        </div>

        {/* 4. TOURNAMENTS GRID WITH ANIMATIC STAGGERED ENTRANCE (ONE BY ONE) */}
        <motion.div
          key={filter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.08,
              },
            },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
          className="tournament-cards-grid"
        >
          {filteredTournaments.slice(0, 3).map((tournament, idx) => (
            <motion.div
              key={tournament.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                  scale: 0.94,
                  filter: 'blur(4px)',
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 22,
                    mass: 0.8,
                  },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{ height: '100%' }}
            >
              <TournamentCard
                tournament={tournament}
                onRegisterClick={onRegisterTeam}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* If no tournament in filtered category */}
        {filteredTournaments.length === 0 && (
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px dashed #CBD5E1',
            }}
          >
            <Sparkles size={32} color="var(--primary-green)" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
              No tournaments in this category currently
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Check back soon or explore all scheduled circuits.
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .tournament-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .tournament-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
