"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function BottomCTASection() {
  return (
    <Section className="bg-slate-100 text-center !py-10 lg:!py-12 border-t border-slate-200">
      {/* Reduced the main gap between elements from gap-9 to gap-6 */}
      <Container className="flex flex-col items-center gap-6">
        
        {/* Centered Serif Heading - Shrunk down to 32px and tightened tracking */}
        <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy leading-tight font-serif m-0 max-w-[700px] tracking-tight">
          Partner with India's Most Compliant Workforce Provider.
        </h2>

        {/* Action Buttons Row - Tightened gap, smaller padding, smaller text */}
        <div className="flex flex-wrap justify-center items-center gap-4 w-full box-border">
          {/* Navy Button */}
          <button className="bg-brand-navy text-white border-none py-3 px-7 font-bold text-[11px] tracking-widest rounded-[3px] hover:brightness-110 shadow-md cursor-pointer transition-all uppercase">
            HIRE THROUGH BMSPL
          </button>
          
          {/* Yellow Button */}
          <button className="bg-brand-gold text-brand-navy border-none py-3 px-7 font-bold text-[11px] tracking-widest rounded-[3px] hover:brightness-110 shadow-md cursor-pointer transition-all uppercase">
            JOIN OUR TALENT POOL
          </button>
        </div>

        {/* Decorative Border Line & Quote Footer - Reduced margins and font sizes */}
        <div className="w-full max-w-[360px] flex flex-col items-center gap-3 mt-1">
          <div className="w-full h-px bg-slate-300 opacity-60" />
          <p className="text-[12px] md:text-[13px] text-slate-500 m-0 leading-relaxed max-w-[320px] italic font-sans">
            "Connecting Human Potential with Organizational Goals since 1998."
          </p>
        </div>
        
      </Container>
    </Section>
  );
}