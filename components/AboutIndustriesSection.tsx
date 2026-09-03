"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutIndustriesSection() {
  const logos = [
    '/assets/all-clients/logo-nirmiti.png.svg',
    '/assets/all-clients/logo-polyrub.png.svg',
    '/assets/all-clients/logo-caparo.png.svg',
    '/assets/all-clients/logo-nessa.png.svg',
    '/assets/all-clients/logo-gil.png.svg',
    '/assets/all-clients/logo-jbm.png.svg'
  ];

  const industries = [
    { title: 'Manufacturing', icon: '🏭' },
    { title: 'Power & Energy', icon: '⚡' },
    { title: 'Information Tech', icon: '💻' },
    { title: 'Banking & Finance', icon: '🏛️' },
    { title: 'Pharma & Healthcare', icon: '🏥' },
    { title: 'EPC & Realty', icon: '🛠️' },
    { title: 'Logistics', icon: '🚚' },
    { title: 'Agriculture', icon: '🚜' },
    { title: 'Retail & FMCG', icon: '🛒' },
    { title: 'Public Sector', icon: '🌐' }
  ];

  return (
    <div className="w-full font-sans box-border">
      
      {/* SECTION A: PARTNER TRUST LOGOS ROW */}
      <Section className="bg-white text-center !py-8 lg:!py-10">
        {/* Added horizontal padding constraint */}
        <Container className="lg:px-16 xl:px-24">
          <h4 className="text-[10px] font-extrabold text-slate-400 mb-6 tracking-widest uppercase">
            Trusted by Leading Organizations Across India
          </h4>
          <div className="flex flex-row justify-center md:justify-between items-center flex-wrap gap-6 md:gap-8">
            {logos.map((src, index) => (
              <div key={index} className="flex-1 min-w-[100px] max-w-[120px] flex justify-center items-center">
                <img 
                  src={src} 
                  alt="Corporate Partner Logo" 
                  className="w-full h-auto block object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" 
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION B: 10 INDUSTRIES MATRIX PANEL */}
      <Section className="bg-brand-navy text-white text-center !py-10 lg:!py-14">
        {/* Added horizontal padding constraint */}
        <Container className="lg:px-16 xl:px-24">
          
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-2.5 uppercase">
            INDUSTRIES WE SERVE
          </div>
          
          {/* Compacted typography */}
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-white mb-3 font-serif tracking-tight leading-tight">
            One Partner Across Ten Industries
          </h2>
          <p className="text-[13px] text-slate-400 max-w-[600px] mx-auto mb-10 leading-relaxed">
            BMSPL's client base spans every major sector of the Indian economy — from heavy infrastructure to financial services, from government utilities to technology.
          </p>

          {/* Responsive 5x2 Flex/Grid Box Array - Reduced gaps and padding */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="border border-brand-gold/20 bg-white/[0.02] p-4 md:p-5 rounded-[3px] flex flex-col items-center justify-center gap-2 hover:bg-white/[0.05] hover:border-brand-gold/40 transition-all box-border shadow-sm"
              >
                <div className="text-xl text-brand-gold mb-0.5">{ind.icon}</div>
                <div className="text-[12px] font-bold text-white tracking-wide text-center">{ind.title}</div>
              </div>
            ))}
          </div>
          
        </Container>
      </Section>

    </div>
  );
}