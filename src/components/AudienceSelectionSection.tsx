"use client";

import React from 'react';
import Link from 'next/link';
import Section from './Section';
import Container from './Container';

export default function AudienceSelectionSection() {
  return (
    <Section className="bg-white !py-10 lg:!py-12">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row rounded-[4px] overflow-hidden shadow-md border border-slate-200">
          
          {/* Left Half (For Employers) */}
          <Link 
            href="/services" 
            className="w-full md:w-1/2 bg-brand-navy p-6 md:p-8 flex items-center gap-5 relative group hover:bg-[#0a1f3a] transition-all cursor-pointer no-underline box-border animate-none"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center shrink-0">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--color-brand-gold)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>

            {/* Text Flex column */}
            <div className="flex-1 flex flex-col gap-1 text-left min-w-0">
              <span className="text-brand-gold text-[10px] font-bold tracking-widest uppercase">
                FOR EMPLOYERS
              </span>
              <h3 className="text-[18px] text-white font-serif font-bold m-0 leading-snug">
                Hire Elite Talent
              </h3>
              <p className="text-[12px] text-slate-300 m-0 leading-relaxed">
                Find reliable workforce solutions tailored to your sector.
              </p>
            </div>

            {/* Action Arrow */}
            <span className="text-xl text-brand-gold transition-transform duration-200 group-hover:translate-x-1 shrink-0">
              →
            </span>
          </Link>

          {/* Right Half (For Job Seekers) */}
          <Link 
            href="/jobs" 
            className="w-full md:w-1/2 bg-white p-6 md:p-8 flex items-center gap-5 relative group hover:bg-slate-50 transition-all cursor-pointer border-t border-slate-200 md:border-t-0 md:border-l border-slate-200 no-underline box-border animate-none"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--color-brand-navy)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>

            {/* Text Flex column */}
            <div className="flex-1 flex flex-col gap-1 text-left min-w-0">
              <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">
                FOR JOB SEEKERS
              </span>
              <h3 className="text-[18px] text-brand-navy font-serif font-bold m-0 leading-snug">
                Find Your Next Role
              </h3>
              <p className="text-[12px] text-slate-500 m-0 leading-relaxed">
                Explore opportunities and connect with trusted employers.
              </p>
            </div>

            {/* Action Arrow */}
            <span className="text-xl text-brand-navy transition-transform duration-200 group-hover:translate-x-1 shrink-0">
              →
            </span>
          </Link>

        </div>
      </Container>
    </Section>
  );
}
