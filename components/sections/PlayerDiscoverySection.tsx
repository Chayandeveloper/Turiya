'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayerCard } from '@/components/cards/PlayerCard';
import { Player } from '@/types';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  Target,
  Users,
  Compass,
} from 'lucide-react';

export interface PlayerDiscoverySectionProps {
  players: Player[];
}

export const PlayerDiscoverySection: React.FC<PlayerDiscoverySectionProps> = ({ players }) => {
  return (
    <section
      className="section-py"
      style={{
        position: 'relative',
        backgroundColor: '#F8FAF9',
        backgroundImage:
          'radial-gradient(circle at 10% 20%, rgba(25, 196, 99, 0.08) 0%, transparent 55%), radial-gradient(circle at 90% 80%, rgba(11, 107, 58, 0.07) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F5F9F6 50%, #EDF5F0 100%)',
        overflow: 'hidden',
        borderTop: '1px solid #E8EFEA',
        borderBottom: '1px solid #E8EFEA',
      }}
    >
      {/* ========================================================= */}
      {/* 1. ANIMATED SMART FLOW BACKGROUND ("bd")                  */}
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
        {/* Floating Ambient Glow Light 1 (Left-top) */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 25, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-5%',
            left: '5%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 196, 99, 0.12) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Floating Ambient Glow Light 2 (Right-bottom) */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '5%',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11, 107, 58, 0.09) 0%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* CONTINUOUS ANIMATED SVG FLOW STREAMLINES */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ opacity: 0.85 }}
        >
          {/* Animated Flow Wave 1 */}
          <motion.path
            d="M -100 200 C 250 120, 450 320, 800 220 C 1150 120, 1350 280, 1600 180"
            stroke="url(#flowGradient1)"
            strokeWidth="3"
            strokeDasharray="16 12"
            fill="none"
            animate={{
              strokeDashoffset: [0, -200],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: 'linear',
            }}
          />

          {/* Animated Flow Wave 2 */}
          <motion.path
            d="M -100 450 C 300 560, 600 380, 950 480 C 1250 560, 1450 420, 1600 500"
            stroke="url(#flowGradient2)"
            strokeWidth="2.5"
            strokeDasharray="12 16"
            fill="none"
            animate={{
              strokeDashoffset: [0, 200],
            }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: 'linear',
            }}
          />

          {/* Animated Flow Wave 3 */}
          <motion.path
            d="M -100 700 C 200 640, 500 800, 850 720 C 1200 640, 1400 780, 1600 710"
            stroke="url(#flowGradient1)"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
            animate={{
              strokeDashoffset: [0, -150],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear',
            }}
          />

          {/* Tactical Coordinate Crosshairs */}
          <circle cx="280" cy="240" r="3" fill="rgba(25, 196, 99, 0.4)" />
          <circle cx="720" cy="460" r="4" fill="rgba(11, 107, 58, 0.35)" />
          <circle cx="1180" cy="280" r="3" fill="rgba(25, 196, 99, 0.4)" />
          <circle cx="940" cy="680" r="3" fill="rgba(11, 107, 58, 0.35)" />

          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#19C463" stopOpacity="0" />
              <stop offset="25%" stopColor="#19C463" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#0B6B3A" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0B6B3A" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B6B3A" stopOpacity="0" />
              <stop offset="35%" stopColor="#D8FF3E" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#19C463" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#19C463" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ========================================================= */}
        {/* 2. MODERN CENTERED SECTION HEADER                         */}
        {/* ========================================================= */}
        <div
          className="centered-section-header"
          style={{
            maxWidth: '840px',
            margin: '0 auto 2.75rem auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Top Row: Eyebrow Badge */}
          <div style={{ marginBottom: '0.85rem' }}>
            <span className="heading-eyebrow-pill">
              {/* Pulsing Beacon Dot */}
              <span style={{ position: 'relative', display: 'flex', width: '9px', height: '9px' }}>
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bright-green)',
                    opacity: 0.85,
                    animation: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-green)',
                  }}
                />
              </span>
              <span>Scouting &amp; Talent Combine 2026</span>
            </span>
          </div>

          {/* Quick Metrics Bar Centered */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.75rem',
              fontSize: '0.825rem',
              fontWeight: 700,
              color: 'var(--navy)',
              fontFamily: 'var(--font-label)',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Activity size={15} color="var(--primary-green)" />
              <span>Verified Biometrics</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} color="var(--primary-green)" />
              <span>Digital Passports</span>
            </div>
          </div>

          {/* Main Heading with Animated Shimmer */}
          <h2
            className="animated-heading-shimmer"
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
              fontWeight: 400,
              letterSpacing: '0.025em',
              marginBottom: 0,
            }}
          >
            TALENT IS EVERYWHERE.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0B6B3A 0%, #19C463 50%, #0B6B3A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 25px rgba(25, 196, 99, 0.25)',
              }}
            >
              LET&apos;S FIND IT.
            </span>
          </h2>

          {/* Decorative Gradient Line */}
          <div className="heading-decorative-line" />

          {/* Subtitle */}
         

          {/* Explore All Players Action Button Centered */}
          <div style={{ marginTop: '1.4rem' }}>
            <Link
              href="/players"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.75rem 1.6rem',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--primary-green)',
                color: 'var(--primary-green)',
                fontSize: '0.9rem',
                fontWeight: 800,
                fontFamily: 'var(--font-label)',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(11, 107, 58, 0.08)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(11, 107, 58, 0.22)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = 'var(--primary-green)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 107, 58, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore All Players</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. PLAYER CARDS GRID                                      */}
        {/* ========================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {players.slice(0, 4).map((player, idx) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <PlayerCard player={player} />
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 4. HIGH-TECH SCOUTING CALLOUT BANNER                     */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            backgroundColor: '#FFFFFF',
            backgroundImage:
              'radial-gradient(circle at 95% 50%, rgba(25, 196, 99, 0.1) 0%, transparent 60%)',
            borderRadius: '24px',
            padding: '2rem 2.25rem',
            border: '1.5px solid rgba(11, 107, 58, 0.2)',
            boxShadow: '0 10px 30px rgba(11, 107, 58, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.75rem',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Accent Glow Bar on Left */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '5px',
              background: 'linear-gradient(180deg, var(--primary-green) 0%, var(--bright-green) 100%)',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '720px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'var(--primary-green-light)',
                border: '1px solid rgba(11, 107, 58, 0.2)',
                color: 'var(--primary-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(11, 107, 58, 0.12)',
              }}
            >
              <Compass size={28} />
            </div>

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--primary-green)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.3rem',
                  fontFamily: 'var(--font-label)',
                }}
              >
                <Zap size={12} />
                <span>Club Scouting Network</span>
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  margin: '0 0 0.35rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Are you a professional club scout or academy director?
              </h4>
              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.5,
                  fontFamily: 'var(--font-body)',
                }}
              >
                Access verified match statistics, GPS acceleration metrics, video highlight reels, and direct contact with village head coaches.
              </p>
            </div>
          </div>

          <Link
            href="/support"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.6rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--primary-green)',
              color: '#FFFFFF',
              fontSize: '0.925rem',
              fontWeight: 800,
              fontFamily: 'var(--font-label)',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(11, 107, 58, 0.25)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-green-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-green)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Request Scout Access</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
