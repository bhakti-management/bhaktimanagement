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
      <Section className="bg-[#f3f6fc]">
        <Container className="flex flex-col gap-12">
          
          {/* Split Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission (Dark Corporate Navy) */}
            <div className="bg-brand-navy text-white p-10 md:p-12 rounded-card relative overflow-hidden shadow-card">
              <div className="text-2xl text-brand-gold mb-4">🚀</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-serif">Our Mission</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed m-0">
                To empower organizations with agile, compliant, and high-performance workforce solutions that foster sustainable growth and operational excellence across sectors.
              </p>
            </div>
            
            {/* Vision (White Card with Border) */}
            <div className="bg-white border border-slate-200 p-10 md:p-12 rounded-card shadow-card">
              <div className="text-2xl text-brand-gold mb-4">👁️</div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 font-serif">Our Vision</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed m-0">
                To be India's premier institutional talent bridge, recognized for transforming the human capital landscape through integrity, innovation, and unwavering quality.
              </p>
            </div>
          </div>

          {/* Core Values Sub-grid */}
          <div className="text-center mt-5">
            <div className="text-brand-navy text-[11px] font-extrabold tracking-widest mb-10 uppercase">
              CORE VALUES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreValues.map((val, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 p-8 rounded-card text-left shadow-flat hover:shadow-card transition-all"
                >
                  <div className="w-8 h-8 bg-slate-100 flex items-center justify-center text-brand-gold font-bold mb-5 rounded-[2px]">
                    {val.icon}
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2.5 font-sans">
                    {val.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed m-0">
                    {val.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </Section>
 
      {/* SECTION B: OUR ECOSYSTEM HIERARCHY TREE */}
      <Section className="bg-white text-center">
        <Container className="flex flex-col items-center">
          
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">
            OUR ECOSYSTEM
          </div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4 font-serif">
            One Organization. Multiple Specializations.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-[780px] mx-auto mb-12 leading-relaxed">
            BMSPL operates under the DEV Group of Companies as a multi-division workforce solutions organization. Each division has its own identity, its own expertise, and its own operational focus, unified under BMSPL's values and leadership.
          </p>

          {/* Tree Node 1: Parent Entity */}
          <div className="bg-slate-100 border-2 border-brand-navy py-6 px-10 min-w-[320px] rounded-card mb-8 relative shadow-flat">
            <div className="text-[11px] font-extrabold text-slate-400 tracking-wider mb-1 uppercase">
              PARENT ENTITY
            </div>
            <div className="text-xl md:text-2xl font-bold text-brand-navy">
              DEV Group of Companies
            </div>
            <div className="hidden md:block absolute -bottom-8 left-1/2 -ml-px w-0.5 h-8 bg-slate-300" />
          </div>

          {/* Tree Node 2: Lead Agency */}
          <div className="bg-brand-navy text-white py-8 px-12 min-w-[360px] rounded-card mb-10 relative shadow-elevated">
            <div className="text-[11px] font-extrabold text-brand-gold tracking-wider mb-1.5 uppercase">
              LEAD AGENCY
            </div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-wide mb-1 font-serif">
              BMSPL
            </div>
            <div className="text-xs text-slate-400 font-sans">
              Bhakti Management Services Pvt Ltd
            </div>
            <div className="hidden md:block absolute -bottom-10 left-1/2 -ml-px w-0.5 h-10 bg-slate-300" />
          </div>

          {/* Tree Row 3: Five Specialized Divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 w-full mt-2 box-border">
            {divisions.map((div, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 p-6 rounded-card shadow-flat hover:shadow-card flex flex-col items-center gap-2 transition-all box-border"
              >
                <div className="text-brand-gold text-lg mb-1">{div.icon}</div>
                <h4 className="text-base font-bold text-brand-navy m-0 font-sans">
                  {div.name}
                </h4>
                <p className="text-xs text-slate-500 m-0 leading-relaxed text-center">
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
