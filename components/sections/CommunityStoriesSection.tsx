'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { StoryCard } from '@/components/cards/StoryCard';
import { Story } from '@/types';
import { ArrowRight } from 'lucide-react';

export interface CommunityStoriesSectionProps {
  stories: Story[];
}

export const CommunityStoriesSection: React.FC<CommunityStoriesSectionProps> = ({ stories }) => {
  const featuredStory = stories[0];
  const secondaryStories = stories.slice(1, 3);

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="VOICES OF GRASSROOTS"
          title="FROM OUR VILLAGES."
          subtitle="Real, unfiltered human stories of hope, discipline, and community resilience through grassroots football."
          action={
            <Button variant="secondary" href="/stories" icon={<ArrowRight size={15} />}>
              Read All Stories
            </Button>
          }
        />

        {/* Featured Large Editorial Story Card */}
        {featuredStory && (
          <div style={{ marginBottom: '2rem' }}>
            <StoryCard story={featuredStory} featured />
          </div>
        )}

        {/* Supporting Secondary Story Cards */}
        {secondaryStories.length > 0 && (
          <div className="grid-2">
            {secondaryStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
