"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Section from './Section';

export default function InsightsSection() {
  const articles = [
    {
      img: '/assets/staffing-trends.jpg.jpg',
      tag: 'COMPLIANCE • 5 MIN READ',
      title: 'The Future of Contractual Staffing in Post-2025 India',
      desc: 'How emerging labor codes are reshaping the way Indian enterprises manage their temporary workforce.'
    },
    {
      img: '/assets/case-study.jpg.jpg',
      tag: 'CASE STUDY • 8 MIN READ',
      title: 'Scaling 2000+ Workers in 30 Days: A Success Story',
      desc: 'A deep dive into the logistical challenges and solutions in high-speed infrastructure projects...'
    },
    {
      img: '/assets/technology.jpg.jpg',
      tag: 'TECHNOLOGY • 4 MIN READ',
      title: 'Digital Payroll: 100% Statutory Adherence Guaranteed',
      desc: 'Exploring how automated systems reduce risk for large-scale employers and protect worker...'
    }
  ];

  return (
    <Section className="bg-white !py-10 border-t border-slate-50">
      {/* Added horizontal padding to align perfectly with Hero/Pillars */}
      <Container className="lg:px-16 xl:px-24">
        
        {/* Top Header Row Panel - Reduced bottom margin from mb-12 to mb-6 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 box-border">
          <div className="text-left w-full min-w-0">
            <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-2 font-serif tracking-tight">
              Industry Insights
            </h2>
            <p className="text-[13px] text-slate-500 m-0 leading-relaxed max-w-[520px]">
              Stay updated with labor law changes and staffing trends.
            </p>
          </div>
          
          <Link 
            href="/news-insights" 
            className="text-brand-gold hover:text-brand-navy no-underline text-[11px] font-extrabold tracking-widest inline-flex items-center gap-1.5 shrink-0 transition-colors uppercase"
          >
            <span>VIEW ALL INSIGHTS</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </div>

        {/* 3 Columns Articles Grid Container - Reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 box-border">
          {articles.map((post, idx) => (
            <div key={idx} className="flex flex-col text-left box-border group cursor-pointer">
              
              {/* Aspect Ratio Box (Changed to aspect-video to make images shorter) */}
              <div className="w-full aspect-video rounded-[3px] overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Orange/Gold Badge Tag text line */}
              <div className="text-[10px] font-extrabold text-brand-gold tracking-widest mb-1.5 font-sans uppercase">
                {post.tag}
              </div>

              {/* Article Heading - Shrunk to 15px */}
              <h3 className="text-[15px] font-bold text-brand-navy mb-2 leading-snug font-serif group-hover:text-brand-gold transition-colors">
                {post.title}
              </h3>

              {/* Article Description Summary - Shrunk to 12px */}
              <p className="text-[12px] text-slate-500 m-0 leading-relaxed font-sans">
                {post.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}