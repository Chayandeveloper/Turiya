'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Award,
  Shield,
  GraduationCap,
  Trophy,
  Flag,
  HeartPulse,
  Users,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { ROLES_LIST } from '@/lib/constants/mock-data';

export interface JoinRolesSectionProps {
  onSelectRole: (roleId: string) => void;
}

// Category and perks metadata for the 8 roles
const ROLE_METADATA: Record<string, { category: string; perks: string[]; color: string }> = {
  player: {
    category: 'on-pitch',
    perks: ['Verified digital stats card', 'Regional academy scout alerts'],
    color: '#0B6B3A',
  },
  coach: {
    category: 'on-pitch',
    perks: ['AIFF curriculum drills', 'Digital match squad builder'],
    color: '#059669',
  },
  club: {
    category: 'org',
    perks: ['Village team roster management', 'Sanctioned league fixtures'],
    color: '#0B6B3A',
  },
  academy: {
    category: 'org',
    perks: ['Transparent batch fee records', 'Long-term player progression tracking'],
    color: '#10B981',
  },
  organiser: {
    category: 'operations',
    perks: ['Auto tournament bracket generator', 'Live digital standings table'],
    color: '#D97706',
  },
  referee: {
    category: 'operations',
    perks: ['Official paid match assignments', 'Digital disciplinary incident logs'],
    color: '#059669',
  },
  physiotherapist: {
    category: 'support',
    perks: ['On-field injury incident records', 'Rehabilitation training workshops'],
    color: '#E11D48',
  },
  fan: {
    category: 'support',
    perks: ['Direct village team sponsorship', 'Exclusive ground ticket access'],
    color: '#0B6B3A',
  },
};

const CATEGORIES = [
  { id: 'all', label: 'All Roles (8)', icon: Layers },
  { id: 'on-pitch', label: 'On-Pitch Talent', icon: UserCheck },
  { id: 'org', label: 'Clubs & Academies', icon: Shield },
  { id: 'operations', label: 'Match Operations', icon: Trophy },
  { id: 'support', label: 'Health & Community', icon: HeartPulse },
];

