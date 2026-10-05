'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ROLES_LIST } from '@/lib/constants/mock-data';
import { CheckCircle2 } from 'lucide-react';

export interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'player',
}) => {
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setDistrict('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Join Turiya Grassroots Network"
      subtitle="Connecting village players, coaches, clubs, and organisers into one sustainable ecosystem."
      maxWidth="600px"
    >
      {submitted ? (
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
              margin: '0 auto 1.25rem',
            }}
          >
            <CheckCircle2 size={36} />
          </div>
          <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
            Welcome to Turiya Football!
          </h4>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            Thank you, <strong>{name}</strong>! Your registration as a <strong>{selectedRole.toUpperCase()}</strong> has been recorded. Our regional grassroots coordinator will reach out to you via WhatsApp at <strong>{phone}</strong> with your onboarding kit.
          </p>
          <Button variant="primary" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Role selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
              Select Your Primary Role:
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.5rem',
              }}
            >
              {ROLES_LIST.map((role) => {
                const isSelected = selectedRole.toLowerCase() === role.id.toLowerCase();
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    style={{
                      padding: '0.5rem 0.25rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.775rem',
                      fontWeight: 700,
                      border: isSelected ? '2px solid var(--primary-green)' : '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'var(--primary-green-light)' : '#FFFFFF',
                      color: isSelected ? 'var(--primary-green)' : 'var(--navy)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      textAlign: 'center',
                    }}
                  >
                    {role.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Rahul Das"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  outline: 'none',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                WhatsApp / Phone *
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
                  outline: 'none',
                  fontSize: '0.9rem',
                }}
              />
            </div>
          </div>

          {/* Email & District */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
                  outline: 'none',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                District & State *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Kamrup, Assam"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  outline: 'none',
                  fontSize: '0.9rem',
                }}
              />
            </div>
          </div>

          {/* Footer CTA */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" isLoading={isSubmitting}>
              Complete Registration →
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
