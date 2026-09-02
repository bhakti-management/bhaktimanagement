"use client";

import React from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function UploadResumePage() {
  return (
    <div className="w-full bg-slate-50 font-sans box-border overflow-x-hidden min-h-[80vh]">
      <Section className="!py-10 lg:!py-14">
        <Container className="flex justify-center lg:px-16 xl:px-24">
          
          <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-[3px] shadow-sm overflow-hidden">
            
            {/* Form Header */}
            <div className="bg-brand-navy p-6 md:p-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1.5 font-serif tracking-tight">Upload Your Resume</h1>
                <p className="text-[12px] text-slate-300 m-0">Our HR experts will get back to you within 48 working hours.</p>
              </div>
              <div className="text-brand-gold text-2xl opacity-80 hidden sm:block">📄</div>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8">
              <form className="flex flex-col gap-5">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Full Name *</label>
                    <input type="text" placeholder="Enter your full name" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone Number *</label>
                    <input type="tel" placeholder="+91" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" required />
                  </div>
                </div>

                {/* Row 2: Email & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email Address *</label>
                    <input type="email" placeholder="example@email.com" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Location (City, State) *</label>
                    <input type="text" placeholder="e.g. Mumbai, Maharashtra" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" required />
                  </div>
                </div>

                {/* Row 3: Qualification & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Highest Qualification *</label>
                    <input type="text" placeholder="e.g. Graduate, ITI, Class 12" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Total Experience (Years) *</label>
                    <input type="number" placeholder="e.g. 2" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" required />
                  </div>
                </div>

                {/* Row 4: Job Type */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Desired Job Type *</label>
                  {/* THE FIX: Moved defaultValue="" to the select tag, removed 'selected' from the option */}
                  <select defaultValue="" className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors text-slate-600" required>
                    <option value="" disabled>Select a category</option>
                    <option value="technical">Technical / Engineering</option>
                    <option value="management">Management / Executive</option>
                    <option value="administration">Administration / HR</option>
                    <option value="security">Security Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Row 5: Bio */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Brief Bio / Key Skills</label>
                  <textarea rows={3} placeholder="Tell us about your strengths..." className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors resize-none"></textarea>
                </div>

                {/* Row 6: Upload Dropzone */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Upload Resume (PDF/DOCX) *</label>
                  <div className="border border-dashed border-slate-300 rounded-[2px] p-6 text-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors flex flex-col items-center justify-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f2b4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1 opacity-70">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <div className="text-[12px] font-bold text-brand-navy">Click to select or drag and drop your file here</div>
                    <div className="text-[10px] text-slate-400 font-normal">Supported formats: PDF, DOCX (Max 2MB)</div>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="button" className="mt-4 bg-brand-gold text-brand-navy font-bold text-[11px] uppercase tracking-widest py-3.5 rounded-[2px] hover:brightness-110 transition-all border-none cursor-pointer w-full flex items-center justify-center gap-2">
                  <span>Submit My Application</span>
                  <span>▶</span>
                </button>

              </form>
            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
}