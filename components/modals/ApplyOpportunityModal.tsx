'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Opportunity } from '@/types';
import { CheckCircle2 } from 'lucide-react';
import { applyForOpportunity } from '@/lib/api/opportunities';

export interface ApplyOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity | null;
}

export const ApplyOpportunityModal: React.FC<ApplyOpportunityModalProps> = ({
  isOpen,
  onClose,
  opportunity,
}) => {
  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!opportunity) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await applyForOpportunity(opportunity.slug, {
      applicantName,
      phone,
      email,
      age,
      experience,
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setApplicantName('');
    setPhone('');
    setEmail('');
    setAge('');
    setExperience('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Apply: ${opportunity.title}`}
      subtitle={`${opportunity.organization} • ${opportunity.location}`}
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
            Application Sent!
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            Thank you, <strong>{applicantName}</strong>! Your application has been logged with the selection team. Keep your phone handy for call/WhatsApp screening.
          </p>
          <Button variant="primary" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
              Full Name *
            </label>
            <input
              required
              type="text"
              placeholder="Your full legal name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
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
                WhatsApp / Mobile *
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

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                Current Age *
              </label>
              <input
                required
                type="number"
                placeholder="e.g. 17"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Brief Football Background / Experience *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Mention your village club, playing position, past tournaments, or coaching licenses..."
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.9rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" isLoading={isSubmitting}>
              Submit Application
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
