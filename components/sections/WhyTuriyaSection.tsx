'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Eye, Compass, ShieldAlert, ClipboardList, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WHY_TURIYA_PROBLEMS } from '@/lib/constants/mock-data';

export const WhyTuriyaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Section entry trigger: triggers when the section is substantially/fully in view
  const isSectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.45,
  });

  // Cards trigger: triggers when the section/cards area is fully in view
  const areCardsInView = useInView(cardsRef, {
    once: true,
    amount: 0.55,
  });

  // Scroll progress for gentle, continuous parallax depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Layered parallax transformations
  const imageParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : isMobile ? [-6, 6] : [-16, 16]
  );

  const quoteParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : isMobile ? [-3, 3] : [-8, 8]
  );

  const badgeParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : isMobile ? [-8, 8] : [-22, 22]
  );

  const bgDecorationParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : isMobile ? [-10, 10] : [-28, 28]
  );

  const rightContentParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : isMobile ? [-2, 2] : [-5, 5]
  );

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye size={20} color="var(--primary-green)" />;
      case 'Compass':
        return <Compass size={20} color="var(--primary-green)" />;
      case 'ShieldAlert':
        return <ShieldAlert size={20} color="var(--primary-green)" />;
      case 'ClipboardList':
      default:
        return <ClipboardList size={20} color="var(--primary-green)" />;
    }
  };

  // Silky smooth luxury easing curve
  const smoothEase = [0.16, 1, 0.3, 1];

  // Distinct delays for one-by-one card emergence from LEFT (slower, deliberate reveal: 800ms spacing between cards)
  const cardDelays = [0.45, 1.25, 2.05, 2.85];

  // Background ecosystem network nodes
  const ecosystemNodes = [
    { id: 'player', label: 'PLAYER', x: '18%', y: '28%', delay: 0.25 },
    { id: 'coach', label: 'COACH', x: '42%', y: '16%', delay: 0.7 },
    { id: 'club', label: 'CLUB', x: '68%', y: '32%', delay: 1.15 },
    { id: 'organiser', label: 'ORGANISER', x: '88%', y: '20%', delay: 1.6 },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-main)',
        position: 'relative',
        overflow: 'hidden',
        perspective: isMobile ? 'none' : '1200px',
      }}
    >
      {/* ---------------------------------------------------- */}
      {/* BACKGROUND ECOSYSTEM SVG DECORATION                 */}
      {/* ---------------------------------------------------- */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          y: bgDecorationParallax,
        }}
        aria-hidden="true"
      >
        <svg
          style={{ width: '100%', height: '100%', opacity: 0.8 }}
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Curved Connecting Football Network Line */}
          <motion.path
            d="M 120 280 C 260 210, 480 140, 620 220 C 760 300, 940 180, 1100 240 C 1220 280, 1320 220, 1380 260"
            stroke="rgba(11, 107, 58, 0.16)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isSectionInView
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.3 : 1.8,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: 'easeInOut',
            }}
          />

          {/* Progressive Solid Accent Path */}
          <motion.path
            d="M 120 280 C 260 210, 480 140, 620 220 C 760 300, 940 180, 1100 240"
            stroke="var(--bright-green)"
            strokeWidth="1.75"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isSectionInView
                ? { pathLength: 1, opacity: 0.45 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.3 : 2.0,
              delay: shouldReduceMotion ? 0 : 0.25,
              ease: smoothEase,
            }}
          />
        </svg>

        {/* Ecosystem Nodes (PLAYER, COACH, CLUB, ORGANISER) */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {ecosystemNodes.map((node) => (
            <motion.div
              key={node.id}
              style={{
                position: 'absolute',
                left: node.x,
                top: node.y,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(11, 107, 58, 0.22)',
                boxShadow: '0 2px 8px rgba(16, 42, 67, 0.05)',
              }}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: isMobile ? 4 : 8, scale: 0.9 }
              }
              animate={
                areCardsInView
                  ? { opacity: 0.95, y: 0, scale: 1 }
                  : { opacity: 0, y: isMobile ? 4 : 8, scale: 0.9 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.75,
                delay: shouldReduceMotion ? 0 : node.delay,
                ease: smoothEase,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green)',
                }}
              />
              <span
                style={{
                  fontSize: '0.675rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: 'var(--navy)',
                }}
              >
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* ---------------------------------------------------- */}
          {/* LEFT: SMOOTH IMAGE REVEAL & FLOATING BADGE          */}
          {/* ---------------------------------------------------- */}
          <div style={{ position: 'relative', perspective: isMobile ? 'none' : '1000px' }}>
            {/* BADGE: "Systemic Grassroots Reform" */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                backgroundColor: 'var(--lime)',
                color: 'var(--navy)',
                padding: '0.45rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                fontWeight: 800,
                fontSize: '0.8rem',
                boxShadow: '0 4px 14px rgba(216, 255, 62, 0.55)',
                zIndex: 20,
                y: badgeParallax,
              }}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.75, y: isMobile ? 12 : 24 }
              }
              animate={
                isSectionInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.75,
                      y: isMobile ? 12 : 24,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: smoothEase,
              }}
            >
              <motion.span
                animate={
                  !shouldReduceMotion && isSectionInView
                    ? { y: [0, -3, 0] }
                    : { y: 0 }
                }
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                style={{ display: 'inline-block' }}
              >
                Systemic Grassroots Reform
              </motion.span>
            </motion.div>

            {/* MAIN AUTHENTIC IMAGE FRAME */}
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                height: '560px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #FFFFFF',
                backgroundColor: '#E2E8F0',
                transformStyle: isMobile ? 'flat' : 'preserve-3d',
                y: imageParallax,
              }}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      scale: 0.92,
                      y: isMobile ? 25 : 45,
                      rotateY: isMobile ? 0 : -4,
                    }
              }
              animate={
                isSectionInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotateY: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.92,
                      y: isMobile ? 25 : 45,
                      rotateY: isMobile ? 0 : -4,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 1.0,
                delay: shouldReduceMotion ? 0 : 0.05,
                ease: smoothEase,
              }}
            >
              <Image
                src="/assets/0A6A0422.JPG"
                alt="Village grassroots football match in rural Assam with Baradi FC players"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Cinematic Vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(16, 42, 67, 0.88) 0%, rgba(16, 42, 67, 0.12) 65%)',
                }}
              />

              {/* QUOTE CARD: Emerging gracefully from bottom of image */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  zIndex: 10,
                  y: quoteParallax,
                }}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: isMobile ? 18 : 35 }
                }
                animate={
                  isSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: isMobile ? 18 : 35 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 0.85,
                  delay: shouldReduceMotion ? 0 : 0.4,
                  ease: smoothEase,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '1.15rem',
                      color: 'var(--navy)',
                      fontWeight: 600,
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    "Every village in the Northeast has young players who can run circles around seasoned pros. What was missing was an organized bridge to the bigger stage."
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-label)',
                      marginTop: '0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary-green)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    — Assam Grassroots Coaching Association
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* RIGHT: MASKED HEADING, ONE-BY-ONE CARDS FROM LEFT   */}
          {/* ---------------------------------------------------- */}
          <motion.div style={{ y: rightContentParallax }}>
            {/* Eyebrow Badge */}
            <motion.div
              style={{ marginBottom: '0.75rem' }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: smoothEase }}
            >
              <Badge variant="green">THE GRASSROOTS REALITY</Badge>
            </motion.div>

            {/* MASKED HEADING REVEAL */}
            <h2
              className="animated-heading-shimmer"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.05rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '0.025em',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                textAlign: 'left',
              }}
            >
              {/* Masked Line 1 */}
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span
                  style={{ display: 'block' }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: isMobile ? 18 : 35 }
                  }
                  animate={
                    isSectionInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: isMobile ? 18 : 35 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.8,
                    delay: shouldReduceMotion ? 0 : 0.25,
                    ease: smoothEase,
                  }}
                >
                  FOOTBALL TALENT IS EVERYWHERE.
                </motion.span>
              </span>

              {/* Masked Line 2 (Delayed Green Reveal) */}
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span
                  style={{ display: 'block', color: 'var(--primary-green)' }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: isMobile ? 18 : 35 }
                  }
                  animate={
                    isSectionInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: isMobile ? 18 : 35 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.8,
                    delay: shouldReduceMotion ? 0 : 0.45,
                    ease: smoothEase,
                  }}
                >
                  OPPORTUNITY ISN'T.
                </motion.span>
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <motion.p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.6,
                ease: smoothEase,
              }}
            >
              Millions of passionate footballers lace up their boots on uneven village fields, yet fragmented systems, lack of official documentation, and no scout visibility prevent their ascent.
            </motion.p>

            {/* ---------------------------------------------------- */}
            {/* 4 PROBLEM CARDS: APPEAR FROM LEFT ONE BY ONE        */}
            {/* ---------------------------------------------------- */}
            <div
              ref={cardsRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
              }}
              className="why-grid-2"
            >
              {WHY_TURIYA_PROBLEMS.map((prob, idx) => {
                const delay = shouldReduceMotion ? 0 : cardDelays[idx];

                return (
                  <motion.div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.25rem',
                      border: '1.5px solid var(--border-light)',
                      boxShadow: 'var(--shadow-card)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : {
                            opacity: 0,
                            x: isMobile ? -35 : -70,
                            scale: 0.95,
                          }
                    }
                    animate={
                      areCardsInView
                        ? {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            x: isMobile ? -35 : -70,
                            scale: 0.95,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0.25 : 1.2,
                      delay,
                      ease: smoothEase,
                    }}
                    whileHover={
                      !shouldReduceMotion
                        ? {
                            y: -4,
                            boxShadow: 'var(--shadow-card-hover)',
                            borderColor: 'rgba(11, 107, 58, 0.4)',
                            transition: { duration: 0.2 },
                          }
                        : undefined
                    }
                  >
                    {/* Icon container with distinct pop-in */}
                    <motion.div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--primary-green-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.85rem',
                      }}
                      initial={{ scale: 0.75, opacity: 0 }}
                      animate={areCardsInView ? { scale: 1, opacity: 1 } : { scale: 0.75, opacity: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.65,
                        delay: delay + 0.3,
                        ease: smoothEase,
                      }}
                    >
                      {getProblemIcon(prob.icon)}
                    </motion.div>

                    <h3
                      style={{
                        fontSize: '0.985rem',
                        fontWeight: 800,
                        color: 'var(--navy)',
                        marginBottom: '0.35rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {prob.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.825rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {prob.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* ---------------------------------------------------- */}
            {/* MISSION STATEMENT BLOCK (APPEARS AFTER ALL 4 CARDS) */}
            {/* ---------------------------------------------------- */}
            <motion.div
              style={{
                position: 'relative',
                backgroundColor: 'var(--primary-green-light)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                overflow: 'hidden',
              }}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: isMobile ? -25 : -50 }
              }
              animate={
                areCardsInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isMobile ? -25 : -50 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.95,
                delay: shouldReduceMotion ? 0 : 3.8,
                ease: smoothEase,
              }}
            >
              {/* Green Vertical Line: draws down height 0 -> 100% */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: '4.5px',
                  backgroundColor: 'var(--primary-green)',
                  transformOrigin: 'top',
                }}
                initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
                animate={areCardsInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.3 : 1.0,
                  delay: shouldReduceMotion ? 0 : 3.75,
                  ease: smoothEase,
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <CheckCircle2 size={18} color="var(--primary-green)" />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--primary-green)',
                    letterSpacing: '0.04em',
                  }}
                >
                  The Turiya Mission
                </span>
              </div>
              <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', margin: 0, lineHeight: 1.4 }}>
                "Making grassroots football organised, connected and economically sustainable."
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: isMobile ? -15 : -30 }
              }
              animate={
                areCardsInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isMobile ? -15 : -30 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.8,
                delay: shouldReduceMotion ? 0 : 4.35,
                ease: smoothEase,
              }}
            >
              <Button
                variant="primary"
                size="md"
                href="/about"
                icon={<ArrowRight size={16} />}
              >
                Discover Our Mission
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .why-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