export const JoinRolesSection: React.FC<JoinRolesSectionProps> = ({ onSelectRole }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredRoleId, setHoveredRoleId] = useState<string | null>(null);

  const getRoleIcon = (name: string) => {
    switch (name) {
      case 'UserCheck': return <UserCheck size={22} />;
      case 'Award': return <Award size={22} />;
      case 'Shield': return <Shield size={22} />;
      case 'GraduationCap': return <GraduationCap size={22} />;
      case 'Trophy': return <Trophy size={22} />;
      case 'Flag': return <Flag size={22} />;
      case 'HeartPulse': return <HeartPulse size={22} />;
      case 'Users': default: return <Users size={22} />;
    }
  };

  const filteredRoles = ROLES_LIST.filter((role) => {
    if (activeCategory === 'all') return true;
    return ROLE_METADATA[role.id]?.category === activeCategory;
  });

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#F5F9F6',
        backgroundImage:
          'radial-gradient(ellipse at 50% 0%, rgba(25, 196, 99, 0.16) 0%, transparent 60%), radial-gradient(ellipse at 10% 90%, rgba(11, 107, 58, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 90% 90%, rgba(216, 255, 62, 0.08) 0%, transparent 50%), linear-gradient(180deg, #F3F8F5 0%, #FFFFFF 46%, #ECF5F0 100%)',
        overflow: 'hidden',
        borderTop: '1px solid #DFEBE3',
        borderBottom: '1px solid #DFEBE3',
        paddingTop: '3.75rem',
        paddingBottom: '4.25rem',
      }}
    >
      {/* 1. AUTHENTIC TACTICAL PITCH SVG WATERMARK */}
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

          <rect x="60" y="40" width="1320" height="820" rx="20" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="1.75" />
          <line x1="720" y1="40" x2="720" y2="860" stroke="rgba(11, 107, 58, 0.14)" strokeWidth="2" />
          <circle cx="720" cy="450" r="160" stroke="rgba(11, 107, 58, 0.12)" strokeWidth="1.75" />
          <circle cx="720" cy="450" r="7" fill="var(--primary-green)" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* 2. CENTERED SECTION HEADER */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto 2rem auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Eyebrow Badge with Pulsing Live Beacon */}
          <div style={{ marginBottom: '0.65rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 1.1rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary-green-light)',
                border: '1px solid rgba(11, 107, 58, 0.25)',
                color: 'var(--primary-green)',
                fontSize: '0.725rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-label)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
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
              <span>ONBOARDING & PASS IDENTITY</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              color: 'var(--navy)',
              letterSpacing: '0.01em',
              lineHeight: 1.15,
              margin: '0 0 0.5rem 0',
              textTransform: 'uppercase',
            }}
          >
            YOUR FOOTBALL JOURNEY{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0B6B3A 0%, #19C463 50%, #0B6B3A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 25px rgba(25, 196, 99, 0.25)',
              }}
            >
              STARTS HERE.
            </span>
          </h2>

          {/* Decorative Laser Gradient Line */}
          <div
            style={{
              height: '3px',
              width: '120px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, transparent, #0B6B3A 20%, #19C463 50%, #F59E0B 80%, transparent)',
              margin: '0.35rem auto 0.9rem auto',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Choose your role and become part of the grassroots football ecosystem. Registration is free and connects you with verified mentors, licensed officials, and regional tournaments.
          </p>
        </div>

        {/* 3. INTERACTIVE CATEGORY FILTER TABS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '9999px',
              border: '1.5px solid var(--border-light)',
              boxShadow: '0 4px 16px rgba(16, 42, 67, 0.06)',
              flexWrap: 'wrap',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              const Icon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1.15rem',
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
                  {isActive && (
                    <motion.div
                      layoutId="activeRoleCategoryPill"
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

                  <Icon size={14} color={isActive ? '#FFFFFF' : 'var(--primary-green)'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. REDESIGNED DIGITAL PASSPORT ROLES GRID */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.35rem',
          }}
          className="roles-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => {
              const meta = ROLE_METADATA[role.id];
              const isHovered = hoveredRoleId === role.id;

              return (
                <motion.div
                  key={role.id}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 260,
                        damping: 24,
                      },
                    },
                    exit: { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
                  }}
                  whileHover={{ y: -7, transition: { duration: 0.2 } }}
                  onMouseEnter={() => setHoveredRoleId(role.id)}
                  onMouseLeave={() => setHoveredRoleId(null)}
                  onClick={() => onSelectRole(role.id)}
                  style={{
                    position: 'relative',
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '22px',
                    border: isHovered
                      ? '1.5px solid var(--primary-green)'
                      : '1.5px solid rgba(223, 235, 227, 0.95)',
                    boxShadow: isHovered
                      ? '0 20px 42px -10px rgba(11, 107, 58, 0.22), 0 6px 16px rgba(0, 0, 0, 0.04)'
                      : '0 8px 28px -4px rgba(16, 42, 67, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)',
                    padding: '1.65rem 1.45rem',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  {/* Top Glowing Laser Accent Bar */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3.5px',
                      background: isHovered
                        ? 'linear-gradient(90deg, #10B981 0%, #19C463 50%, #D8FF3E 100%)'
                        : 'linear-gradient(90deg, rgba(11, 107, 58, 0.3) 0%, rgba(25, 196, 99, 0.15) 100%)',
                      transition: 'background 0.3s ease',
                    }}
                  />

                  {/* Header Row: Role Icon Token + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.15rem',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        background: isHovered
                          ? 'linear-gradient(135deg, #0B6B3A 0%, #10B981 100%)'
                          : 'linear-gradient(135deg, rgba(25, 196, 99, 0.16) 0%, rgba(11, 107, 58, 0.08) 100%)',
                        color: isHovered ? '#FFFFFF' : 'var(--primary-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: isHovered
                          ? '1px solid rgba(255, 255, 255, 0.3)'
                          : '1px solid rgba(25, 196, 99, 0.3)',
                        boxShadow: isHovered
                          ? '0 6px 18px rgba(11, 107, 58, 0.35)'
                          : '0 2px 8px rgba(11, 107, 58, 0.08)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {getRoleIcon(role.icon)}
                    </div>

                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--primary-green)',
                        backgroundColor: 'var(--primary-green-light)',
                        border: '1px solid rgba(11, 107, 58, 0.2)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-label)',
                      }}
                    >
                      {role.badge}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      marginBottom: '0.45rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {role.title}
                  </h3>

                  {/* Role Description */}
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                      marginBottom: '1rem',
                    }}
                  >
                    {role.description}
                  </p>

                  {/* Curated Perks / Key Features */}
                  {meta?.perks && (
                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.65)',
                        borderRadius: '12px',
                        border: '1px solid rgba(223, 235, 227, 0.8)',
                        padding: '0.65rem 0.75rem',
                        marginTop: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      {meta.perks.map((perk, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            color: 'var(--navy)',
                          }}
                        >
                          <CheckCircle2 size={12} color="var(--primary-green)" style={{ flexShrink: 0 }} />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {perk}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 1200px) {
          .roles-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .roles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .roles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

