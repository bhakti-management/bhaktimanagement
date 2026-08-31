"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Section from './Section';

export default function FounderSection() {
  return (
    <Section className="bg-white !py-8 lg:!py-12 box-border">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:px-16 xl:px-24">
        
        {/* LEFT COLUMN: FOUNDER IMAGE */}
        {/* Removed the background and shadow from the wrapper so the image can float cleanly */}
        <div className="w-full relative min-h-[300px] lg:h-auto flex items-center justify-center">
          {/* CHANGED to object-contain to ensure 100% of the image is visible without cropping */}
          <img 
            src="/assets/founder.jpg.png" 
            alt="Col. (Dr.) Bhaktidev Gupta" 
            className="absolute inset-0 w-full h-full object-contain block"
          />
        </div>

        {/* RIGHT COLUMN: COMPACT TEXT CONTENT */}
        <div className="flex flex-col justify-center gap-5 w-full min-w-0 py-2">
          
          {/* Eyebrow */}
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest uppercase">
            LEADERSHIP • EXPERIENCE • INSTITUTIONAL TRUST
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy m-0 font-serif tracking-tight leading-tight">
            Leadership Built on Discipline.<br />A Vision Built Around People.
          </h2>

          {/* Founder Name & Designation */}
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-extrabold text-brand-navy m-0 font-sans">
              Col. (Dr.) Bhaktidev Gupta
            </h3>
            <div className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">
              Founder & Managing Director
            </div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Bhakti Management Services Pvt. Ltd.
            </div>
          </div>

          {/* Profile Description */}
          <div className="text-[12px] text-slate-600 leading-relaxed flex flex-col gap-2.5">
            <p className="m-0">
              A retired Indian Army Colonel, IIT Kanpur alumnus, HR professional, educator and entrepreneur, Col. (Dr.) Bhaktidev Gupta brings together military discipline, technological education, management expertise and decades of experience in human resources.
            </p>
            <p className="m-0">
              His academic and professional journey spans B.Tech from IIT Kanpur, M.Sc. in Mass Communication, MBA in Human Resources and a Ph.D. in Human Resources, complemented by his experience as a Visiting Faculty at IIM.
            </p>
            <p className="m-0">
              This combination of institutional knowledge, leadership experience and practical industry exposure has shaped his approach to building organizations around people, performance and purpose.
            </p>
          </div>

          {/* Credentials Displayed as Scannable Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 py-3 border-y border-slate-100 my-1">
            {[
              "Retired Indian Army Colonel",
              "B.Tech — IIT Kanpur",
              "M.Sc. — Mass Communication",
              "MBA — Human Resources",
              "Ph.D. — Human Resources",
              "Visiting Faculty — IIM"
            ].map((cred, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[12px] text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                <span>{cred}</span>
              </div>
            ))}
          </div>

          {/* Founder Quote */}
          <div className="border-l-[3px] border-brand-gold pl-4 py-1 my-1 bg-slate-50/50 rounded-r-[2px]">
            <p className="text-[13px] text-brand-navy italic font-serif m-0 leading-relaxed">
              “People are not simply a resource to be managed. They are the foundation on which organizations grow, perform and endure.”
            </p>
          </div>

          {/* Bhakti Journey / Story */}
          <div className="text-[12px] text-slate-600 leading-relaxed flex flex-col gap-2.5">
            <p className="m-0">
              In 1998, Col. (Dr.) Bhaktidev Gupta established Bhakti Consultants, which evolved into Bhakti Management Services Pvt. Ltd. under the DEV Group of Companies.
            </p>
            <p className="m-0">
              His vision was to create a professional HR organization that could bridge the gap between organizations and the people they depend on.
            </p>
            <p className="m-0">
              Over the years, that vision developed into a broader HR and workforce solutions ecosystem, spanning permanent staffing, contractual staffing and payrolling, security services, and training & development.
            </p>
            <p className="m-0">
              Bhakti's approach has remained centered on quality, integrity, client satisfaction and continuous improvement.
            </p>
            <p className="m-0">
              Today, Bhakti carries that philosophy forward by combining people, process and professional expertise to help organizations build dependable workforces and create long-term value.
            </p>
          </div>

          {/* Optional Supporting Line & CTA */}
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              Led by Experience. Built on Honor.
            </div>
            <Link 
              href="/about" 
              className="text-xs font-bold text-brand-gold hover:text-brand-navy transition-colors uppercase tracking-widest inline-flex items-center gap-1.5 no-underline"
            >
              <span>Read Our Story</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </Container>
    </Section>
  );
}