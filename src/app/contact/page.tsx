"use client";

import React, { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    serviceRequired: 'Security Services',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.fullName || !formData.workEmail || !formData.phoneNumber || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    // Simulate submission to backend API
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        workEmail: '',
        phoneNumber: '',
        serviceRequired: 'Security Services',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HEADER */}
      <Section className="bg-slate-50 !py-10 md:!py-12 border-b border-slate-100">
        <Container className="lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <div className="bg-brand-gold text-brand-navy inline-block text-[10px] font-bold tracking-widest py-1 px-2.5 rounded-[2px] mb-3 uppercase">
              CONTACT US
            </div>
            <h1 className="text-3xl lg:text-[40px] font-extrabold text-brand-navy leading-tight mb-3 font-serif tracking-tight">
              Get in Touch
            </h1>
            <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed m-0 font-normal">
              Have questions or need assistance? Reach out to us directly or fill out the form below.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: CONTACT & INQUIRY FORM */}
      <Section className="bg-white !py-10 lg:!py-14">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:px-16 xl:px-24 items-start">
          
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <div className="flex flex-col gap-6 bg-slate-50 border border-slate-200 rounded-[3px] p-6 md:p-8">
            <h2 className="text-[11px] font-extrabold text-brand-gold tracking-widest uppercase m-0">
              CONTACT INFORMATION
            </h2>
            
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-[16px] font-bold text-brand-navy m-0 font-serif leading-snug">
                  Bhakti Management Services Pvt. Ltd.
                </h3>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">
                  OFFICE
                </div>
                <p className="text-[13px] text-slate-600 m-0 leading-relaxed">
                  14 B, Sector 2A,<br />
                  Near Swaminarayan Temple,<br />
                  Gandhinagar, Gujarat
                </p>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">
                  PHONE
                </div>
                <p className="text-[13px] text-slate-650 m-0 leading-relaxed font-semibold">
                  +91 9925242929
                </p>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">
                  EMAIL
                </div>
                <a href="mailto:hr@bhaktimanagement.com" className="text-[13px] text-slate-650 hover:text-brand-gold transition-colors m-0 leading-relaxed font-semibold">
                  hr@bhaktimanagement.com
                </a>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">
                  OFFICE HOURS
                </div>
                <p className="text-[13px] text-slate-600 m-0 leading-relaxed">
                  Monday – Saturday: 9:30 AM – 6:30 PM<br />
                  <span className="text-red-650 font-medium">Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <div className="bg-white border border-slate-200 rounded-[3px] shadow-sm p-6 md:p-8 flex flex-col">
            <h2 className="text-[18px] font-bold text-brand-navy mb-1 font-serif">
              Let's Build the Right Workforce Solution
            </h2>
            <p className="text-[12px] text-slate-500 mb-5 leading-relaxed">
              Tell us about your workforce or HR requirement and our team will get back to you.
            </p>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-[2px] text-center my-4">
                <div className="text-xl mb-1">✓</div>
                <h4 className="text-[13px] font-bold mb-1">Enquiry Sent Successfully</h4>
                <p className="text-[12px] text-emerald-700 m-0">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status === 'error' && (
                  <div className="text-[12px] text-red-600 font-bold bg-red-50 p-2.5 rounded-[2px] border border-red-200">
                    ⚠ Please fill in all required fields.
                  </div>
                )}
                
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe" 
                    className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" 
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enterprise Ltd." 
                    className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" 
                  />
                </div>

                {/* Work Email & Phone Number Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com" 
                      className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="+91" 
                      className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors" 
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Service Required
                  </label>
                  <select 
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors text-slate-700 font-sans"
                  >
                    <option value="Security Services">Security Services</option>
                    <option value="Manpower Services">Manpower Services</option>
                    <option value="White Collar Recruitment">White Collar Recruitment</option>
                    <option value="Campus Recruitment">Campus Recruitment</option>
                    <option value="Contractual Staffing">Contractual Staffing</option>
                    <option value="Payroll Services">Payroll Services</option>
                    <option value="IT & Web Development Services">IT & Web Development Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Your Requirement / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} 
                    placeholder="Briefly describe your HR or workforce needs..." 
                    className="w-full border border-slate-200 bg-slate-50 rounded-[2px] p-2.5 text-[12px] focus:bg-white focus:border-brand-gold focus:outline-none transition-colors resize-none font-sans"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="mt-2 bg-brand-gold text-brand-navy font-bold text-[11px] uppercase tracking-widest py-3.5 rounded-[2px] hover:brightness-110 disabled:brightness-95 disabled:cursor-not-allowed transition-all border-none cursor-pointer w-full"
                >
                  {status === 'submitting' ? 'SENDING...' : 'SEND ENQUIRY'}
                </button>
              </form>
            )}
          </div>

        </Container>
      </Section>

    </div>
  );
}