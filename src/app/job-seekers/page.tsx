"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

// Production-Grade Native SVG Components precisely replicated from the design specs
const Vectors = {
  History: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <polyline points="3 3 3 8 7 8"/>
      <line x1="12" y1="7" x2="12" y2="12"/>
      <line x1="12" y1="12" x2="16" y2="14"/>
    </svg>
  ),
  Shield: ({ color = "var(--color-brand-gold)" }: { color?: string } = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Rupee: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12M6 8h12M6 8c6 0 8 3 8 6H6M14 14L6 22"/>
    </svg>
  ),
  Support: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="10" r="2"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Factory: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V10l5 4V10l5 4V10l10 5v5H2z"/>
    </svg>
  ),
  Wrench: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94-7.94L9.66 5.76a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77z"/>
      <path d="m14.13 14.13-9.5 9.5a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l9.5-9.5"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 11 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Monitor: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  IdCard: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <circle cx="9" cy="10" r="2"/>
      <path d="M5 18c0-2 2-3 4-3s4 1 4 3"/>
      <line x1="16" y1="9" x2="19" y2="9"/>
      <line x1="16" y1="13" x2="19" y2="13"/>
    </svg>
  ),
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Graduation: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5"/>
    </svg>
  ),
  DocIcon: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  CloudUpload: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.2 15c.7-1.1 1-2.3 1-3.5A6.5 6.5 0 0 0 12 7.1 8 8 0 0 0 4.5 13a5.5 5.5 0 0 0 1 10.9h13.8a4.5 4.5 0 0 0 1.9-8.9z"/>
      <polyline points="16 12 12 8 8 12"/>
      <line x1="12" y1="8" x2="12" y2="18"/>
    </svg>
  )
};

