import React from 'react';
import Link from 'next/link';
import { Shield, Instagram, Facebook, Youtube, Linkedin, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          {/* Brand Info (Left) */}
          <div style={{ maxWidth: '340px' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Shield size={20} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: 'var(--navy)',
                }}
              >
                TURIYA <span style={{ color: 'var(--primary-green)' }}>FOOTBALL</span>
              </span>
            </Link>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              <strong>Grassroots Sports Business System</strong>. Empowering rural, tribal, and village football ecosystems across Northeast India with digital technology, organized leagues, and sustainable livelihoods.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Turiya on Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.15s ease',
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Turiya on Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Turiya on YouTube"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Turiya on LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', transition: 'color 0.15s ease' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  About Platform
                </Link>
              </li>
              <li>
                <Link href="/league" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Grassroots League
                </Link>
              </li>
              <li>
                <Link href="/tournaments" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Tournaments & Cups
                </Link>
              </li>
              <li>
                <Link href="/academies" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Village Academies
                </Link>
              </li>
              <li>
                <Link href="/opportunities" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Trials & Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Company */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link href="/players" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Player Profiles
                </Link>
              </li>
              <li>
                <Link href="/clubs" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Affiliated Clubs
                </Link>
              </li>
              <li>
                <Link href="/stories" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Village Stories
                </Link>
              </li>
              <li>
                <Link href="/support" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Support & Help Center
                </Link>
              </li>
              <li>
                <Link href="/support#contact" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  District Coordinator Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Grassroots Vision */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Grassroots Vision
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Built with passionate respect for players in rural fields who embody the authentic soul of Indian football.
            </p>
            <div
              style={{
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--navy)',
                fontWeight: 600,
              }}
            >
              <Heart size={16} color="var(--primary-green)" />
              <span>Northeast India Grassroots Sports Tech</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 Turiya Football. All rights reserved. Grassroots Sports Business System.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/support#privacy" style={{ color: 'var(--text-muted)' }}>
              Privacy Policy
            </Link>
            <Link href="/support#terms" style={{ color: 'var(--text-muted)' }}>
              Terms of Service
            </Link>
            <Link href="/support" style={{ color: 'var(--text-muted)' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
