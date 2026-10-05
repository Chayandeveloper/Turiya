'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { ClubCard } from '@/components/cards/ClubCard';
import { CLUBS_DATA } from '@/lib/constants/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function ClubsListPage() {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  const states = [
    { id: 'All', label: 'All Regions' },
    { id: 'Assam', label: 'Assam' },
    { id: 'Mizoram', label: 'Mizoram' },
    { id: 'Arunachal Pradesh', label: 'Arunachal' },
  ];

  const filtered = CLUBS_DATA.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.coach.toLowerCase().includes(search.toLowerCase());
    const matchesState = selectedState === 'All' || c.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Clubs' }]} />

        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <Badge variant="green">COMMUNITY TEAMS & SQUADS</Badge>
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
            BUILD YOUR CLUB.{' '}
            <span style={{ color: 'var(--primary-green)' }}>LEAD YOUR REGION.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Explore verified grassroots football clubs. From community-backed panchayat teams to competitive district champions across the Northeast.
          </p>
        </div>

        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={states}
          selectedCategory={selectedState}
          onCategoryChange={setSelectedState}
          placeholder="Search by club name, district, or coach..."
          totalResults={filtered.length}
          onReset={() => {
            setSearch('');
            setSelectedState('All');
          }}
        />

        <div className="grid-3">
          {filtered.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </div>
    </div>
  );
}
