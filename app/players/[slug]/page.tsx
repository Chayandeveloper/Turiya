'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PLAYERS_DATA } from '@/lib/constants/mock-data';
import { 
  MapPin, 
  Shield, 
  Trophy, 
  Award, 
  Calendar, 
  Zap, 
  Activity, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

export default function PlayerProfilePage({ params }: { params: { slug: string } }) {
  const player = PLAYERS_DATA.find((p) => p.slug === params.slug) || PLAYERS_DATA[0];

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Players', href: '/players' },
            { label: player.name },
          ]}
        />

        {/* Player Profile Header Card */}
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
          {/* Top Banner / Cover */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '200px',
              backgroundColor: 'var(--navy)',
              backgroundImage: 'radial-gradient(circle at top right, rgba(25, 196, 99, 0.35), transparent 70%)',
            }}
          />

          {/* Profile Identity Bar */}
          <div
            style={{
              padding: '0 2.5rem 2rem',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '-80px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Avatar & Main Meta */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  position: 'relative',
                  width: '140px',
                  height: '140px',
                  borderRadius: '24px',
                  border: '5px solid #FFFFFF',
                  overflow: 'hidden',
                  backgroundColor: '#E2E8F0',
                  boxShadow: '0 8px 24px rgba(16, 42, 67, 0.15)',
                }}
              >
                <Image
                  src={player.photoUrl}
                  alt={player.name}
                  fill
                  sizes="140px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ paddingBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Badge variant="lime">{player.position}</Badge>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-muted)' }}>#{player.jerseyNumber}</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)', margin: 0 }}>
                  {player.name}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={15} color="var(--primary-green)" />
                    {player.location}
                  </span>
                  <span>•</span>
                  <Link href={`/clubs/${player.clubSlug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--navy)', fontWeight: 700 }}>
                    <Shield size={15} color="var(--primary-green)" />
                    {player.club}
                  </Link>
                  <span>•</span>
                  <span>Age: {player.age}</span>
                </div>
              </div>
            </div>

            {/* Scout Inquiry CTA */}
            <div style={{ paddingBottom: '0.5rem' }}>
              <Button variant="primary" size="md" href="/support" icon={<Zap size={16} />}>
                Request Scouting Dossier
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Big Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Matches</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--navy)', margin: '0.2rem 0' }}>{player.stats.matches}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>District & League</div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Goals</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--primary-green)', margin: '0.2rem 0' }}>{player.stats.goals}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Tournament goals</div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Assists</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--navy)', margin: '0.2rem 0' }}>{player.stats.assists}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Key goal assists</div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Appearances</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--navy)', margin: '0.2rem 0' }}>{player.stats.appearances}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Starting XI</div>
          </div>
        </div>

        {/* 2-Column Details Layout */}
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
            {/* Biography */}
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
                Player Biography & Background
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {player.biography}
              </p>
            </div>

            {/* Achievements */}
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
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Trophy size={20} color="#D97706" />
                <span>Honors & Achievements</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {player.achievements.map((ach, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-green)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tournament History */}
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
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={20} color="var(--primary-green)" />
                <span>Tournament History</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {player.tournamentHistory.map((th, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.95rem' }}>{th.tournament}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Role: {th.role} • Year: {th.year}</div>
                    </div>
                    {th.award && (
                      <Badge variant="lime" size="sm">{th.award}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {player.gallery && player.gallery.length > 0 && (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-light)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                  Match Action Gallery
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
                  {player.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'relative',
                        height: '160px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        backgroundColor: '#E2E8F0',
                      }}
                    >
                      <Image src={imgUrl} alt={`${player.name} match ${idx + 1}`} fill sizes="200px" style={{ objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Attributes & Technical Ratings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Technical Radar / Attribute Scores */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.25rem' }}>
                Technical Ratings
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Pace & Acceleration</span>
                    <span style={{ color: 'var(--primary-green)' }}>{player.stats.pace || 85}/100</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${player.stats.pace || 85}%`, backgroundColor: 'var(--primary-green)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Finishing & Shot Power</span>
                    <span style={{ color: 'var(--primary-green)' }}>{player.stats.finishing || 80}/100</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${player.stats.finishing || 80}%`, backgroundColor: 'var(--bright-green)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Passing & Vision</span>
                    <span style={{ color: 'var(--primary-green)' }}>{player.stats.passing || 75}/100</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${player.stats.passing || 75}%`, backgroundColor: 'var(--primary-green)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Dribbling & 1v1 Agility</span>
                    <span style={{ color: 'var(--primary-green)' }}>{player.stats.dribbling || 82}/100</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${player.stats.dribbling || 82}%`, backgroundColor: 'var(--bright-green)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Physical Stamina</span>
                    <span style={{ color: 'var(--primary-green)' }}>{player.stats.physical || 78}/100</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${player.stats.physical || 78}%`, backgroundColor: 'var(--primary-green)' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Attributes Box */}
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
                Biometric & Physical Data
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', fontSize: '0.85rem' }}>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Height</div>
                  <div style={{ fontWeight: 800, color: 'var(--navy)' }}>{player.height}</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Weight</div>
                  <div style={{ fontWeight: 800, color: 'var(--navy)' }}>{player.weight}</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Preferred Foot</div>
                  <div style={{ fontWeight: 800, color: 'var(--navy)' }}>{player.preferredFoot}</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Verification</div>
                  <div style={{ fontWeight: 800, color: 'var(--primary-green)' }}>AIFF ID Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
