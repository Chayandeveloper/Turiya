'use client';

import React from 'react';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Shield, Target, Users, Sparkles, CheckCircle2, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'About Turiya Football' }]} />

        {/* Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
          <Badge variant="green">OUR MISSION & PHILOSOPHY</Badge>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--navy)',
              lineHeight: 1.1,
              marginTop: '1rem',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            REVITALISING INDIAN FOOTBALL{' '}
            <span style={{ color: 'var(--primary-green)' }}>FROM THE ROOTS UP.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Turiya Football is an integrated Grassroots Sports Business System designed to bridge the chasm between raw village talent in rural India and the organized football pyramid.
          </p>
        </div>

        {/* Visual Story Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '4.5rem',
            boxShadow: 'var(--shadow-lg)',
            border: '4px solid #FFFFFF',
          }}
        >
          <Image
            src="/assets/0A6A0673.JPG"
            alt="Turiya Football tournament live action and authentic village atmosphere"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(16, 42, 67, 0.8) 0%, rgba(16, 42, 67, 0.1) 60%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2.5rem',
            }}
          >
            <div style={{ color: '#FFFFFF', maxWidth: '650px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--lime)', letterSpacing: '0.05em' }}>
                Grassroots Integrity
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', margin: '0.35rem 0' }}>
                Where passion meets structured opportunity.
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                Village tournaments are not side events; they are the bedrock where resilience, camaraderie, and sporting discipline are forged.
              </p>
            </div>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeading
            eyebrow="SYSTEMIC DESIGN"
            title="THREE FOUNDATIONAL PILLARS"
            subtitle="How we create long-term economic and athletic viability for grassroots sports."
          />

          <div className="grid-3">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.65rem' }}>
                1. Digital Identity & Tracking
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Every player, match card, and certified referee is registered with a tamper-proof digital profile. Biometrics, age verification, and match appearances ensure complete transparency for regional scouts.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.65rem' }}>
                2. Continuous League Structure
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Replacing sporadic, one-off festive cups with structured 6-month weekend leagues. Consistent match minutes are the only way young players develop tactical maturity and mental stamina.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.65rem' }}>
                3. Sustainable Rural Livelihoods
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Grassroots football must create income. We formalize match officiating fees for referees, provide coaching grants, and channel community micro-sponsorships to maintain pitches.
              </p>
            </div>
          </div>
        </div>

        {/* Why Northeast India Focus */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)',
            padding: ' clamp(2rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <Badge variant="lime">REGIONAL ANCHOR</Badge>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 900,
                color: 'var(--navy)',
                margin: '0.75rem 0 1rem',
                lineHeight: 1.15,
                textTransform: 'uppercase',
              }}
            >
              WHY NORTHEAST INDIA IS THE CRADLE OF OUR MODEL
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The seven sister states and Lower Bengal harbor the purest football culture in Asia. From the lush slopes of Mawkyrwat to the river islands of Majuli, football is woven into village identity.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--primary-green)" />
                <span>Over 35% of national team players trace roots to rural Northeast academies</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--primary-green)" />
                <span>High natural endurance and instinctive speed honed on mountain and riverbank pitches</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--primary-green)" />
                <span>Deep community solidarity and self-organized village sports clubs</span>
              </div>
            </div>

            <Button variant="primary" href="/opportunities">
              Explore Active Trials & Roles →
            </Button>
          </div>

          <div
            style={{
              position: 'relative',
              height: '380px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: '#E2E8F0',
            }}
          >
            <Image
              src="/assets/0A6A5102.JPG"
              alt="Youth village squad team lineup"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
