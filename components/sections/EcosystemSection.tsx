'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Award, CalendarCheck, TrendingUp, Hammer, HeartHandshake, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ECOSYSTEM_STAGES } from '@/lib/constants/mock-data';

// Authentic Black & White Geometric Football Icon
const FootballIcon: React.FC<{ size?: number }> = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.28))' }}
  >
    <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke="#0B0F0D" strokeWidth="1.5" />
    <polygon points="12,8.2 14.7,10.2 13.7,13.3 10.3,13.3 9.3,10.2" fill="#0B0F0D" />
    <line x1="12" y1="8.2" x2="12" y2="3.5" stroke="#0B0F0D" strokeWidth="1.2" />
    <line x1="14.7" y1="10.2" x2="18.8" y2="8.8" stroke="#0B0F0D" strokeWidth="1.2" />
    <line x1="13.7" y1="13.3" x2="16.8" y2="17.5" stroke="#0B0F0D" strokeWidth="1.2" />
    <line x1="10.3" y1="13.3" x2="7.2" y2="17.5" stroke="#0B0F0D" strokeWidth="1.2" />
    <line x1="9.3" y1="10.2" x2="5.2" y2="8.8" stroke="#0B0F0D" strokeWidth="1.2" />
    <polygon points="12,2 14,3.5 10,3.5" fill="#0B0F0D" />
    <polygon points="21,10.5 19.8,13 21.8,12.5" fill="#0B0F0D" />
    <polygon points="3,10.5 4.2,13 2.2,12.5" fill="#0B0F0D" />
    <polygon points="15.8,21.5 14,19.8 17.2,19.8" fill="#0B0F0D" />
    <polygon points="8.2,21.5 10,19.8 6.8,19.8" fill="#0B0F0D" />
  </svg>
);

