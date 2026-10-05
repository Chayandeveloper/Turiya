'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { OpportunityCard } from '@/components/cards/OpportunityCard';
import { ApplyOpportunityModal } from '@/components/modals/ApplyOpportunityModal';
import { OPPORTUNITIES_DATA } from '@/lib/constants/mock-data';
import { Opportunity } from '@/types';
import { Badge } from '@/components/ui/Badge';

export default function OpportunitiesListPage() {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [applyOpportunity, setApplyOpportunity] = useState<Opportunity | null>(null);

  const roles = [
    { id: 'All', label: 'All Roles' },
    { id: 'Player', label: 'Player Trials' },
    { id: 'Coach', label: 'Coaching' },
    { id: 'Referee', label: 'Referees' },
    { id: 'Physiotherapist', label: 'Physiotherapy' },
    { id: 'Organiser', label: 'Organisers' },
  ];

  const filtered = OPPORTUNITIES_DATA.filter((o) => {
    const matchesSearch =
      o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.location.toLowerCase().includes(search.toLowerCase()) ||
      o.organization.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole === 'All' || o.category === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Opportunities' }]} />

        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <Badge variant="green">CAREERS & SCOUTING PATHWAYS</Badge>
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
            YOUR NEXT OPPORTUNITY{' '}
            <span style={{ color: 'var(--primary-green)' }}>STARTS HERE.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Discover scouting trials, licensed coaching vacancies, paid referee officiating duties, and sports physiotherapy fellowships across grassroots football.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={roles}
          selectedCategory={selectedRole}
          onCategoryChange={setSelectedRole}
          placeholder="Search by trial title, role, district..."
          totalResults={filtered.length}
          onReset={() => {
            setSearch('');
            setSelectedRole('All');
          }}
        />

        {/* Cards Grid */}
        <div className="grid-3">
          {filtered.map((op) => (
            <OpportunityCard
              key={op.id}
              opportunity={op}
              onApplyClick={(item) => setApplyOpportunity(item)}
            />
          ))}
        </div>

        {/* Application Modal */}
        <ApplyOpportunityModal
          isOpen={!!applyOpportunity}
          onClose={() => setApplyOpportunity(null)}
          opportunity={applyOpportunity}
        />
      </div>
    </div>
  );
}
