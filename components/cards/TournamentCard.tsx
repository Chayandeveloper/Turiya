'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  RotateCw,
  Clock,
  Award,
  FileText,
  BadgeCheck,
} from 'lucide-react';
import { Tournament } from '@/types';

export interface TournamentCardProps {
  tournament: Tournament;
  onRegisterClick?: (tournament: Tournament) => void;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, onRegisterClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Status configuration
  const isOpen = tournament.status === 'Registration Open';
  const isUpcoming = tournament.status === 'Upcoming';
  const isCompleted = tournament.status === 'Completed';

  // Realistic mock filled slots for visual urgency
  const maxTeams = tournament.teamsCount || 16;
  const filledTeams = isOpen ? Math.max(1, maxTeams - 4) : isUpcoming ? Math.floor(maxTeams / 2) : maxTeams;
  const progressPercent = Math.min(100, Math.round((filledTeams / maxTeams) * 100));

  // Default rules if tournament.rules is empty
  const rulesList =
    tournament.rules && tournament.rules.length > 0
      ? tournament.rules.slice(0, 3)
      : [
          '11-a-side regulation match rules (35 min halves)',
          'All players must be registered on Turiya digital passport',
          'AIFF certified match referee panel on pitch',
        ];

  return (
    <div
      style={{
        perspective: '1400px',
        height: '460px',
        width: '100%',
        position: 'relative',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
          y: isFlipped ? -6 : 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ========================================================= */}
        {/* FRONT FACE OF CARD (Initial State - Glassy Transparent)   */}
        {/* ========================================================= */}
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderRadius: '20px',
            border: isFlipped
              ? '1.5px solid rgba(25, 196, 99, 0.65)'
              : '1.5px solid rgba(255, 255, 255, 0.9)',
            boxShadow: isFlipped
              ? '0 20px 45px -10px rgba(11, 107, 58, 0.22), 0 8px 18px -6px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.95)'
              : '0 8px 32px rgba(16, 42, 67, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* 1. MEDIA HEADER CONTAINER (Compact 155px) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '155px',
              overflow: 'hidden',
              backgroundColor: '#0F2618',
            }}
          >
            {/* Next.js Image with subtle zoom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                transform: isFlipped ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Image
                src={tournament.image}
                alt={tournament.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Cinematic Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(16, 42, 67, 0.75) 0%, rgba(16, 42, 67, 0.1) 40%, rgba(16, 42, 67, 0.88) 100%)',
              }}
            />

            {/* Top Badges Bar */}
            <div
              style={{
                position: 'absolute',
                top: '0.9rem',
                left: '0.9rem',
                right: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 2,
              }}
            >
              {/* Category Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-green)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tournament.category}
                </span>
              </div>

              {/* Status Badge with Live Pulse */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                  backgroundColor: isOpen
                    ? 'rgba(11, 107, 58, 0.94)'
                    : isUpcoming
                    ? 'rgba(217, 119, 6, 0.94)'
                    : 'rgba(30, 41, 59, 0.88)',
                  color: '#FFFFFF',
                  border: isOpen
                    ? '1px solid rgba(25, 196, 99, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {isOpen ? (
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
                        backgroundColor: '#19C463',
                        opacity: 0.75,
                        animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                      }}
                    />
                    <span
                      style={{
                        position: 'relative',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                      }}
                    />
                  </span>
                ) : isCompleted ? (
                  <CheckCircle2 size={12} color="#CBD5E1" />
                ) : (
                  <Sparkles size={12} color="#FDE68A" />
                )}
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tournament.status}
                </span>
              </div>
            </div>

            {/* Bottom Floating Bar: Prize Pool & Hover Hint */}
            <div
              style={{
                position: 'absolute',
                bottom: '0.85rem',
                left: '0.9rem',
                right: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 2,
              }}
            >
              {/* Shimmering Gold Prize Pool Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(217, 119, 6, 0.25)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                }}
              >
                <Trophy size={14} color="#D97706" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {tournament.prizePool}
                </span>
              </div>

              {/* Hover to Flip Pill Hint */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(16, 42, 67, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-label)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <RotateCw size={11} color="var(--bright-green)" />
                <span>Hover to Flip</span>
              </div>
            </div>
          </div>

          {/* 2. FRONT CARD BODY (Compact Proportions) */}
          <div style={{ padding: '0.85rem 1.05rem 0.85rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Sanctioned Tagline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.68rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--primary-green)',
                marginBottom: '0.25rem',
                fontFamily: 'var(--font-label)',
              }}
            >
              <ShieldCheck size={13} color="var(--primary-green)" />
              <span>Sanctioned Tournament • Official Circuit</span>
            </div>

            {/* Tournament Name */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.125rem',
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1.2,
                marginBottom: '0.45rem',
                letterSpacing: '-0.01em',
              }}
            >
              {tournament.name}
            </h3>

            {/* Telemetry Info Grid */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.60)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 2px 8px rgba(11, 107, 58, 0.03)',
                padding: '0.5rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                marginBottom: '0.6rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--navy)' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '5px',
                    backgroundColor: 'var(--primary-green-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={11} color="var(--primary-green)" />
                </div>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <span style={{ fontWeight: 600 }}>{tournament.location}</span>
                  {tournament.venue && (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}> • {tournament.venue}</span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--navy)' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '5px',
                    backgroundColor: 'var(--primary-green-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={11} color="var(--primary-green)" />
                </div>
                <span style={{ fontWeight: 600 }}>{tournament.dates}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--navy)' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '5px',
                    backgroundColor: 'var(--primary-green-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Users size={11} color="var(--primary-green)" />
                </div>
                <span style={{ fontWeight: 600 }}>{tournament.teamsCount} Village Teams Competing</span>
              </div>
            </div>

            {/* Registration Slots Meter (Visual Urgency) */}
            {isOpen && (
              <div style={{ marginBottom: '0.65rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    marginBottom: '0.25rem',
                    fontFamily: 'var(--font-label)',
                  }}
                >
                  <span style={{ color: 'var(--primary-green)', fontWeight: 800 }}>
                    {filledTeams}/{maxTeams} Registered
                  </span>
                  <span style={{ color: '#D97706', fontWeight: 800 }}>
                    {maxTeams - filledTeams} Left
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(11, 107, 58, 0.12)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${progressPercent}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--primary-green) 0%, var(--bright-green) 100%)',
                      borderRadius: '9999px',
                      transition: 'width 1s ease',
                    }}
                  />
                </div>
              </div>
            )}

            {/* 3. FRONT ACTION BUTTONS (Compact Proportions) */}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  padding: '0.52rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1.5px solid var(--primary-green)',
                  color: 'var(--primary-green)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-label)',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-green-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                }}
              >
                <span>Rules & Intel</span>
                <RotateCw size={12} />
              </button>

              {isOpen && onRegisterClick && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRegisterClick(tournament);
                  }}
                  style={{
                    padding: '0.52rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--primary-green)',
                    color: '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-label)',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(11, 107, 58, 0.28)',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-green-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-green)';
                  }}
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BACK FACE OF CARD (Flipped State - Glassy Emerald Dossier)*/}
        {/* ========================================================= */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            backgroundColor: 'rgba(8, 42, 23, 0.82)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            backgroundImage:
              'radial-gradient(ellipse at 80% 10%, rgba(52, 211, 153, 0.25) 0%, transparent 60%), linear-gradient(155deg, rgba(10, 52, 29, 0.85) 0%, rgba(6, 35, 19, 0.90) 100%)',
            border: '1.5px solid rgba(52, 211, 153, 0.45)',
            boxShadow:
              '0 18px 45px -8px rgba(7, 48, 26, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.15rem 1.25rem',
            color: '#FFFFFF',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          {/* Subtle Football Pitch Tactical Watermark Arc on Back */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-40px',
              bottom: '-40px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '2px dashed rgba(52, 211, 153, 0.25)',
              pointerEvents: 'none',
            }}
          />

          {/* BACK HEADER: Dossier Pill + Flip Back Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.65rem',
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(52, 211, 153, 0.18)',
                border: '1px solid rgba(52, 211, 153, 0.35)',
                padding: '0.28rem 0.7rem',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#34D399',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-label)',
              }}
            >
              <FileText size={12} />
              <span>Circuit Intel & Regulations</span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(255, 255, 255, 0.14)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '0.28rem 0.65rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--font-label)',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.14)';
              }}
            >
              <RotateCw size={11} />
              <span>Flip Back</span>
            </button>
          </div>

          {/* BACK TOURNAMENT TITLE */}
          <div style={{ marginBottom: '0.65rem', zIndex: 2 }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                margin: '0 0 0.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              {tournament.name}
            </h3>
            <div
              style={{
                fontSize: '0.75rem',
                color: '#86EFAC',
                fontFamily: 'var(--font-label)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <BadgeCheck size={13} color="#86EFAC" />
              <span>Organised by: {tournament.organiser?.name || 'Turiya Football Circuit'}</span>
            </div>
          </div>

          {/* TOURNAMENT RULES & MATCH FORMAT */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              padding: '0.6rem 0.75rem',
              marginBottom: '0.65rem',
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#34D399',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-label)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Award size={12} />
              <span>Sanctioned Match Rules</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {rulesList.slice(0, 2).map((rule, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.45rem',
                    fontSize: '0.76rem',
                    color: 'rgba(255, 255, 255, 0.92)',
                    lineHeight: 1.3,
                  }}
                >
                  <CheckCircle2 size={12} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK TELEMETRY CHIPS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.5rem',
              marginBottom: '0.75rem',
              zIndex: 2,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '0.45rem 0.65rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, textTransform: 'uppercase' }}>
                Prize Pool
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FDE68A' }}>
                {tournament.prizePool}
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '0.45rem 0.65rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 700, textTransform: 'uppercase' }}>
                Deadline
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {tournament.registrationDeadline || '25 Nov 2026'}
              </div>
            </div>
          </div>

          {/* BACK ACTION CTAS */}
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              gap: '0.55rem',
              zIndex: 2,
            }}
          >
            <Link
              href={`/tournaments/${tournament.slug}`}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                padding: '0.55rem 0.8rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 800,
                fontFamily: 'var(--font-label)',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              <span>Full Bracket</span>
              <ArrowRight size={13} />
            </Link>

            {isOpen && onRegisterClick && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRegisterClick(tournament);
                }}
                style={{
                  flex: 1.2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  padding: '0.55rem 0.9rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bright-green)',
                  color: '#061F12',
                  fontSize: '0.8rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-label)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(25, 196, 99, 0.45)',
                  transition: 'transform 0.15s ease, filter 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1.08)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>Register Squad</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
