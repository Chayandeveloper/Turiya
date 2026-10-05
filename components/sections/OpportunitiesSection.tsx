'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Tabs } from '@/components/ui/Tabs';
import { OpportunityCard } from '@/components/cards/OpportunityCard';
import { Opportunity } from '@/types';
import { ArrowRight } from 'lucide-react';

export interface OpportunitiesSectionProps {
  opportunities: Opportunity[];
  onApplyClick?: (opportunity: Opportunity) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  opportunities,
  onApplyClick,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Opportunities', count: opportunities.length },
    { id: 'Player', label: 'Player Trials', count: opportunities.filter((o) => o.category === 'Player').length },
    { id: 'Coach', label: 'Coaching Jobs', count: opportunities.filter((o) => o.category === 'Coach').length },
    { id: 'Referee', label: 'Referee Clinics', count: opportunities.filter((o) => o.category === 'Referee').length },
    { id: 'Physiotherapist', label: 'Physiotherapy', count: opportunities.filter((o) => o.category === 'Physiotherapist').length },
    { id: 'Organiser', label: 'Organisers', count: opportunities.filter((o) => o.category === 'Organiser').length },
  ];

  const filteredOpportunities = opportunities.filter((o) => {
    if (activeCategory === 'All') return true;
    return o.category === activeCategory;
  });
  return (
    <section
      id="career-section"
      className="section-py"
      style={{
        position: 'relative',
        backgroundColor: '#F7FAF8',
        backgroundImage:
          'radial-gradient(ellipse at 50% 0%, rgba(25, 196, 99, 0.08) 0%, transparent 65%), linear-gradient(180deg, #F3F8F5 0%, #FFFFFF 50%, #EDF6F1 100%)',
        overflow: 'hidden',
        borderTop: '1px solid #E8EFEA',
        borderBottom: '1px solid #E8EFEA',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="CAREERS & SCOUTING"
          title="YOUR NEXT OPPORTUNITY STARTS HERE."
          subtitle="Direct pathways for village footballers, licensed coaches, match officials, and sports medical practitioners."
          action={
            <Button variant="secondary" href="/opportunities" icon={<ArrowRight size={15} />}>
              Explore All Opportunities
            </Button>
          }
        />

        {/* Category Tabs */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={(id) => setActiveCategory(id)}
          />
        </div>

        {/* Opportunities Grid */}
        <div className="grid-3">
          {filteredOpportunities.slice(0, 3).map((op) => (
            <OpportunityCard
              key={op.id}
              opportunity={op}
              onApplyClick={onApplyClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
