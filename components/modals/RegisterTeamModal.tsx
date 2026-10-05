'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Tournament } from '@/types';
import { CheckCircle2, Shield } from 'lucide-react';
import { registerTournamentTeam } from '@/lib/api/tournaments';

export interface RegisterTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournament: Tournament | null;
}

export const RegisterTeamModal: React.FC<RegisterTeamModalProps> = ({
  isOpen,
  onClose,
  tournament,
}) => {
  const [teamName, setTeamName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [phone, setPhone] = useState('');
  const [squadCount, setSquadCount] = useState('16');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!tournament) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await registerTournamentTeam(tournament.slug, {
      teamName,
      managerName,
      phone,
      squadCount,
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTeamName('');
    setManagerName('');
    setPhone('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Register Team: ${tournament.name}`}
      subtitle={`${tournament.location} • ${tournament.dates} • ${tournament.prizePool}`}
      maxWidth="560px"
    >
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-green-light)',
              color: 'var(--primary-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.4rem' }}>
            Registration Submitted!
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            <strong>{teamName}</strong> has been tentatively placed in the tournament entry roster. The tournament organizing committee will verify your player ID cards and contact <strong>{managerName}</strong> via WhatsApp at <strong>{phone}</strong>.
          </p>
          <Button variant="primary" onClick={handleReset}>
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'var(--primary-green-light)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: 'var(--primary-green)',
              fontWeight: 600,
            }}
          >
            <Shield size={18} />
            <span>Entry Fee: {tournament.entryFee} (Payable upon fixture confirmation)</span>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
              Club / Village Team Name *
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Chaygaon Rising Stars"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.9rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                Manager / Coach Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Pranab Saikia"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                WhatsApp Number *
              </label>
              <input
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
              Squad Size (Players to register)
            </label>
            <select
              value={squadCount}
              onChange={(e) => setSquadCount(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.9rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                backgroundColor: '#FFFFFF',
                outline: 'none',
              }}
            >
              <option value="14">14 Players (7 starters + 7 bench)</option>
              <option value="16">16 Players (Standard)</option>
              <option value="18">18 Players (Maximum Allowed)</option>
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" isLoading={isSubmitting}>
              Confirm Registration
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
