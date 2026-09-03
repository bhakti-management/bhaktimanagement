"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function PillarsSection() {
  const pillars = [
    {
      title: 'DGR-Registered & Compliant',
      desc: 'Fully registered with the Directorate General Resettlement, ensuring highest security standards.',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="5" x2="5" y2="19" />
          <circle cx="6.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      )
    },
    {
      title: '100% Statutory Adherence',
      desc: 'Zero-litigation record with automated payroll, PF, ESIC, and labor law compliance.',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Unit of DEV Group',
      desc: 'Backed by the financial stability and ethical legacy of the DEV Group of Companies.',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <path d="M9 16h6v6" />
          <line x1="8" y1="6" x2="8" y2="6.01" />
          <line x1="16" y1="6" x2="16" y2="6.01" />
          <line x1="8" y1="10" x2="8" y2="10.01" />
          <line x1="16" y1="10" x2="16" y2="10.01" />
        </svg>
      )
    },
    {
      title: "Founder's Military Discipline",
      desc: 'Led by an Army veteran, instilling discipline and precision in every recruitment process.',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'Dual Focus Approach',
      desc: 'Balanced commitment to Employer satisfaction and Worker welfare.',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <Section className="bg-white !py-8 lg:!py-12 box-border">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:px-16 xl:px-24">
        
        {/* LEFT COLUMN: ULTRA-COMPACT TEXT LIST */}
        <div className="flex flex-col gap-4 w-full min-w-0">
          <div>
            <h2 className="text-2xl lg:text-[28px] font-extrabold text-brand-navy mb-1.5 font-serif tracking-tight leading-tight">
              The 5 Pillars of Institutional Trust
            </h2>
            <p className="text-[12px] text-slate-600 m-0 leading-normal max-w-[480px]">
              Why India's leading organizations choose BMSPL as their preferred workforce partner.
            </p>
          </div>

          {/* Pillars List Container */}
          <div className="flex flex-col gap-3 mt-1">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-3 items-start">
                {/* Gold Circle Badge (Shrunk) */}
                <div className="w-7 h-7 rounded-full bg-[#fff8e6] flex items-center justify-center shrink-0 mt-0.5">
                  {pillar.icon}
                </div>

                {/* Pillar Info (Shrunk) */}
                <div className="flex flex-col">
                  <h4 className="text-[13px] font-bold text-brand-navy m-0 font-sans">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 m-0 mt-0.5 leading-snug max-w-[420px]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: HQ IMAGE SHOWCASE */}
        <div className="w-full relative min-h-[250px] lg:h-auto rounded-[3px] shadow-md overflow-hidden bg-slate-50">
          <img 
            src="/assets/corporate-headquarters-new.jpg.png.png" 
            alt="Bhakti Corporate Headquarters" 
            className="absolute inset-0 w-full h-full object-cover block"
          />
        </div>

      </Container>
    </Section>
  );
}