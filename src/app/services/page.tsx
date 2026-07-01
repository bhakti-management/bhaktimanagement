"use client";

import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function ServicesPage() {
  const steps = [
    { num: '1', title: 'UNDERSTAND', desc: 'In-depth requirement analysis and cultural fit assessment.', active: true },
    { num: '2', title: 'SOURCE', desc: 'Multi-channel talent sourcing from our expansive 25-year databank.', active: false },
    { num: '3', title: 'SCREEN', desc: 'Rigorous background checks and technical vetting processes.', active: false },
    { num: '4', title: 'DEPLOY', desc: 'Seamless onboarding and deployment across your locations.', active: false },
    { num: '5', title: 'SUPPORT', desc: 'Continuous performance monitoring and compliance audits.', active: false }
  ];

  const legalBadges = [
    'PF / ESI Regularity', 'Labour Law Mastery',
    'DGR Certification', 'Transparent Contracts',
    'Monthly Internal Audits', 'Zero Lapse Record'
  ];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: SERVICES HERO */}
      <section 
        className="w-full relative min-h-[65vh] md:min-h-[75vh] bg-[#051121] flex items-center py-16 px-6 box-border"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(5,17,33,0.85), rgba(5,17,33,0.85)), url("/assets/Header - Hero Section.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container className="relative z-10 text-left">
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">
            COMPLETE HR SOLUTIONS SINCE 1998
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-[800px] font-serif m-0">
            Every Workforce Need. One Trusted Partner.
          </h1>
          <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-[650px] m-0">
            From finding the right permanent hire to deploying contractual teams, securing your facilities, and developing your people — BMSPL delivers end-to-end workforce solutions across 15+ states.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-8 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer flex items-center gap-2 uppercase">
              <span>Find the Right Service</span>
              <span>→</span>
            </button>
            <button className="bg-transparent text-white border border-white/40 py-3.5 px-8 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 cursor-pointer uppercase">
              Talk to Our Team
            </button>
          </div>
        </Container>
      </section>

      {/* SECTION 2: CORE SERVICES SECTION */}
      <Section className="bg-white">
        <Container>
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-serif">Our Four Core Services</h2>
            <p className="text-sm md:text-base text-slate-500 m-0 max-w-[600px] leading-relaxed">
              Each division operates with dedicated expertise, processes, and people — unified under BMSPL's values of quality, integrity, and consistent delivery.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            
            {/* 1. Permanent Staffing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-left w-full min-w-0">
                <div className="text-brand-gold text-[11px] font-extrabold mb-2 tracking-wider uppercase">CAREER SHAPERS</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-serif">Permanent Staffing</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0 font-sans">
                  Leveraging a massive internal databank and rigorous screening to find long-term leadership and specialist talent. We ensure cultural fit and technical excellence for every placement.
                </p>
                <Link 
                  href="/services/permanent-staffing" 
                  className="no-underline inline-block bg-white border border-slate-300 py-2.5 px-5 text-xs font-bold text-brand-navy rounded-button hover:bg-slate-50 transition-colors uppercase tracking-wider"
                >
                  Explore Service →
                </Link>
              </div>
              <div className="w-full aspect-[16/10] overflow-hidden rounded-card shadow-card">
                <img src="/assets/service-permanent.jpg.png" alt="Permanent Staffing" className="w-full h-full object-cover block" />
              </div>
            </div>

            {/* 2. Contractual Staffing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 w-full aspect-[16/10] overflow-hidden rounded-card shadow-card">
                <img src="/assets/service-contractual.jpg.png" alt="Contractual Staffing" className="w-full h-full object-cover block" />
              </div>
              <div className="order-1 lg:order-2 text-left w-full min-w-0">
                <div className="text-brand-gold text-[11px] font-extrabold mb-2 tracking-wider uppercase">KVMS DIVISION</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-serif">Contractual Staffing</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0 font-sans">
                  High-scale deployment and end-to-end payrolling with absolute statutory compliance and legal indemnity. We manage the complexity so you can focus on growth.
                </p>
                <Link 
                  href="/services/contractual-staffing" 
                  className="no-underline inline-block bg-white border border-slate-300 py-2.5 px-5 text-xs font-bold text-brand-navy rounded-button hover:bg-slate-50 transition-colors uppercase tracking-wider"
                >
                  Explore Service →
                </Link>
              </div>
            </div>

            {/* 3. Security Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-left w-full min-w-0">
                <div className="text-brand-gold text-[11px] font-extrabold mb-2 tracking-wider uppercase">BDSS DIVISION</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-serif">Security Services</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0 font-sans">
                  DGR-registered agency providing disciplined, ex-army personnel for industrial and facility protection. Our security solutions are built on military-grade precision and trust.
                </p>
                <Link 
                  href="/services/security-services" 
                  className="no-underline inline-block bg-white border border-slate-300 py-2.5 px-5 text-xs font-bold text-brand-navy rounded-button hover:bg-slate-50 transition-colors uppercase tracking-wider"
                >
                  Explore Service →
                </Link>
              </div>
              <div className="w-full aspect-[16/10] overflow-hidden rounded-card shadow-card">
                <img src="/assets/service-security.jpg.jpg" alt="Security Services" className="w-full h-full object-cover block" />
              </div>
            </div>

            {/* 4. Training & Dev */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 w-full aspect-[16/10] overflow-hidden rounded-card shadow-card">
                <img src="/assets/service-training.jpg.png" alt="Training and Development" className="w-full h-full object-cover block" />
              </div>
              <div className="order-1 lg:order-2 text-left w-full min-w-0">
                <div className="text-brand-gold text-[11px] font-extrabold mb-2 tracking-wider uppercase">BMSPL ACADEMY</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-serif">Training & Dev</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0 font-sans">
                  Leadership development and practitioner-led workshops focused on army-grade discipline and modern management. We empower your workforce with the skills of tomorrow.
                </p>
                <Link 
                  href="/services/training-development" 
                  className="no-underline inline-block bg-white border border-slate-300 py-2.5 px-5 text-xs font-bold text-brand-navy rounded-button hover:bg-slate-50 transition-colors uppercase tracking-wider"
                >
                  Explore Service →
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* SECTION 3: PROCESS PIPELINE TIMELINE */}
      <Section className="bg-slate-50 text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4 font-serif">How BMSPL Works</h2>
          <p className="text-sm md:text-base text-slate-500 max-w-[650px] mx-auto mb-16 leading-relaxed">
            A system-driven, process-oriented approach that has delivered consistent results for 25+ years.
          </p>

          <div className="flex justify-between items-start flex-wrap gap-8">
            {steps.map((st) => (
              <div key={st.num} className="flex-1 min-w-[180px] flex flex-col items-center">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-extrabold mb-5 transition-all duration-200 border-2 ${st.active ? 'bg-brand-gold border-transparent text-brand-navy shadow-elevated' : 'bg-white border-slate-200 text-brand-navy'}`}
                >
                  {st.num}
                </div>
                <h4 className="text-[13px] font-extrabold text-brand-navy mb-2.5 tracking-wider uppercase font-sans">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0 max-w-[160px] font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4: COMPLIANCE GAVEL STATEMENT */}
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left w-full min-w-0">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4 font-serif">
              Full Compliance. <span className="text-brand-gold">Zero Risk to You.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8 m-0">
              One of the most common risks in workforce outsourcing is statutory non-compliance. BMSPL eliminates that risk entirely by maintaining institutional standards that exceed legal requirements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 box-border">
              {legalBadges.map((badge, idx) => (
                <div key={idx} className="border-l-4 border-brand-gold bg-slate-50 p-4 text-[13px] font-bold text-brand-navy flex items-center gap-2 rounded-r-[2px]">
                  <span className="text-brand-gold">✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <div className="relative max-w-[520px] w-full">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-card shadow-elevated">
                <img src="/assets/compliance-stamp.jpg.png" alt="Statutory Compliance Stamp" className="absolute inset-0 w-full h-full object-cover block" />
              </div>
              <div className="absolute -left-5 -bottom-5 bg-brand-navy text-white p-6 shadow-elevated rounded-card flex items-center gap-4">
                <div className="text-3xl font-extrabold text-brand-gold leading-none">25+</div>
                <div className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">YEARS OF COMPLIANCE</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: CLIENT REVIEWS */}
      <TestimonialsSection />

      {/* SECTION 6: BOTTOM CLOSING BANNER */}
      <Section className="bg-white border-t border-slate-100 text-center">
        <Container className="max-w-2xl flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight font-serif m-0">
            Not Sure Which Service Fits Your Need?
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[560px] m-0">
            Our team has been matching organizations with the right workforce solution for 25+ years. Tell us your requirement — we'll tell you the fastest path.
          </p>
          <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
            Talk to Our Team
          </button>
        </Container>
      </Section>

    </div>
  );
}
