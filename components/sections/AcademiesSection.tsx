'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AcademyCard } from '@/components/cards/AcademyCard';
import { Academy } from '@/types';
import { ArrowRight } from 'lucide-react';

export interface AcademiesSectionProps {
  academies: Academy[];
}

export const AcademiesSection: React.FC<AcademiesSectionProps> = ({ academies }) => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#F7FAF8',
        backgroundImage:
          'radial-gradient(ellipse at 50% 0%, rgba(25, 196, 99, 0.08) 0%, transparent 65%), linear-gradient(180deg, #F3F8F5 0%, #FFFFFF 50%, #EDF6F1 100%)',
        overflow: 'hidden',
        borderTop: 'none',
        borderBottom: '1px solid #E8EFEA',
        paddingTop: '1.25rem',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="GRASSROOTS ACADEMIES"
          title="DEVELOP THE NEXT GENERATION."
          subtitle="Structured football training centers where village children receive certified technical training, fitness guidance, and life skills."
          action={
            <Button variant="secondary" href="/academies" icon={<ArrowRight size={15} />}>
              View All Academies
            </Button>
          }
        />

        <div className="grid-2">
          {academies.slice(0, 2).map((academy, idx) => (
            <motion.div
              key={academy.id}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <AcademyCard academy={academy} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
