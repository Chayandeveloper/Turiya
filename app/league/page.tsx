'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { LEAGUES_DATA } from '@/lib/constants/mock-data';
import { MapPin, Trophy, Calendar, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function LeaguePage() {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  const states = [
    { id: 'All', label: 'All Regions' },
    { id: 'Assam', label: 'Assam' },
    { id: 'Mizoram', label: 'Mizoram' },
  ];

  const filteredLeagues = LEAGUES_DATA.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(search.toLowerCase()) || l.location.toLowerCase().includes(search.toLowerCase());
    const matchesState = selectedState === 'All' || l.state === selectedState;
    return matchesSearch && matchesState;
  });

  const featuredLeague = LEAGUES_DATA[0];

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Grassroots Leagues' }]} />

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <Badge variant="green">TIERED RURAL CHAMPIONSHIPS</Badge>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--navy)',
              lineHeight: 1.1,
              marginTop: '1rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            LOCAL LEAGUES.{' '}
            <span style={{ color: 'var(--primary-green)' }}>REAL COMPETITION.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Structured, multi-month weekend leagues connecting village clubs, tea-estate teams, and community sports societies with live digital tables and official match points.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={states}
          selectedCategory={selectedState}
          onCategoryChange={setSelectedState}
          placeholder="Search by league name, district..."
          totalResults={filteredLeagues.length}
          onReset={() => {
            setSearch('');
            setSelectedState('All');
          }}
        />

        {/* League Cards Grid */}
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {filteredLeagues.map((league) => (
            <div
              key={league.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="turiya-card-hoverable"
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#E2E8F0' }}>
                <Image
                  src={league.image}
                  alt={league.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.45)' }} />

                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <Badge variant="open">{league.status}</Badge>
                </div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <Badge variant="lime">{league.currentSeason}</Badge>
                </div>

                <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem', color: '#FFFFFF' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    {league.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: '0.2rem' }}>
                    <MapPin size={14} color="var(--bright-green)" />
                    <span>{league.location}</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    textAlign: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Clubs</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>{league.teamsCount} Teams</div>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Played</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-green)' }}>{league.matchesPlayed} Matches</div>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.65rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Total</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>{league.totalMatches} Fixtures</div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {league.description}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <Button
                    variant="primary"
                    size="md"
                    href={`/league/${league.slug}`}
                    icon={<ArrowRight size={15} />}
                    style={{ width: '100%' }}
                  >
                    View Standings & Matches →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section: Live Standings & Matches */}
        {featuredLeague && (
          <div style={{ marginTop: '2rem' }}>
            <SectionHeading
              eyebrow="FLAGSHIP CHAMPIONSHIP"
              title={`${featuredLeague.name} • Season Overview`}
              subtitle="Full standings, upcoming weekend fixtures, and latest match results."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              {/* Standings Table */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-light)',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                    Official Table
                  </h3>
                  <Badge variant="green">Live Standings</Badge>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1.5px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                        <th style={{ padding: '0.6rem 0.35rem', fontWeight: 800 }}>#</th>
                        <th style={{ padding: '0.6rem 0.5rem', fontWeight: 800 }}>Club</th>
                        <th style={{ padding: '0.6rem 0.35rem', textAlign: 'center', fontWeight: 800 }}>P</th>
                        <th style={{ padding: '0.6rem 0.35rem', textAlign: 'center', fontWeight: 800 }}>W</th>
                        <th style={{ padding: '0.6rem 0.35rem', textAlign: 'center', fontWeight: 800 }}>D</th>
                        <th style={{ padding: '0.6rem 0.35rem', textAlign: 'center', fontWeight: 800 }}>L</th>
                        <th style={{ padding: '0.6rem 0.35rem', textAlign: 'center', fontWeight: 800 }}>GD</th>
                        <th style={{ padding: '0.6rem 0.35rem', textAlign: 'right', fontWeight: 900 }}>PTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featuredLeague.standings.map((team, idx) => (
                        <tr
                          key={team.team}
                          style={{
                            borderBottom: '1px solid var(--border-light)',
                            backgroundColor: idx === 0 ? 'var(--primary-green-light)' : 'transparent',
                          }}
                        >
                          <td style={{ padding: '0.65rem 0.35rem', fontWeight: 800, color: idx === 0 ? 'var(--primary-green)' : 'var(--navy)' }}>
                            {team.rank}
                          </td>
                          <td style={{ padding: '0.65rem 0.5rem', fontWeight: 700, color: 'var(--navy)' }}>
                            {team.team}
                          </td>
                          <td style={{ padding: '0.65rem 0.35rem', textAlign: 'center', color: 'var(--text-muted)' }}>{team.played}</td>
                          <td style={{ padding: '0.65rem 0.35rem', textAlign: 'center', color: 'var(--text-muted)' }}>{team.won}</td>
                          <td style={{ padding: '0.65rem 0.35rem', textAlign: 'center', color: 'var(--text-muted)' }}>{team.drawn}</td>
                          <td style={{ padding: '0.65rem 0.35rem', textAlign: 'center', color: 'var(--text-muted)' }}>{team.lost}</td>
                          <td style={{ padding: '0.65rem 0.35rem', textAlign: 'center', fontWeight: 600 }}>{team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}</td>
                          <td style={{ padding: '0.65rem 0.35rem', textAlign: 'right', fontWeight: 900, color: 'var(--primary-green)' }}>
                            {team.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Upcoming Matches & Recent Results */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Upcoming Fixtures */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border-light)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                    Upcoming League Matches
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {featuredLeague.upcomingMatches.map((match) => (
                      <div
                        key={match.id}
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--primary-green)', fontWeight: 800, marginBottom: '0.35rem' }}>
                          <span>{match.round}</span>
                          <span>{match.date} • {match.time}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.925rem', fontWeight: 800, color: 'var(--navy)' }}>
                          <span>{match.homeTeam}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', backgroundColor: '#FFFFFF', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>VS</span>
                          <span>{match.awayTeam}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                          Ground: {match.venue}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Results */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border-light)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                    Recent Results
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {featuredLeague.recentResults.map((match) => (
                      <div
                        key={match.id}
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem' }}>
                          <span>{match.round} • {match.date}</span>
                          <Badge variant="completed" size="sm">FT</Badge>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.925rem', fontWeight: 800, color: 'var(--navy)' }}>
                          <span>{match.homeTeam}</span>
                          <span style={{ backgroundColor: 'var(--primary-green-light)', padding: '0.15rem 0.65rem', borderRadius: '4px', color: 'var(--primary-green)' }}>
                            {match.homeScore} - {match.awayScore}
                          </span>
                          <span>{match.awayTeam}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
