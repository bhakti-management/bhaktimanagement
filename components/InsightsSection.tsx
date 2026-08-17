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
    <Section className="bg-white">
      <Container>
        {/* Top Header Row Panel */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 box-border">
          <div className="text-left w-full min-w-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-serif">
              Industry Insights
            </h2>
            <p className="text-base text-slate-500 m-0 leading-relaxed max-w-[520px]">
              Stay updated with labor law changes and staffing trends.
            </p>
          </div>
          
          <Link 
            href="/news-insights" 
            className="text-brand-gold hover:text-brand-gold-dark no-underline text-[13px] font-extrabold tracking-widest inline-flex items-center gap-1.5 shrink-0 transition-colors uppercase"
          >
            <span>VIEW ALL INSIGHTS</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </div>

        {/* 3 Columns Articles Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 box-border">
          {articles.map((post, idx) => (
            <div key={idx} className="flex flex-col text-left box-border">
              {/* Aspect Ratio Box Image Wrapper with rounding */}
              <div className="w-full aspect-[16/10] rounded-card overflow-hidden bg-slate-100 mb-[18px] shadow-flat">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover block" 
                />
              </div>

              {/* Orange/Gold Badge Tag text line */}
              <div className="text-[11px] font-extrabold text-brand-gold tracking-widest mb-2.5 font-sans">
                {post.tag}
              </div>

              {/* Article Heading */}
              <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug font-serif">
                {post.title}
              </h3>

              {/* Article Description Summary */}
              <p className="text-sm text-slate-500 m-0 leading-relaxed font-sans">
                {post.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
