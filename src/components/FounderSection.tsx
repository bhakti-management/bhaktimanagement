"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function FounderSection() {
  return (
    <Section className="bg-slate-50">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: IMAGE PORTRAIT + OVERLAPPING BADGE */}
        <div className="relative w-full">
          {/* Main Visual Image container with border radius & shadow tokens */}
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-card shadow-elevated">
            <img 
              src="/assets/founder.jpg.png" 
              alt="Col. (Dr.) Bhaktidev Gupta" 
              className="absolute inset-0 w-full h-full object-cover block"
            />
          </div>

          {/* Overlapping Floating Quote Badge - placed outside overflow-hidden */}
          <div className="absolute -right-4 bottom-8 bg-brand-gold py-4 px-6 shadow-elevated rounded-[2px] min-w-[220px] box-border">
            <div className="text-sm font-bold text-brand-navy italic text-center">
              "Excellence through discipline."
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CREDENTIALS */}
        <div className="flex flex-col gap-6 w-full min-w-0">
          
          {/* Main Heading Text */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight font-serif m-0">
            Led by Experience. Built on Honor.
          </h2>

          {/* Golden Highlight Blockquote Wrapper */}
          <div className="border-l-4 border-brand-gold pl-5 my-1.5">
            <p className="text-base text-brand-navy italic m-0 leading-relaxed opacity-90">
              "At BMSPL, we don't just provide manpower; we provide peace of mind. Our mission is to professionalize Indian labor with dignity and institutional precision."
            </p>
          </div>

          {/* Main Biography Body text */}
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans m-0">
            Col. (Dr.) Bhaktidev Gupta brings over three decades of leadership from the Indian Army, combined with academic rigor from IIT and a PhD in HR Management. His vision transformed BMSPL from a local consultancy to a national workforce powerhouse.
          </p>

          {/* Signature Identity Info Stack */}
          <div className="flex flex-col gap-1 mt-2">
            <h4 className="text-xl font-bold text-brand-navy m-0 font-sans">
              Col. (Dr.) Bhaktidev Gupta
            </h4>
            <div className="text-[11px] font-extrabold text-brand-navy tracking-widest uppercase">
              MANAGING DIRECTOR & FOUNDER
            </div>
            <div className="text-[11px] font-bold text-slate-500 mt-0.5">
              IIT Alumnus | Army Veteran | PhD in Human Resources
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}
