"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'About BMSPL', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Job Seekers', path: '/job-seekers' },
    { name: 'News & Insights', path: '/news-insights' }
  ];

  return (
    <footer className="w-full bg-brand-navy text-white font-sans box-border">
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Logo & Text Description */}
        <div className="flex flex-col gap-5 w-full">
          <Link href="/">
            <img 
              src="/assets/bhakticompany.logo.png.svg" 
              alt="Bhakti Management Services" 
              className="h-[52px] w-auto align-self-start" 
            />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed m-0">
            Building Manpower Solutions Private Limited. A leading HR consultancy and workforce management partner delivering excellence through discipline and compliance.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-extrabold text-brand-gold m-0 tracking-wider uppercase">
            QUICK LINKS
          </h4>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            {quickLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className="text-slate-400 hover:text-brand-gold no-underline transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-extrabold text-brand-gold m-0 tracking-wider uppercase">
            CONTACT
          </h4>
          <div className="flex flex-col gap-3.5 text-sm text-slate-400">
            <div className="flex gap-2 items-start">
              <span className="text-brand-gold shrink-0">📍</span>
              <span className="leading-relaxed">509 Megh Malhar Complex, Sector 11, Gandhinagar, Gujarat</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-brand-gold shrink-0">📞</span>
              <a href="tel:+919925242929" className="text-slate-400 hover:text-brand-gold no-underline transition-colors">
                +91-9925242929
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-brand-gold shrink-0">✉️</span>
              <a href="mailto:hr@bhaktimanagement.com" className="text-slate-400 hover:text-brand-gold no-underline transition-colors">
                hr@bhaktimanagement.com
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Compliances */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-extrabold text-brand-gold m-0 tracking-wider uppercase">
            COMPLIANCES
          </h4>
          <p className="text-sm text-slate-400 m-0 leading-relaxed">
            Dedicated to 100% statutory adherence across all state and central regulations.
          </p>
          <div className="flex gap-2.5 mt-1">
            <div className="border border-slate-700 bg-slate-800 text-brand-gold py-1.5 px-3 text-[11px] font-bold rounded-button">
              ISO 9001
            </div>
            <div className="border border-slate-700 bg-slate-800 text-brand-gold py-1.5 px-3 text-[11px] font-bold rounded-button">
              EPF/ESIC
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/5 py-5 px-6 text-[13px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>© {new Date().getFullYear()} BMSPL | DEV Group of Companies</div>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
