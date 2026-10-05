'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CLUBS_DATA, PLAYERS_DATA } from '@/lib/constants/mock-data';
import { 
  MapPin, 
  Users, 
  Award, 
  Calendar, 
  Trophy, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

export default function ClubProfilePage({ params }: { params: { slug: string } }) {
  const club = CLUBS_DATA.find((c) => c.slug === params.slug) || CLUBS_DATA[0];
  const clubPlayers = PLAYERS_DATA.filter((p) => p.clubSlug === club.slug || p.club === club.shortName);

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Clubs', href: '/clubs' },
            { label: club.name },
          ]}
        />

        {/* Club Cover and Logo Header */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            marginBottom: '2.5rem',
          }}
        >
          {/* Cover Photo */}
          <div style={{ position: 'relative', width: '100%', height: '260px', backgroundColor: '#E2E8F0' }}>
            <Image
              src={club.coverUrl}
              alt={club.name}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.45)' }} />

            <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
              <Badge variant="navy">Est. {club.foundedYear}</Badge>
            </div>
          </div>

          {/* Profile Bar */}
          <div
            style={{
              padding: '0 2.5rem 2rem',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '-60px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Logo Avatar & Title */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  borderRadius: '24px',
                  border: '5px solid #FFFFFF',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 6px 20px rgba(16, 42, 67, 0.15)',
                }}
              >
                <Image
                  src={club.logoUrl}
                  alt={`${club.name} logo`}
                  fill
                  sizes="120px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ paddingBottom: '0.5rem' }}>
                <h1 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)', fontWeight: 900, color: 'var(--navy)', margin: 0 }}>
                  {club.name}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={15} color="var(--primary-green)" />
                    {club.location}, {club.state}
                  </span>
                  <span>•</span>
                  <span>Ground: {club.homeGround}</span>
                  <span>•</span>
                  <Link href={`/league/${club.leagueSlug}`} style={{ color: 'var(--primary-green)', fontWeight: 700 }}>
                    {club.league}
                  </Link>
                </div>
              </div>
            </div>

            {/* Club Contact / Friendly CTA */}
            <div style={{ paddingBottom: '0.5rem' }}>
              <Button variant="primary" size="md" href="/support">
                Schedule Friendly / Inquire
              </Button>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Main Info */}
          <div>
            {/* About */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                marginBottom: '2rem',
              }}
            >
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.85rem' }}>
                About {club.shortName}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {club.about}
              </p>
            </div>

            {/* Squad Overview */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                  Active Squad ({club.playersCount} Players)
                </h2>
                <Badge variant="green">Verified Roster</Badge>
              </div>

              {/* Squad Distribution */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.75rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>FORWARDS</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-green)' }}>{club.squadSummary.forwards}</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>MIDFIELDERS</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--navy)' }}>{club.squadSummary.midfielders}</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>DEFENDERS</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--navy)' }}>{club.squadSummary.defenders}</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>GOALKEEPERS</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-green)' }}>{club.squadSummary.goalkeepers}</div>
                </div>
              </div>

              {/* Highlighted Players in Club */}
              {clubPlayers.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                    Featured Players in this Club
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {clubPlayers.map((player) => (
                      <Link
                        key={player.id}
                        href={`/players/${player.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--bg-main)',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>#{player.jerseyNumber}</span>
                          <div>
                            <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.95rem' }}>{player.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{player.position} • Age {player.age}</div>
                          </div>
                        </div>
                        <Badge variant="lime" size="sm">{player.stats.goals} Goals</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Achievements */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Trophy size={20} color="#D97706" />
                <span>Honors & Trophies</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {club.achievements.map((ach, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-green)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Coaching Staff Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                Technical Leadership
              </h3>
              <div style={{ backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Head Coach</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)', margin: '0.2rem 0' }}>{club.coach}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary-green)', fontWeight: 700 }}>{club.coachTitle}</div>
              </div>
            </div>

            {/* League Affiliation Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1.5px solid var(--primary-green)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                Official Competition
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                {club.league}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Currently competing for the regional championship shield with full digital standings tracking.
              </p>
              <Button variant="secondary" size="sm" href={`/league/${club.leagueSlug}`}>
                View League Table →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
