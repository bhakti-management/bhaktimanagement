"use client";

import React from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

const ContactIcons = {
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Upload: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
    </svg>
  ),
  ShieldCheck: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a6b4c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 11 2 2 4-4"/>
    </svg>
  )
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden">
      
      {/* SECTION 1: HEADER BLOCK */}
      <Section className="bg-white pb-6">
        <Container>
          <div className="inline-block bg-brand-gold text-brand-navy text-[10px] font-extrabold py-1 px-2.5 rounded-[2px] tracking-wider mb-4 uppercase">
            Get In Touch
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-serif">
            Let's Talk. We're Ready When You Are.
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[650px] m-0 font-sans">
            Whether you're looking to build your workforce, fill a position, explore our training programs, or find your next job — our team is here.
          </p>
        </Container>
      </Section>

      {/* SECTION 2: SHIELD EMBLEM PLACEHOLDER SLAB */}
      <Section className="bg-white py-0 pb-10">
        <Container>
          <div className="w-full h-[150px] bg-slate-100 rounded-card flex items-center justify-center border border-slate-200">
            <ContactIcons.ShieldCheck />
          </div>
        </Container>
      </Section>

      {/* SECTION 3: COMPACT DUAL FORM COLUMNS */}
      <Section className="bg-white py-0 pb-16">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* B2B CORPORATE PARTNER CARD */}
          <div className="bg-white border border-slate-200 rounded-card p-8 shadow-card box-border">
            <h3 className="text-xl font-bold text-brand-navy mb-6 font-sans">
              I'm Looking to Hire / Partner with BMSPL
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Company Name</label>
                  <input type="text" placeholder="Enterprise Ltd." className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Name & Designation</label>
                  <input type="text" placeholder="John Doe, HR Director" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+91 " className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Business Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Service Required</label>
                  <select className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy">
                    <option>Staffing Solutions</option>
                    <option>Security Services</option>
                    <option>Training & Dev</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Location</label>
                  <input type="text" placeholder="City, State" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Expected Headcount</label>
                  <input type="text" placeholder="e.g. 50" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Preferred Callback Time</label>
                  <input type="text" placeholder="e.g. Morning, 11 AM" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy bg-white" />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Requirement Description</label>
                <textarea placeholder="Briefly describe your workforce needs..." className="w-full h-20 p-2.5 border border-slate-300 rounded-button text-[13px] box-border resize-y focus:outline-none focus:border-brand-navy bg-white" />
              </div>

              <button type="submit" className="bg-brand-gold text-brand-navy border-none py-3 px-6 text-xs font-bold rounded-button cursor-pointer hover:brightness-110 shadow-elevated transition-all uppercase tracking-wider mt-1">
                Request Consultation
              </button>
            </form>
          </div>

          {/* B2C APPLICANT CARD */}
          <div className="bg-slate-50 border border-slate-200 rounded-card p-8 shadow-card box-border">
            <h3 className="text-xl font-bold text-brand-navy mb-6 font-sans">
              I'm Looking for a Job
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Full Name</label>
                <input type="text" placeholder="Jane Doc" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+91 " className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy" />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Current City</label>
                  <input type="text" placeholder="Ahmedabad" className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy" />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Job Type Preference</label>
                  <select className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Contractual</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Brief Bio / Msg</label>
                <textarea placeholder="Share your experience or job interests..." className="w-full h-20 p-2.5 border border-slate-300 rounded-button text-[13px] bg-white box-border resize-y focus:outline-none focus:border-brand-navy" />
              </div>

              {/* Upload Strip */}
              <div className="border-2 dashed border-slate-300 rounded-button p-4 text-center bg-white cursor-pointer hover:bg-slate-100/50 transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <ContactIcons.Upload />
                  <div className="text-[12px] text-slate-500 font-bold font-sans">Uploaded Resume (PDF/DOCX)</div>
                  <div className="text-[11px] text-brand-gold font-extrabold uppercase tracking-wider">Browse Files</div>
                </div>
              </div>

              <button type="submit" className="bg-brand-gold text-brand-navy border-none py-3 px-6 text-xs font-bold rounded-button cursor-pointer hover:brightness-110 shadow-elevated transition-all uppercase tracking-wider mt-1">
                Submit Candidature
              </button>
            </form>
          </div>

        </Container>
      </Section>

      {/* SECTION 4: MAP & DETAILS */}
      <Section className="bg-white border-t border-slate-200">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="text-left flex flex-col gap-8 w-full min-w-0">
            <div className="border-l-4 border-brand-gold pl-4">
              <div className="text-[11px] font-extrabold text-red-600 uppercase mb-1 tracking-wider">Office Hours</div>
              <div className="text-base font-bold text-brand-navy font-sans">Monday to Saturday: 9:30 AM – 6:30 PM</div>
              <div className="text-sm font-bold text-red-600 mt-0.5">Sunday: Closed</div>
              <p className="text-xs text-slate-500 m-0 mt-1.5 leading-relaxed font-sans">
                Note: For urgent requirements, WhatsApp us outside office hours.
              </p>
            </div>

            <div>
              <div className="text-[11px] font-extrabold text-slate-400 uppercase mb-1.5 tracking-wider">Office Location</div>
              <h4 className="text-base font-bold text-brand-navy m-0 mb-1 font-sans">Bhakti Management Services Pvt. Ltd.</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 m-0 max-w-[340px] font-sans">
                509, 5th Floor, Megh Malhar Complex, Sector 11, Gandhinagar, Gujarat — 382011
              </p>
              
              <div className="flex flex-col gap-1.5 text-sm font-bold text-brand-navy font-sans">
                <div>📞 +91 9925242929</div>
                <div>✉ hr@bhaktimanagement.com</div>
              </div>
            </div>
          </div>

          {/* Map box placeholder */}
          <div className="bg-[#f0f4fc] border border-slate-200 rounded-card p-10 text-center flex flex-col items-center justify-center box-border shadow-flat">
            <ContactIcons.MapPin />
            <h4 className="text-lg font-bold text-brand-navy mt-3 mb-1 font-sans">Interactive Location Map</h4>
            <p className="text-xs text-slate-500 mb-5">Megh Malhar Complex, Gandhinagar</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="no-underline bg-brand-gold text-brand-navy text-xs font-bold py-2.5 px-6 rounded-button tracking-wider uppercase hover:brightness-110 shadow-elevated"
            >
              Open in Google Maps
            </a>
          </div>

        </Container>
      </Section>

      {/* SECTION 5: FAQs PANEL */}
      <Section className="bg-slate-50 border-t border-slate-200 text-center">
        <Container>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-1.5 font-serif">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-slate-500 mb-10 leading-relaxed font-sans">Quick answers to common inquiries</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left box-border">
            
            <div className="bg-white p-6 rounded-card border-t-4 border-brand-gold shadow-flat box-border">
              <div className="text-[10px] font-extrabold text-brand-gold tracking-wider mb-1.5 uppercase">Response Time</div>
              <h4 className="text-base font-bold text-brand-navy mb-2.5 font-sans">How fast will I hear back?</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0 font-sans">
                Our typical response time for corporate inquiries is within 24 business hours. For job seekers, response times vary based on specific vacancy requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border-t-4 border-brand-gold shadow-flat box-border">
              <div className="text-[10px] font-extrabold text-brand-gold tracking-wider mb-1.5 uppercase">Locations</div>
              <h4 className="text-base font-bold text-brand-navy mb-2.5 font-sans">Do you have other offices?</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0 font-sans">
                Our headquarters is in Gandhinagar, but we operate across multiple pan-India locations through a robust network of regional coordinators for on-site projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card border-t-4 border-brand-gold shadow-flat box-border">
              <div className="text-[10px] font-extrabold text-brand-gold tracking-wider mb-1.5 uppercase">Fastest Contact</div>
              <h4 className="text-base font-bold text-brand-navy mb-2.5 font-sans">What is the fastest way to reach you?</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed m-0 font-sans">
                For immediate staffing needs, we recommend calling our landline or the priority WhatsApp number mentioned above.
              </p>
            </div>

          </div>
        </Container>
      </Section>

    </div>
  );
}