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
        { name: 'Overview', path: '/services' },
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
    <nav className="w-full bg-brand-navy border-b border-slate-800 sticky top-0 z-[100] shadow-card py-3 md:py-3.5 px-6 box-border">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center box-border">
        
        {/* Left: Branding Logo Image */}
        <Link href="/" className="flex items-center no-underline shrink-0 z-10">
          <img 
            src="/assets/bhakticompany.logo.png.svg" 
            alt="Bhakti Management Services" 
            className="h-10 md:h-[48px] w-auto block"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logo-fallback-text');
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span 
            id="logo-fallback-text"
            className="hidden text-white font-bold text-lg font-sans tracking-wide"
          >
            BHAKTI
          </span>
        </Link>

        {/* Center: Main Navigation Menu Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-sans text-[13px] font-semibold tracking-wider">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative group py-2"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.path} 
                className="text-white hover:text-brand-gold no-underline flex items-center gap-1 transition-colors uppercase"
              >
                <span>{item.name}</span>
                {item.dropdown && <span className="text-[9px] opacity-70 transition-transform group-hover:rotate-180">▼</span>}
              </Link>
              
              {/* Dropdown Card */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-elevated border border-slate-100 rounded-card py-2 z-[200]">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      href={subItem.path}
                      className="block px-5 py-2.5 text-brand-navy text-[13px] font-semibold hover:bg-slate-50 hover:text-brand-gold no-underline transition-all"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Gold CTA Button (Desktop) & Hamburger Toggle (Mobile) */}
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            href="/job-seekers#resume-form"
            className="hidden sm:inline-block bg-brand-gold text-brand-navy border-none py-2 px-5 font-bold text-[13px] tracking-wide rounded-button hover:brightness-110 shadow-flat z-10 transition-all no-underline"
          >
            HIRE THROUGH BMSPL
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white bg-transparent border-none p-1 cursor-pointer focus:outline-none z-10"
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

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-slate-800 shadow-elevated py-6 px-6 box-border flex flex-col gap-4 font-sans text-[14px] font-semibold">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-2 border-b border-slate-800 pb-2">
              <Link 
                href={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-brand-gold no-underline transition-colors uppercase"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="flex flex-col gap-2 pl-4 border-l border-slate-700 mt-1">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      href={subItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-brand-gold no-underline text-[13px] font-medium transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            href="/job-seekers#resume-form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-brand-gold text-brand-navy text-center py-2.5 px-4 font-bold text-[13px] tracking-wide rounded-button hover:brightness-110 shadow-flat transition-all no-underline block mt-2"
          >
            HIRE THROUGH BMSPL
          </Link>
        </div>
      )}
    </nav>
  );
}
