'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { AcademyCard } from '@/components/cards/AcademyCard';
import { ACADEMIES_DATA } from '@/lib/constants/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function AcademiesListPage() {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  const states = [
    { id: 'All', label: 'All States' },
    { id: 'Assam', label: 'Assam' },
    { id: 'Meghalaya', label: 'Meghalaya' },
  ];

  const filtered = ACADEMIES_DATA.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.location.toLowerCase().includes(search.toLowerCase());
    const matchesState = selectedState === 'All' || a.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Grassroots Academies' }]} />

        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <Badge variant="green">YOUTH DEVELOPMENT HUBS</Badge>
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
            DEVELOP THE{' '}
            <span style={{ color: 'var(--primary-green)' }}>NEXT GENERATION.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Accredited grassroots football academies across tea-garden districts, mountain towns, and rural clusters nurturing children with joyful football discipline.
          </p>
        </div>

        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={states}
          selectedCategory={selectedState}
          onCategoryChange={setSelectedState}
          placeholder="Search by academy name, district..."
          totalResults={filtered.length}
          onReset={() => {
            setSearch('');
            setSelectedState('All');
          }}
        />

        <div className="grid-2">
          {filtered.map((academy) => (
            <AcademyCard key={academy.id} academy={academy} />
          ))}
        </div>
      </div>
    </div>
  );
}
