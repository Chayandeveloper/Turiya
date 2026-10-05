'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export interface HeroSectionProps {
  onJoinClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        backgroundColor: '#04170D',
      }}
    >
      {/* ========================================================= */}
      {/* 1. ENTIRE BACKGROUND IS THE AUTHENTIC TOURNAMENT IMAGE     */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Full-bleed authentic grassroots match photo */}
        <Image
          src="/assets/0A6A0673.JPG"
          alt="Turiya Football official tournament match action on village pitch"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 32%',
          }}
        />

        {/* Sophisticated Dual Gradient Wash:
            - Left: Deep emerald-black tint (88% to 65%) to make white typography 100% readable
            - Right: Translucent wash (28% to 40%) so the real match action, players, and crowd are clearly visible */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(3, 20, 10, 0.92) 0%, rgba(4, 24, 12, 0.82) 42%, rgba(5, 26, 14, 0.45) 75%, rgba(4, 22, 11, 0.55) 100%)',
          }}
        />

        {/* Top and Bottom Vignettes for Smooth Visual Transitions */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(3, 20, 10, 0.7) 0%, transparent 18%, transparent 80%, rgba(3, 20, 10, 0.95) 100%)',
          }}
        />

        {/* Ambient Subtle Green Field Glows */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 196, 99, 0.16) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '8%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(216, 255, 62, 0.12) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* 2. FOREGROUND CONTENT GRID                                */}
      {/* ========================================================= */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          {/* LEFT: Confident Hero Typography & CTAs */}
          <div style={{ maxWidth: '600px' }}>
            {/* Tagline / Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'rgba(255, 255, 255, 0.14)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(25, 196, 99, 0.55)',
                borderRadius: '9999px',
                padding: '0.45rem 1.15rem',
                marginBottom: '1.35rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Pulsing Beacon Dot */}
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '9px',
                  height: '9px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#19C463',
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
                    backgroundColor: '#19C463',
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                Grassroots Sports Business System
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.4vw, 3.85rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: 1.18,
                letterSpacing: '0.015em',
                marginBottom: '1.35rem',
                textShadow: '0 3px 18px rgba(0, 0, 0, 0.65)',
              }}
            >
              Building the Future of{' '}
              <span
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #22C55E 0%, #A3E635 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 8px rgba(34, 197, 94, 0.35))',
                }}
              >
                Football
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)',
                color: 'rgba(255, 255, 255, 0.94)',
                lineHeight: 1.68,
                marginBottom: '2.4rem',
                fontWeight: 400,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
              }}
            >
              Discover talent. Build opportunities. Create stronger football communities across rural heartlands and tribal villages.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >
              <button
                type="button"
                onClick={onJoinClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.9rem 1.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--primary-green)',
                  color: '#FFFFFF',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-label)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(25, 196, 99, 0.55), 0 2px 6px rgba(0,0,0,0.3)',
                  transition: 'all 0.25s ease',
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
                <span>Join the Football Community</span>
                <ArrowRight size={18} />
              </button>

              <Link
                href="/tournaments"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.86rem 1.7rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(12px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.5)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-label)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Explore Tournaments</span>
              </Link>
            </motion.div>

            {/* Trust / Region Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.88rem',
                color: 'rgba(255, 255, 255, 0.88)',
                fontFamily: 'var(--font-label)',
                fontWeight: 600,
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              <MapPin size={17} color="#22C55E" style={{ flexShrink: 0 }} />
              <span>Active across Assam, Meghalaya, Mizoram, Nagaland, Arunachal &amp; rural clusters.</span>
            </motion.div>

            {/* Clean, Unified Grassroots Telemetry Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1rem, 2.2vw, 1.85rem)',
                marginTop: '2.25rem',
                paddingTop: '1.6rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.16)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  20+
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginTop: '0.35rem',
                    fontFamily: 'var(--font-label)',
                  }}
                >
                  Affiliated Clubs
                </div>
              </div>

              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.16)' }} />

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                    fontWeight: 400,
                    color: '#86EFAC',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginTop: '0.35rem',
                    fontFamily: 'var(--font-label)',
                  }}
                >
                  Village Players
                </div>
              </div>

              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.16)' }} />

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  16+
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginTop: '0.35rem',
                    fontFamily: 'var(--font-label)',
                  }}
                >
                  Tournaments
                </div>
              </div>

              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.16)' }} />

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                    fontWeight: 400,
                    color: '#D8FF3E',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  50+
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.72)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginTop: '0.35rem',
                    fontFamily: 'var(--font-label)',
                  }}
                >
                  Opportunities
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Clean, Unobstructed Match Photography View */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              minHeight: '380px',
              paddingBottom: '1rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: 'rgba(4, 28, 14, 0.82)',
                backdropFilter: 'blur(12px)',
                borderRadius: '9999px',
                padding: '0.5rem 1.15rem',
                border: '1px solid rgba(25, 196, 99, 0.4)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  boxShadow: '0 0 10px #22C55E',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                Official Grassroots Championship • Live Fixture
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

