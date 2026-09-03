"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function CTASection() {
  const tags = ['#INDUSTRIAL', '#ITSTAFFING', '#SECURITY', '#PAYROLL'];

  return (
    <Section className="bg-brand-navy relative overflow-hidden !py-8 lg:!py-10">
      {/* Decorative vertical grid lines background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)',
          backgroundSize: '12.5% 100%'
        }}
      />
      
      {/* Added horizontal padding to align perfectly with Hero/Pillars */}
      <Container className="relative z-10 lg:px-16 xl:px-24">
        
        {/* Main Split Layout - Reduced gap and bottom padding */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-6 border-b border-white/10 box-border">
          
          {/* Left Info Column - Compressed gaps */}
          <div className="flex-1 flex flex-col gap-3.5 items-start w-full min-w-0">
            <h2 className="text-2xl lg:text-[32px] font-extrabold text-white m-0 font-serif leading-tight tracking-tight">
              Your Next Career Milestone Awaits.
            </h2>
            <p className="text-[13px] text-slate-300 m-0 leading-relaxed max-w-[500px]">
              Join a network of 50,000+ professionals working with India's top corporate and government entities.
            </p>
            
            {/* Horizontal Pills Grid - Shrunk pills */}
            <div className="flex gap-2 flex-wrap mt-1">
              {tags.map((tag) => (
                <div 
                  key={tag} 
                  className="bg-white/5 border border-white/15 py-1 px-2.5 rounded-[3px] text-slate-300 text-[10px] font-bold tracking-wider uppercase"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Buttons Action Row - Shrunk buttons */}
          <div className="flex gap-3 items-center flex-wrap min-w-[280px] w-full lg:w-auto justify-start lg:justify-end box-border">
            <button className="bg-brand-gold text-brand-navy border-none py-3 px-6 font-bold text-[11px] tracking-widest rounded-[3px] hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
              BROWSE OPENINGS
            </button>
            <button className="bg-transparent text-brand-gold border border-brand-gold py-2.5 px-6 font-bold text-[11px] tracking-widest rounded-[3px] hover:bg-white/5 cursor-pointer transition-all uppercase">
              UPLOAD RESUME
            </button>
          </div>
        </div>

        {/* Centered Yellow Disclaimer Text Line - Reduced top padding and font size */}
        <div className="text-center pt-5 text-brand-gold text-[10px] font-bold tracking-widest opacity-80 uppercase">
          100% FREE FOR CANDIDATES | NO PROCESSING FEES EVER
        </div>
      </Container>
    </Section>
  );
}