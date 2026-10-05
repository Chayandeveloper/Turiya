'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { TournamentCard } from '@/components/cards/TournamentCard';
import { RegisterTeamModal } from '@/components/modals/RegisterTeamModal';
import { TOURNAMENTS_DATA } from '@/lib/constants/mock-data';
import { Tournament } from '@/types';
import { Badge } from '@/components/ui/Badge';

export default function TournamentsListPage() {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [registerTournament, setRegisterTournament] = useState<Tournament | null>(null);

  const statuses = [
    { id: 'All', label: 'All Tournaments' },
    { id: 'Registration Open', label: 'Registration Open' },
    { id: 'Upcoming', label: 'Upcoming' },
    { id: 'Completed', label: 'Completed' },
  ];

  const filtered = TOURNAMENTS_DATA.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || t.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Tournaments' }]} />

        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <Badge variant="green">GRASSROOTS CUPS & TROPHIES</Badge>
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
            COMPETE. PERFORM.{' '}
            <span style={{ color: 'var(--primary-green)' }}>GET DISCOVERED.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Browse sanctioned rural cups, register your village squad, and compete for verified prize pools with licensed officials and professional scouting coverage.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={statuses}
          selectedCategory={selectedStatus}
          onCategoryChange={setSelectedStatus}
          placeholder="Search by tournament name or district..."
          totalResults={filtered.length}
          onReset={() => {
            setSearch('');
            setSelectedStatus('All');
          }}
        />

        {/* Tournaments Grid */}
        <div className="grid-3">
          {filtered.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onRegisterClick={(t) => setRegisterTournament(t)}
            />
          ))}
        </div>

        {/* Register Team Modal */}
        <RegisterTeamModal
          isOpen={!!registerTournament}
          onClose={() => setRegisterTournament(null)}
          tournament={registerTournament}
        />
      </div>
    </div>
  );
}
