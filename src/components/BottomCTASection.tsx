"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function BottomCTASection() {
  return (
    <Section className="bg-slate-100 text-center">
      <Container className="flex flex-col items-center gap-9">
        {/* Centered Serif Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight font-serif m-0 max-w-[750px]">
          Partner with India's Most Compliant Workforce Provider.
        </h2>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap justify-center items-center gap-5 w-full box-border">
          {/* Navy Button */}
          <button className="bg-brand-navy text-white border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
            HIRE THROUGH BMSPL
          </button>
          
          {/* Yellow Button */}
          <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
            JOIN OUR TALENT POOL
          </button>
        </div>

        {/* Decorative Border Line & Quote Footer */}
        <div className="w-full max-w-[400px] flex flex-col items-center gap-5 mt-3">
          <div className="w-full h-px bg-slate-300 opacity-60" />
          <p className="text-sm md:text-base text-slate-500 m-0 leading-relaxed max-w-[340px] italic">
            "Connecting Human Potential with Organizational Goals since 1998."
          </p>
        </div>
      </Container>
    </Section>
  );
}
