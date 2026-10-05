'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ApplyOpportunityModal } from '@/components/modals/ApplyOpportunityModal';
import { OPPORTUNITIES_DATA } from '@/lib/constants/mock-data';
import { MapPin, Calendar, Clock, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function OpportunityDetailPage({ params }: { params: { slug: string } }) {
  const opportunity = OPPORTUNITIES_DATA.find((o) => o.slug === params.slug) || OPPORTUNITIES_DATA[0];
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Opportunities', href: '/opportunities' },
            { label: opportunity.title },
          ]}
        />

        {/* Opportunity Header Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            padding: '2.5rem 2rem',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <Badge variant="green">{opportunity.category.toUpperCase()} OPPORTUNITY</Badge>
            <Badge variant={opportunity.status === 'Active' ? 'open' : 'upcoming'}>{opportunity.status}</Badge>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: 'var(--navy)',
              lineHeight: 1.15,
              marginBottom: '0.5rem',
            }}
          >
            {opportunity.title}
          </h1>

          <div style={{ fontSize: '1.1rem', color: 'var(--primary-green)', fontWeight: 800, marginBottom: '1.5rem' }}>
            {opportunity.organization}
          </div>

          {/* Key Facts Pill Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              backgroundColor: 'var(--bg-main)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Location</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)' }}>{opportunity.location}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Event Date</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-green)' }}>{opportunity.date}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Application Deadline</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)' }}>{opportunity.deadline}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Eligibility</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)' }}>{opportunity.eligibility}</div>
            </div>
          </div>
        </div>

        {/* 2-Column Details Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Main Info */}
          <div>
            {/* Description */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                marginBottom: '2rem',
              }}
            >
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.85rem' }}>
                Opportunity Overview
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {opportunity.description}
              </p>

              {opportunity.compensation && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--primary-green-light)',
                    border: '1px solid rgba(11, 107, 58, 0.2)',
                    fontSize: '0.9rem',
                    color: 'var(--navy)',
                    fontWeight: 700,
                  }}
                >
                  Compensation / Benefit: <span style={{ color: 'var(--primary-green)' }}>{opportunity.compensation}</span>
                </div>
              )}
            </div>

            {/* Responsibilities */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                marginBottom: '2rem',
              }}
            >
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                Key Responsibilities & Flow
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {opportunity.responsibilities.map((resp, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.5 }}>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                Mandatory Requirements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {opportunity.requirements.map((req, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.5 }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* CTA Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1.5px solid var(--primary-green)',
                padding: '2rem',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                Ready to Apply?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Submit your credentials directly to the selection panel. No broker fees or agency charges.
              </p>
              <Button
                variant="primary"
                size="lg"
                style={{ width: '100%' }}
                onClick={() => setApplyModalOpen(true)}
              >
                Apply Online Now →
              </Button>
            </div>

            {/* Help / Query */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                Have questions about this opening?
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Contact the district scouting committee directly:
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--primary-green)', fontWeight: 700 }}>
                <Mail size={15} />
                <span>{opportunity.contactEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Modal */}
        <ApplyOpportunityModal
          isOpen={applyModalOpen}
          onClose={() => setApplyModalOpen(false)}
          opportunity={opportunity}
        />
      </div>
    </div>
  );
}
