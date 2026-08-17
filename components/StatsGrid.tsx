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
    <div className="w-full bg-brand-navy py-10 px-6 box-border font-sans">
      <Container className="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-0">
        {stats.map((item, index) => (
          <React.Fragment key={index}>
            {/* Stat Item Block */}
            <div className="flex-1 min-w-[180px] text-center flex flex-col gap-2 box-border">
              {/* Golden Yellow Big Number */}
              <div className="text-brand-gold text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                {item.number}
              </div>
              
              {/* White Uppercase Label Text */}
              <div className="text-white text-[11px] font-bold tracking-widest opacity-90">
                {item.label}
              </div>
            </div>

            {/* Vertical Divider Line hidden on smaller screens */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-white/15 shrink-0 mx-4" />
            )}
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}
