'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  MapPin,
  HeartPulse,
  Users,
  Utensils,
  Camera,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Star,
  FileCheck,
  Building,
  Award,
  Zap,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface SupportRoleCard {
  id: string;
  roleTitle: string;
  idFormat: string;
  icon: any;
  color: string;
  badge: string;
  description: string;
  deliverables: string[];
  sampleRate: string;
  status: string;
}

const SUPPORT_ROLES: SupportRoleCard[] = [
  {
    id: 'ground_owner',
    roleTitle: 'Ground Owner & Venue Manager',
    idFormat: 'PWD-NE-GW-XXXX',
    icon: MapPin,
    color: '#0B6B3A',
    badge: 'VENUE LISTING',
    description: 'Monetize your natural grass pitches, futsal turfs, and floodlit stadiums with direct tournament slot bookings.',
    deliverables: [
      'Automated hourly/daily booking calendar in INR',
      'Instant booking requests from academies & league organizers',
      'Surface condition tags (Natural Grass, Artificial Turf)',
      'Verified payout ledger and direct bank settlements'
    ],
    sampleRate: '₹1,200 - ₹3,500 / hr',
    status: 'Verified Listing'
  },
  {
    id: 'physio',
    roleTitle: 'Sports Physiotherapist & Medic',
    idFormat: 'PWD-NE-PT-XXXX',
    icon: HeartPulse,
    color: '#FF6B00',
    badge: 'CLINICAL REHAB',
    description: 'Provide on-field matchday first aid, taping, and clinical sports injury rehabilitation for grassroots players.',
    deliverables: [
      'Certified BPT/MPT credential verification badge',
      'Matchday duty retainer packages for tournament days',
      'ACL, ankle, and muscular rehab timeline tracking',
      'Private digital health & fitness clearance certificates'
    ],
    sampleRate: '₹2,500 - ₹5,000 / matchday',
    status: 'BPT / MPT Certified'
  },
  {
    id: 'ball_boy',
    roleTitle: 'Ball Boy & Match Day Staff',
    idFormat: 'PWD-NE-BB-XXXX',
    icon: Users,
    color: '#2563EB',
    badge: 'FIELD OPERATIONS',
    description: 'Gain hands-on grassroots matchday experience, assist referees, and earn official per-match stipends.',
    deliverables: [
      'Proximity-based tournament assignment board',
      'Availability toggle (Available for Duty / Busy)',
      'Official organizer performance ratings (1 to 5 stars)',
      'Verified log of matches and grounds served'
    ],
    sampleRate: '₹500 - ₹1,000 / match',
    status: 'Organizer Rated'
  },
  {
    id: 'nutritionist',
    roleTitle: 'Sports Nutritionist & Fitness',
    idFormat: 'PWD-NE-NU-XXXX',
    icon: Utensils,
    color: '#10B981',
    badge: 'ATHLETE NUTRITION',
    description: 'Design tailored matchday fueling strategies, hydration guidelines, and monthly academy squad diet plans.',
    deliverables: [
      'Interactive youth footballer macro/micro nutrient builder',
      'Monthly retainer contracts for U-13, U-15, and U-17 squads',
      'Body composition, hydration, and recovery metric logging',
      'Affordable local Indian diet meal recommendations'
    ],
    sampleRate: '₹8,000 - ₹15,000 / squad mo.',
    status: 'Squad Retainer'
  },
  {
    id: 'photographer',
    roleTitle: 'Media & Sports Photographer',
    idFormat: 'PWD-NE-MD-XXXX',
    icon: Camera,
    color: '#8B5CF6',
    badge: 'VISUAL ASSETS',
    description: 'Capture high-speed match action, highlight reels, and team media day portraits for monetization.',
    deliverables: [
      'Curated showcase portfolio gallery inside the app',
      'Direct asset delivery portal for paying players and teams',
      'Custom pricing packages for single matches or full leagues',
      'AI media studio integration for instant player graphics'
    ],
    sampleRate: '₹3,000 - ₹8,000 / match package',
    status: 'Asset Delivery'
  }
];

