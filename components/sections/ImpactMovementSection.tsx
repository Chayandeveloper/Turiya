'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCard } from '@/components/cards/StatCard';
import { IMPACT_STATS } from '@/lib/constants/mock-data';
import { Shield, Users, Trophy, Sparkles, Award, MapPin } from 'lucide-react';

export const ImpactMovementSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Shield size={20} />;
      case 1: return <Users size={20} />;
      case 2: return <Trophy size={20} />;
      case 3: return <Sparkles size={20} />;
      case 4: return <Award size={20} />;
      case 5: default: return <MapPin size={20} />;
    }
  };

  return (
    <section
      className="section-py"
      style={{
        backgroundColor: 'var(--primary-green-light)',
        borderTop: '1px solid rgba(11, 107, 58, 0.15)',
        borderBottom: '1px solid rgba(11, 107, 58, 0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="TANGIBLE PROGRESS"
          title="THE NUMBERS BEHIND THE MOVEMENT."
          subtitle="Measurable grassroots transformation across rural Assam, Meghalaya, and the Northeast football heartlands."
          align="center"
        />

        <motion.div
          className="grid-3"
          style={{ marginTop: '2.5rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                  },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
                icon={getIcon(idx)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
