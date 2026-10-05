'use client';

import React from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  ShieldCheck 
} from 'lucide-react';

export default function SupportPage() {
  const faqs = [
    {
      q: 'How does a village football club affiliate with Turiya?',
      a: 'Club leaders or community coaches can register directly on the platform by submitting basic squad details and proof of local ground availability. Our regional grassroots coordinator will verify the roster within 48 hours.',
    },
    {
      q: 'Are player registrations free of cost for village youth?',
      a: 'Yes. Turiya player passports are 100% free for all village and rural players. We believe financial constraints should never stand between a talented player and official documentation.',
    },
    {
      q: 'How are tournament fixtures and referee fees handled?',
      a: 'Tournament organizers using the Turiya software receive automated bracket management and official referee assignments. Turiya provides grants to ensure certified match officials are paid promptly on matchday.',
    },
    {
      q: 'Can club scouts and ISL academies contact players directly?',
      a: 'Yes. Accredited scouts can submit scouting requests through our platform. All formal communications involve the player’s registered club coach or guardian to safeguard youth interests.',
    },
  ];

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Support & Help Desk' }]} />

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
          <Badge variant="green">COMMUNITY ASSISTANCE & HELPDESK</Badge>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--navy)',
              lineHeight: 1.1,
              marginTop: '1rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            HOW CAN WE{' '}
            <span style={{ color: 'var(--primary-green)' }}>SUPPORT YOU?</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Our regional field coordinators across Lower Assam, Upper Assam, Meghalaya, and Mizoram are here to assist with registrations, tournament fixtures, and player welfare.
          </p>
        </div>

        {/* Direct Coordinator Contacts & Guarantee */}
        <div
          id="contact"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '4.5rem',
          }}
        >
          {/* Direct Helplines */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                Direct Field Helplines
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Reach our regional football coordinators directly via phone or WhatsApp during operational hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--primary-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--navy)' }}>Assam & Lower Brahmaputra</div>
                    <div style={{ color: 'var(--text-muted)' }}>+91 94350 88210 (10 AM - 6 PM)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--primary-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--navy)' }}>Meghalaya & Hills Hub</div>
                    <div style={{ color: 'var(--text-muted)' }}>+91 98620 33419 (10 AM - 6 PM)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--primary-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--navy)' }}>General & Partnerships Email</div>
                    <div style={{ color: 'var(--text-muted)' }}>community@turiyafootball.org</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Guarantee */}
          <div
            style={{
              backgroundColor: 'var(--primary-green-light)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(11, 107, 58, 0.2)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <ShieldCheck size={22} color="var(--primary-green)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Grassroots Guarantee
              </span>
            </div>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
              Transparent, Open & Zero Hidden Fees
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Turiya operates on a sports-business social charter. We never take cuts from player trial contracts, and 100% of tournament prize money is disbursed publicly before spectators.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--navy)', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
              Need urgent on-ground verification or match commissioner support? Contact our field coordinators directly above.
            </p>
          </div>
        </div>

        {/* FAQs Section */}
        <div style={{ marginBottom: '4.5rem' }}>
          <SectionHeading
            eyebrow="COMMONLY ASKED"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Clear answers on player registration, club affiliation, and tournament operations."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.65rem' }}>
                  <HelpCircle size={18} color="var(--primary-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)', margin: 0, lineHeight: 1.35 }}>
                    {faq.q}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0, paddingLeft: '1.75rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Privacy Anchors */}
        <div
          id="privacy"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            padding: '2.5rem 2rem',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <h3 id="terms" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
            Privacy Policy & Community Terms
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
            Turiya Football is committed to protecting the privacy and dignity of all registered grassroots players, especially minor athletes under 18. Biometric data and Aadhaar/birth records are stored in encrypted, access-restricted databases adhering to Indian Digital Personal Data Protection laws.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            By participating in Turiya leagues and tournaments, clubs agree to fair play rules, non-violence codes of conduct, and timely referee honorariums.
          </p>
        </div>
      </div>
    </div>
  );
}
