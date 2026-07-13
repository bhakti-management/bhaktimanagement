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
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left w-full min-w-0">
            <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">PERMANENT RECRUITMENT SERVICES</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight mb-5 font-serif m-0">
              Find the Right Person. First Time. Every Time.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-8 m-0 font-normal">
              Career Shapers — BMSPL's permanent staffing division — has been placing critical talent pools across sectors since 1998, ensuring strategic fit between institutional goals and professional talent.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-brand-navy text-white border-none py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">Submit Staffing Requirement</button>
              <button className="bg-white border border-slate-300 text-brand-navy py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:bg-slate-50 cursor-pointer transition-all uppercase">View How It Works</button>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-card shadow-card">
              <img src="/assets/permanent-staffing-hero.jpg.png" alt="Strategic Executive Handshake" className="absolute inset-0 w-full h-full object-cover block" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: DEFINITION SPLIT BLOCK */}
      <Section className="bg-slate-50">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 text-left w-full min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4 font-serif">What Permanent Staffing Actually Means</h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-4 m-0 font-sans">
              Permanent staffing is more than filling an open position — it is an investment in long-term operational scaling. A permanent workforce drives standard continuity, institutional culture alignment, and structural leadership growth from within.
            </p>
            <div className="border-l-4 border-brand-gold pl-4 text-brand-gold text-sm md:text-base font-bold italic">
              "We focus on the components that map to longevity: skill proficiency, structural alignment, and character pairing."
            </div>
          </div>
          <div className="bg-brand-navy text-white p-8 rounded-card text-left shadow-card w-full box-border">
            <h3 className="text-lg font-bold text-brand-gold mb-4 font-sans">Integrated Methodology</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-5 m-0">
              We merge traditional rigorous screening models with contemporary data analytics tools to produce shortlist matches that lower long-term turnover risk.
            </p>
            <div className="flex flex-col gap-2.5 text-xs md:text-sm font-semibold">
              <div>🔹 Cultural Alignment Verification</div>
              <div>🔹 Full Technical Competency Assurances</div>
              <div>🔹 Statutory & Reference Credential Mapping</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: RECRUITMENT JOURNEY TIMELINE */}
      <Section className="bg-white text-center">
        <Container>
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-2 uppercase">ONLINE SYSTEM</div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-12 font-serif">Our Recruitment Journey</h2>
          
          <div className="flex justify-between items-start flex-wrap gap-8">
            {steps.map((st) => (
              <div key={st.num} className="flex-1 min-w-[200px] flex flex-col items-center">
                <div className="bg-brand-navy text-white w-8 h-8 flex items-center justify-center text-sm font-bold mb-4 rounded-[2px]">{st.num}</div>
                <h4 className="text-sm font-bold text-brand-navy mb-2 font-sans">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0 max-w-[180px] font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4: ROLES WE FILL MATRIX */}
      <Section className="bg-slate-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-2 text-left font-serif">Roles We Fill</h2>
          <p className="text-sm md:text-base text-slate-500 mb-10 text-left font-sans">We offer comprehensive recruitment across diverse functional streams and corporate verticals.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left box-border">
            <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-card shadow-flat box-border">
              <h4 className="text-base font-bold text-brand-navy mb-2.5 font-sans">Generalized Overview</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0 font-sans">From mid-management leaders to crucial factory floor engineering technical leads, we supply vetted personnel arrays matching specialized industrial parameters.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-card shadow-flat box-border">
              <h4 className="text-[11px] font-extrabold text-brand-gold mb-3 tracking-widest uppercase">OFFICE ROLE</h4>
              <div className="flex flex-col gap-2 text-xs md:text-sm text-slate-600 font-semibold font-sans">
                <div>▪ Executive Leadership & C-Suite</div>
                <div>▪ Finance, Accounts & Taxes</div>
                <div>▪ Middle Management Leads</div>
                <div>▪ Personnel Administration</div>
                <div>▪ Human Resource Specialists</div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-card shadow-flat box-border">
              <h4 className="text-[11px] font-extrabold text-brand-gold mb-3 tracking-widest uppercase">TECHNICAL ROLE</h4>
              <div className="flex flex-col gap-2 text-xs md:text-sm text-slate-600 font-semibold font-sans">
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
      <Section className="bg-white text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4 font-serif">The BMSPL Advantage</h2>
          <p className="text-sm md:text-base text-slate-500 mb-12 font-sans">Why leading corporate environments delegate crucial selection briefs to our teams.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 box-border">
            {advantages.map((adv, idx) => (
              <div key={idx} className={`bg-white border p-6 rounded-card text-left flex flex-col gap-3 shadow-flat hover:shadow-card transition-all box-border ${idx === 2 ? 'border-t-4 border-brand-gold' : 'border-slate-200'}`}>
                <div className="text-2xl">{adv.icon}</div>
                <h4 className="text-sm md:text-base font-bold text-brand-navy m-0 font-sans">{adv.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0 font-sans">{adv.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 6: HEAVY QUOTE PANEL TESTIMONIAL BLOCK */}
      <Section className="bg-brand-navy text-white">
        <Container className="max-w-4xl border-l-4 border-brand-gold pl-8 md:pl-10 relative">
          <span className="absolute left-2.5 -top-6 text-[72px] text-white/10 font-serif leading-none select-none">“</span>
          <p className="text-lg md:text-xl leading-relaxed italic mb-6 text-slate-300 m-0 font-sans">
            "BMSPL's Career Shapers division has been instrumental in our executive expansion. Their ability to understand the specific nuances of our industrial sector and deliver high-caliber candidates consistently is what sets them apart."
          </p>
          <div className="text-base font-bold text-brand-gold font-sans">Mr. Akash Patel</div>
          <div className="text-xs text-slate-400 font-sans">Technical Operations Director</div>
        </Container>
      </Section>

      {/* SECTION 7: FAQ ACCORDION CONTAINER */}
      <Section className="bg-white text-center">
        <Container className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-10 font-serif">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3.5">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-card overflow-hidden text-left shadow-flat">
                <div 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="bg-slate-50/50 p-4.5 px-6 font-bold text-sm md:text-base text-brand-navy cursor-pointer flex justify-between items-center select-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-brand-gold text-[10px]">{openFaq === index ? '▼' : '▶'}</span>
                </div>
                {openFaq === index && (
                  <div className="p-4.5 px-6 text-[13px] text-slate-500 leading-relaxed border-t border-slate-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 8: FINAL CTA BANNER */}
      <Section className="bg-[#091a30] text-center">
        <Container className="max-w-2xl flex flex-col items-center gap-5">
          <h2 className="text-3xl font-extrabold text-white leading-tight font-serif m-0">Ready to Find Your Next Great Hire?</h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed m-0">Discuss your conversion briefs with our selection team. Discover 25 years of corporate mapping legacy at your disposal.</p>
          <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase mt-3">Submit Staffing Brief Requirement</button>
        </Container>
      </Section>

    </div>
  );
}
