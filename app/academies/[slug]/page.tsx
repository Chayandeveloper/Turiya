'use client';

import React from 'react';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ACADEMIES_DATA } from '@/lib/constants/mock-data';
import { 
  MapPin, 
  Calendar, 
  UserCheck, 
  Award, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function AcademyDetailPage({ params }: { params: { slug: string } }) {
  const academy = ACADEMIES_DATA.find((a) => a.slug === params.slug) || ACADEMIES_DATA[0];

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Academies', href: '/academies' },
            { label: academy.name },
          ]}
        />

        {/* Hero Cover */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            border: '4px solid #FFFFFF',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          <Image
            src={academy.coverImage || academy.image}
            alt={academy.name}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.6)' }} />

          {/* Age Group Badges */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.45rem' }}>
            {academy.ageGroups.map((ag) => (
              <Badge key={ag} variant="lime">{ag}</Badge>
            ))}
          </div>

          {/* Bottom Title */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#FFFFFF' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.1,
                margin: '0.35rem 0',
              }}
            >
              {academy.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.95)', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={16} color="var(--bright-green)" />
                {academy.location}, {academy.state}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <UserCheck size={16} color="var(--bright-green)" />
                Head Coach: {academy.headCoach} ({academy.coachLicense})
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
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
            {/* About */}
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
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.85rem' }}>
                About the Academy
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {academy.about}
              </p>

              {/* Training Days */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: 'var(--primary-green-light)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--primary-green)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                <Calendar size={18} />
                <span>Training Schedule: {academy.trainingDays}</span>
              </div>
            </div>

            {/* Programs */}
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
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.25rem' }}>
                Training Programs
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {academy.programs.map((prog, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.25rem',
                      backgroundColor: 'var(--bg-main)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                        {prog.title}
                      </h3>
                      <Badge variant="green">{prog.ageGroup}</Badge>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.85rem', lineHeight: 1.5 }}>
                      Focus: <strong>{prog.focus}</strong>
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--navy)', fontWeight: 700 }}>
                      <span>Frequency: {prog.frequency}</span>
                      <span style={{ color: 'var(--primary-green)' }}>{prog.priceMonthly}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                Ground & Training Facilities
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {academy.facilities.map((fac, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-green)" />
                    <span style={{ fontSize: '0.875rem', color: 'var(--navy)', fontWeight: 600 }}>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Upcoming Batches */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                Upcoming Batches
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {academy.upcomingBatches.map((batch, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--navy)' }}>{batch.batchName}</div>
                      <Badge variant={batch.status === 'Open' ? 'open' : 'upcoming'} size="sm">{batch.status}</Badge>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Starts: {batch.startDate} • Capacity: {batch.capacity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1.5px solid var(--primary-green)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                Ground Location & Contact
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {academy.contact.groundAddress}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy)', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={15} color="var(--primary-green)" />
                  <span>{academy.contact.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={15} color="var(--primary-green)" />
                  <span>{academy.contact.email}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                style={{ width: '100%' }}
                href={`tel:${academy.contact.phone}`}
              >
                Inquire For Admissions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
