'use client';

import React from 'react';
import { Shield, Users, Trophy, Sparkles, Award } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export const ImpactStatsSection: React.FC = () => {
  const stats = [
    { value: '20+', label: 'Clubs', icon: <Shield size={20} color="var(--primary-green)" />, note: 'Affiliated village clubs' },
    { value: '500+', label: 'Players', icon: <Users size={20} color="var(--primary-green)" />, note: 'Registered grassroots talent' },
    { value: '16+', label: 'Team Tournaments', icon: <Trophy size={20} color="#D97706" />, note: 'Competitive regional cups' },
    { value: '50+', label: 'Opportunities', icon: <Sparkles size={20} color="var(--bright-green)" />, note: 'Scouting trials & clinics' },
    { value: '20+', label: 'Coaches', icon: <Award size={20} color="var(--primary-green)" />, note: 'Licensed local mentors' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem',
          }}
          className="impact-stats-grid"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
                paddingRight: '1rem',
                borderRight: idx < stats.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}
              className="stat-col"
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--primary-green-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
                    fontWeight: 900,
                    color: 'var(--navy)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <AnimatedCounter value={item.value} />
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    color: 'var(--primary-green)',
                    textTransform: 'uppercase',
                    marginTop: '0.2rem',
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  {item.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .impact-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .impact-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .stat-col {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
};
