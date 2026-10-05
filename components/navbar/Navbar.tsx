'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield } from 'lucide-react';

// ============================================================================
// 📱 GOOGLE PLAY STORE LINK CONFIGURATION:
// Change the link below to your app's Google Play Store listing URL.
// When visitors click the Google Play badge, they will be redirected to this link.
// ============================================================================
export const PLAYSTORE_APP_URL = 'https://play.google.com/store/apps/details?id=com.turiyafootball.app';

// Google Play Store multi-color icon component
export const PlayStoreIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    className={className}
    style={{ flexShrink: 0, display: 'block' }}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#ea4335" d="M25.9 469.5c8.7 31 40.9 49 71.9 40.2c4.7-1.3 9.2-3.2 13.4-5.7l241.7-137.6l-110.7-110.3z" />
    <path fill="#fbbc04" d="m235.8 249.6l117.1 116.9L457.5 307c27.8-14.6 38.5-48.9 24-76.7c-5.4-10.2-14.3-17.6-24-24l-104.2-59.9" />
    <path fill="#4285f4" d="M24 57.3v397.5c0 5 .7 9.9 1.9 14.7L242.2 256L25.9 42.4c-1.3 4.8-1.9 9.9-1.9 14.9" />
    <path fill="#34a853" d="m242.2 256.1l111.1-109.6L112 8.2C102.9 2.8 92.6 0 82.1 0C56-.1 33 17.3 25.9 42.4z" />
  </svg>
);

interface NavbarProps {
  /** Optional custom URL to override the default Play Store redirect */
  playStoreUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ playStoreUrl = PLAYSTORE_APP_URL }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // NAVIGATION ITEMS: As specified in PASS master specification
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'PASS Works', href: '/pass-works' },
    { label: 'League', href: '/league' },
    { label: 'Tournaments', href: '/tournaments' },
    { label: 'Academies', href: '/academies' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-light)',
          boxShadow: isScrolled ? '0 4px 20px rgba(16, 42, 67, 0.08)' : '0 1px 4px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '76px',
            }}
          >
            {/* BRAND LOGO (LEFT) */}
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(11, 107, 58, 0.3)',
                }}
              >
                <Shield size={24} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: 'var(--navy)',
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  TURIYA <span style={{ color: 'var(--primary-green)' }}>FOOTBALL</span>
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginTop: '2px',
                  }}
                >
                  Grassroots Sports Business System
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION (CENTER) */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '1.5rem',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '0.925rem',
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: '0.01em',
                      color: isActive ? 'var(--primary-green)' : 'var(--navy)',
                      transition: 'color 0.15s ease',
                      position: 'relative',
                      padding: '0.4rem 0',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2.5px',
                          backgroundColor: 'var(--primary-green)',
                          borderRadius: '2px',
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE: PLAY STORE BUTTON & MOBILE HAMBURGER */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Desktop / Tablet Google Play Store Badge */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="playstore-badge playstore-badge-header"
                title="Download Turiya Football on Google Play"
                aria-label="Download Turiya Football on Google Play"
              >
                <PlayStoreIcon size={20} />
                <div className="playstore-text">
                  <span className="playstore-sub">GET IT ON</span>
                  <span className="playstore-title">Google Play</span>
                </div>
              </a>

              {/* Mobile Compact Play Store Icon Button */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="playstore-badge-compact"
                title="Download App on Google Play"
                aria-label="Download App on Google Play"
              >
                <PlayStoreIcon size={22} />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--navy)',
                  cursor: 'pointer',
                }}
                className="mobile-toggle"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        {isMobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid var(--border-light)',
              padding: '1.25rem 1.5rem 2rem',
              boxShadow: 'var(--shadow-lg)',
              animation: 'drawerSlideDown 0.25s ease-out',
            }}
            className="mobile-drawer"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: isActive ? 800 : 600,
                      color: isActive ? 'var(--primary-green)' : 'var(--navy)',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-green)' }} />}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Drawer Play Store Download Card */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Official Mobile App
              </div>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="playstore-badge"
                style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem' }}
                title="Download Turiya Football on Google Play"
              >
                <PlayStoreIcon size={24} />
                <div className="playstore-text">
                  <span className="playstore-sub">GET IT ON</span>
                  <span className="playstore-title" style={{ fontSize: '0.95rem' }}>Google Play</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>

      <style jsx global>{`
        /* Google Play Badge Styling */
        .playstore-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background-color: #0c131f;
          color: #ffffff;
          padding: 0.42rem 0.95rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 2px 8px rgba(12, 19, 31, 0.15);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .playstore-badge:hover {
          background-color: #040810;
          border-color: rgba(25, 196, 99, 0.6);
          box-shadow: 0 4px 16px rgba(11, 107, 58, 0.25);
          transform: translateY(-1.5px);
        }

        .playstore-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }

        .playstore-sub {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .playstore-title {
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #ffffff;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Compact icon button for very narrow mobile screens */
        .playstore-badge-compact {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background-color: #0c131f;
          border: 1px solid rgba(255, 255, 255, 0.12);
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(12, 19, 31, 0.15);
        }

        .playstore-badge-compact:hover {
          background-color: #040810;
          border-color: rgba(25, 196, 99, 0.6);
          transform: translateY(-1.5px);
        }

        @media (max-width: 520px) {
          .playstore-badge-header {
            display: none !important;
          }
          .playstore-badge-compact {
            display: flex !important;
          }
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
          .playstore-badge-compact {
            display: none !important;
          }
        }

        @keyframes drawerSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

