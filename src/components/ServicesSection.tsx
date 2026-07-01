"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Section from './Section';

export default function ServicesSection() {
  const servicesList = [
    {
      title: 'Permanent Staffing',
      desc: 'Executive search and talent acquisition for core leadership and technical roles.',
      linkText: 'EXPLORE STAFFING',
      linkUrl: '/services/permanent-staffing',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      )
    },
    {
      title: 'Contractual Staffing',
      desc: 'End-to-end management of temporary workforce with 100% statutory compliance.',
      linkText: 'EXPLORE PAYROLL',
      linkUrl: '/services/contractual-staffing',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Security Services',
      desc: 'DGR-registered security personnel for industrial and corporate protection.',
      linkText: 'EXPLORE SECURITY',
      linkUrl: '/services/security-services',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
          <path d="M7 17c0-2 2-3 5-3s5 1 5 3" />
        </svg>
      )
    },
    {
      title: 'Training & Development',
      desc: 'Customized skill enhancement programs to bridge the industry-readiness gap.',
      linkText: 'EXPLORE TRAINING',
      linkUrl: '/services/training-development',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
      )
    }
  ];

  return (
    <Section className="bg-white text-center">
      <Container>
        {/* Small Category Label */}
        <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">
          SERVICES
        </div>

        {/* Main Title Head */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-serif">
          Comprehensive HR & Workforce Ecosystem
        </h2>

        {/* Description Paragraph */}
        <p className="text-base text-slate-600 max-w-[700px] mx-auto mb-16 leading-relaxed">
          Tailored solutions designed to mitigate operational risk and maximize human capital efficiency.
        </p>

        {/* Four Cards Grid Layout Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 box-border">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white border border-amber-100 rounded-card p-8 text-left flex flex-col justify-between min-h-[340px] shadow-card hover:shadow-elevated transition-all box-border"
            >
              <div>
                {/* Graphic Icon Wrapper */}
                <div className="mb-6">
                  {service.icon}
                </div>

                {/* Card Title Header */}
                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight font-sans">
                  {service.title}
                </h3>

                {/* Card Body Description Paragraph */}
                <p className="text-[13px] md:text-[14px] text-slate-500 mb-6 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Explore URL Hyperlink Text */}
              <Link 
                href={service.linkUrl} 
                className="text-[11px] font-extrabold text-brand-navy hover:text-brand-gold no-underline tracking-widest inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{service.linkText}</span>
                <span className="text-[12px]">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
