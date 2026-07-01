"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function TrainingDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const programs = [
    { title: 'Top Management', desc: 'Strategic alignment workshops for C-level and boardroom decision makers.' },
    { title: 'Managerial Effectiveness', desc: 'Equipping team leaders with modern execution metrics and performance delivery tools.' },
    { title: 'Communication', desc: 'Interpersonal development protocols, corporate diplomacy, and client negotiation frameworks.' },
    { title: 'Team Building', desc: 'Simulated operational drills designed to enhance collaborative institutional chemistry.' },
    { title: 'HR Management', desc: 'Comprehensive compliance updates, modern labor code guidelines, and payroll structural handling.' },
    { title: 'Leadership Development', desc: 'Nurturing high-potential talent pools to build structured internal succession pathways.' }
  ];

  const valuePoints = [
    { title: 'Practitioner-Led Training', desc: 'All programs are engineered and delivered by veterans with extensive industry field experience.' },
    { title: 'Real-World Case Studies', desc: 'Focusing heavily on localized logistics and industrial bottlenecks instead of abstract theories.' },
    { title: 'ROI & Evaluation', desc: 'Tracking measurable output changes and capability retention scores long after course completion.' }
  ];

  const pipelineSteps = [
    { num: '1', title: 'DIAGNOSIS', desc: 'Analyzing existing skill gaps and corporate operational friction points.', focus: false },
    { num: '2', title: 'DELIVERY', desc: 'Executing targeted high-impact structural training modules.', focus: true },
    { num: '3', title: 'EVALUATION', desc: 'Reviewing capability performance metrics and compliance scores.', focus: false }
  ];

  const caseStudies = [
    { client: 'SONAKOYA', text: '"The specialized manager training implemented by BMSPL completely optimized our core assembly floor operations, reducing error rates while driving up collective daily output parameters significantly."', title: 'Operations Director' },
    { client: 'ROKI MINDA', text: '"Discipline and clarity were evident from day one. Their custom corporate compliance modules saved our management teams valuable labor processing integration hours over the last fiscal year."', title: 'Plant HR Lead' }
  ];

  const faqs = [
    { q: 'Can programs be customized for our industry sector?', a: 'Yes, every program is tailored from the ground up to address your specific operational requirements, regional guidelines, and workforce demographic realities.' },
    { q: 'How do you evaluate the success of a training module?', a: 'We employ a comprehensive multi-tier assessment methodology that measures post-program retention, behavioral alignment, and direct on-floor operational output increases.' },
    { q: 'Are your courses suitable for blue-collar supervisors?', a: 'Absolutely. We design specific vernacular and Hinglish training delivery models optimized for industrial supervisors, line managers, and technical floor leads.' }
  ];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HERO WORKSPACE BANNER */}
      <section 
        className="w-full relative min-h-[65vh] md:min-h-[70vh] bg-[#0c1b2a] flex items-center py-16 px-6 box-border"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(12,27,42,0.85), rgba(12,27,42,0.85)), url("/assets/training-development-hero.jpg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container className="relative z-10 text-left">
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">BMSPL TRAINING ACADEMY</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-[750px] font-serif m-0">
            Build Teams That Perform. <span className="text-brand-gold">Not Just Attend.</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed mb-9 max-w-[600px] m-0">
            Military-grade discipline combined with contemporary management science. We bridge capability chasms to scale workforce parameters across technical and corporate verticals.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-brand-gold text-brand-navy border-none py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">Request Training Proposal</button>
            <button className="bg-transparent border border-white/30 text-white py-3.5 px-7 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 cursor-pointer uppercase">Explore Programs</button>
          </div>
        </Container>
      </section>

      {/* SECTION 2: SIX CORE PROGRAMS GRID */}
      <Section className="bg-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-serif">Core Training Programs</h2>
          <p className="text-sm md:text-base text-slate-500 max-w-[600px] mx-auto mb-16 leading-relaxed">
            Curriculums engineered to elevate operational performance, compliance alignment, and structural leadership capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left box-border">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-card shadow-card flex flex-col justify-between">
                <div>
                  <div className="text-2xl text-brand-gold mb-4">📝</div>
                  <h4 className="text-lg font-bold text-brand-navy mb-3.5 font-sans">{prog.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0">{prog.desc}</p>
                </div>
                <div className="w-8 h-0.5 bg-brand-gold mt-6" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 3: WHAT SETS US APART SPLIT CONTAINER */}
      <Section className="bg-slate-50">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Attributes Column */}
          <div className="text-left w-full min-w-0">
            <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-3 uppercase">WHY CHOOSE US</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-10 font-serif">What Sets Our Training Apart?</h2>
            
            <div className="flex flex-col gap-6">
              {valuePoints.map((pt, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-7 h-7 bg-brand-navy text-brand-gold rounded-[4px] flex items-center justify-center font-bold shrink-0 text-[13px]">✓</div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy mb-1 m-0 font-sans">{pt.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 m-0 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Instructor Portrait Column Box */}
          <div className="w-full flex justify-center">
            <div className="relative max-w-[440px] w-full aspect-[4/3] overflow-hidden border-l-4 border-brand-gold rounded-r-card shadow-card">
              <img 
                src="/assets/training-leader.jpg.png" 
                alt="BMSPL Director of Training" 
                className="absolute inset-0 w-full h-full object-cover block" 
              />
            </div>
          </div>

        </Container>
      </Section>

      {/* SECTION 4: TRIPLE EYE MODEL PIPELINE */}
      <Section className="bg-white text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4 font-serif">Triple Eye Model (III)</h2>
          <p className="text-sm md:text-base text-slate-500 max-w-[600px] mx-auto mb-12 leading-relaxed">
            Our proprietary three-tiered structural pipeline ensures all corporate training translates into directly audit-ready competency updates.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {pipelineSteps.map((step) => (
              <div 
                key={step.num} 
                className={`flex-1 min-w-[260px] max-w-[340px] p-9 rounded-card text-center border transition-all ${step.focus ? 'bg-brand-navy text-white border-transparent shadow-elevated' : 'bg-slate-50 text-brand-navy border-slate-200 shadow-flat'}`}
              >
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-4.5 font-bold text-sm ${step.focus ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy text-white'}`}
                >
                  {step.num}
                </div>
                <h4 className={`text-[13px] font-extrabold mb-2.5 tracking-wider uppercase font-sans ${step.focus ? 'text-brand-gold' : 'text-brand-navy'}`}>{step.title}</h4>
                <p className={`text-xs m-0 leading-relaxed ${step.focus ? 'text-slate-400' : 'text-slate-500'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 5: CORPORA EARN WHILE YOU LEARN EXCLUSIVE PANEL */}
      <Section className="bg-white py-0 pb-16">
        <Container>
          <div className="bg-brand-navy text-white rounded-card p-10 text-left relative overflow-hidden shadow-elevated w-full box-border">
            <div className="max-w-[650px] relative z-10">
              <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-2.5 uppercase">BMSPL INITIATIVE</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-serif">CORPORA: Earn While You Learn</h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 m-0 font-sans">
                A revolutionary technical internship pathway where candidates engage directly with operational workspace realities, gaining hands-on field competency and industrial stipends simultaneously.
              </p>
              <span className="text-xs md:text-sm font-bold text-brand-gold hover:text-brand-gold/80 transition-colors cursor-pointer uppercase tracking-wider font-sans">Explore Partnership Programs →</span>
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-8xl opacity-[0.03] select-none pointer-events-none">💼</div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6: SUCCESS PANEL CASE REVIEWS */}
      <Section className="bg-slate-100 text-center">
        <Container>
          <div className="text-brand-navy text-[11px] font-extrabold tracking-widest mb-3 uppercase">METRICS IN ACTION</div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-12 font-serif">Success In Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left box-border">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white p-8 rounded-card shadow-card flex flex-col justify-between">
                <p className="text-sm md:text-base text-slate-600 italic leading-relaxed mb-6 m-0 font-sans">{cs.text}</p>
                <div>
                  <div className="text-sm font-bold text-brand-navy font-sans">{cs.client}</div>
                  <div className="text-xs text-brand-gold font-bold mt-0.5 uppercase font-sans">{cs.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 7: FAQ ACCORDION BAR ROWS */}
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

      {/* SECTION 8: BOTTOM CLOSING BANNER ACTION */}
      <Section className="bg-brand-navy text-center">
        <Container className="max-w-2xl flex flex-col items-center gap-6">
          <h2 className="text-3xl font-extrabold text-white leading-tight font-serif m-0">Ready to Transform Your Workforce?</h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed m-0">
            Schedule an onboarding exploration session with our training coordinator. Build absolute tactical advantage within your organization.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-3">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">Discuss Training Proposal</button>
            <button className="bg-transparent border border-white/20 text-white py-3.5 px-9 font-bold text-xs tracking-widest rounded-button hover:bg-white/5 cursor-pointer transition-all uppercase">Download Course Brochure</button>
          </div>
        </Container>
      </Section>

    </div>
  );
}
