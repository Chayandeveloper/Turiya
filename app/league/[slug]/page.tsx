'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { LEAGUES_DATA } from '@/lib/constants/mock-data';
import { MapPin, Trophy, Shield, ArrowLeft } from 'lucide-react';

export default function LeagueDetailPage({ params }: { params: { slug: string } }) {
  const league = LEAGUES_DATA.find((l) => l.slug === params.slug) || LEAGUES_DATA[0];

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Leagues', href: '/league' },
            { label: league.name },
          ]}
        />

        {/* Cover Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '340px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            border: '4px solid #FFFFFF',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <Image
            src={league.coverImage || league.image}
            alt={league.name}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.55)' }} />

          <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
            <Badge variant="open">{league.status}</Badge>
          </div>

          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#FFFFFF' }}>
            <Badge variant="lime" size="sm">{league.currentSeason}</Badge>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#FFFFFF', margin: '0.4rem 0' }}>
              {league.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="var(--bright-green)" />
                {league.location}, {league.state}
              </span>
              <span>•</span>
              <span>{league.teamsCount} Participating Clubs</span>
            </div>
          </div>
        </div>

        {/* Layout: Main Standings & Sidebar Info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Main: Standings Table */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                  Championship Standings
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0' }}>
                  Updated after official referee match card sign-off
                </p>
              </div>
              <Badge variant="green">Official Points</Badge>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.75rem 0.5rem', fontWeight: 800 }}>#</th>
                    <th style={{ padding: '0.75rem 0.75rem', fontWeight: 800 }}>Club</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>P</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>W</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>D</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>L</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>GF</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>GA</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', fontWeight: 800 }}>GD</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'right', fontWeight: 900 }}>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {league.standings.map((team, idx) => (
                    <tr
                      key={team.team}
                      style={{
                        borderBottom: '1px solid var(--border-light)',
                        backgroundColor: idx === 0 ? 'var(--primary-green-light)' : 'transparent',
                      }}
                    >
                      <td style={{ padding: '0.85rem 0.5rem', fontWeight: 800, color: idx === 0 ? 'var(--primary-green)' : 'var(--navy)' }}>
                        {team.rank}
                      </td>
                      <td style={{ padding: '0.85rem 0.75rem', fontWeight: 700, color: 'var(--navy)' }}>
                        {team.team}
                      </td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center' }}>{team.played}</td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center' }}>{team.won}</td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center' }}>{team.drawn}</td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center' }}>{team.lost}</td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center' }}>{team.goalsFor}</td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center' }}>{team.goalsAgainst}</td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center', fontWeight: 600 }}>
                        {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                      </td>
                      <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right', fontWeight: 900, color: 'var(--primary-green)', fontSize: '1.05rem' }}>
                        {team.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar: Participating Clubs & League Rules */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                Participating Clubs
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {league.participatingTeams.map((club) => (
                  <Link
                    key={club.slug}
                    href={`/clubs/${club.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                      transition: 'border-color 0.15s ease',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.925rem' }}>{club.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{club.location}</div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-green)' }}>View Roster →</span>
                  </Link>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--primary-green-light)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(11, 107, 58, 0.2)',
                padding: '1.75rem',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                Need to register your club for next season?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Applications for next season’s qualifiers open 60 days before kickoff.
              </p>
              <Button variant="primary" size="sm" href="/support">
                Contact League Coordinator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
