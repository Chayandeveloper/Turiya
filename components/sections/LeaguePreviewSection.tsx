'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Trophy, Calendar, ArrowRight, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';
import { League } from '@/types';

export interface LeaguePreviewSectionProps {
  leagues: League[];
}

export const LeaguePreviewSection: React.FC<LeaguePreviewSectionProps> = ({ leagues }) => {
  const primaryLeague = leagues[0];

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
        paddingTop: '3.25rem',
        paddingBottom: '2.75rem',
      }}
    >
      {/* ========================================================= */}
      {/* 1. MODERN FOOTBALL PITCH TURF, TACTICAL VECTORS & GLOWS   */}
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
            background: 'radial-gradient(circle, rgba(11, 107, 58, 0.1) 0%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* Center Kick-off Radiant Spotlight (Right behind centered header) */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '480px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(25, 196, 99, 0.18) 0%, rgba(216, 255, 62, 0.08) 40%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        {/* FULL AUTHENTIC TACTICAL FOOTBALL PITCH SVG WATERMARK */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 920"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ opacity: 0.95 }}
        >
          {/* Mown Lawn Turf Stripes (Vertical Championship Pitch Cut Pattern) */}
          <g fill="rgba(11, 107, 58, 0.02)">
            <rect x="50" y="30" width="134" height="860" />
            <rect x="318" y="30" width="134" height="860" />
            <rect x="586" y="30" width="134" height="860" />
            <rect x="854" y="30" width="134" height="860" />
            <rect x="1122" y="30" width="134" height="860" />
            <rect x="1256" y="30" width="134" height="860" />
          </g>

          {/* Outer Pitch Boundary Line with Rounded Corners */}
          <rect
            x="50"
            y="30"
            width="1340"
            height="860"
            rx="20"
            stroke="rgba(11, 107, 58, 0.12)"
            strokeWidth="2"
          />

          {/* Inner Safety Boundary Line (Modern Stadium Touchline Style) */}
          <rect
            x="60"
            y="40"
            width="1320"
            height="840"
            rx="16"
            stroke="rgba(11, 107, 58, 0.05)"
            strokeWidth="1"
            strokeDasharray="6 6"
          />

          {/* Center Midfield Halfway Line */}
          <line
            x1="720"
            y1="30"
            x2="720"
            y2="890"
            stroke="rgba(11, 107, 58, 0.13)"
            strokeWidth="2"
          />

          {/* Outer Center Circle */}
          <circle
            cx="720"
            cy="360"
            r="165"
            stroke="rgba(11, 107, 58, 0.12)"
            strokeWidth="2"
          />

          {/* Inner Tactical Center Circle Accent */}
          <circle
            cx="720"
            cy="360"
            r="185"
            stroke="rgba(25, 196, 99, 0.07)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Center Kick-Off Spot with Glowing Aura */}
          <circle
            cx="720"
            cy="360"
            r="20"
            fill="rgba(25, 196, 99, 0.14)"
          />
          <circle
            cx="720"
            cy="360"
            r="7"
            fill="var(--primary-green)"
          />
          <circle
            cx="720"
            cy="360"
            r="3"
            fill="#FFFFFF"
          />

          {/* LEFT 18-YARD PENALTY BOX */}
          <rect
            x="50"
            y="260"
            width="220"
            height="400"
            stroke="rgba(11, 107, 58, 0.1)"
            strokeWidth="2"
          />

          {/* Left 6-Yard Goal Box */}
          <rect
            x="50"
            y="340"
            width="80"
            height="240"
            stroke="rgba(11, 107, 58, 0.08)"
            strokeWidth="1.75"
          />

          {/* Left Penalty Spot */}
          <circle cx="185" cy="460" r="5" fill="rgba(11, 107, 58, 0.25)" />

          {/* Left Penalty D-Arc */}
          <path
            d="M 270 395 A 90 90 0 0 1 270 525"
            stroke="rgba(11, 107, 58, 0.1)"
            strokeWidth="2"
          />

          {/* RIGHT 18-YARD PENALTY BOX */}
          <rect
            x="1170"
            y="260"
            width="220"
            height="400"
            stroke="rgba(11, 107, 58, 0.1)"
            strokeWidth="2"
          />

          {/* Right 6-Yard Goal Box */}
          <rect
            x="1310"
            y="340"
            width="80"
            height="240"
            stroke="rgba(11, 107, 58, 0.08)"
            strokeWidth="1.75"
          />

          {/* Right Penalty Spot */}
          <circle cx="1255" cy="460" r="5" fill="rgba(11, 107, 58, 0.25)" />

          {/* Right Penalty D-Arc */}
          <path
            d="M 1170 395 A 90 90 0 0 0 1170 525"
            stroke="rgba(11, 107, 58, 0.1)"
            strokeWidth="2"
          />

          {/* 4 CORNER KICK ARCS */}
          <path d="M 50 65 A 35 35 0 0 1 85 30" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="2" />
          <path d="M 1355 30 A 35 35 0 0 1 1390 65" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="2" />
          <path d="M 50 855 A 35 35 0 0 0 85 890" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="2" />
          <path d="M 1355 890 A 35 35 0 0 0 1390 855" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="2" />

          {/* ANIMATED KINETIC PASSING TRAJECTORY 1 (Midfield Build-up) */}
          <motion.path
            d="M 280 620 C 440 540, 520 380, 720 360 C 880 340, 980 480, 1140 380"
            stroke="url(#pitchPassGradient1)"
            strokeWidth="2.5"
            strokeDasharray="10 12"
            fill="none"
            animate={{
              strokeDashoffset: [0, -180],
            }}
            transition={{
              repeat: Infinity,
              duration: 16,
              ease: 'linear',
            }}
          />

          {/* ANIMATED KINETIC PASSING TRAJECTORY 2 (Wing Switch) */}
          <motion.path
            d="M 360 220 C 560 160, 780 200, 1040 180"
            stroke="url(#pitchPassGradient2)"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
            animate={{
              strokeDashoffset: [0, 150],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: 'linear',
            }}
          />

          {/* Tactical Formation Nodes (Player Positions in Build-up) */}
          <g>
            {/* Center Back Node */}
            <circle cx="280" cy="620" r="14" fill="rgba(25, 196, 99, 0.1)" stroke="rgba(25, 196, 99, 0.3)" strokeWidth="1.5" />
            <circle cx="280" cy="620" r="4" fill="var(--primary-green)" />

            {/* Midfield Maestro Node */}
            <circle cx="580" cy="460" r="16" fill="rgba(25, 196, 99, 0.12)" stroke="rgba(25, 196, 99, 0.35)" strokeWidth="1.5" />
            <circle cx="580" cy="460" r="5" fill="var(--bright-green)" />

            {/* Playmaker Node */}
            <circle cx="860" cy="350" r="16" fill="rgba(25, 196, 99, 0.12)" stroke="rgba(25, 196, 99, 0.35)" strokeWidth="1.5" />
            <circle cx="860" cy="350" r="5" fill="var(--bright-green)" />

            {/* Striker / Forward Target Node */}
            <circle cx="1140" cy="380" r="18" fill="rgba(216, 255, 62, 0.15)" stroke="rgba(216, 255, 62, 0.5)" strokeWidth="1.5" />
            <circle cx="1140" cy="380" r="5" fill="#16A34A" />

            {/* Left Winger Node */}
            <circle cx="360" cy="220" r="12" fill="rgba(25, 196, 99, 0.1)" stroke="rgba(25, 196, 99, 0.25)" strokeWidth="1" />
            <circle cx="360" cy="220" r="3.5" fill="var(--primary-green)" />

            {/* Right Winger Node */}
            <circle cx="1040" cy="180" r="12" fill="rgba(25, 196, 99, 0.1)" stroke="rgba(25, 196, 99, 0.25)" strokeWidth="1" />
            <circle cx="1040" cy="180" r="3.5" fill="var(--primary-green)" />
          </g>

          {/* Hexagonal Soccer Ball Panel Watermark Elements in Far Corners */}
          <g stroke="rgba(11, 107, 58, 0.08)" strokeWidth="1.5" fill="rgba(25, 196, 99, 0.02)">
            <polygon points="120,120 145,105 170,120 170,150 145,165 120,150" />
            <polygon points="170,120 195,105 220,120 220,150 195,165 170,150" />
            <polygon points="1280,740 1305,725 1330,740 1330,770 1305,785 1280,770" />
            <polygon points="1230,740 1255,725 1280,740 1280,770 1255,785 1230,770" />
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="pitchPassGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B6B3A" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#19C463" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#D8FF3E" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#19C463" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="pitchPassGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#19C463" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0B6B3A" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* ========================================================= */}
        {/* 2. SECTION HEADER                                         */}
        {/* ========================================================= */}
        <div
          className="centered-section-header"
          style={{
            maxWidth: '820px',
            margin: '0 auto 3rem auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Tagline / Eyebrow Pill with Pulsing Radar Beacon */}
          <div style={{ marginBottom: '0.85rem' }}>
            <span className="heading-eyebrow-pill">
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '8px',
                  height: '8px',
                }}
              >
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
                  }}
                />
              </span>
              <span>Sanctioned Competition</span>
            </span>
          </div>

          {/* Main Heading with Animated Shimmer */}
          <h2
            className="animated-heading-shimmer"
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
              marginBottom: 0,
            }}
          >
            Local Leagues.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0B6B3A 0%, #19C463 50%, #0B6B3A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 25px rgba(25, 196, 99, 0.25)',
              }}
            >
              Real Competition.
            </span>
          </h2>

          {/* Decorative Gradient Line */}
          <div className="heading-decorative-line" />

          {/* Subtitle */}
          <p className="heading-subtitle-centered">
            Tiered weekend championships bringing regular fixtures, certified match officials, and verified league tables to village teams.
          </p>

          {/* Action Button Centered */}
          <div style={{ marginTop: '1.4rem' }}>
            <Link
              href="/league"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.6rem',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border-light)',
                color: 'var(--navy)',
                fontFamily: 'var(--font-label)',
                fontSize: '0.92rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-green)';
                e.currentTarget.style.color = 'var(--primary-green)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(11, 107, 58, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.color = 'var(--navy)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <span>View All Leagues</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>


        {/* ========================================================= */}
        {/* 3. CONTENT GRID: FEATURED LEAGUE + STANDINGS TABLE        */}
        {/* ========================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.25rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Featured League Card */}
          {primaryLeague && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              {/* Card Hero Image */}
              <div style={{ position: 'relative', width: '100%', height: '235px', overflow: 'hidden' }}>
                <Image
                  src={primaryLeague.image}
                  alt={primaryLeague.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(16, 42, 67, 0.25) 0%, transparent 40%, rgba(16, 42, 67, 0.85) 100%)',
                  }}
                />

                {/* Season & Status Badges */}
                <div style={{ position: 'absolute', top: '1.15rem', right: '1.15rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      backgroundColor: 'var(--primary-green)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-label)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                      }}
                    />
                    {primaryLeague.status}
                  </span>
                </div>

                <div style={{ position: 'absolute', top: '1.15rem', left: '1.15rem' }}>
                  <span
                    style={{
                      backgroundColor: '#D8FF3E',
                      color: '#0B6B3A',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-label)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    {primaryLeague.currentSeason}
                  </span>
                </div>

                {/* League Name & Tagline */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.15rem',
                    left: '1.4rem',
                    right: '1.4rem',
                    color: '#FFFFFF',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.55rem',
                      fontWeight: 900,
                      color: '#FFFFFF',
                      margin: 0,
                    }}
                  >
                    {primaryLeague.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      margin: '0.25rem 0 0',
                    }}
                  >
                    {primaryLeague.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.65rem' }}>
                {/* 3 Metric Tiles */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    textAlign: 'center',
                    marginBottom: '1.35rem',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      padding: '0.75rem 0.5rem',
                      borderRadius: '14px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-label)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Location
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 900,
                        color: 'var(--navy)',
                        marginTop: '0.15rem',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {primaryLeague.state}
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--primary-green-light)',
                      padding: '0.75rem 0.5rem',
                      borderRadius: '14px',
                      border: '1px solid rgba(25, 196, 99, 0.2)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--primary-green)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-label)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Clubs
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 900,
                        color: 'var(--primary-green)',
                        marginTop: '0.15rem',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {primaryLeague.teamsCount} Teams
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      padding: '0.75rem 0.5rem',
                      borderRadius: '14px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-label)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Matches
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 900,
                        color: 'var(--navy)',
                        marginTop: '0.15rem',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {primaryLeague.matchesPlayed}/{primaryLeague.totalMatches}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {primaryLeague.description}
                </p>

                {/* Primary CTA Button */}
                <Link
                  href={`/league/${primaryLeague.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    width: '100%',
                    padding: '0.88rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--primary-green)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.94rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(11, 107, 58, 0.25)',
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
                  <span>View Full League & Fixtures</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          )}

          {/* RIGHT: Live Standings Preview Table */}
          {primaryLeague && primaryLeague.standings && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
                padding: '1.75rem',
              }}
            >
              {/* Standings Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Current Standings Preview
                  </h3>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-label)',
                      marginTop: '0.2rem',
                      display: 'block',
                    }}
                  >
                    {primaryLeague.name} • Matchday 8
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    backgroundColor: 'var(--primary-green-light)',
                    border: '1px solid rgba(25, 196, 99, 0.3)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-green)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: 'var(--primary-green)',
                      fontFamily: 'var(--font-label)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Live Table
                  </span>
                </div>
              </div>

              {/* Table Container */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr
                      style={{
                        borderBottom: '1.5px solid var(--border-light)',
                        textAlign: 'left',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-label)',
                        fontSize: '0.76rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <th style={{ padding: '0.7rem 0.4rem', fontWeight: 800 }}>#</th>
                      <th style={{ padding: '0.7rem 0.5rem', fontWeight: 800 }}>Club</th>
                      <th style={{ padding: '0.7rem 0.4rem', textAlign: 'center', fontWeight: 800 }}>P</th>
                      <th style={{ padding: '0.7rem 0.4rem', textAlign: 'center', fontWeight: 800 }}>W</th>
                      <th style={{ padding: '0.7rem 0.4rem', textAlign: 'center', fontWeight: 800 }}>GD</th>
                      <th style={{ padding: '0.7rem 0.4rem', textAlign: 'right', fontWeight: 800 }}>PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {primaryLeague.standings.map((team, idx) => (
                      <tr
                        key={team.team}
                        style={{
                          borderBottom: '1px solid var(--border-light)',
                          backgroundColor:
                            idx === 0
                              ? 'var(--primary-green-light)'
                              : idx % 2 === 1
                              ? 'rgba(0, 0, 0, 0.015)'
                              : 'transparent',
                        }}
                      >
                        <td
                          style={{
                            padding: '0.75rem 0.4rem',
                            fontWeight: 900,
                            color: idx === 0 ? 'var(--primary-green)' : 'var(--navy)',
                          }}
                        >
                          {team.rank}
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 0.5rem',
                            fontWeight: 800,
                            color: 'var(--navy)',
                          }}
                        >
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                            {team.team}
                            {idx === 0 && (
                              <span
                                style={{
                                  fontSize: '0.65rem',
                                  padding: '0.15rem 0.45rem',
                                  borderRadius: '9999px',
                                  backgroundColor: 'rgba(25, 196, 99, 0.2)',
                                  color: 'var(--primary-green)',
                                  fontWeight: 800,
                                }}
                              >
                                Leader
                              </span>
                            )}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 0.4rem',
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-label)',
                          }}
                        >
                          {team.played}
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 0.4rem',
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-label)',
                          }}
                        >
                          {team.won}
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 0.4rem',
                            textAlign: 'center',
                            fontWeight: 700,
                            color: team.goalDifference > 0 ? 'var(--primary-green)' : 'var(--text-muted)',
                            fontFamily: 'var(--font-label)',
                          }}
                        >
                          {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                        </td>
                        <td
                          style={{
                            padding: '0.75rem 0.4rem',
                            textAlign: 'right',
                            fontWeight: 900,
                            fontSize: '0.98rem',
                            color: 'var(--primary-green)',
                            fontFamily: 'var(--font-heading)',
                          }}
                        >
                          {team.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div
                style={{
                  marginTop: '1.4rem',
                  paddingTop: '1.1rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <ShieldCheck size={16} color="var(--primary-green)" />
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-subtle)',
                      fontFamily: 'var(--font-label)',
                    }}
                  >
                    Top 2 advance to Regional Champions Cup
                  </span>
                </div>

                <Link
                  href="/league"
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    color: 'var(--primary-green)',
                    fontFamily: 'var(--font-label)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  <span>Full Table & Form</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
