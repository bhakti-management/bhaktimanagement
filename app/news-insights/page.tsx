"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

// Precision SVG vectors designed to scale cleanly across card containers
const ArchiveIcons = {
  Megaphone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  ),
  Training: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
};

export default function NewsInsightsPage() {
  const [activeFilter, setActiveFilter] = useState('All Updates');

  const filters = ['All Updates', 'SUMMIT ENGAGEMENT', 'EVENTS', 'TRAINING', 'INSIGHTS'];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HEADER & NAVIGATION FILTER PILLS */}
      <Section className="bg-white !py-10 lg:!py-12 border-b border-slate-100">
        {/* Added horizontal padding constraints to align with the rest of the site */}
        <Container className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:px-16 xl:px-24">
          <div className="text-left w-full min-w-0">
            <h1 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-2 font-serif tracking-tight">
              News & Insights Archive
            </h1>
            <p className="text-[13px] text-slate-500 max-w-[500px] leading-relaxed m-0">
              Exploring the intersection of corporate strategy, workforce development, and organizational excellence.
            </p>
          </div>

          {/* Filter Pills Block */}
          <div className="flex gap-2 flex-wrap mt-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border-none py-1.5 px-3.5 text-[10px] font-bold rounded-[3px] cursor-pointer tracking-wider uppercase transition-all ${isActive ? 'bg-brand-navy text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200/75'}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SECTION 2: LOCKED ASPECT FEATURED HERO STORY */}
      <Section className="bg-white !py-10 lg:!py-12">
        <Container className="lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row w-full rounded-[3px] overflow-hidden shadow-sm bg-brand-navy">
            {/* Left Column (Image) - 58% Width */}
            <div className="w-full lg:w-[58%] h-[280px] lg:h-[380px] relative overflow-hidden">
              <img 
                src="/assets/news-vibrant-gujarat.jpg.png" 
                alt="BMSPL Vibrant Gujarat Summit Exhibition Event" 
                className="w-full h-full object-cover block" 
              />
              {/* Category tag */}
              <div className="absolute bottom-5 left-5 bg-brand-gold text-brand-navy text-[10px] font-extrabold py-1 px-3 rounded-[3px] tracking-wider">
                SUMMIT ENGAGEMENT
              </div>
            </div>

            {/* Right Column (Content) - 42% Width */}
            <div className="w-full lg:w-[42%] h-auto lg:h-[380px] p-8 md:p-10 flex flex-col justify-center text-left box-border">
              <div className="text-slate-400 text-[10px] font-bold tracking-widest mb-2.5">
                FEATURED STORY — JAN 18, 2019
              </div>
              <h2 className="text-lg lg:text-xl font-bold text-white mb-3 leading-snug font-serif">
                BMSPL at Vibrant Gujarat 2019 — Connecting Industry with Workforce
              </h2>
              <p className="text-[12px] text-slate-300 leading-relaxed mb-6 m-0">
                Discover how BMSPL leveraged the prestigious Vibrant Gujarat Summit to forge meaningful connections between emerging industrial demands and the modern workforce infrastructure.
              </p>
              <a href="#" className="no-underline text-brand-gold text-[11px] font-bold tracking-widest inline-flex items-center gap-1.5 hover:text-brand-gold/80 transition-colors uppercase">
                <span>READ FULL REPORT</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: ARCHIVE CHANNELS GRID (Three-Column Cards) */}
      <Section className="bg-white !py-0 pb-12">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:px-16 xl:px-24">
          
          {/* Card 1: Republic Day */}
          <div className="bg-white border border-slate-200 rounded-[3px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all">
            <div className="relative h-[180px] overflow-hidden">
              <img src="/assets/news-republic-day.jpg.png" alt="BMSPL Office Celebrating Republic Day" className="w-full h-full object-cover block" />
              <div className="absolute top-3 left-3 bg-white text-brand-navy text-[9px] font-extrabold py-0.5 px-2 rounded-[2px] tracking-wider shadow-sm uppercase">
                EVENTS
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col text-left box-border">
              <div className="text-slate-400 text-[10px] font-bold mb-2">JAN 26, 2019</div>
              <h3 className="text-[14px] font-bold text-brand-navy mb-2.5 leading-snug font-serif">
                Republic Day 2019 at BMSPL — Team Celebration in...
              </h3>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-4 flex-grow">
                A day of national pride and collective spirit as our teams nationwide celebrated the Republic Day with traditional fervor and tricolour themes.
              </p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3 mt-auto">
                <a href="#" className="no-underline text-brand-navy text-[10px] font-extrabold tracking-wider hover:text-brand-gold transition-colors">LEARN MORE</a>
                <ArchiveIcons.Megaphone />
              </div>
            </div>
          </div>

          {/* Card 2: Training Workshop */}
          <div className="bg-white border border-slate-200 rounded-[3px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all">
            <div className="relative h-[180px] overflow-hidden">
              <img src="/assets/news-workshop.jpg.png" alt="Managerial Efficiency Workshop Presentation" className="w-full h-full object-cover block" />
              <div className="absolute top-3 left-3 bg-white text-brand-navy text-[9px] font-extrabold py-0.5 px-2 rounded-[2px] tracking-wider shadow-sm uppercase">
                TRAINING UPDATES
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col text-left box-border">
              <div className="text-slate-400 text-[10px] font-bold mb-2">OCT 12, 2018</div>
              <h3 className="text-[14px] font-bold text-brand-navy mb-2.5 leading-snug font-serif">
                Managerial Effectiveness Workshop at Sonakoya...
              </h3>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-4 flex-grow">
                Empowering leadership teams through intensive skill-building modules focused on operational excellence and modern management frameworks.
              </p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3 mt-auto">
                <a href="#" className="no-underline text-brand-navy text-[10px] font-extrabold tracking-wider hover:text-brand-gold transition-colors">READ FULL STORY</a>
                <ArchiveIcons.Training />
              </div>
            </div>
          </div>

          {/* Card 3: DGR Registration Insight */}
          <div className="bg-white border border-slate-200 rounded-[3px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all">
            <div className="relative h-[180px] overflow-hidden">
              <img src="/assets/news-dgr-seal.jpg.png" alt="DGR Registration Seal Stamp" className="w-full h-full object-cover block" />
              <div className="absolute top-3 left-3 bg-white text-brand-navy text-[9px] font-extrabold py-0.5 px-2 rounded-[2px] tracking-wider shadow-sm uppercase">
                INDUSTRY INSIGHTS
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col text-left box-border">
              <div className="text-slate-400 text-[10px] font-bold mb-2">SEP 05, 2018</div>
              <h3 className="text-[14px] font-bold text-brand-navy mb-2.5 leading-snug font-serif">
                Why DGR Registration Matters When Choosing a...
              </h3>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-4 flex-grow">
                Understanding the critical compliance frameworks and the value of Directorate General Resettlement (DGR) credentials in the security service industry.
              </p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3 mt-auto">
                <a href="#" className="no-underline text-brand-navy text-[10px] font-extrabold tracking-wider hover:text-brand-gold transition-colors">VIEW INSIGHT</a>
                <ArchiveIcons.Shield />
              </div>
            </div>
          </div>

        </Container>
      </Section>

      {/* SECTION 4: CENTERED ARCHIVE PAGINATION STRIP */}
      <Section className="bg-white !py-8 pb-16">
        <Container className="flex justify-center items-center gap-1.5 lg:px-16 xl:px-24">
          <button className="border border-slate-200 bg-white text-slate-300 w-7 h-7 rounded-[3px] text-[12px] cursor-not-allowed flex items-center justify-center font-bold font-sans">&lt;</button>
          <button className="border-none bg-brand-navy text-white w-7 h-7 rounded-[3px] text-[12px] font-bold cursor-pointer flex items-center justify-center font-sans">1</button>
          <button className="border border-slate-200 bg-white text-slate-600 w-7 h-7 rounded-[3px] text-[12px] cursor-pointer flex items-center justify-center font-sans hover:bg-slate-50">2</button>
          <button className="border border-slate-200 bg-white text-slate-600 w-7 h-7 rounded-[3px] text-[12px] cursor-pointer flex items-center justify-center font-sans hover:bg-slate-50">3</button>
          <span className="text-slate-400 px-1 text-[12px] font-sans">...</span>
          <button className="border border-slate-200 bg-white text-slate-600 w-7 h-7 rounded-[3px] text-[12px] cursor-pointer flex items-center justify-center font-sans hover:bg-slate-50">12</button>
          <button className="border border-slate-200 bg-white text-slate-600 w-7 h-7 rounded-[3px] text-[12px] cursor-pointer flex items-center justify-center font-sans hover:bg-slate-50">&gt;</button>
        </Container>
      </Section>

    </div>
  );
}