export const EcosystemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance continuously across stages every 2.0 seconds without stopping
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ECOSYSTEM_STAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStageIcon = (name: string, size = 24) => {
    switch (name) {
      case 'PlayCircle':
        return <PlayCircle size={size} />;
      case 'Award':
        return <Award size={size} />;
      case 'CalendarCheck':
        return <CalendarCheck size={size} />;
      case 'TrendingUp':
        return <TrendingUp size={size} />;
      case 'Hammer':
        return <Hammer size={size} />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake size={size} />;
    }
  };

  return (
    <section
      className="section-py"
      style={{ backgroundColor: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="HOLISTIC GRASSROOTS MODEL"
          title="ONE ECOSYSTEM. EVERY ROLE."
          subtitle="Connect the people who make grassroots football possible—from the village clearing to the state championship."
          align="center"
        />

        {/* OVERHEAD TRAVELING FOOTBALL RUNWAY (ABOVE CARDS) */}
        <div
          className="desktop-football-runway"
          style={{
            position: 'relative',
            height: '46px',
            marginTop: '2.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {/* Dashed pitch guide track line connecting all 6 columns */}
          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              left: `${(0.5 / 6) * 100}%`,
              right: `${(0.5 / 6) * 100}%`,
              height: '2px',
              background: 'repeating-linear-gradient(90deg, rgba(11, 107, 58, 0.3) 0, rgba(11, 107, 58, 0.3) 8px, transparent 8px, transparent 16px)',
              zIndex: 1,
            }}
          />

          {/* Active green rolling trail */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '13px',
              left: `${(0.5 / 6) * 100}%`,
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #19C463, #0B6B3A)',
              boxShadow: '0 0 10px rgba(25, 196, 99, 0.5)',
              zIndex: 2,
            }}
            animate={{
              width: `${(activeStep / (ECOSYSTEM_STAGES.length - 1)) * ((5 / 6) * 100)}%`,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Target ground markers above each card */}
          {ECOSYSTEM_STAGES.map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                bottom: '11px',
                left: `${((i + 0.5) / 6) * 100}%`,
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: i <= activeStep ? 'var(--primary-green)' : 'var(--border-light)',
                boxShadow: i === activeStep ? '0 0 10px var(--bright-green)' : 'none',
                zIndex: 3,
                transition: 'all 0.25s ease',
              }}
            />
          ))}

          {/* TRAVELING FOOTBALL ICON */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '4px',
              zIndex: 10,
              pointerEvents: 'none',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            animate={{
              left: `${((activeStep + 0.5) / 6) * 100}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 22,
            }}
          >
            {/* Spinning & Double-Bouncing Football (Bounces 2 Times on Card Arrival) */}
            <motion.div
              key={activeStep}
              initial={{
                y: 0,
                rotate: -60,
                scale: 1,
              }}
              animate={{
                y: [0, -18, 0, -8, 0],
                rotate: [activeStep * 180 - 60, activeStep * 180],
                scale: [1, 1.06, 1, 1.03, 1],
              }}
              transition={{
                duration: 0.85,
                times: [0, 0.28, 0.55, 0.78, 1],
                ease: ['easeOut', 'easeIn', 'easeOut', 'easeIn'],
              }}
            >
              <FootballIcon size={28} />
            </motion.div>

            {/* Dynamic Synchronized Ground Shadow for 2 Bounces */}
            <motion.div
              style={{
                width: '18px',
                height: '3px',
                borderRadius: '50%',
                backgroundColor: 'rgba(11, 15, 13, 0.35)',
                filter: 'blur(1px)',
                marginTop: '1px',
              }}
              key={`shadow-${activeStep}`}
              initial={{ scale: 0.4, opacity: 0.25 }}
              animate={{
                scale: [1, 0.4, 1.15, 0.65, 1],
                opacity: [0.85, 0.25, 0.9, 0.45, 0.8],
              }}
              transition={{
                duration: 0.85,
                times: [0, 0.28, 0.55, 0.78, 1],
                ease: ['easeOut', 'easeIn', 'easeOut', 'easeIn'],
              }}
            />
          </motion.div>
        </div>

        {/* 6 Stage Cards Grid */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '1rem',
              position: 'relative',
              zIndex: 2,
            }}
            className="ecosystem-grid"
          >
            {ECOSYSTEM_STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    backgroundColor: isActive ? 'var(--primary-green-light)' : '#FFFFFF',
                    border: isActive ? '2px solid var(--primary-green)' : '1.5px solid var(--border-light)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '1.25rem 1rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 12px 28px rgba(11, 107, 58, 0.18)' : 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  className="ecosystem-card"
                >
                  {/* Active Top Accent Bar */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: 'var(--primary-green)',
                        borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                      }}
                    />
                  )}

                  {/* Step Indicator Node */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--primary-green)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : 'var(--navy)',
                      border: isActive ? '3px solid var(--lime)' : '2px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      boxShadow: isActive ? '0 4px 14px rgba(11, 107, 58, 0.3)' : '0 2px 8px rgba(0,0,0,0.06)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {getStageIcon(stage.iconName, 20)}
                  </div>

                  {/* Stage Number & Title */}
                  <div style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--primary-green)', letterSpacing: '0.06em' }}>
                    STAGE {stage.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      letterSpacing: '0.01em',
                      margin: '0.2rem 0 0.5rem',
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* Tagline */}
                  <div
                    style={{
                      fontSize: '0.775rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--primary-green)' : 'var(--text-muted)',
                      lineHeight: 1.35,
                      marginBottom: '0.65rem',
                    }}
                  >
                    {stage.tagline}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                      marginTop: 'auto',
                    }}
                  >
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Focus Callout for active step */}
        <div
          style={{
            marginTop: '2.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '1.5rem 2rem',
            border: '1.5px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--primary-green)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(11, 107, 58, 0.25)',
              }}
            >
              {getStageIcon(ECOSYSTEM_STAGES[activeStep].iconName, 24)}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bright-green)',
                    boxShadow: '0 0 8px var(--bright-green)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    color: 'var(--primary-green)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Stage {ECOSYSTEM_STAGES[activeStep].step} of {ECOSYSTEM_STAGES.length} • Auto-Advancing
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                }}
              >
                {ECOSYSTEM_STAGES[activeStep].title}: {ECOSYSTEM_STAGES[activeStep].tagline}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : ECOSYSTEM_STAGES.length - 1))}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                fontWeight: 700,
                fontSize: '0.825rem',
                cursor: 'pointer',
              }}
            >
              ← Previous Stage
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < ECOSYSTEM_STAGES.length - 1 ? prev + 1 : 0))}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--primary-green)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.825rem',
                cursor: 'pointer',
              }}
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-football-runway,
          .desktop-line {
            display: none !important;
          }
          .ecosystem-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .ecosystem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
