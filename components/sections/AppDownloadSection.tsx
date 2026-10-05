'use client';

import React from 'react';
import { CheckCircle2, Shield, Trophy, Users, Bell, Search, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { APP_FEATURES } from '@/lib/constants/mock-data';

export const AppDownloadSection: React.FC = () => {
  return (
    <section
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-main)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-xl)',
            padding: ' clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT: App Content & Store CTA */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <Badge variant="lime">PASS APP 2026</Badge>
            </div>

            <h2
              className="animated-heading-shimmer"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '0.025em',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                textAlign: 'left',
              }}
            >
              FOOTBALL.{' '}
              <span style={{ color: 'var(--primary-green)', display: 'block' }}>IN YOUR POCKET.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Everything village players, club coaches, and cup organisers need in a lightweight, offline-ready mobile application designed for low-connectivity rural grounds.
            </p>

            {/* Feature List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {APP_FEATURES.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--bright-green)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {/* Google Play */}
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  backgroundColor: 'var(--navy)',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(16, 42, 67, 0.25)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>▶</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>Get it on</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1 }}>Google Play</div>
                </div>
              </button>

              {/* App Store */}
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--navy)',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  border: '1.5px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <div style={{ fontSize: '1.5rem', lineHeight: 1 }}></div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Download on the</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, lineHeight: 1 }}>App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT: Smartphone Mockup showing fictional Turiya app interface */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '320px',
                height: '620px',
                backgroundColor: '#FFFFFF',
                borderRadius: '44px',
                border: '10px solid #1E293B',
                boxShadow: '0 25px 60px -15px rgba(16, 42, 67, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Dynamic Island / Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '20px',
                  backgroundColor: '#0F172A',
                  borderRadius: '12px',
                  zIndex: 10,
                }}
              />

              {/* App Header */}
              <div
                style={{
                  backgroundColor: 'var(--primary-green)',
                  padding: '2.5rem 1.25rem 1.25rem',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Shield size={18} />
                    <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>Pass App</span>
                  </div>
                  <Bell size={16} />
                </div>
                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Welcome back,</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Rahul Das (Forward)</div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.65rem',
                    marginTop: '0.4rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  <span>DIGITAL PASS #TUR-8429</span>
                </div>
              </div>

              {/* App Screen Body */}
              <div style={{ padding: '1rem', flex: 1, backgroundColor: 'var(--bg-main)', overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Search in app */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.45rem 0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <Search size={14} color="var(--primary-green)" />
                  <span>Search tournaments, clubs...</span>
                </div>

                {/* Match Banner in App */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.675rem', color: 'var(--primary-green)', fontWeight: 800, marginBottom: '0.4rem' }}>
                    <span>NEXT MATCHDAY</span>
                    <span>12 OCT • 03:30 PM</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', fontSize: '0.85rem', fontWeight: 800, color: 'var(--navy)' }}>
                    <span>Turiya FC</span>
                    <span style={{ backgroundColor: 'var(--primary-green-light)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--primary-green)' }}>VS</span>
                    <span>Bodoland FC</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.35rem' }}>
                    Chaygaon Community Ground
                  </div>
                </div>

                {/* Stats widget in app */}
                <div
                  style={{
                    backgroundColor: 'var(--primary-green-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-green)' }}>28</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--navy)' }}>GOALS</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-green)' }}>11</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--navy)' }}>ASSISTS</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary-green)' }}>89</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--navy)' }}>PACE</div>
                  </div>
                </div>

                {/* Open Trial alert in app */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <Trophy size={18} color="#D97706" />
                  <div>
                    <div style={{ fontSize: '0.775rem', fontWeight: 800, color: 'var(--navy)' }}>U-18 Guwahati Trial</div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>Status: Application Approved</div>
                  </div>
                </div>
              </div>

              {/* App Bottom Navigation Bar */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid var(--border-light)',
                  padding: '0.6rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.7rem',
                }}
              >
                <div style={{ color: 'var(--primary-green)', fontWeight: 800, textAlign: 'center' }}>Home</div>
                <div style={{ textAlign: 'center' }}>Matches</div>
                <div style={{ textAlign: 'center' }}>Trials</div>
                <div style={{ textAlign: 'center' }}>Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
