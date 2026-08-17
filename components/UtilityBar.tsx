'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  {
    label: 'About Us',
    dropdown: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Why BMSPL', href: '/about/why-bmspl' },
      { label: 'Our Divisions & Programs', href: '/about/divisions-and-programs' },
    ],
  },
  {
    label: 'Services',
    dropdown: [
      { label: 'Permanent Staffing', href: '/services/permanent-staffing' },
      { label: 'Contractual Staffing & Payrolling', href: '/services/contractual-staffing' },
      { label: 'Security Services', href: '/services/security-services' },
      { label: 'Training & Development', href: '/services/training-development' },
    ],
  },
  { label: 'Job Seekers', href: '/job-seekers' },
  { label: 'Insights', href: '/news-insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header>

      {/* ── Utility Bar ── */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #E2E8F0',
        padding: '7px 0',
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>

          {/* Left — Phone + Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="tel:+919925242929" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#1A1A1A',
              textDecoration: 'none',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                  A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0
                  012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0
                  01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0
                  012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +91-9925242929
            </a>

            <a href="mailto:hr@bhaktimanagement.com" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#1A1A1A',
              textDecoration: 'none',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2
                  2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              hr@bhaktimanagement.com
            </a>
          </div>

          {/* Right — Tagline */}
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#1A1A1A',
          }}>
            Building India&apos;s Workforce Since 1998
          </span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav style={{
        backgroundColor: '#1B2B5E',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.2)',
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}>
            <Image
              src="/assets/bhakticompany.logo.png"
              alt="Bhakti Management Services"
              width={120}
              height={52}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}>
            {navLinks.map((link) => (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Simple link (no dropdown) */}
                {link.href ? (
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.88)',
                      textDecoration: 'none',
                      padding: '8px 14px',
                      display: 'block',
                      letterSpacing: '0.02em',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A14A')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')}
                  >
                    {link.label}
                  </Link>
                ) : (
                  /* Dropdown trigger */
                  <button style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.88)',
                    background: 'none',
                    border: 'none',
                    padding: '8px 14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A14A')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')}
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    minWidth: '250px',
                    padding: '6px 0',
                    border: '1px solid #E2E8F0',
                    zIndex: 200,
                  }}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: '11px 20px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: '#1A1A1A',
                          textDecoration: 'none',
                          transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundColor = '#EEF1F8'
                          e.currentTarget.style.color = '#1B2B5E'
                          e.currentTarget.style.paddingLeft = '24px'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = '#1A1A1A'
                          e.currentTarget.style.paddingLeft = '20px'
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── CTA Button ── */}
          <div className="desktop-nav">
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: '12px', padding: '11px 24px' }}
            >
              Hire Through BMSPL
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '6px',
              display: 'none',
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>

        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div style={{
            backgroundColor: '#0F1B3C',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '12px 24px 20px',
          }}>
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '13px 0',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.88)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <p style={{
                      padding: '13px 0 8px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#C9A14A',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}>
                      {link.label}
                    </p>
                    {link.dropdown?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: '9px 0 9px 16px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: 'rgba(255,255,255,0.7)',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: '16px',
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              Hire Through BMSPL
            </Link>
          </div>
        )}

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 1024px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
          @media (min-width: 1025px) {
            .desktop-nav { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
        `}</style>
      </nav>

    </header>
  )
}