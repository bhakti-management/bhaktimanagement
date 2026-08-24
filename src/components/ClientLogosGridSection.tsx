"use client";

import React from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ClientLogosGridSection() {
  const govClients = [
    { src: '/assets/Gov logos/BISAG.png', alt: 'BISAG' },
    { src: '/assets/Gov logos/CWC.png', alt: 'CWC' },
    { src: '/assets/Gov logos/FED.png', alt: 'FED' },
    { src: '/assets/Gov logos/GNFS.png', alt: 'GNFS' },
    { src: '/assets/Gov logos/GNL.png', alt: 'GNL' },
    { src: '/assets/Gov logos/gnlu.png', alt: 'GNLU' },
    { src: '/assets/Gov logos/GV.png', alt: 'GV' },
    { src: '/assets/Gov logos/gwssb.png', alt: 'GWSSB' },
    { src: '/assets/Gov logos/IC.png', alt: 'IC' },
    { src: '/assets/Gov logos/logo-gil.png', alt: 'GIL' },
  ];

  const privateClients = [
    { src: '/assets/Private logos/logo-caparo.png', alt: 'Caparo' },
    { src: '/assets/Private logos/logo-jbm.png', alt: 'JBM' },
    { src: '/assets/Private logos/logo-ku.png', alt: 'KU' },
    { src: '/assets/Private logos/logo-nessa.png', alt: 'Nessa' },
    { src: '/assets/Private logos/logo-nirmiti.png', alt: 'Nirmiti' },
    { src: '/assets/Private logos/logo-polyrub.png', alt: 'Polyrub' },
  ];

  // Duplicate arrays enough times to ensure seamless looping without blank gaps
  const row1Clients = [...govClients, ...govClients, ...govClients, ...govClients];
  const row2Clients = [...privateClients, ...privateClients, ...privateClients, ...privateClients, ...privateClients, ...privateClients];

  return (
    <Section className="bg-white text-center py-12 lg:py-16 border-y border-slate-100 overflow-hidden">
      <Container className="flex flex-col items-center !px-0 max-w-full">
        
        {/* Section Header */}
        <div className="px-6 lg:px-16 xl:px-24 mb-8">
          <div className="text-brand-gold text-[10px] font-extrabold tracking-widest mb-2 uppercase">
            OUR VALUED CLIENTS
          </div>
          <h2 className="text-2xl lg:text-[32px] font-extrabold text-brand-navy mb-3 font-serif tracking-tight leading-tight">
            Trusted Across Government & Private Sectors
          </h2>
          <p className="text-[13px] text-slate-500 max-w-[550px] mx-auto leading-relaxed">
            Delivering high-compliance workforce solutions to premier public utilities and leading industrial enterprises.
          </p>
        </div>

        {/* MARQUEE CONTAINER WRAPPER */}
        <div className="w-full flex flex-col gap-5 marquee-container relative">
          
          {/* Edge Fade Gradients - from white to transparent */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* ROW 1: GOVERNMENT CLIENTS (Scrolls continuously to the LEFT) */}
          <div className="w-full overflow-hidden">
            <div className="flex animate-marquee-left gap-4 py-1">
              {row1Clients.map((client, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f9fa] rounded-md shadow-sm flex items-center justify-center min-w-[180px] h-20 shrink-0 hover:bg-slate-100/50 transition-colors"
                >
                  <img 
                    src={client.src} 
                    alt={client.alt} 
                    className="max-h-10 max-w-[85%] object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: PRIVATE CLIENTS (Scrolls continuously to the RIGHT) */}
          <div className="w-full overflow-hidden">
            <div className="flex animate-marquee-right gap-4 py-1">
              {row2Clients.map((client, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#f8f9fa] rounded-md shadow-sm flex items-center justify-center min-w-[180px] h-20 shrink-0 hover:bg-slate-100/50 transition-colors"
                >
                  <img 
                    src={client.src} 
                    alt={client.alt} 
                    className="max-h-10 max-w-[85%] object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}