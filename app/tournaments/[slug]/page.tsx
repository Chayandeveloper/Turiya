'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RegisterTeamModal } from '@/components/modals/RegisterTeamModal';
import { TOURNAMENTS_DATA } from '@/lib/constants/mock-data';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Mail, 
  Phone 
} from 'lucide-react';

export default function TournamentDetailPage({ params }: { params: { slug: string } }) {
  const tournament = TOURNAMENTS_DATA.find((t) => t.slug === params.slug) || TOURNAMENTS_DATA[0];
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <div className="section-py" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Tournaments', href: '/tournaments' },
            { label: tournament.name },
          ]}
        />

        {/* Tournament Hero */}
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
            src={tournament.image}
            alt={tournament.name}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 42, 67, 0.6)' }} />

          {/* Badges top */}
          <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
            <Badge variant="open">{tournament.status}</Badge>
          </div>
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
            <Badge variant="lime">{tournament.category}</Badge>
          </div>

          {/* Hero Details Bottom */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#FFFFFF' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.1,
                margin: '0.35rem 0',
                textTransform: 'uppercase',
              }}
            >
              {tournament.name}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.95)',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--bright-green)" />
                {tournament.venue}, {tournament.location}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={16} color="var(--bright-green)" />
                {tournament.dates}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--lime)', fontWeight: 800 }}>
                <Trophy size={16} />
                {tournament.prizePool}
              </span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Main Column */}
          <div>
            {/* Overview Card */}
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
                About the Tournament
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {tournament.description}
              </p>

              {/* Tournament Key Facts Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-main)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Entry Fee</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>{tournament.entryFee}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Teams</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-green)' }}>{tournament.teamsCount} Squads</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Deadline</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>{tournament.registrationDeadline}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Format</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>Knockout Cup</div>
                </div>
              </div>
            </div>

            {/* Rules & Regulations */}
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
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} color="var(--primary-green)" />
                <span>Tournament Rules & Compliance</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {tournament.rules.map((rule, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.5 }}>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Fixtures */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                  Matchday Schedule
                </h2>
                <Badge variant="navy">Official Draw</Badge>
              </div>

              {tournament.fixtures.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {tournament.fixtures.map((fixture) => (
                    <div
                      key={fixture.matchNumber}
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--primary-green)', fontWeight: 800, marginBottom: '0.35rem' }}>
                        <span>MATCH {fixture.matchNumber}</span>
                        <span>{fixture.date} • {fixture.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>
                        <span>{fixture.teamA}</span>
                        <span style={{ backgroundColor: '#FFFFFF', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--primary-green)' }}>VS</span>
                        <span>{fixture.teamB}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                        Pitch: {fixture.venue}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
                  Fixtures will be generated automatically once team registrations close on {tournament.registrationDeadline}.
                </div>
              )}
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
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                <Trophy size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                Register Your Club
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Entry fee: <strong>{tournament.entryFee}</strong>. Spots are confirmed upon roster verification.
              </p>

              <Button
                variant="primary"
                size="lg"
                style={{ width: '100%' }}
                onClick={() => setRegisterModalOpen(true)}
              >
                Register Team Now
              </Button>
            </div>

            {/* Organiser Info */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.85rem' }}>
                <ShieldCheck size={18} color="var(--primary-green)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase' }}>
                  Verified Organiser
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                {tournament.organiser.name}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Official affiliate of the Turiya Tournament Guild with medical standby & licensed referee certification.
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={14} color="var(--primary-green)" />
                <span>{tournament.organiser.contact}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Modal */}
        <RegisterTeamModal
          isOpen={registerModalOpen}
          onClose={() => setRegisterModalOpen(false)}
          tournament={tournament}
        />
      </div>
    </div>
  );
}
