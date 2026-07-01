"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutIndustriesSection() {
  const logos = [
    '/assets/logo-nirmiti.png.svg',
    '/assets/logo-polyrub.png.svg',
    '/assets/logo-caparo.png.svg',
    '/assets/logo-nessa.png.svg',
    '/assets/logo-gil.png.svg',
    '/assets/logo-jbm.png.svg'
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
      <Section className="bg-white text-center">
        <Container>
          <h4 className="text-sm font-extrabold text-slate-800 mb-10 tracking-wider">
            Trusted by Leading Organizations Across India
          </h4>
          <div className="flex flex-row justify-between items-center flex-wrap gap-8">
            {logos.map((src, index) => (
              <div key={index} className="flex-1 min-w-[120px] flex justify-center items-center">
                <img 
                  src={src} 
                  alt="Corporate Partner Logo" 
                  className="max-w-[140px] max-h-[50px] w-auto h-auto block object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" 
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION B: 10 INDUSTRIES MATRIX PANEL */}
      <Section className="bg-brand-navy text-white text-center">
        <Container>
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4 font-serif">
            One Partner Across Ten Industries
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-[720px] mx-auto mb-12 leading-relaxed">
            BMSPL's client base spans every major sector of the Indian economy — from heavy infrastructure to financial services, from government utilities to technology.
          </p>

          {/* Responsive 5x2 Flex/Grid Box Array */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="border border-brand-gold/30 bg-white/[0.02] p-8 rounded-card flex flex-col items-center justify-center gap-3 min-h-[130px] hover:bg-white/[0.05] transition-all box-border"
              >
                <div className="text-2xl text-brand-gold">{ind.icon}</div>
                <div className="text-sm font-bold text-white tracking-wide">{ind.title}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </div>
  );
}
