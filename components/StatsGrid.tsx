"use client";

import React from 'react';
import Container from './Container';

export default function StatsGrid() {
  const stats = [
    { number: '25+', label: 'YEARS OF LEGACY' },
    { number: '100+', label: 'ACTIVE CORPORATE CLIENTS' },
    { number: '1000+', label: 'ANNUAL PLACEMENTS' },
    { number: '15+', label: 'PAN-INDIA STATES' }
  ];

  return (
    <div className="w-full bg-brand-navy !py-5 md:!py-6 px-6 box-border font-sans border-y border-white/5">
      {/* Added horizontal padding constraints to align with the rest of the site */}
      <Container className="flex flex-row flex-wrap justify-between items-center gap-4 lg:px-16 xl:px-24">
        {stats.map((item, index) => (
          <React.Fragment key={index}>
            {/* Stat Item Block */}
            <div className="flex-1 min-w-[140px] text-center flex flex-col gap-1 box-border">
              {/* Golden Yellow Number - Scaled down to 28px/32px */}
              <div className="text-brand-gold text-2xl lg:text-[32px] font-extrabold tracking-tight leading-none">
                {item.number}
              </div>
              
              {/* White Uppercase Label Text - Scaled down */}
              <div className="text-white text-[9px] lg:text-[10px] font-bold tracking-widest opacity-90">
                {item.label}
              </div>
            </div>

            {/* Vertical Divider Line hidden on smaller screens, adjusted height */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-8 bg-white/15 shrink-0 mx-2" />
            )}
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}