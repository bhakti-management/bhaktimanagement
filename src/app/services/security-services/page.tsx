"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

const Icons = {
  Industrial: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10l10-8z"/>
      <path d="M12 22V10"/>
    </svg>
  ),
  Commercial: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <line x1="9" y1="22" x2="9" y2="16"/>
      <line x1="15" y1="22" x2="15" y2="16"/>
      <line x1="9" y1="16" x2="15" y2="16"/>
    </svg>
  ),
  Residential: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Government: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22V10M20 22V10M2 22h20M12 2v4M12 6H8M12 6h4"/>
    </svg>
  ),
  Detective: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Housekeeping: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0 -18 0"/>
    </svg>
  )
};

export default function SecurityServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const capabilities = [
    { title: 'Industrial Security', desc: 'Rigorous protection protocol blueprints tailored around heavy machinery zones, infrastructure installations, and factory logistics complexes.', icon: Icons.Industrial },
    { title: 'Commercial Security', desc: 'Smart asset control systems engineered to safeguard high-profile corporate tech environments, banking hubs, and administrative headquarters.', icon: Icons.Commercial },
    { title: 'Residential Security', desc: 'Premium executive protection frameworks covering luxury residential zones, community parameters, and active monitoring models.', icon: Icons.Residential },
    { title: 'Government & PSU', desc: 'Specialized DGR-registered security networks engineered to support Public Sector Undertakings with rigid policy adherence blueprints.', icon: Icons.Government },
    { title: 'Detective & Investigation', desc: 'Discreet background mapping systems, corporate fraud assessments, and rigorous institutional asset validation analysis.', icon: Icons.Detective },
    { title: 'Housekeeping Services', desc: 'Integrated facility management programs tailored seamlessly alongside your core security parameters to enhance daily workplace performance.', icon: Icons.Housekeeping }
  ];

  const processingSteps = [
    { num: '01', title: 'Requirement', desc: 'Analyzing critical structural vulnerabilities and institutional security requirements.' },
    { num: '02', title: 'Personnel Selection', desc: 'Matching specific profiles based on technical skill vetting and military tactical experience fields.' },
    { num: '03', title: 'Background Verification', desc: 'Rigorous background clearance processing alongside multi-layered reference validation checks.' },
    { num: '04', title: 'Training & Induction', desc: 'Specialized preparation covering facility architecture protocols, safety handling, and response mechanics.' },
    { num: '05', title: 'Deployment & Rep.', desc: 'Seamless integration of guard units on-site complete with absolute equipment readiness setups.' },
    { num: '06', title: 'Review & Reporting', desc: 'Continuous performance quality audits accompanied by periodic management reporting matrices.' }
  ];

  const trustClients = [
    'GETCO', 'UGVCL', 'GSECL', 'Solar Authority of India', 'Gujarat Ports', 'MGVCL'
  ];

  const faqs = [
    { q: 'What makes your agency different from typical guard providers?', a: 'BMSPL is a DGR-registered agency deploying heavily disciplined ex-army and defense-trained professionals backed by structured standard operating procedures and legal compliance.' },
    { q: 'Do you provide armed security personnel for high-risk spaces?', a: 'Yes, we possess complete authorization arrays supplying licensed, expert armed personnel tailored specifically for high-security industrial areas and asset vaults.' },
    { q: 'Are all your security guards background verified by local authorities?', a: 'Absolutely. Every individual undergoes strict police background verification mapping and internal security clearing before deployment.' }
  ];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section 
        className="w-full relative min-h-[65vh] md:min-h-[75vh] bg-[#0c1824] flex items-center py-16 px-6 box-border"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(12,24,36,0.75), rgba(12,24,36,0.75)), url("/assets/security-services-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%',
        }}
      >
        <Container className="relative z-10 text-left">
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">
            SECURITY SERVICES DIVISION — DGR REGISTERED AGENCY
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-[800px] font-serif m-0">
            Security Soldiers. Not Just Guards.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed mb-10 max-w-[650px] m-0">
            BMSPL's security division is a DGR-registered agency — deploying trained, disciplined, ex-army, and verified security personnel for industrial, commercial, residential, and government installations.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
              Request Security Deployment
            </button>
            <button className="bg-transparent border border-white/30 text-white py-3.5 px-9 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 cursor-pointer uppercase">
              View Procurement Documentation
            </button>
          </div>
        </Container>
      </section>

      {/* SECTION 2: DGR PROFILE SECTION */}
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left w-full min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-5 font-serif leading-tight">
              DGR-Registered, Defence-Trained. Genuinely Different.
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0 font-sans">
              The traditional threat environment demands more than passive watchmen. Our agency leverages highly disciplined ex-defence professionals who bring operational foresight, risk mapping protocols, and military-grade asset management safeguards directly to your facility premises.
            </p>
            <div className="bg-slate-50 p-6 border-l-4 border-brand-gold text-sm md:text-base font-bold text-brand-navy italic mb-8 leading-relaxed rounded-r-[2px]">
              "Most security agencies provide guards. We provide security soldiers."
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700 font-bold font-sans">
              <div>🛡️ Command-Led Supervision</div>
              <div>⚡ Rapid Response Teams</div>
              <div>📝 Strict Statutory Compliance</div>
              <div>🔍 Rigorous Floor Quality Control</div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="relative max-w-[460px] w-full aspect-[4/3] overflow-hidden rounded-card shadow-card">
              <img 
                src="/assets/security-officer.jpg" 
                alt="DGR Security Officer Spec" 
                className="absolute inset-0 w-full h-full object-cover block" 
              />
            </div>
          </div>

        </Container>
      </Section>

      {/* SECTION 3: SERVICES MATRIX */}
      <Section className="bg-slate-50 text-center">
        <Container>
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-3 uppercase">OUR SERVICES</div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-12 font-serif">Comprehensive Security for Every Requirement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left box-border">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-card border-t-4 border-brand-gold shadow-card box-border">
                  <div className="w-12 h-12 bg-amber-50/50 border border-amber-100 rounded-card flex items-center justify-center mb-6 shrink-0">
                    <IconComponent />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3 font-sans">{cap.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0 font-sans">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SECTION 4: PROCESS ROW */}
      <Section className="bg-brand-navy text-white text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-white mb-4 font-serif">From Requirement to Deployment — Our Process</h2>
          <p className="text-sm md:text-base text-slate-400 max-w-[600px] mx-auto mb-16 leading-relaxed">
            A rigorous, military-inspired procedural flow ensuring precision tracking across security operational zones.
          </p>

          <div className="flex justify-between items-start flex-wrap gap-8">
            {processingSteps.map((st, idx) => (
              <div key={idx} className="flex-1 min-w-[170px] flex flex-col items-center">
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-extrabold mb-5 transition-all duration-200 border ${idx === 0 ? 'bg-brand-gold border-transparent text-brand-navy shadow-elevated' : 'bg-white/5 border-white/10 text-white'}`}
                >
                  {st.num}
                </div>
                <h4 className={`text-sm font-bold mb-2.5 font-sans ${idx === 0 ? 'text-brand-gold' : 'text-white'}`}>{st.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed m-0 max-w-[160px] font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 5: TRUSTED CLIENT STRIP */}
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left w-full min-w-0">
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4 font-serif">Trusted by Government & PSU Organizations</h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0">
              Our dynamic authorization matrices allow us to serve as premium security contractors across heavy utility grids and public infrastructures.
            </p>
            <button className="bg-brand-gold text-brand-navy border-none py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">View Credentials</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 box-border">
            {trustClients.map((client, cIdx) => (
              <div key={cIdx} className="border border-slate-200 p-6 text-center text-[13px] font-bold text-slate-600 bg-slate-50 rounded-card shadow-flat">
                {client}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 6: FAQ ACCORDION */}
      <Section className="bg-white border-t border-slate-100 text-center">
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

      {/* SECTION 7: BOTTOM CTA */}
      <Section className="bg-[#091a30] text-center">
        <Container className="max-w-2xl flex flex-col items-center gap-6">
          <h2 className="text-3xl font-extrabold text-white leading-tight font-serif m-0">Need Verified, Defence-Trained Security?</h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed m-0">
            Get in touch with our BDSS coordination office to schedule an operational perimeter vulnerability audit for your premises.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-3">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
              Request Threat & Assessment Audit
            </button>
            <button className="bg-transparent border border-white/20 text-white py-3.5 px-9 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 cursor-pointer transition-all uppercase">
              Contact BDSS Director
            </button>
          </div>
        </Container>
      </Section>

    </div>
  );
}
