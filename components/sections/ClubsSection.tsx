'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ClubCard } from '@/components/cards/ClubCard';
import { Club } from '@/types';
import { ArrowRight } from 'lucide-react';

export interface ClubsSectionProps {
  clubs: Club[];
}

export const ClubsSection: React.FC<ClubsSectionProps> = ({ clubs }) => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#F7FAF8',
        backgroundImage:
          'radial-gradient(ellipse at 50% 0%, rgba(25, 196, 99, 0.08) 0%, transparent 65%), linear-gradient(180deg, #F3F8F5 0%, #FFFFFF 50%, #EDF6F1 100%)',
        overflow: 'hidden',
        borderTop: '1px solid #E8EFEA',
        borderBottom: 'none',
        paddingTop: '3.25rem',
        paddingBottom: '1.25rem',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="COMMUNITY INSTITUTIONS"
          title="BUILD YOUR CLUB."
          subtitle="Grassroots clubs are the pillars of local pride. Turiya provides management tools, player rosters, and fixture administration."
          action={
            <Button variant="secondary" href="/clubs" icon={<ArrowRight size={15} />}>
              Explore Clubs
            </Button>
          }
        />

        <div className="grid-3">
          {clubs.slice(0, 3).map((club, idx) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <ClubCard club={club} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
