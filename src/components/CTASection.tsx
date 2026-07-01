"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function CTASection() {
  const tags = ['#INDUSTRIAL', '#ITSTAFFING', '#SECURITY', '#PAYROLL'];

  return (
    <Section className="bg-brand-navy relative overflow-hidden">
      {/* Decorative vertical grid lines background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)',
          backgroundSize: '12.5% 100%'
        }}
      />
      
      <Container className="relative z-10">
        {/* Main Split Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-10 border-b border-white/5 box-border">
          {/* Left Info Column */}
          <div className="flex-1 flex flex-col gap-6 items-start w-full min-w-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0 font-serif leading-tight">
              Your Next Career Milestone Awaits.
            </h2>
            <p className="text-base text-slate-400 m-0 leading-relaxed max-w-[540px]">
              Join a network of 50,000+ professionals working with India's top corporate and government entities.
            </p>
            
            {/* Horizontal Pills Grid */}
            <div className="flex gap-2.5 flex-wrap">
              {tags.map((tag) => (
                <div 
                  key={tag} 
                  className="bg-white/5 border border-white/15 py-1.5 px-3 rounded-button text-slate-400 text-[11px] font-bold tracking-wider uppercase"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Buttons Action Row */}
          <div className="flex gap-4 items-center flex-wrap min-w-[280px] w-full lg:w-auto justify-start lg:justify-end box-border">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-7 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
              BROWSE OPENINGS
            </button>
            <button className="bg-transparent text-brand-gold border-2 border-brand-gold py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 cursor-pointer transition-all uppercase">
              UPLOAD RESUME
            </button>
          </div>
        </div>

        {/* Centered Yellow Disclaimer Text Line */}
        <div className="text-center pt-8 text-brand-gold text-xs font-bold tracking-widest opacity-80 uppercase">
          100% FREE FOR CANDIDATES | NO PROCESSING FEES EVER
        </div>
      </Container>
    </Section>
  );
}
