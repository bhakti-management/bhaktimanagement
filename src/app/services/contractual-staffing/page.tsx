"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ContractualStaffingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const managementCycle = [
    { num: '01', title: 'Mobilization', desc: 'Rapid deployment pipelines getting personnel fully equipped and ready on-site matching project timelines.' },
    { num: '02', title: 'Onboarding', desc: 'Structured alignment including policy induction, verification, and safety adherence checks.' },
    { num: '03', title: 'Payroll & Benefits', desc: 'Automated processing ensuring timely salary disbursements, statutory contributions, and transparency.' },
    { num: '04', title: 'Legal Compliance', desc: 'Absolute coverage of labor laws, PF, ESIC, and local state regulations to isolate your liability.' },
    { num: '05', title: 'Performance Mgmt', desc: 'Real-time monitoring frameworks tracking floor productivity, attendance, and compliance.' },
    { num: '06', title: 'Demobilization', desc: 'Compliant exit transitions, clearing full and final settlements smoothly without friction.' }
  ];

  const highlights = [
    { title: 'Multi-Skilled', desc: 'Sourcing cross-functional operational profiles ready for diverse infrastructure demands.' },
    { title: 'Specific Match', desc: 'Tailoring parameters closely around technical specifications and project blueprints.' },
    { title: 'Cost-Effective', desc: 'Minimizing full-time overhead resource strain during volatile market fluctuations.' },
    { title: 'Legal Autonomy', desc: 'Complete insulation for your corporate entity through absolute third-party employment scaling.' }
  ];

  const clientLinks = [
    { name: 'GETCO', detail: 'Gujarat Energy Transmission Corporation Limited' },
    { name: 'UGVCL', detail: 'Uttar Gujarat Vij Company Limited' },
    { name: 'GSECL', detail: 'Gujarat State Electricity Corporation Limited' }
  ];

  const faqs = [
    { q: 'How does KVMS ensure 100% legal compliance?', a: 'We manage full end-to-end processing across statutory mechanisms including PF, ESIC, professional tax, and local contract labor regulations, providing full transparency reports monthly.' },
    { q: 'What is the average time to deploy 50+ staff members?', a: 'Our high-scale internal roster databases allow customized mobilization frameworks to get teams operational within 7 to 14 business days.' },
    { q: 'Can you manage workers in remote industrial sites?', a: 'Yes, we possess extensive logistics capabilities deploying specialized workforces across 15+ states including remote manufacturing zones and infrastructure fields.' }
  ];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HERO CONTAINER */}
      <Section className="bg-slate-100">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left w-full min-w-0">
            <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">CONTRACTUAL STAFFING & WORKFORCE SOLS</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight mb-5 font-serif m-0">
              Scale Your Workforce. Without the Compliance Burden.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-8 m-0">
              Leverage over 25 years of institutional experience in managing large-scale manpower deployments with absolute statutory integrity and commercial efficiency.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-brand-navy text-white border-none py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">Get Consultation</button>
              <button className="bg-white border border-slate-300 text-brand-navy py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:bg-slate-50 cursor-pointer transition-all uppercase">View Roster Scale</button>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-card shadow-card">
              <img src="/assets/contractual-staffing-hero.jpg.png" alt="Modern Corporate Glass Architecture Office Complex" className="absolute inset-0 w-full h-full object-cover block" />
            </div>
            {/* Floating Overlay Badge Counter */}
            <div className="absolute bottom-5 left-5 bg-white py-4 px-6 rounded-card border-l-4 border-brand-gold shadow-elevated">
              <div className="text-xl md:text-2xl font-extrabold text-brand-navy leading-none">15,000+</div>
              <div className="text-[11px] text-slate-500 font-bold mt-1 uppercase font-sans">Active Contractual Staff Across India</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: TRANSITIONAL WORKFORCE STRATEGY */}
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 text-left w-full min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4 font-serif leading-snug">The Shift from Transactional to Transformational Workforce Management</h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-4 m-0">
              In today's corporate landscape, temporary staffing is no longer just about deploying bodies. It is about legal insulation, risk mitigation, scalability, and absolute statutory accuracy.
            </p>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed m-0">
              KVMS, as the dedicated division of BMSPL, acts as your operational cushion—managing the entire lifecycle of your temporary lines while providing complete peace of mind and strict commitment to regulatory mechanics.
            </p>
          </div>
          <div className="bg-brand-navy text-white p-8 rounded-card text-left shadow-card w-full box-border">
            <h3 className="text-lg font-bold text-brand-gold mb-3 font-sans">Core Value</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed m-0">
              We eliminate technical compliance friction so your primary administration can focus entirely on strategic productivity gains and business growth parameters.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: COMPREHENSIVE MANAGEMENT CYCLE GRID */}
      <Section className="bg-slate-50 text-center">
        <Container>
          <div className="text-brand-navy text-[11px] font-extrabold tracking-widest mb-2 uppercase">SERVICE LIFECYCLE</div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-12 font-serif">Comprehensive Management Cycle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left box-border">
            {managementCycle.map((item) => (
              <div key={item.num} className="bg-white p-8 rounded-card border-l-4 border-brand-gold shadow-card box-border">
                <div className="text-sm font-extrabold text-brand-navy mb-3 uppercase font-sans">{item.num}. {item.title}</div>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4: ABOUT KVMS EXCELLENCE BLOCK */}
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left w-full min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4 font-serif">About KVMS: A Legacy of Excellence</h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0">
              Established in 1998 as a strategic division of BMSPL, KVMS was born out of a need for structured, compliant contractual manpower within heavy industrial and infrastructure segments. Today, it stands as a clear national market leader, managing massive asset operations with strict adherence to policy regulations.
            </p>
            <div className="flex gap-10 mb-6">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-navy">1998</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">FOUNDING YEAR</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-gold">100%</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">STATUTORY ADHERENCE</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 border-l-4 border-brand-gold text-[13px] text-slate-600 italic leading-relaxed rounded-r-[2px]">
              "Our operations deployment structure ensures ground-level regulatory tracking, leaving zero exposure to corporate liabilities."
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 box-border">
            {highlights.map((h, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-card shadow-flat box-border">
                <div className="w-2.5 h-2.5 bg-brand-gold rounded-full mb-3" />
                <h4 className="text-sm md:text-base font-bold text-brand-navy mb-1.5 font-sans">{h.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed m-0">{h.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 5: UNMATCHED SCALE ENTIRE BLOCK CONTAINER */}
      <Section className="bg-brand-navy text-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="text-left w-full min-w-0 flex flex-col gap-4">
            <div className="text-brand-gold text-[11px] font-extrabold tracking-widest uppercase">GOVERNMENT HUB</div>
            <h2 className="text-3xl font-extrabold text-white m-0 font-serif leading-tight">Unmatched Scale Across Government & PSUs</h2>
            <div className="flex gap-10 my-2.5">
              <div>
                <div className="text-3xl font-extrabold text-brand-gold">15+</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">STATES COVERED</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-gold">300+</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">SITES MANAGED</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2.5 border-t border-white/10 pt-5 box-border">
              {clientLinks.map((c) => (
                <div key={c.name} className="flex justify-between items-center p-3 px-4 bg-white/[0.02] border-l-4 border-brand-gold text-[13px] rounded-r-[2px]">
                  <span className="font-bold text-white">{c.name}</span>
                  <span className="text-slate-400 text-xs">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-card text-center box-border shadow-card flex flex-col items-center">
            <div className="text-3xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold text-white mb-3 font-sans">India-Wide Operations</h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-[440px] mx-auto mb-6">
              Managing high-volume and high-value contractual deployments across critical utility sectors, power transmission plants, and infrastructure facilities.
            </p>
            <div className="flex flex-wrap gap-2 justify-center text-[11px] font-bold text-brand-gold tracking-wider">
              {['GUJARAT', 'MAHARASHTRA', 'RAJASTHAN', 'MADHYA PRADESH', 'DELHI', 'KARNATAKA'].map(s => (
                <span key={s} className="bg-white/5 py-1.5 px-3.5 rounded-[2px]">{s}</span>
              ))}
            </div>
          </div>

        </Container>
      </Section>

      {/* SECTION 6: FAQ ACCORDION TIMELINES */}
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

      {/* SECTION 7: FINAL CTA SPLIT ACTION LINK */}
      <Section className="bg-[#091a30] text-center">
        <Container className="max-w-2xl flex flex-col items-center gap-5">
          <h2 className="text-3xl font-extrabold text-white leading-tight font-serif m-0">Ready to Optimize Your Contractual Workforce?</h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed m-0">
            Consult with a KVMS staffing specialist to blueprint a highly compliant manpower execution cycle that matches your operational requirements.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-3">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">Connect with a Specialist</button>
            <a href="tel:+912652312340" className="no-underline bg-transparent border border-white/20 text-white py-3.5 px-8 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 inline-flex items-center gap-2 uppercase">
              <span>📞</span>
              <span>+91 265 2312340</span>
            </a>
          </div>
        </Container>
      </Section>

    </div>
  );
}
