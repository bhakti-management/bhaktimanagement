"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Section from './Section';

export default function FounderSection() {
  return (
    <Section className="bg-white py-6 md:py-8 box-border">
      <Container className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:px-16 xl:px-24">
        
        {/* LEFT COLUMN: FOUNDER IMAGE */}
        <div className="w-full lg:w-[42%] shrink-0 flex items-center justify-center">
          <img 
            src="/assets/images/founder-new.jpg" 
            alt="Col. (Dr.) Bhaktidev Gupta" 
            className="w-full max-w-[350px] h-auto object-contain rounded-card shadow-sm block"
          />
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col justify-center gap-3.5 w-full min-w-0 py-1">
          
          {/* Eyebrow */}
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest uppercase">
            Leadership & Vision
          </div>

          {/* Main Heading */}
          <h2 className="text-xl lg:text-2xl font-extrabold text-brand-navy m-0 font-serif tracking-tight leading-tight">
            Leadership Built on Experience. Driven by Purpose.
          </h2>

          {/* Short Introduction */}
          <p className="text-[15px] text-slate-600 m-0 leading-relaxed">
            Col. (Dr.) Bhaktidev Gupta, Founder & Managing Director of Bhakti Management Services, brings decades of leadership experience from the Indian Army and deep expertise in Human Resources, management and communication.
          </p>

          {/* Credentials - Compact 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 py-2.5 border-y border-slate-100 my-0.5">
            {[
              "Retired Indian Army Colonel",
              "B.Tech — IIT Kanpur",
              "M.Sc. — Mass Communication",
              "MBA — Human Resources",
              "Ph.D. — Human Resources",
              "Visiting Faculty — IIM"
            ].map((cred, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                <span>{cred}</span>
              </div>
            ))}
          </div>

          {/* Bhakti Journey / Story */}
          <div className="text-[15px] text-slate-500 leading-relaxed flex flex-col gap-1.5">
            <p className="m-0">
              Founded in 1998, Bhakti began with a vision to bring greater professionalism, integrity and reliability to India's workforce ecosystem.
            </p>
            <p className="m-0">
              Today, that vision has grown into a comprehensive HR and workforce solutions organization serving businesses and institutions across India.
            </p>
          </div>

          {/* Designation & CTA */}
          <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 pt-3">
            <div className="flex flex-col gap-0.5">
              <h4 className="text-[14px] font-bold text-brand-navy m-0 font-sans">
                Col. (Dr.) Bhaktidev Gupta
              </h4>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Founder & Managing Director
              </div>
            </div>
            <Link 
              href="/about" 
              className="text-xs font-bold text-brand-gold hover:text-brand-navy transition-colors uppercase tracking-widest inline-flex items-center gap-1.5 no-underline shrink-0"
            >
              <span>Discover Bhakti's Journey</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </Container>
    </Section>
  );
}