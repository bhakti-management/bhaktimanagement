"use client";

import React from 'react';
import Link from 'next/link';
import Section from './Section';
import Container from './Container';

export default function AudienceSelectionSection() {
  return (
    <Section className="bg-slate-50 border-y border-slate-100 py-8 md:py-10">
      <Container className="flex flex-col items-center text-center">
        {/* Eyebrow / Category Label */}
        <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-2.5 uppercase font-sans">
          HOW CAN WE HELP YOU?
        </div>

        {/* Main Title Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-2.5 font-serif">
          Who are you?
        </h2>

        {/* Supporting Description Subtext */}
        <p className="text-xs md:text-sm text-slate-500 max-w-[500px] leading-relaxed mb-8 font-sans">
          Choose the path that best matches what you're looking for.
        </p>

        {/* 2-Column Desktop Grid for Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl box-border">
          
          {/* CARD 1 — EMPLOYER (Navy Theme) */}
          <Link 
            href="/services" 
            className="no-underline rounded-card p-6 md:p-8 flex flex-col justify-between min-h-[270px] bg-brand-navy text-white border border-slate-800 transition-all duration-300 shadow-card hover:shadow-elevated hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold cursor-pointer box-border group"
            aria-label="Employers Journey: Looking to Hire? Find reliable workforce solutions."
          >
            <div>
              {/* Premium Business Case Icon */}
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--color-brand-gold)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mb-4 shrink-0 block"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>

              <div className="text-brand-gold text-[9px] font-extrabold tracking-wider uppercase mb-1.5 font-sans opacity-95">
                FOR EMPLOYERS
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 leading-tight font-serif">
                Looking to Hire?
              </h3>
              
              <p className="text-xs md:text-[13px] text-slate-300 leading-relaxed m-0 font-sans">
                Find reliable workforce solutions tailored to your business needs — from permanent staffing and contractual workforce to security and training.
              </p>
            </div>

            <div className="mt-6 text-left">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold group-hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-sans">
                <span>EXPLORE EMPLOYER SOLUTIONS</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>

          {/* CARD 2 — JOB SEEKER (Light Theme with Navy/Gold Border Accent) */}
          <Link 
            href="/jobs" 
            className="no-underline rounded-card p-6 md:p-8 flex flex-col justify-between min-h-[270px] bg-white text-brand-navy border-2 border-brand-navy border-t-4 border-t-brand-gold transition-all duration-300 shadow-card hover:shadow-elevated hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold cursor-pointer box-border group"
            aria-label="Job Seekers Journey: Looking for a Job? Explore opportunities."
          >
            <div>
              {/* Premium Graduation Cap Icon */}
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--color-brand-navy)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mb-4 shrink-0 block"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
              </svg>

              <div className="text-brand-navy/70 text-[9px] font-extrabold tracking-wider uppercase mb-1.5 font-sans">
                FOR JOB SEEKERS
              </div>
              
              <h3 className="text-xl font-bold text-brand-navy mb-2 leading-tight font-serif">
                Looking for a Job?
              </h3>
              
              <p className="text-xs md:text-[13px] text-slate-500 leading-relaxed m-0 font-sans">
                Explore current opportunities, find roles that match your skills, and connect with trusted employers through BMSPL.
              </p>
            </div>

            <div className="mt-6 text-left">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-navy group-hover:text-brand-gold transition-colors inline-flex items-center gap-1 font-sans">
                <span>FIND JOBS</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>

        </div>
      </Container>
    </Section>
  );
}
