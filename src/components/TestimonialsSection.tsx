"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function TestimonialsSection() {
  const reviews = [
    { text: `"BMSPL's ability to scale our workforce while maintaining strict adherence to our internal safety protocols has been remarkable."`, role: 'HEAD OF HR', name: 'Sonakoya' },
    { text: `"Reliable, responsive, and professional. Their recruitment team understands our technical requirements like no other partner."`, role: 'PLANT DIRECTOR', name: 'Roki Minda' },
    { text: `"The transparency in their payrolling process has completely eliminated our compliance headaches. A truly professional outfit."`, role: 'GENERAL MANAGER', name: 'Waterman Industries' },
    { text: `"Supporting our security and facility needs at Dholera SIR required a partner with massive scale and discipline. BMSPL delivered."`, role: 'OPERATIONS LEAD', name: 'Dholera SIR' }
  ];

  return (
    <Section className="bg-slate-50 !py-10 lg:!py-14 text-center border-t border-slate-100">
      {/* Added horizontal padding to squish the grid inwards, matching the Hero & Pillars */}
      <Container className="lg:px-16 xl:px-24">
        
        <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-8 font-serif tracking-tight leading-tight">
          Trusted by Industry Leaders
        </h2>
        
        {/* Compressed the gap between cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 box-border">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border-t-4 border-brand-gold p-5 md:p-6 text-left relative shadow-sm hover:shadow-md transition-shadow rounded-[3px] box-border flex flex-col justify-between"
            >
              {/* Soft decorative quotes watermark pushed to the background */}
              <span className="absolute right-4 top-2 text-[60px] text-slate-100 font-serif leading-none select-none pointer-events-none">
                ”
              </span>
              
              {/* Added relative and z-10 so text stays above the watermark, tightened font sizes */}
              <p className="text-[13px] text-slate-600 italic leading-relaxed mb-5 pr-6 font-sans relative z-10">
                {item.text}
              </p>
              
              {/* Anchored to bottom of card */}
              <div className="mt-auto relative z-10">
                <div className="text-[10px] font-extrabold text-brand-gold tracking-widest mb-0.5 font-sans uppercase">
                  {item.role}
                </div>
                <div className="text-[14px] font-bold text-brand-navy font-sans">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}