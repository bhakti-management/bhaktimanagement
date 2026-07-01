"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutStorySection() {
  return (
    <Section className="bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: CORPORATE TEAM PORTRAIT */}
        <div className="w-full flex justify-center">
          <img 
            src="/assets/corporate-team.jpg.png" 
            alt="BMSPL Corporate Team" 
            className="w-full max-w-[480px] h-auto rounded-card shadow-card block"
          />
        </div>

        {/* RIGHT COLUMN: OUR STORY DESCRIPTION CONTENT */}
        <div className="flex flex-col text-left w-full min-w-0">
          {/* Category Tag */}
          <div className="text-brand-gold text-[12px] font-extrabold tracking-widest mb-3 uppercase">
            OUR STORY
          </div>

          {/* Title Header with Accent Border Line */}
          <div className="border-l-4 border-brand-gold pl-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy leading-snug font-serif m-0">
              From Bhakti Consultants to BMSPL — A Journey Built on Purpose
            </h2>
          </div>

          {/* Body Narratives */}
          <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-4 m-0 font-sans">
            In 1998, Col. (Dr.) Bhaktidev Gupta founded Bhakti Consultants in Gandhinagar, Gujarat — under the flagship of the DEV Group of Companies — with a clear and deliberate purpose: to build a genuine bridge between organizations, institutions, and individuals. What began as a focused advisory has evolved into BMSPL, a leader in institutional human capital management.
          </p>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8 m-0 font-sans">
            We believe that workforce excellence is the foundation of national progress. Our methodology combines military-grade precision with deep industry insights, ensuring that every placement serves a strategic goal. For us, the right person in the right role doesn't happen by accident; it is the result of 25 years of refined expertise and an unwavering commitment to integrity.
          </p>

          {/* Highlighted Quote Callout Panel Wrapper */}
          <div className="relative border-l-4 border-brand-gold pl-6 pt-2">
            <span className="absolute left-2.5 -top-6 text-[54px] text-amber-100 font-bold font-serif select-none">“</span>
            
            <p className="text-sm md:text-base text-brand-gold italic font-bold leading-relaxed mb-3 m-0">
              "If all of us can internalize the belief that a 'Happy Client' is everything — and be passionate about whatever we do — then the future of Bhakti will remain in good hands."
            </p>
            <div className="text-sm font-bold text-brand-navy">
              — Col. (Dr.) Bhaktidev Gupta, CMD, BMSPL
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
