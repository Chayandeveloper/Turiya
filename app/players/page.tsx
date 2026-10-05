'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { PlayerCard } from '@/components/cards/PlayerCard';
import { PLAYERS_DATA } from '@/lib/constants/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function PlayersListPage() {
  const [search, setSearch] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('All');

  const positions = [
    { id: 'All', label: 'All Positions' },
    { id: 'Forward', label: 'Forwards' },
    { id: 'Midfielder', label: 'Midfielders' },
    { id: 'Defender', label: 'Defenders' },
    { id: 'Winger', label: 'Wingers' },
  ];

  const filtered = PLAYERS_DATA.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.club.toLowerCase().includes(search.toLowerCase());
    const matchesPosition = selectedPosition === 'All' || p.position === selectedPosition;
    return matchesSearch && matchesPosition;
  });

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Player Discovery' }]} />

        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <Badge variant="green">VERIFIED PLAYER PASSPORTS</Badge>
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
            TALENT IS EVERYWHERE.{' '}
            <span style={{ color: 'var(--primary-green)' }}>LET'S FIND IT.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Browse verified grassroots players with certified biometric tracking, match appearances, sprint speed, and offensive output recorded across regional tournaments.
          </p>
        </div>

        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={positions}
          selectedCategory={selectedPosition}
          onCategoryChange={setSelectedPosition}
          placeholder="Search by player name, club, district..."
          totalResults={filtered.length}
          onReset={() => {
            setSearch('');
            setSelectedPosition('All');
          }}
        />

        <div className="grid-4">
          {filtered.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}
