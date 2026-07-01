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
    <Section className="bg-slate-200 text-center">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-12 font-serif">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 box-border">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border-t-4 border-brand-gold p-8 md:p-10 text-left relative shadow-card rounded-card box-border"
            >
              {/* Soft decorative quotes watermark */}
              <span className="absolute right-8 top-5 text-[60px] text-slate-100 font-bold font-serif leading-none select-none">
                ”
              </span>
              
              <p className="text-sm md:text-base text-slate-600 italic leading-relaxed mb-6 max-w-[90%] font-sans">
                {item.text}
              </p>
              
              <div className="text-[11px] font-extrabold text-brand-gold tracking-widest mb-1 font-sans">
                {item.role}
              </div>
              <div className="text-base font-bold text-brand-navy font-sans">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