export default function PassWorksPage() {
  const [selectedRole, setSelectedRole] = useState(SUPPORT_ROLES[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'ground_owner',
    experienceYears: '2-5',
    city: '',
    notes: ''
  });

  const activeRoleData = SUPPORT_ROLES.find(r => r.id === selectedRole) || SUPPORT_ROLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#F7FAF8', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* HERO BANNER */}
      <section
        style={{
          background: 'linear-gradient(135deg, #102A43 0%, #0F172A 50%, #0B6B3A 100%)',
          color: '#FFFFFF',
          padding: '5rem 0 4rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 107, 0, 0.2)',
                border: '1px solid #FF6B00',
                color: '#FF944D',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.775rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              <Shield size={16} />
              <span>PASS Works Delegate Infrastructure</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: '#FFFFFF'
              }}
            >
              THE DIGITAL SERVICE ECONOMY FOR INDIAN FOOTBALL.
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}
            >
              Ground owners, certified sports physiotherapists, nutritionists, matchday staff, and media professionals:
              receive official PWD Delegate credentials, set your INR rates, and unlock direct bookings.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#register-delegate"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  backgroundColor: '#FF6B00',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(255, 107, 0, 0.35)'
                }}
              >
                <span>Register as a Delegate</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#roles-directory"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                <span>Explore Support Roles</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.75rem 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              textAlign: 'center'
            }}
            className="pass-stats-grid"
          >
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FF6B00' }}>300+</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Registered Venues & Turfs</div>
            </div>
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>150+</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Certified Sports Physios</div>
            </div>
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#2563EB' }}>850+</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Matchday Assignments Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#102A43' }}>100%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Escrow-Backed Payouts</div>
            </div>
          </div>
        </div>
      </div>

      {/* SUPPORT ROLES EXPLORER */}
      <section id="roles-directory" className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="PASS WORKS SPECIALIZATIONS"
            title="EXPLORE THE 5 SUPPORT PILLARS"
            subtitle="Each accredited partner receives a tamper-proof digital PWD Delegate ID with automated booking and invoicing features."
            align="center"
          />

          {/* ROLE SELECTOR BUTTONS */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.6rem',
              margin: '2.5rem 0',
              flexWrap: 'wrap'
            }}
          >
            {SUPPORT_ROLES.map((role) => {
              const isActive = role.id === selectedRole;
              const IconComp = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '9999px',
                    border: isActive ? `2px solid ${role.color}` : '1.5px solid var(--border-light)',
                    backgroundColor: isActive ? '#FFFFFF' : 'var(--bg-main)',
                    color: isActive ? role.color : 'var(--navy)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    boxShadow: isActive ? `0 4px 14px ${role.color}25` : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComp size={18} />
                  <span>{role.roleTitle.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE ROLE DETAIL CARD */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid var(--border-light)',
              padding: '2.75rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '3rem',
                alignItems: 'center'
              }}
              className="role-detail-grid"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      color: activeRoleData.color,
                      backgroundColor: `${activeRoleData.color}15`,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px'
                    }}
                  >
                    {activeRoleData.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    ID Syntax: {activeRoleData.idFormat}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {activeRoleData.roleTitle}
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem'
                  }}
                >
                  {activeRoleData.description}
                </p>

                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                  WORKSPACE CAPABILITIES:
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {activeRoleData.deliverables.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle size={18} style={{ color: activeRoleData.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--navy)', lineHeight: 1.45 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'var(--bg-main)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                      RECOMMENDED INR PRICING
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--navy)' }}>
                      {activeRoleData.sampleRate}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <a
                      href="#register-delegate"
                      style={{
                        padding: '0.55rem 1.25rem',
                        backgroundColor: activeRoleData.color,
                        color: '#FFFFFF',
                        borderRadius: '9999px',
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      Apply for this Role
                    </a>
                  </div>
                </div>
              </div>

              {/* PWD ID CARD PREVIEW */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: `2px solid ${activeRoleData.color}`,
                  padding: '2rem',
                  boxShadow: `0 16px 36px ${activeRoleData.color}20`,
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: activeRoleData.color,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <activeRoleData.icon size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)' }}>
                        PASS Works Delegate
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        AIFF-Aligned Grassroots Infrastructure
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.675rem',
                      fontWeight: 800,
                      backgroundColor: `${activeRoleData.color}15`,
                      color: activeRoleData.color,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '9999px'
                    }}
                  >
                    VERIFIED
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--bg-main)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                    DELEGATE IDENTIFIER
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--navy)', letterSpacing: '0.05em' }}>
                    {activeRoleData.idFormat.replace('XXXX', '2026')}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: activeRoleData.color, fontWeight: 700, marginTop: '0.2rem' }}>
                    {activeRoleData.roleTitle}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                  <span>Escrow Settlement: Direct UPI/Bank</span>
                  <span style={{ fontWeight: 700, color: 'var(--navy)' }}>Active Status: 🟢 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARDING REGISTRATION FORM */}
      <section id="register-delegate" className="section-py" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <SectionHeading
            eyebrow="ONBOARDING REGISTRATION"
            title="APPLY FOR YOUR PWD ID CARD"
            subtitle="Submit your credentials for official verification. Once approved by Turiya Football, your profile will be listed in the nationwide PASS Works booking network."
            align="center"
          />

          <div
            style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1.5px solid var(--border-light)',
              marginTop: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-green-light)',
                    color: 'var(--primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem'
                  }}
                >
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  Application Received Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                  Our onboarding team will review your submitted credentials and issue your official PWD ID card within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    padding: '0.65rem 1.5rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--primary-green)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Register Another Delegate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                      Support Specialization *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="ground_owner">Ground Owner & Venue Manager</option>
                      <option value="physio">Physiotherapist & Sports Medic</option>
                      <option value="ball_boy">Ball Boy & Match Day Staff</option>
                      <option value="nutritionist">Nutritionist & Fitness Coach</option>
                      <option value="photographer">Media & Sports Photographer</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                      Operational City / Region *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Guwahati, Assam"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                      Years of Experience *
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-light)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="0-1">Less than 1 year</option>
                      <option value="2-5">2 to 5 years</option>
                      <option value="5-10">5 to 10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                    Certifications, Venue Details or Profile Bio (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your credentials, turf dimensions, camera equipment, or sports medical licenses..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid var(--border-light)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '0.9rem',
                    borderRadius: '9999px',
                    backgroundColor: '#FF6B00',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(255, 107, 0, 0.3)',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Submit PWD Delegate Application</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .pass-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .role-detail-grid {
            grid-template-columns: 1fr !important;
          }
          .form-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
