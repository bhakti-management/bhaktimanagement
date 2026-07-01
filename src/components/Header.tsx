'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { name: 'Permanent Staffing', path: '/services/permanent-staffing' },
    { name: 'Training & Development', path: '/services/training-development' },
    { name: 'Contractual Staffing', path: '/services/contractual-staffing' },
    { name: 'Security Services', path: '/services/security-services' },
  ];

  return (
    <header className="w-full bg-[#0F1B3C] sticky top-0 z-[100] shadow-md border-b border-[#C9A14A]/10">
      <div className="mx-auto max-w-7xl h-24 flex justify-between items-center px-4 md:px-8">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="mx-auto max-w-7xl h-20 flex justify-between items-center px-4 md:px-8">B</div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-[#F5F5F5] uppercase">Bhakti</span>
            <span className="text-[10px] text-[#C9A14A] tracking-widest uppercase font-semibold">Management Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-[#F5F5F5] uppercase">
          <Link href="/about" className="hover:text-[#C9A14A] transition-colors">About Us</Link>

          {/* Services Dropdown - The "List" style you wanted */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#C9A14A] transition-colors uppercase">
              Services <ChevronDown size={14} />
            </button>
            
            {/* The List Container */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-2xl border border-gray-100 py-2 z-[200]">
                {serviceLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.path}
                    className="block px-6 py-3 text-[#0F1B3C] text-[13px] font-semibold hover:bg-gray-50 hover:text-[#C9A14A] transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/job-seekers" className="hover:text-[#C9A14A] transition-colors">Job Seekers</Link>
          <Link href="/news-insights" className="hover:text-[#C9A14A] transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-[#C9A14A] transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link href="/hire" className="hidden lg:block bg-[#C9A14A] text-[#0F1B3C] font-bold text-xs tracking-widest px-6 py-4 uppercase hover:brightness-110 shadow-lg">
          Hire Through BMSPL
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white"><Menu size={26} /></button>
      </div>
    </header>
  );
}