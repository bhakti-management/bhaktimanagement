"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutStorySection() {
  return (
    <Section className="bg-white !py-10 lg:!py-14">
      {/* Added horizontal padding to squish the grid inwards, matching the layout */}
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:px-16 xl:px-24">
        
        {/* LEFT COLUMN: CORPORATE TEAM PORTRAIT */}
        <div className="w-full flex justify-center lg:justify-start">
          {/* THE FIX: Fixed aspect ratio frame so the image doesn't balloon vertically */}
          <div className="w-full max-w-[420px] aspect-[4/5] rounded-[3px] overflow-hidden shadow-md">
            <img 
              src="/assets/corporate-team.jpg.png.png" 
              alt="BMSPL Corporate Team" 
              className="w-full h-full object-cover object-top block"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: OUR STORY DESCRIPTION CONTENT */}
        <div className="flex flex-col text-left w-full min-w-0">
          
          {/* Category Tag */}
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-3 uppercase">
            OUR STORY
          </div>

          {/* Title Header with Accent Border Line */}
          <div className="border-l-[3px] border-brand-gold pl-4 mb-5">
            <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy leading-tight font-serif m-0 tracking-tight">
              From Bhakti Consultants to BMSPL — A Journey Built on Purpose
            </h2>
          </div>

          {/* Body Narratives - Scaled down to 13px */}
          <div className="flex flex-col gap-4 mb-6">
            <p className="text-[13px] text-slate-600 leading-relaxed m-0 font-sans">
              In 1998, Col. (Dr.) Bhaktidev Gupta founded Bhakti Consultants in Gandhinagar, Gujarat — under the flagship of the DEV Group of Companies — with a clear and deliberate purpose: to build a genuine bridge between organizations, institutions, and individuals. What began as a focused advisory has evolved into BMSPL, a leader in institutional human capital management.
            </p>

            <p className="text-[13px] text-slate-600 leading-relaxed m-0 font-sans">
              We believe that workforce excellence is the foundation of national progress. Our methodology combines military-grade precision with deep industry insights, ensuring that every placement serves a strategic goal. For us, the right person in the right role doesn't happen by accident; it is the result of 25 years of refined expertise and an unwavering commitment to integrity.
            </p>
          </div>

          {/* Highlighted Quote Callout Panel Wrapper */}
          <div className="relative border-l-[3px] border-brand-gold pl-5 pt-1">
            {/* Adjusted decorative quote mark */}
            <span className="absolute left-2 -top-4 text-[40px] text-amber-100 font-bold font-serif select-none">“</span>
            
            <p className="text-[13px] text-brand-gold italic font-bold leading-relaxed mb-2 m-0 relative z-10">
              "If all of us can internalize the belief that a 'Happy Client' is everything — and be passionate about whatever we do — then the future of Bhakti will remain in good hands."
            </p>
            <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wider relative z-10">
              — Col. (Dr.) Bhaktidev Gupta, CMD, BMSPL
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}