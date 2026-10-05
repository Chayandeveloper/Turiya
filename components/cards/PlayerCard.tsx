'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Shield, Zap, Sparkles, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { Player } from '@/types';

export interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Position color coding
  const getPositionStyle = (pos: string) => {
    switch (pos.toLowerCase()) {
      case 'forward':
      case 'striker':
        return { bg: 'rgba(25, 196, 99, 0.18)', border: '#19C463', text: '#0B6B3A' };
      case 'midfielder':
        return { bg: 'rgba(11, 107, 58, 0.18)', border: '#0B6B3A', text: '#0B6B3A' };
      case 'winger':
        return { bg: 'rgba(217, 119, 6, 0.18)', border: '#D97706', text: '#B45309' };
      case 'defender':
        return { bg: 'rgba(16, 42, 67, 0.16)', border: '#243B53', text: '#102A43' };
      default:
        return { bg: 'rgba(11, 107, 58, 0.18)', border: '#0B6B3A', text: '#0B6B3A' };
    }
  };

  const posStyle = getPositionStyle(player.position);

  return (
    <motion.div
      whileHover={{ y: -9 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: isHovered ? '1.5px solid rgba(25, 196, 99, 0.55)' : '1px solid #E5ECE8',
        boxShadow: isHovered
          ? '0 24px 44px -12px rgba(11, 107, 58, 0.18), 0 8px 18px -6px rgba(0, 0, 0, 0.04)'
          : '0 4px 18px rgba(16, 42, 67, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* 1. MEDIA HEADER: PLAYER PHOTO & SCOUTING HUD */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '255px',
          overflow: 'hidden',
          backgroundColor: '#0F2618',
        }}
      >
        {/* Next.js Image with smooth zoom on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: isHovered ? 'scale(1.09)' : 'scale(1)',
            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Image
            src={player.photoUrl}
            alt={player.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>

        {/* Dual Cinematic Vignette for high contrast text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(16, 42, 67, 0.65) 0%, rgba(16, 42, 67, 0.1) 40%, rgba(16, 42, 67, 0.92) 100%)',
          }}
        />

        {/* Top Badges HUD */}
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
          {/* Jersey Number Chip */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '34px',
              height: '34px',
              padding: '0 0.5rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(8px)',
              fontWeight: 900,
              fontSize: '0.9rem',
              color: 'var(--navy)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              fontFamily: 'var(--font-heading)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
            }}
          >
            #{player.jerseyNumber}
          </div>

          {/* Position Pill with Colored Glow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(8px)',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              border: `1.5px solid ${posStyle.border}`,
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: posStyle.border,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: posStyle.text,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {player.position}
            </span>
          </div>
        </div>

        {/* Verified Passport Chip Floating Center-Right */}
        <div
          style={{
            position: 'absolute',
            top: '3.3rem',
            right: '0.9rem',
            zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(11, 107, 58, 0.88)',
            backdropFilter: 'blur(8px)',
            padding: '0.22rem 0.6rem',
            borderRadius: '9999px',
            fontSize: '0.68rem',
            fontWeight: 800,
            color: '#FFFFFF',
            fontFamily: 'var(--font-label)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            border: '1px solid rgba(25, 196, 99, 0.5)',
          }}
        >
          <CheckCircle2 size={11} color="var(--bright-green)" />
          <span>Verified ID</span>
        </div>

        {/* Bottom of Photo: Player Name & Club Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '0.95rem',
            right: '0.95rem',
            zIndex: 2,
            color: '#FFFFFF',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 800,
              color: '#FFFFFF',
              margin: '0 0 0.2rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
            }}
          >
            {player.name}
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.825rem',
              fontWeight: 700,
              color: '#D8FF3E',
              fontFamily: 'var(--font-label)',
            }}
          >
            <Shield size={13} color="#D8FF3E" />
            <span>{player.club}</span>
          </div>
        </div>
      </div>

      {/* 2. CARD BODY & SCOUTING TELEMETRY */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Origin Location & Age Meta Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #E8EFEA',
            marginBottom: '0.85rem',
            fontFamily: 'var(--font-label)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={13} color="var(--primary-green)" />
            <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{player.location}</span>
          </div>
          <span
            style={{
              backgroundColor: '#F1F9F4',
              padding: '0.2rem 0.55rem',
              borderRadius: '9999px',
              fontWeight: 800,
              color: 'var(--primary-green)',
            }}
          >
            {player.age} yrs
          </span>
        </div>

        {/* FUT-STYLE ATTRIBUTE METRICS (PAC, FIN, PAS, DRI, PHY) */}
        <div
          style={{
            backgroundColor: '#F8FAF9',
            borderRadius: '14px',
            border: '1px solid #E8EFEA',
            padding: '0.75rem 0.85rem',
            marginBottom: '0.85rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.35rem',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                PAC
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary-green)', fontFamily: 'var(--font-heading)' }}>
                {player.stats.pace || 85}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                SHO
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary-green)', fontFamily: 'var(--font-heading)' }}>
                {player.stats.finishing || 80}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                PAS
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary-green)', fontFamily: 'var(--font-heading)' }}>
                {player.stats.passing || 75}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                DRI
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary-green)', fontFamily: 'var(--font-heading)' }}>
                {player.stats.dribbling || 82}
              </div>
            </div>
          </div>
        </div>

        {/* Matches & Season Goals Telemetry Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.775rem',
            fontWeight: 800,
            padding: '0.45rem 0.75rem',
            borderRadius: '10px',
            backgroundColor: 'var(--primary-green-light)',
            color: 'var(--primary-green)',
            marginBottom: '1rem',
            fontFamily: 'var(--font-label)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Activity size={13} color="var(--primary-green)" />
            <span>{player.stats.matches || 20} Matches Played</span>
          </div>
          <span>{player.stats.goals || 15} Goals</span>
        </div>

        {/* 3. CARD ACTION BUTTON */}
        <div style={{ marginTop: 'auto' }}>
          <Link
            href={`/players/${player.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              width: '100%',
              padding: '0.72rem 1rem',
              borderRadius: '9999px',
              backgroundColor: isHovered ? 'var(--primary-green)' : '#FFFFFF',
              border: '1.5px solid var(--primary-green)',
              color: isHovered ? '#FFFFFF' : 'var(--primary-green)',
              fontWeight: 800,
              fontSize: '0.875rem',
              fontFamily: 'var(--font-label)',
              textDecoration: 'none',
              boxShadow: isHovered ? '0 4px 14px rgba(11, 107, 58, 0.28)' : 'none',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span>View Scout Passport</span>
            <ArrowRight
              size={14}
              style={{
                transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                transition: 'transform 0.25s ease',
              }}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
