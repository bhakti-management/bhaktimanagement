"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

const Vectors = {
  DocIcon: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

export default function ResumeUploadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile submitted successfully!");
  };

  return (
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
          <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white flex flex-col gap-5 text-left box-border font-sans">
            
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
  );
}
