"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutEcosystemMatrix() {
  const coreValues = [
    { title: 'Quality', text: 'Upholding the highest standards in vetting and deployment.', icon: '🏆' },
    { title: 'Integrity', text: 'Transparency in every transaction and statutory compliance.', icon: '⚖️' },
    { title: 'Satisfaction', text: 'Customer-centric approach ensuring long-term partnerships.', icon: '🤝' },
    { title: 'Learning', text: 'Continuous evolution to meet changing industry dynamics.', icon: '🎓' }
  ];

  const divisions = [
    { name: 'Career Shapers', desc: 'Strategic Talent Acquisition & Recruitment', icon: '🧠' },
    { name: 'KVMS', desc: 'Facility & Managed Manpower Services', icon: '🛡️' },
    { name: 'BDSS', desc: 'Institutional Security Solutions', icon: '🛡️' },
    { name: 'CORPORA', desc: 'Executive & Board-Level Staffing', icon: '🏢' },
    { name: 'Triple Eye Model', desc: 'Three-tier Quality Assurance Framework', icon: '⚙️' }
  ];

  return (
    <div className="w-full font-sans box-border">
      
      {/* SECTION A: MISSION, VISION & VALUES BLOCK */}
      <Section className="bg-[#f3f6fc] !py-10 lg:!py-14">
        {/* Added horizontal padding to pull the layout inwards */}
        <Container className="flex flex-col gap-8 lg:px-16 xl:px-24">
          
          {/* Split Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Mission (Dark Corporate Navy) - Reduced padding and text size */}
            <div className="bg-brand-navy text-white p-6 md:p-8 rounded-[3px] relative overflow-hidden shadow-sm">
              <div className="text-xl text-brand-gold mb-3">🚀</div>
              <h3 className="text-[18px] md:text-xl font-bold mb-2 font-serif tracking-tight">Our Mission</h3>
              <p className="text-[13px] text-slate-300 leading-relaxed m-0">
                To empower organizations with agile, compliant, and high-performance workforce solutions that foster sustainable growth and operational excellence across sectors.
              </p>
            </div>
            
            {/* Vision (White Card with Border) - Reduced padding and text size */}
            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[3px] shadow-sm">
              <div className="text-xl text-brand-gold mb-3">👁️</div>
              <h3 className="text-[18px] md:text-xl font-bold text-brand-navy mb-2 font-serif tracking-tight">Our Vision</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed m-0">
                To be India's premier institutional talent bridge, recognized for transforming the human capital landscape through integrity, innovation, and unwavering quality.
              </p>
            </div>
          </div>

          {/* Core Values Sub-grid */}
          <div className="text-center mt-4">
            <div className="text-brand-navy text-[10px] font-extrabold tracking-widest mb-6 uppercase">
              CORE VALUES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreValues.map((val, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 p-6 rounded-[3px] text-left shadow-sm hover:shadow-md transition-all box-border"
                >
                  <div className="w-7 h-7 bg-slate-100 flex items-center justify-center text-brand-gold font-bold mb-4 rounded-[2px] text-sm">
                    {val.icon}
                  </div>
                  <h4 className="text-[14px] font-bold text-brand-navy mb-1.5 font-sans">
                    {val.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed m-0">
                    {val.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </Section>
 
      {/* SECTION B: OUR ECOSYSTEM HIERARCHY TREE */}
      <Section className="bg-white text-center !py-10 lg:!py-14">
        {/* Added horizontal padding to match above */}
        <Container className="flex flex-col items-center lg:px-16 xl:px-24">
          
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-3 uppercase">
            OUR ECOSYSTEM
          </div>
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-3 font-serif tracking-tight leading-tight">
            One Organization. Multiple Specializations.
          </h2>
          <p className="text-[13px] text-slate-500 max-w-[650px] mx-auto mb-10 leading-relaxed">
            BMSPL operates under the DEV Group of Companies as a multi-division workforce solutions organization. Each division has its own identity, its own expertise, and its own operational focus, unified under BMSPL's values and leadership.
          </p>

          {/* Tree Node 1: Parent Entity */}
          <div className="bg-slate-50 border border-slate-300 py-4 px-8 min-w-[280px] rounded-[3px] mb-6 relative shadow-sm">
            <div className="text-[10px] font-extrabold text-slate-400 tracking-wider mb-1 uppercase">
              PARENT ENTITY
            </div>
            <div className="text-[18px] font-bold text-brand-navy">
              DEV Group of Companies
            </div>
            <div className="hidden md:block absolute -bottom-6 left-1/2 -ml-px w-px h-6 bg-slate-300" />
          </div>

          {/* Tree Node 2: Lead Agency */}
          <div className="bg-brand-navy text-white py-5 px-10 min-w-[320px] rounded-[3px] mb-8 relative shadow-md">
            <div className="text-[10px] font-extrabold text-brand-gold tracking-wider mb-1 uppercase">
              LEAD AGENCY
            </div>
            <div className="text-xl md:text-2xl font-extrabold tracking-wide mb-0.5 font-serif">
              BMSPL
            </div>
            <div className="text-[11px] text-slate-400 font-sans">
              Bhakti Management Services Pvt Ltd
            </div>
            <div className="hidden md:block absolute -bottom-8 left-1/2 -ml-px w-px h-8 bg-slate-300" />
          </div>

          {/* Tree Row 3: Five Specialized Divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mt-2 box-border items-stretch">
            {divisions.map((div, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 p-5 rounded-[3px] shadow-sm hover:shadow-md hover:border-brand-gold/40 flex flex-col items-center gap-1.5 transition-all box-border"
              >
                <div className="text-brand-gold text-lg mb-1">{div.icon}</div>
                <h4 className="text-[13px] font-bold text-brand-navy m-0 font-sans">
                  {div.name}
                </h4>
                <p className="text-[11px] text-slate-500 m-0 leading-relaxed text-center">
                  {div.desc}
                </p>
              </div>
            ))}
          </div>

        </Container>
      </Section>

    </div>
  );
}