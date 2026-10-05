'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Building2,
  Trophy,
  ShieldCheck,
  Briefcase,
  Sparkles,
  QrCode,
  Zap,
  Activity,
  Calendar,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Clock,
  Award,
  DollarSign,
  Camera,
  HeartPulse,
  Flame,
  FileCheck2,
  Sliders,
  Play
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export type EcosystemTabKey = 'player' | 'academy' | 'organizer' | 'officials' | 'pass_works' | 'ai_studio';

interface EcosystemTabConfig {
  id: EcosystemTabKey;
  label: string;
  badge: string;
  headline: string;
  tagline: string;
  color: string;
  accentBg: string;
  features: { title: string; desc: string; icon: any }[];
  ctaLabel: string;
  ctaHref: string;
}

const TABS_CONFIG: EcosystemTabConfig[] = [
  {
    id: 'player',
    label: 'Player Workspace',
    badge: 'GFID PASSPORT',
    headline: 'Digital Player Passport & Verified Scouting',
    tagline: 'Build your lifetime digital football resume with AIFF-aligned stats and FUT skill ratings.',
    color: '#FF6B00',
    accentBg: 'rgba(255, 107, 0, 0.08)',
    ctaLabel: 'Explore Player Registry',
    ctaHref: '/players',
    features: [
      {
        title: 'Universal GFID QR Passport',
        desc: 'Instant QR check-in at matches and academies with a permanent grassroots football ID (e.g. IND-NE-1001).',
        icon: QrCode,
      },
      {
        title: 'FUT Skill Rating Cards',
        desc: 'EA FC-style 6-parameter ratings: Pace (PAC), Shooting (SHO), Passing (PAS), Dribbling (DRI), Defending (DEF), Physicality (PHY).',
        icon: Zap,
      },
      {
        title: '5-Step Story Showcase',
        desc: 'Curated video highlights, verified match logs, biometric stats, and coach endorsements visible to scouts nationwide.',
        icon: TrendingUp,
      },
      {
        title: 'Gamified XP & Daily Drills',
        desc: 'Level up your player tier through verified practice drills, MOTM trophies, and match streak records.',
        icon: Flame,
      },
    ],
  },
  {
    id: 'academy',
    label: 'Academy & Club',
    badge: 'OPERATIONS SUITE',
    headline: 'All-in-One Grassroots Academy Management',
    tagline: 'Eliminate paperwork, track student dues, take QR attendance, and field verified rosters.',
    color: '#0B6B3A',
    accentBg: 'rgba(11, 107, 58, 0.08)',
    ctaLabel: 'Browse Partner Academies',
    ctaHref: '/academies',
    features: [
      {
        title: 'Multi-Age Squad Rosters',
        desc: 'Organize players into U-11, U-13, U-15, U-17, and Senior squads with verified age documents.',
        icon: Building2,
      },
      {
        title: 'QR Scan Attendance Tracker',
        desc: 'Batch scan player QR codes from coaches phones with instant cloud timestamping and absent alerts.',
        icon: QrCode,
      },
      {
        title: 'Digital Tuition Fee Ledger',
        desc: 'Track paid dues, send automated UPI payment reminders, and generate downloadable receipts.',
        icon: DollarSign,
      },
      {
        title: 'Admissions & Squad Desk',
        desc: 'Accept prospective trial applications, assign approved prospects to coaches, and manage contracts.',
        icon: FileCheck2,
      },
    ],
  },
  {
    id: 'organizer',
    label: 'Tournament Organizer',
    badge: 'MATCH ENGINE',
    headline: 'Live Matchday Engine & Real-Time Standings',
    tagline: 'From neighborhood turf derbies to state leagues—automate fixtures, scores, and tables.',
    color: '#D97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    ctaLabel: 'View Active Tournaments',
    ctaHref: '/tournaments',
    features: [
      {
        title: 'Real-Time Live Scorekeeper',
        desc: 'On-field match clocks, goal logs, assists, cautions, and live event marquee updates streamed in real time.',
        icon: Clock,
      },
      {
        title: 'Automated Standings Generator',
        desc: 'Instant points table math (P, W, D, L, GF, GA, GD, PTS) recalculated automatically after the final whistle.',
        icon: Trophy,
      },
      {
        title: 'Fixture & Venue Scheduler',
        desc: 'One-click round-robin or knockout bracket generation with ground slot sync and referee assignments.',
        icon: Calendar,
      },
      {
        title: 'Certified Match Report Logs',
        desc: 'Official AIFF/District-compliant score sheets signed off digitally by licensed match commissioners.',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'officials',
    label: 'Coaches & Referees',
    badge: 'OFFICIALS NETWORK',
    headline: 'Certified Rate Cards & Tactical Studios',
    tagline: 'Empowering accredited coaches and referees with bookings, credentials, and digital match logs.',
    color: '#102A43',
    accentBg: 'rgba(16, 42, 67, 0.08)',
    ctaLabel: 'Discover Opportunities',
    ctaHref: '/opportunities',
    features: [
      {
        title: 'Public Hiring Rate Cards',
        desc: 'Display AIFF D/C/B/A and AFC license badges with verified per-match and hourly coaching fees.',
        icon: Award,
      },
      {
        title: 'Coach Video Course Studio',
        desc: 'Publish tactical training drill modules and assign video practice homework to academy squads.',
        icon: Play,
      },
      {
        title: 'Official Referee Match Log',
        desc: 'Submit official cautions, red cards, match timings, and pitch inspection reports directly to organizers.',
        icon: ShieldCheck,
      },
      {
        title: 'Direct Organizer Dispatch',
        desc: 'Receive match day officiating assignments with guaranteed escrow honorariums and venue details.',
        icon: UserCheck,
      },
    ],
  },
  {
    id: 'pass_works',
    label: 'PASS Works Economy',
    badge: 'SUPPORT PROFESSIONALS',
    headline: 'The Dedicated Football Support Economy',
    tagline: 'Connecting ground owners, sports physios, nutritionists, ball boys, and photographers.',
    color: '#FF6B00',
    accentBg: 'rgba(255, 107, 0, 0.08)',
    ctaLabel: 'Explore PASS Works Portal',
    ctaHref: '/pass-works',
    features: [
      {
        title: 'PWD Verified ID Cards',
        desc: 'Unique identification (e.g. PWD-NE-PT-0421) ensuring authenticated field access and booking trust.',
        icon: ShieldCheck,
      },
      {
        title: 'Ground Owners & Venues',
        desc: 'List natural grass and artificial turfs, set hourly INR slot rates, and receive verified tournament bookings.',
        icon: MapPin,
      },
      {
        title: 'Physios & Sports Medics',
        desc: 'Offer pitchside matchday medical duty slots and specialized ACL/ankle rehabilitation consults.',
        icon: HeartPulse,
      },
      {
        title: 'Ball Boys & Media Crews',
        desc: 'Earn stipends on tournament matchdays; photographers upload high-res action shots directly to players.',
        icon: Camera,
      },
    ],
  },
  {
    id: 'ai_studio',
    label: 'AI Media Studio',
    badge: 'MULTIMODAL AI',
    headline: 'Google Gemini Multimodal Sports Graphics',
    tagline: 'Generate photorealistic FUT player cards, derby match posters, and custom club crests in seconds.',
    color: '#7C3AED',
    accentBg: 'rgba(124, 58, 237, 0.08)',
    ctaLabel: 'Learn More in Documentation',
    ctaHref: '/about',
    features: [
      {
        title: 'Photorealistic Gemini Portraits',
        desc: 'Harnesses Google Gemini vision models to turn simple smartphone photos into cinematic pro player cards.',
        icon: Sparkles,
      },
      {
        title: 'EA FC-Style FUT Cards',
        desc: 'Render Sunset Orange and Gold holographic cards complete with overall skill ratings and club crests.',
        icon: Sliders,
      },
      {
        title: 'Matchday Derby Posters',
        desc: 'Instant broadcast-quality social graphics for upcoming clashes with team badges, venue, and kick-off times.',
        icon: Trophy,
      },
      {
        title: 'Academy Crest Studio',
        desc: 'Generates professional vector emblems for newly formed grassroots teams and village academies.',
        icon: Award,
      },
    ],
  },
];

export const PassEcosystemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EcosystemTabKey>('player');
  const current = TABS_CONFIG.find((t) => t.id === activeTab) || TABS_CONFIG[0];

  return (
    <section
      id="pass-ecosystem"
      className="section-py"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="PASS DIGITAL ECOSYSTEM"
          title="ONE UNIFIED SYSTEM. EVERY FOOTBALL STAKEHOLDER."
          subtitle="Explore how the Player Academic Sports System (PASS) and PASS Works transform grassroots football across India with AI, digital passports, and synchronized workspaces."
          align="center"
        />

        {/* ECOSYSTEM ROLE TABS SELECTOR */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              gap: '0.4rem',
              padding: '0.4rem',
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
              maxWidth: '100%',
            }}
          >
            {TABS_CONFIG.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive ? tab.color : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--navy)',
                    boxShadow: isActive ? `0 4px 14px ${tab.color}40` : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE TAB CONTENT DISPLAY */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid var(--border-light)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.15fr 0.85fr',
                gap: '2.5rem',
                alignItems: 'center',
              }}
              className="pass-tab-grid"
            >
              {/* LEFT: FEATURES & SPECS */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: current.color,
                      backgroundColor: current.accentBg,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      border: `1px solid ${current.color}30`,
                    }}
                  >
                    {current.badge}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Official Master Specification v3.0
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.85rem',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    lineHeight: 1.25,
                    marginBottom: '0.75rem',
                  }}
                >
                  {current.headline}
                </h3>

                <p
                  style={{
                    fontSize: '0.975rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                  }}
                >
                  {current.tagline}
                </p>

                {/* 4 FEATURE PILLARS */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.25rem',
                    marginBottom: '2rem',
                  }}
                  className="pass-features-grid"
                >
                  {current.features.map((feat, idx) => {
                    const IconComp = feat.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.35,
                          delay: idx * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: 'var(--radius-lg)',
                          padding: '1.25rem',
                          border: '1px solid var(--border-light)',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            backgroundColor: current.accentBg,
                            color: current.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '0.75rem',
                          }}
                        >
                          <IconComp size={20} />
                        </div>
                        <h4
                          style={{
                            fontSize: '0.925rem',
                            fontWeight: 700,
                            color: 'var(--navy)',
                            marginBottom: '0.35rem',
                          }}
                        >
                          {feat.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.45,
                          }}
                        >
                          {feat.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Link
                    href={current.ctaHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.6rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: current.color,
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: `0 4px 14px ${current.color}40`,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{current.ctaLabel}</span>
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="#stats-section"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      padding: '0.75rem 1rem',
                    }}
                  >
                    View Grassroots Impact ↓
                  </a>
                </div>
              </div>

              {/* RIGHT: LIVE INTERACTIVE PREVIEW CARD */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {activeTab === 'player' && (
                  /* FUT CARD PREVIEW */
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '320px',
                      background: 'linear-gradient(135deg, #FF6B00 0%, #FFA149 50%, #FF5100 100%)',
                      borderRadius: '24px',
                      padding: '1.75rem',
                      color: '#FFFFFF',
                      boxShadow: '0 20px 40px rgba(255, 107, 0, 0.35)',
                      border: '3px solid rgba(255, 255, 255, 0.4)',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>84</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, opacity: 0.9 }}>ST</div>
                        <div style={{ fontSize: '0.675rem', letterSpacing: '0.08em', marginTop: '0.2rem', opacity: 0.85 }}>IND • U-17</div>
                      </div>
                      <div
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          borderRadius: '12px',
                          padding: '0.4rem 0.6rem',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          letterSpacing: '0.05em',
                        }}
                      >
                        GFID: IND-NE-1001
                      </div>
                    </div>

                    <div style={{ textAlign: 'center', margin: '1.25rem 0 0.5rem' }}>
                      <div
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          border: '3px solid #FFFFFF',
                          margin: '0 auto 0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                        }}
                      >
                        ⚽
                      </div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800 }}>
                        LALRINAWMA T.
                      </div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Mizoram State FA • Forward</div>
                    </div>

                    {/* FUT STATS GRID */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0.5rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.15)',
                        borderRadius: '14px',
                        padding: '0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>88</div>
                        <div style={{ fontSize: '0.625rem', opacity: 0.8 }}>PAC</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>85</div>
                        <div style={{ fontSize: '0.625rem', opacity: 0.8 }}>SHO</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>82</div>
                        <div style={{ fontSize: '0.625rem', opacity: 0.8 }}>PAS</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>86</div>
                        <div style={{ fontSize: '0.625rem', opacity: 0.8 }}>DRI</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>42</div>
                        <div style={{ fontSize: '0.625rem', opacity: 0.8 }}>DEF</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>78</div>
                        <div style={{ fontSize: '0.625rem', opacity: 0.8 }}>PHY</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'academy' && (
                  /* ACADEMY QR ATTENDANCE PREVIEW */
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '1.75rem',
                      border: '1.5px solid var(--border-light)',
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)' }}>
                          MORNING SESSION
                        </span>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)' }}>
                          U-15 Youth Squad
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: 'var(--primary-green-light)',
                          color: 'var(--primary-green)',
                          padding: '0.3rem 0.6rem',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                        }}
                      >
                        18 / 20 Present
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        textAlign: 'center',
                        border: '1.5px dashed var(--primary-green)',
                        marginBottom: '1rem',
                      }}
                    >
                      <QrCode size={64} style={{ color: 'var(--primary-green)', margin: '0 auto 0.5rem' }} />
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)' }}>
                        QR Auto Check-In Active
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        GFID scan authenticated at 06:45 AM
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.4rem 0' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Tuition Fee Dues Status</span>
                        <span style={{ fontWeight: 800, color: 'var(--primary-green)' }}>92% Cleared</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.4rem 0' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Next Matchday</span>
                        <span style={{ fontWeight: 800, color: 'var(--navy)' }}>Sat vs Shillong Stars</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'organizer' && (
                  /* LIVE SCOREKEEPER PREVIEW */
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                      backgroundColor: '#102A43',
                      borderRadius: '20px',
                      padding: '1.75rem',
                      color: '#FFFFFF',
                      boxShadow: 'var(--shadow-xl)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#DC2626' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FCA5A5' }}>LIVE 67&apos;</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', opacity: 0.75 }}>Championship Final</span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                        margin: '1.25rem 0',
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Guwahati FC</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.75 }}>Home</div>
                      </div>
                      <div
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          padding: '0.4rem 0.9rem',
                          borderRadius: '12px',
                          fontSize: '1.85rem',
                          fontWeight: 900,
                          letterSpacing: '0.05em',
                        }}
                      >
                        2 - 1
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Aizawl Colts</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.75 }}>Away</div>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '0.75rem',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span>⚽</span>
                      <div>
                        <strong>Goal 62&apos;</strong>: Lalrinawma T. assisted by S. Roy
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'officials' && (
                  /* OFFICIALS CREDENTIAL CARD */
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '1.75rem',
                      border: '1.5px solid var(--border-light)',
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '14px',
                          backgroundColor: 'var(--navy)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                        }}
                      >
                        📋
                      </div>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)' }}>
                          Coach Sanjib Borah
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--primary-green)', fontWeight: 700 }}>
                          AIFF &apos;A&apos; Licensed Tactical Head
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        borderRadius: '12px',
                        padding: '0.75rem 1rem',
                        marginBottom: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hiring Rate Card</span>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--navy)' }}>₹2,500 / match</strong>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      • 14 Tournaments Refereed in 2026<br />
                      • Certified Match Dispatch Ready<br />
                      • Zero Disputed Disciplinary Logs
                    </div>
                  </div>
                )}

                {activeTab === 'pass_works' && (
                  /* PASS WORKS PWD CARD PREVIEW */
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '1.75rem',
                      border: '2px solid #FF6B00',
                      boxShadow: '0 14px 34px rgba(255, 107, 0, 0.15)',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '16px',
                        backgroundColor: '#FFF2E8',
                        color: '#FF6B00',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.675rem',
                        fontWeight: 800,
                      }}
                    >
                      PWD DELEGATE
                    </div>

                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF6B00', marginBottom: '0.25rem' }}>
                      SPORTS PHYSIOTHERAPIST
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                      Dr. Ananya Sharma, MPT
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      ID: PWD-NE-PT-0421 • ACL Rehab Specialist
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        borderRadius: '12px',
                        padding: '0.85rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Matchday Retainer</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>₹3,500 / day</div>
                      </div>
                      <div
                        style={{
                          backgroundColor: '#10B981',
                          color: '#FFFFFF',
                          padding: '0.3rem 0.6rem',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                        }}
                      >
                        Verified Medic
                      </div>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Available for Northeast Cup & Guwahati Academy Leagues
                    </div>
                  </div>
                )}

                {activeTab === 'ai_studio' && (
                  /* AI STUDIO GENERATIVE CARD PREVIEW */
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                      backgroundColor: '#121827',
                      borderRadius: '20px',
                      padding: '1.75rem',
                      color: '#FFFFFF',
                      boxShadow: '0 20px 40px rgba(124, 58, 237, 0.25)',
                      border: '1.5px solid rgba(124, 58, 237, 0.4)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Sparkles size={16} style={{ color: '#A78BFA' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#A78BFA' }}>
                          GEMINI MULTIMODAL AI
                        </span>
                      </div>
                      <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>v2.5 Flash Engine</span>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '0.85rem',
                        marginBottom: '1rem',
                        border: '1px dashed rgba(167, 139, 250, 0.5)',
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', color: '#A78BFA', fontWeight: 700, marginBottom: '0.25rem' }}>
                        PROMPT INPUT:
                      </div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.9, fontStyle: 'italic' }}>
                        &ldquo;Render player portrait into Sunset Orange FUT card with golden rim, 84 Overall, ST position.&rdquo;
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#7C3AED',
                        color: '#FFFFFF',
                        borderRadius: '10px',
                        padding: '0.5rem',
                        textAlign: 'center',
                        fontSize: '0.775rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                      }}
                    >
                      RENDER COMPLETE: 1.8s
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .pass-tab-grid {
            grid-template-columns: 1fr !important;
          }
          .pass-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
