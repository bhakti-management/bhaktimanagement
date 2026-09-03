"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function PermanentStaffingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { num: '1', title: 'Requirement Briefing', desc: 'In-depth breakdown of corporate talent requirements and institutional culture demands.' },
    { num: '2', title: 'Active Sourcing', desc: 'Deploying our deep 25-year databank alongside modern tech matching platforms.' },
    { num: '3', title: 'Vetting & Screening', desc: 'Multi-layer technical tests, background history validation, and expert vetting checks.' },
    { num: '4', title: 'Coordination', desc: 'Managing corporate interview processes smoothly to guarantee optimal selection speeds.' },
    { num: '5', title: 'Client Onboarding', desc: 'Finalizing compliance adherence mapping and integrating talent securely.' }
  ];

  const advantages = [
    { icon: '📁', title: '25-Year Database', desc: 'Instant access to qualified, pre-vetted active personnel pools.' },
    { icon: '🎯', title: 'Precision Matching', desc: 'Advanced screening metrics maximizing cultural and functional alignment.' },
    { icon: '🛡️', title: 'Senior-Level Focus', desc: 'Discreet executive mapping tailored for key leadership talent search.' },
    { icon: '⚡', title: 'Turnaround Time', desc: 'Highly optimized procedures reducing empty position vacancy durations.' },
    { icon: '🤝', title: 'Agreements & Guarantees', desc: 'Secure replacement coverage assurances backing every placement.' }
  ];

  const faqs = [
    { q: 'How do you check the quality of candidates?', a: 'We employ a robust multi-tiered vetting methodology combining technical assessments, peer reviews, and comprehensive multi-layer background credential checks.' },
    { q: 'What types of roles do you fulfill?', a: 'Our Career Shapers matrix spans specialized technical roles, executive management, C-suite appointments, and essential engineering functions.' },
    { q: 'Do you assist with executive headhunting?', a: 'Yes, we provide dedicated, discreet executive headhunting services backed by industry advisory insights.' },
    { q: 'What happens if a candidate leaves early?', a: 'Every engagement is backed by our standard compliance replacement guarantee framework to protect your operational investments.' },
    { q: 'Do you handle international placements?', a: 'We specialize heavily in Pan-India states across critical industrial hubs, ensuring absolute statutory compliance mapping locally.' }
  ];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HERO CONTAINER */}
      <Section className="bg-white !py-10 lg:!py-14 border-b border-slate-100">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:px-16 xl:px-24">
          <div className="text-left w-full min-w-0">
            <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-3 uppercase">PERMANENT RECRUITMENT SERVICES</div>
            <h1 className="text-3xl lg:text-[40px] font-extrabold text-brand-navy leading-tight mb-4 font-serif m-0 tracking-tight">
              Find the Right Person. First Time. Every Time.
            </h1>
            <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed mb-6 m-0 font-normal">
              Career Shapers — BMSPL's permanent staffing division — has been placing critical talent pools across sectors since 1998, ensuring strategic fit between institutional goals and professional talent.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-brand-navy text-white border-none py-3 px-6 font-bold text-[11px] tracking-widest rounded-[3px] hover:brightness-110 shadow-sm cursor-pointer transition-all uppercase">Submit Staffing Requirement</button>
              <button className="bg-white border border-slate-300 text-brand-navy py-3 px-6 font-bold text-[11px] tracking-widest rounded-[3px] hover:bg-slate-50 cursor-pointer transition-all uppercase">View How It Works</button>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] shadow-md">
              <img src="/assets/permanent-staffing-hero.jpg.png" alt="Strategic Executive Handshake" className="absolute inset-0 w-full h-full object-cover block" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: DEFINITION SPLIT BLOCK */}
      <Section className="bg-slate-50 !py-10 lg:!py-14 border-b border-slate-100">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start lg:px-16 xl:px-24">
          <div className="lg:col-span-2 text-left w-full min-w-0">
            <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-4 font-serif tracking-tight">What Permanent Staffing Actually Means</h2>
            <p className="text-[13px] text-slate-600 leading-relaxed mb-4 m-0 font-sans">
              Permanent staffing is more than filling an open position — it is an investment in long-term operational scaling. A permanent workforce drives standard continuity, institutional culture alignment, and structural leadership growth from within.
            </p>
            <div className="border-l-[3px] border-brand-gold pl-4 text-brand-gold text-[13px] md:text-[14px] font-bold italic">
              "We focus on the components that map to longevity: skill proficiency, structural alignment, and character pairing."
            </div>
          </div>
          <div className="bg-brand-navy text-white p-6 rounded-[3px] text-left shadow-sm w-full box-border">
            <h3 className="text-[15px] font-bold text-brand-gold mb-3 font-sans">Integrated Methodology</h3>
            <p className="text-[12px] text-slate-300 leading-relaxed mb-4 m-0">
              We merge traditional rigorous screening models with contemporary data analytics tools to produce shortlist matches that lower long-term turnover risk.
            </p>
            <div className="flex flex-col gap-2 text-[12px] font-semibold">
              <div>🔹 Cultural Alignment Verification</div>
              <div>🔹 Full Technical Competency Assurances</div>
              <div>🔹 Statutory & Reference Credential Mapping</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: RECRUITMENT JOURNEY TIMELINE */}
      <Section className="bg-white text-center !py-10 lg:!py-14">
        {/* Added horizontal padding constraints */}
        <Container className="lg:px-16 xl:px-24">
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-2 uppercase">ONLINE SYSTEM</div>
          {/* Scaled down heading */}
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-8 font-serif tracking-tight">Our Recruitment Journey</h2>
          
          {/* THE FIX: Replaced floating flex items with structured, bordered cards in a tight grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 box-border w-full items-stretch">
            {steps.map((st) => (
              <div key={st.num} className="bg-white border border-slate-200 p-5 rounded-[3px] shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all flex flex-col items-center box-border h-full">
                <div className="bg-brand-navy text-white w-7 h-7 flex items-center justify-center text-[12px] font-bold mb-3 rounded-[2px] shadow-sm">{st.num}</div>
                <h4 className="text-[13px] font-bold text-brand-navy mb-2 font-sans">{st.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed m-0 font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4: ROLES WE FILL MATRIX */}
      <Section className="bg-slate-50 !py-10 lg:!py-14 border-t border-slate-200">
        <Container className="lg:px-16 xl:px-24">
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-2 text-left font-serif tracking-tight">Roles We Fill</h2>
          <p className="text-[13px] text-slate-500 mb-8 text-left font-sans">We offer comprehensive recruitment across diverse functional streams and corporate verticals.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left box-border">
            <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-[3px] shadow-sm box-border">
              <h4 className="text-[15px] font-bold text-brand-navy mb-2.5 font-sans">Generalized Overview</h4>
              <p className="text-[12px] text-slate-600 leading-relaxed m-0 font-sans">From mid-management leaders to crucial factory floor engineering technical leads, we supply vetted personnel arrays matching specialized industrial parameters.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-[3px] shadow-sm box-border">
              <h4 className="text-[10px] font-extrabold text-brand-gold mb-3 tracking-widest uppercase">OFFICE ROLE</h4>
              <div className="flex flex-col gap-2 text-[12px] text-slate-600 font-semibold font-sans">
                <div>▪ Executive Leadership & C-Suite</div>
                <div>▪ Finance, Accounts & Taxes</div>
                <div>▪ Middle Management Leads</div>
                <div>▪ Personnel Administration</div>
                <div>▪ Human Resource Specialists</div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-[3px] shadow-sm box-border">
              <h4 className="text-[10px] font-extrabold text-brand-gold mb-3 tracking-widest uppercase">TECHNICAL ROLE</h4>
              <div className="flex flex-col gap-2 text-[12px] text-slate-600 font-semibold font-sans">
                <div>▪ Marine Engineering Experts</div>
                <div>▪ Chemical Factory Vetting</div>
                <div>▪ Manufacturing Plant Leads</div>
                <div>▪ QA/QC Technicians</div>
                <div>▪ Project Engineering Managers</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: ADVANTAGES GRID PANELS */}
      <Section className="bg-white text-center !py-10 lg:!py-14">
        <Container className="lg:px-16 xl:px-24">
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-3 font-serif tracking-tight">The BMSPL Advantage</h2>
          <p className="text-[13px] text-slate-500 mb-10 font-sans">Why leading corporate environments delegate crucial selection briefs to our teams.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 box-border">
            {advantages.map((adv, idx) => (
              <div key={idx} className={`bg-white border p-5 rounded-[3px] text-left flex flex-col gap-2 shadow-sm hover:shadow-md transition-all box-border ${idx === 2 ? 'border-t-[3px] border-brand-gold' : 'border-slate-200'}`}>
                <div className="text-xl mb-1">{adv.icon}</div>
                <h4 className="text-[13px] font-bold text-brand-navy m-0 font-sans">{adv.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed m-0 font-sans">{adv.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 6: HEAVY QUOTE PANEL TESTIMONIAL BLOCK */}
      <Section className="bg-brand-navy text-white !py-12 lg:!py-16">
        <Container className="max-w-4xl border-l-[3px] border-brand-gold pl-6 md:pl-10 relative lg:px-16 xl:px-24">
          <span className="absolute left-2 -top-5 text-[60px] text-white/10 font-serif leading-none select-none">“</span>
          <p className="text-[15px] md:text-[16px] leading-relaxed italic mb-5 text-slate-300 m-0 font-sans relative z-10">
            "BMSPL's Career Shapers division has been instrumental in our executive expansion. Their ability to understand the specific nuances of our industrial sector and deliver high-caliber candidates consistently is what sets them apart."
          </p>
          <div className="text-[14px] font-bold text-brand-gold font-sans relative z-10">Mr. Akash Patel</div>
          <div className="text-[11px] text-slate-400 font-sans relative z-10">Technical Operations Director</div>
        </Container>
      </Section>

      {/* SECTION 7: FAQ ACCORDION CONTAINER */}
      <Section className="bg-white text-center !py-10 lg:!py-14">
        <Container className="max-w-3xl lg:px-16 xl:px-24">
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-8 font-serif tracking-tight">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-[3px] overflow-hidden text-left shadow-sm">
                <div 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="bg-slate-50/50 p-4 px-5 font-bold text-[13px] md:text-[14px] text-brand-navy cursor-pointer flex justify-between items-center select-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-brand-gold text-[10px]">{openFaq === index ? '▼' : '▶'}</span>
                </div>
                {openFaq === index && (
                  <div className="p-4 px-5 text-[12px] text-slate-500 leading-relaxed border-t border-slate-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 8: FINAL CTA BANNER */}
      <Section className="bg-[#091a30] text-center !py-10 lg:!py-14">
        <Container className="max-w-2xl flex flex-col items-center gap-4 lg:px-16 xl:px-24">
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-white leading-tight font-serif m-0 tracking-tight">Ready to Find Your Next Great Hire?</h2>
          <p className="text-[13px] text-slate-400 leading-relaxed m-0">Discuss your conversion briefs with our selection team. Discover 25 years of corporate mapping legacy at your disposal.</p>
          <button className="bg-brand-gold text-brand-navy border-none py-3 px-7 font-bold text-[11px] tracking-widest rounded-[3px] hover:brightness-110 shadow-sm cursor-pointer transition-all uppercase mt-2">Submit Staffing Brief Requirement</button>
        </Container>
      </Section>

    </div>
  );
}