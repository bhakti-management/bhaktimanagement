"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'HOME', path: '/' },
    { 
      name: 'ABOUT US', 
      path: '/about', 
      dropdown: [
        { name: 'Our Story', path: '/about' },
        { name: 'Why BMSPL', path: '/about/why-bmspl' },
        { name: 'Divisions & Programs', path: '/about/divisions-and-programs' }
      ]
    },
    { 
      name: 'SERVICES', 
      path: '/services', 
      dropdown: [
        { name: 'Permanent Staffing', path: '/services/permanent-staffing' },
        { name: 'Contractual Staffing', path: '/services/contractual-staffing' },
        { name: 'Security Services', path: '/services/security-services' },
        { name: 'Training & Development', path: '/services/training-development' }
      ]
    },
    { name: 'JOB SEEKERS', path: '/job-seekers' },
    { name: 'INSIGHTS', path: '/news-insights' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="w-full bg-brand-navy sticky top-0 z-[100] shadow-md py-4 px-6 box-border">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center box-border lg:px-4 xl:px-12">
        
        {/* Left: Branding Logo */}
        <Link href="/" className="flex items-center no-underline shrink-0 z-10">
          <img 
            src="/assets/bhakticompany.logo.png.svg" 
            alt="Bhakti Management Services" 
            className="h-10 md:h-12 w-auto block"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logo-fallback-text');
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span 
            id="logo-fallback-text"
            className="hidden font-bold text-xl font-sans tracking-tight"
            style={{ color: '#ffffff' }}
          >
            BMSPL
          </span>
        </Link>

        {/* Center: Main Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-7 font-sans text-[13px] font-semibold tracking-wide">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative group py-2"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* THE FIX: Using raw React inline style to guarantee white text */}
              <Link 
                href={item.path} 
                className="hover:text-brand-gold no-underline flex items-center gap-1.5 transition-colors uppercase"
                style={{ color: '#ffffff' }}
              >
                <span>{item.name}</span>
                {item.dropdown && <span className="text-[10px] opacity-80 transition-transform group-hover:rotate-180" style={{ color: 'var(--color-brand-gold)' }}>▼</span>}
              </Link>
              
              {/* Dropdown Card */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-elevated border border-slate-200 rounded-[3px] py-2 z-[200]">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      href={subItem.path}
                      className="block px-6 py-2.5 text-slate-700 text-[13px] hover:bg-slate-50 hover:text-brand-navy no-underline transition-all"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Gold CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            href="/upload-resume"
            className="hidden sm:inline-block bg-brand-gold text-brand-navy border-none py-2.5 px-6 font-bold text-[13px] rounded-[3px] hover:brightness-105 shadow-sm z-10 transition-all no-underline uppercase"
          >
            HIRE THROUGH BMSPL
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-transparent border-none p-1 cursor-pointer focus:outline-none z-10"
            style={{ color: '#ffffff' }}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-slate-800 shadow-elevated py-6 px-6 box-border flex flex-col gap-4 font-sans text-sm font-semibold">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-2 border-b border-slate-800 pb-3">
              <Link 
                href={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-gold no-underline transition-colors uppercase"
                style={{ color: '#ffffff' }}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="flex flex-col gap-3 pl-4 border-l border-slate-700 mt-2">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      href={subItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-white no-underline text-[13px] transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            href="/upload-resume"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-brand-gold text-brand-navy text-center py-3 px-4 font-bold text-[13px] rounded-[3px] hover:brightness-105 shadow-sm transition-all no-underline block mt-4 uppercase"
          >
            HIRE THROUGH BMSPL
          </Link>
        </div>
      )}
    </nav>
  );
}