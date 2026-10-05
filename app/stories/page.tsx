'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FilterBar } from '@/components/ui/FilterBar';
import { StoryCard } from '@/components/cards/StoryCard';
import { STORIES_DATA } from '@/lib/constants/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function StoriesListPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Stories' },
    { id: 'Player Story', label: 'Player Stories' },
    { id: 'Coach Story', label: 'Coach Stories' },
    { id: 'Club Story', label: 'Club Stories' },
    { id: 'Tournament Story', label: 'Tournaments' },
    { id: 'Community Story', label: 'Community' },
  ];

  const filtered = STORIES_DATA.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Village Stories' }]} />

        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <Badge variant="green">VOICES & EDITORIAL DISPATCHES</Badge>
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
            FROM OUR <span style={{ color: 'var(--primary-green)' }}>VILLAGES.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Human journeys, rural breakthroughs, and inspiring transformations happening every weekend across grassroots football fields.
          </p>
        </div>

        <FilterBar
          searchQuery={search}
          onSearchChange={setSearch}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          placeholder="Search stories by title, place..."
          totalResults={filtered.length}
          onReset={() => {
            setSearch('');
            setSelectedCategory('All');
          }}
        />

        <div className="grid-2">
          {filtered.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
