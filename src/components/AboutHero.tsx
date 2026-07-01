"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutHero() {
  return (
    <Section 
      className="bg-white relative overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[70vh]"
    >
      {/* Background Image Layer with light transparency overlay */}
      <div 
        className="absolute inset-0 bg-cover opacity-15 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/about-hero.jpg.png")',
          backgroundPosition: '50% 35%',
        }}
      />

      {/* Foreground Content Wrapper */}
      <Container className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-6">
        
        {/* Top Mini Location Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 tracking-widest font-sans uppercase">
          <span className="text-brand-gold text-sm">●</span>
          <span>EST. 1998 | GANDHINAGAR, GUJARAT</span>
        </div>

        {/* Massive Main Tagline Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight font-serif m-0">
          25 Years of Workforce Excellence. <span className="text-brand-gold">Built on Trust.</span> Delivered with Integrity.
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[680px] mx-auto m-0 font-sans">
          An authority in institutional human capital management, bridging the gap between talent and opportunity since 1998.
        </p>

        {/* Centered Yellow Action Button */}
        <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all mt-2 uppercase">
          Hire Through BMSPL
        </button>
      </Container>
    </Section>
  );
}