export default function JobSeekersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const chooseCards = [
    { title: '25+ Years Experience', desc: 'A legacy of placement excellence and industry knowledge.', icon: Vectors.History, invert: false },
    { title: 'Verified Employers', desc: 'We vet every company to ensure safe and legitimate work.', icon: Vectors.Shield, invert: false },
    { title: 'Completely Free', desc: 'Candidates never pay a single rupee for placements.', icon: Vectors.Rupee, invert: true },
    { title: 'Personal Support', desc: 'Dedicated support team to guide you through interviews.', icon: Vectors.Support, invert: false },
    { title: 'Across India', desc: 'Opportunities in major cities and industrial hubs.', icon: Vectors.MapPin, invert: false }
  ];

  const steps = [
    { num: '1', title: 'Resume Upload', desc: 'Submit your profile databank fields securely through our automated system portals.' },
    { num: '2', title: 'Team Review', desc: 'Our operational vetting desk maps your core functional competencies to active openings.' },
    { num: '3', title: 'Interview & Hire', desc: 'Coordinate direct facility assessment processes with verified industrial environments.' }
  ];

  const specializations = [
    { title: 'Security Personnel', subtitle: 'Armed & Unarmed Protection Roles', icon: '🛡️' },
    { title: 'Factory Workers', subtitle: 'Production Line Operatives', icon: '🏭' },
    { title: 'ITI Jobs', subtitle: 'Technical & Trade Positions', icon: '⚙️' },
    { title: 'Sales & Marketing', subtitle: 'Business Development Streams', icon: '📈' },
    { title: 'Admin & Office Support', subtitle: 'Executive & Clerical Desks', icon: '💻' },
    { title: 'Supervisors', subtitle: 'Floor & Line Operational Leads', icon: '📋' },
    { title: 'Management', subtitle: 'Executive Leadership Frameworks', icon: '👔' }
  ];

  const faqs = [
    { q: 'Are there any registration fees for job seekers?', a: 'No, all recruitment programs and placement operations are completely free for candidates looking for work through BMSPL.' },
    { q: 'How long does the placement process take?', a: 'Depending on profile screening protocols, candidate background validation checks, and specific employer interview timelines, the typical window is 4 to 10 working days.' },
    { q: 'Can I apply if I am a fresh graduate?', a: 'Yes, we have a specialized Fresh Graduates placement infrastructure built exactly to match upcoming talent with structured corporate trainee functions across India.' },
    { q: 'What fields and industries do you source for?', a: 'Our operations cross-section heavily covers industrial manufacturing units, institutional security services, IT development groups, banking channels, logistics networks, and corporate management.' }
  ];

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HERO CONTAINER BLOCK (Hero Section.jpg) */}
      <Section className="bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left w-full min-w-0">
            {/* Top Yellow Tag */}
            <div className="inline-block bg-brand-gold text-brand-navy text-[11px] font-extrabold py-1 px-2.5 rounded-[2px] tracking-widest mb-6 uppercase">
              25 Years of Trust
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight font-serif m-0 mb-5">
              Your Next Opportunity Is Here.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-9 max-w-[520px] font-sans font-normal">
              BMSPL connects verified job seekers with trusted employers across India. We bridge the gap between talent and stability.
            </p>
            
            {/* Action Buttons Row */}
            <div className="flex gap-4 flex-wrap mb-10">
              <button className="bg-brand-navy text-white border-none py-4 px-8 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer flex items-center gap-2 uppercase">
                <span>View Current Openings</span>
                <span className="text-brand-gold text-sm">→</span>
              </button>
              <a href="#resume-form" className="no-underline bg-white border border-brand-navy text-brand-navy py-3.5 px-8 font-bold text-xs tracking-widest rounded-button text-center hover:bg-slate-50 transition-colors uppercase">
                Upload Your Resume
              </a>
            </div>

            {/* Checkmark Attribute Matrix */}
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-brand-navy font-bold">
              <div className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">✓</span> Free for all candidates
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">✓</span> Verified employers only
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">✓</span> Pan-India opportunities
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">✓</span> 1000+ placements
              </div>
            </div>
          </div>

          {/* Right Hero Portrait with Accent Anchors */}
          <div className="relative w-full flex justify-center">
            <div className="relative max-w-[460px] w-full">
              <img 
                src="/assets/job-seekers-hero.jpg.png" 
                alt="BMSPL Selected Corporate Candidate Profile" 
                className="w-full h-auto block rounded-card shadow-elevated" 
              />
              {/* Bottom Right Decorative Bracket Anchor Line */}
              <div className="absolute -bottom-3 -right-3 w-15 h-15 border-r-3 border-b-3 border-brand-gold pointer-events-none" />
            </div>
          </div>

        </Container>
      </Section>

      {/* SECTION 2: WHY CANDIDATES CHOOSE BMSPL BLOCK (Why Apply Section.png) */}
      <Section className="bg-slate-50 text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-12 tracking-tight font-serif">
            Why Job Seekers Choose BMSPL
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 box-border">
            {chooseCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-8 text-left flex flex-col justify-between rounded-card shadow-card min-h-[235px] box-border border ${card.invert ? 'bg-brand-navy text-white border-transparent' : 'bg-white text-brand-navy border-slate-200'}`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center mb-6 shrink-0 ${card.invert ? 'bg-brand-gold' : 'bg-slate-100'}`}>
                      <IconComponent />
                    </div>
                    <h4 className={`text-base font-bold mb-2.5 font-sans ${card.invert ? 'text-white' : 'text-brand-navy'}`}>
                      {card.title}
                    </h4>
                    <p className={`text-[13px] leading-relaxed m-0 ${card.invert ? 'text-slate-400' : 'text-slate-500'}`}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SECTION 3: PATH TO EMPLOYMENT TRANSITION ROW (How It Works Section.png) */}
      <Section className="bg-white">
        <Container>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-12 box-border">
            <div className="text-left w-full min-w-0">
              <h2 className="text-3xl font-extrabold text-brand-navy mb-2 font-serif">Your Path to Employment</h2>
              <p className="text-sm md:text-base text-slate-500 m-0">Simple, transparent, and efficient process.</p>
            </div>
            <div className="bg-brand-gold text-brand-navy text-[11px] font-extrabold py-1.5 px-3 rounded-[2px] tracking-wider uppercase shrink-0">
              STEP BY STEP JOURNEY
            </div>
          </div>

          {/* Connected Process Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 box-border">
            {steps.map((st, sIdx) => (
              <div key={sIdx} className="bg-white border border-slate-100 p-10 rounded-card text-center relative shadow-card box-border">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white text-base font-extrabold flex items-center justify-center mx-auto mb-6 border-4 border-brand-gold shadow-elevated">
                  {st.num}
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-3 font-sans">{st.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed m-0">{st.desc}</p>
              </div>
            ))}
          </div>

        </Container>
      </Section>

      {/* SECTION 4: BROWSE BY SPECIALIZATION PILLS (Frame 101.png) */}
      <Section className="bg-slate-100">
        <Container>
          
          <div className="text-left mb-10 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-extrabold text-brand-navy m-0 font-serif">Browse by Specialization</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10 box-border">
            {specializations.map((spec, sIdx) => {
              const isWide = spec.title === 'Security Personnel' || spec.title === 'Admin & Office Support';
              return (
                <div 
                  key={sIdx} 
                  className={`bg-white p-6 rounded-card flex items-center gap-4 shadow-flat box-border ${isWide ? 'sm:col-span-2' : ''}`}
                >
                  <div className="text-2xl shrink-0">{spec.icon}</div>
                  <div className="text-left min-w-0">
                    <h4 className="text-sm md:text-base font-bold text-brand-navy m-0 truncate">{spec.title}</h4>
                    {spec.subtitle && <div className="text-[11px] text-slate-400 mt-0.5 truncate">{spec.subtitle}</div>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fresh Grads Feature Stripe */}
          <div className="w-full bg-brand-navy text-white rounded-card p-8 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center text-left gap-5 box-border border-l-4 border-brand-gold shadow-elevated">
            <div className="min-w-0">
              <div className="flex items-center gap-3 mb-2.5">
                <Vectors.Graduation />
                <h4 className="text-lg font-bold text-white m-0 font-sans">Fresh Graduates</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-400 m-0 pl-11 leading-relaxed">
                Kickstart your career with top tier internship and trainee roles across India.
              </p>
            </div>
            <button className="bg-brand-gold text-brand-navy border-none py-3 px-6 text-xs font-bold rounded-button cursor-pointer shrink-0 hover:brightness-110 transition-all uppercase">
              View Opportunities
            </button>
          </div>

        </Container>
      </Section>

      {/* SECTION 5: MASTER RESUME UPLOAD COMPONENT FORM (Frame 28.png) */}
      <Section id="resume-form" className="bg-white scroll-mt-24">
        <Container className="max-w-2xl">
          <div className="rounded-card overflow-hidden shadow-elevated border border-slate-200 w-full box-border">
            
            {/* Header Card Band */}
            <div className="bg-brand-navy text-white py-8 px-10 flex justify-between items-center text-left box-border">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-white mb-1.5 leading-snug font-sans">Upload Your Resume</h3>
                <p className="text-[13px] text-slate-400 m-0 leading-normal">Our HR experts will get back to you within 48 working hours.</p>
              </div>
              <div className="shrink-0"><Vectors.DocIcon /></div>
            </div>

            {/* Interactive Input Form Element */}
            <form onSubmit={(e) => e.preventDefault()} className="p-8 md:p-10 bg-white flex flex-col gap-5 text-left box-border font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Full Name *</label>
                  <input type="text" placeholder="Enter your full name" className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" required />
                </div>
                <div>
                  <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Phone Number *</label>
                  <input type="tel" defaultValue="+91 " className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Email Address *</label>
                  <input type="email" placeholder="example@email.com" className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" required />
                </div>
                <div>
                  <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Location (City, State) *</label>
                  <input type="text" placeholder="e.g. Mumbai, Maharashtra" className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Highest Qualification *</label>
                  <input type="text" placeholder="e.g. Graduate, ITI, Class 12" className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" required />
                </div>
                <div>
                  <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Total Experience (Years) *</label>
                  <input type="text" placeholder="e.g. 2" className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" required />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Desired Job Type *</label>
                <select className="w-full p-3 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy" required>
                  <option value="">Select a category</option>
                  <option value="security">Security Personnel</option>
                  <option value="factory">Factory Workers</option>
                  <option value="iti">ITI / Diploma</option>
                  <option value="admin">Admin & Office Support</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Brief Bio / Key Skills</label>
                <textarea placeholder="Tell us about your strengths..." className="w-full h-24 p-3 border border-slate-300 rounded-button text-[13px] box-border resize-y focus:outline-none focus:border-brand-navy" />
              </div>

              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Upload Resume (PDF/DOCX) *</label>
                <div className="border-2 dashed border-slate-300 p-8 rounded-button bg-slate-50 text-center cursor-pointer hover:bg-slate-100/50 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <Vectors.CloudUpload />
                    <div className="text-sm font-semibold text-brand-navy">Click to select or drag and drop your file here</div>
                    <div className="text-[11px] text-slate-400">Supported formats: PDF, DOCX (Max 2MB)</div>
                  </div>
                </div>
              </div>

              <button type="submit" className="bg-brand-navy text-white border-none p-4 text-[13px] md:text-sm font-bold rounded-button cursor-pointer flex items-center justify-center gap-2 mt-3 hover:brightness-110 shadow-elevated transition-all uppercase">
                <span>Submit My Profile</span>
                <span className="text-brand-gold text-[10px]">▶</span>
              </button>
            </form>

          </div>
        </Container>
      </Section>

      {/* SECTION 6: FAQ ACCORDION FRAME ROWS (Frame 29.png) */}
      <Section className="bg-slate-50 border-t border-slate-200 text-center">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-2.5 font-serif">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-slate-500 mb-10 leading-relaxed font-sans">Everything you need to know about getting placed with BMSPL.</p>
          
          <div className="flex flex-col gap-3.5">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-card overflow-hidden text-left bg-white shadow-flat box-border">
                <div 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="p-5 px-6 font-bold text-[14px] md:text-[15px] text-brand-navy cursor-pointer flex justify-between items-center select-none"
                >
                  <span>{faq.q}</span>
                  <span 
                    className="text-brand-gold text-[10px] transition-transform duration-200"
                    style={{ transform: openFaq === index ? 'rotate(180deg)' : 'none' }}
                  >
                    ▼
                  </span>
                </div>
                {openFaq === index && (
                  <div className="p-5 px-6 text-[13px] text-slate-600 leading-relaxed border-t border-slate-200 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </div>
  );
}
