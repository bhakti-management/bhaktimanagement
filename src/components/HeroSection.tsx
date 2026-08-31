"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Section from './Section';

export default function Hero() {
  return (
    <Section className="bg-white !pt-4 lg:!pt-6">
      {/* Added horizontal padding to align perfectly with the rest of the updated page */}
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:px-16 xl:px-24">

        {/* LEFT COLUMN: CONTENT */}
        <div className="flex flex-col gap-4 items-start w-full min-w-0">

          {/* Tagline Badge */}
          <div className="bg-slate-50 border border-slate-200 py-1 px-3 rounded-[3px]">
            <span className="text-[10px] font-bold text-slate-600 tracking-wider font-sans uppercase">
              TRUSTED HR & WORKFORCE SOLUTIONS SINCE 1998
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-extrabold text-brand-navy leading-[1.08] font-serif m-0 tracking-tight">
            Empowering India's Industry with Strategic Talent.
          </h1>

          {/* Subheading Description */}
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans m-0 font-normal max-w-xl">
            As a unit of the prestigious DEV Group of Companies, we bridge the gap between institutional potential and human excellence across 15+ states.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-1">
            <Link
              href="/services"
              className="bg-brand-gold text-brand-navy border-none py-3 px-6 font-bold text-[12px] tracking-wider rounded-[3px] hover:brightness-110 shadow-sm cursor-pointer transition-all no-underline uppercase"
            >
              HIRE THROUGH BMSPL
            </Link>

            <Link
              href="/jobs"
              className="bg-transparent text-brand-navy border border-brand-navy py-3 px-6 font-bold text-[12px] tracking-wider rounded-[3px] hover:bg-slate-50 cursor-pointer transition-all no-underline uppercase"
            >
              FIND YOUR NEXT ROLE
            </Link>
          </div>

          {/* Bottom Motto */}
          <div className="flex items-center gap-2 mt-2">
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="var(--color-brand-gold)"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>

            <span className="text-[13px] md:text-sm text-slate-700 font-semibold italic font-serif">
              “Our Clients, Our Priority”
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL */}
        <div className="relative w-full max-w-[600px] lg:ml-auto">

          {/* Main Visual */}
          <div className="relative w-full aspect-[5/4] overflow-hidden rounded-[4px] shadow-md">
            <img
              src="/assets/home-hero.jpg.jpg"
              alt="Strategic Handshake Partnership"
              className="absolute inset-0 w-full h-full object-cover block"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute left-3 sm:-left-4 bottom-3 sm:-bottom-4 bg-white border border-slate-100 py-3 px-4 shadow-md rounded-[3px] min-w-[155px] box-border">
            <div className="text-xl md:text-2xl font-extrabold text-brand-gold mb-0.5 font-sans">
              25,000+
            </div>

            <div className="text-[9px] md:text-[10px] font-extrabold text-brand-navy tracking-wider font-sans uppercase">
              LIVES IMPACTED ANNUALLY
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}