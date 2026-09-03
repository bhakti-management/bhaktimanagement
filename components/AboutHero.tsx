"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutHero() {
  return (
    <Section 
      className="bg-white relative overflow-hidden flex items-center justify-center !py-16 lg:!py-24 border-b border-slate-100"
    >
      {/* Background Image Layer */}
      {/* THE FIX: Updated to match your exact file name: about-hero.jpg.png */}
      <img 
        src="/assets/about-hero.jpg.png" 
        alt="BMSPL Team Strategy Meeting"
        className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none opacity-15"
      />

      {/* Foreground Content Wrapper */}
      <Container className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-5">
        
        {/* Top Mini Location Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500 tracking-widest font-sans uppercase">
          <span className="text-brand-gold text-[12px]">●</span>
          <span>EST. 1998 | GANDHINAGAR, GUJARAT</span>
        </div>

        {/* Main Tagline Heading */}
        <h1 className="text-3xl lg:text-[40px] font-extrabold text-brand-navy leading-tight font-serif m-0 tracking-tight">
          25 Years of Workforce Excellence. <br className="hidden md:block" />
          <span className="text-brand-gold">Built on Trust.</span> Delivered with Integrity.
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed max-w-[600px] mx-auto m-0 font-sans">
          An authority in institutional human capital management, bridging the gap between talent and opportunity since 1998.
        </p>

        {/* Centered Yellow Action Button */}
        <button className="bg-brand-gold text-brand-navy border-none py-3 px-7 font-bold text-[11px] tracking-widest rounded-[3px] hover:brightness-110 shadow-sm cursor-pointer transition-all mt-2 uppercase">
          Hire Through BMSPL
        </button>
      </Container>
    </Section>
  );
}