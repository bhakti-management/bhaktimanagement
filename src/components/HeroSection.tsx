"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function Hero() {
  return (
    <Section className="bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT COLUMN: CONTENT */}
        <div className="flex flex-col gap-6 items-start w-full min-w-0">
          
          {/* Tagline Badge */}
          <div className="bg-slate-50 border border-slate-200 py-1.5 px-3 rounded-[2px]">
            <span className="text-[11px] font-bold text-slate-600 tracking-wider font-sans uppercase">
              TRUSTED HR & WORKFORCE SOLUTIONS SINCE 1998
            </span>
          </div>

          {/* Main Heading with Playfair serif font */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight font-serif m-0">
            Empowering India's Industry with Strategic Talent.
          </h1>

          {/* Subheading Description */}
          <p className="text-base text-slate-600 leading-relaxed font-sans m-0 font-normal">
            As a unit of the prestigious DEV Group of Companies, we bridge the gap between institutional potential and human excellence across 15+ states.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-3">
            <button className="bg-brand-gold text-brand-navy border-none py-3.5 px-7 font-bold text-[13px] tracking-wider rounded-button hover:brightness-110 shadow-flat cursor-pointer transition-all">
              HIRE THROUGH BMSPL
            </button>
            <button className="bg-transparent text-brand-navy border border-brand-navy py-3.5 px-7 font-bold text-[13px] tracking-wider rounded-button hover:bg-slate-50 cursor-pointer transition-all">
              FIND YOUR NEXT ROLE
            </button>
          </div>

          {/* Bottom Motto */}
          <div className="flex items-center gap-2 mt-4">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[15px] text-slate-700 font-semibold italic font-serif">
              “Our Clients, Our Priority”
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL IMAGE WITH ASPECT RATIO FIX */}
        <div className="relative w-full">
          {/* Main Visual Image container with drop shadow & aspect ratio container clipping */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-card shadow-hero">
            <img 
              src="/assets/home-hero.jpg.jpg" 
              alt="Strategic Handshake Partnership" 
              className="absolute inset-0 w-full h-full object-cover block"
            />
          </div>

          {/* Overlapping Floating Stats Card */}
          <div className="absolute -left-5 -bottom-5 bg-white border border-slate-100 py-4 px-5 shadow-elevated rounded-card min-w-[180px] box-border">
            <div className="text-2xl font-extrabold text-brand-gold mb-0.5 font-sans">
              25,000+
            </div>
            <div className="text-[10px] font-extrabold text-brand-navy tracking-wider font-sans uppercase">
              LIVES IMPACTED ANNUALLY
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
