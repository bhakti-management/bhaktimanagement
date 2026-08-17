"use client";

import React from 'react';
import Container from './Container';
import Section from './Section';

export default function AboutLeadershipCTA() {
  return (
    <div className="w-full font-sans box-border">
      
      {/* SECTION A: LEADERSHIP SHOWCASE */}
      <Section className="bg-[#f3f6fc]">
        <Container>
          <div className="text-brand-navy text-[11px] font-extrabold tracking-widest mb-10 text-center uppercase">
            LEADERSHIP
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start text-left box-border">
            
            {/* Left: Founder Box Profile (spanning 2 cols on lg) */}
            <div className="lg:col-span-2 bg-transparent flex flex-col gap-6 w-full min-w-0">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy m-0 font-serif">
                The People Behind BMSPL
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start w-full">
                {/* Fixed container box prevents image from shrinking or losing aspect ratio */}
                <div className="w-[240px] shrink-0 mx-auto sm:mx-0">
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-card shadow-elevated">
                    <img 
                      src="/assets/founder.jpg.png" 
                      alt="Col. (Dr.) Bhaktidev Gupta" 
                      className="absolute inset-0 w-full h-full object-cover block" 
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-bold text-brand-navy m-0 font-sans">
                    Col. (Dr.) Bhaktidev Gupta
                  </h4>
                  <div className="text-xs font-bold text-brand-gold mt-1 mb-4 uppercase">
                    M.Tech (IIT-K), PhD, Retired Indian Army
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-4 m-0 font-sans">
                    An alumnus of the prestigious IIT Kanpur and a retired Colonel of the Indian Army, Dr. Gupta brings a unique blend of technical prowess and disciplined leadership to the boardroom.
                  </p>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 m-0 font-sans">
                    With over four decades of combined experience in military logistics and human resources, he has pioneered manpower frameworks that are currently used by some of India's largest PSUs.
                  </p>
                  
                  <div className="text-[13px] font-extrabold text-brand-navy mb-2 uppercase">
                    Credentials & Honors
                  </div>
                  <ul className="m-0 pl-4 text-xs md:text-sm text-slate-500 leading-relaxed list-disc">
                    <li>Distinguished Service Medal (Army)</li>
                    <li>Industry Excellence Award in HR</li>
                    <li>Fellow of Institutional HR Societies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Co-Founder Frame Card Panel */}
            <div className="bg-white border border-slate-200 rounded-card p-8 text-center shadow-card box-border">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-brand-gold shadow-elevated">
                <img 
                  src="/assets/co-founder.jpg.png" 
                  alt="Ms. Neeta Arora" 
                  className="w-full h-full object-cover block" 
                />
              </div>
              
              <h4 className="text-base font-bold text-slate-600 mb-1 m-0 font-sans">
                In Loving Memory
              </h4>
              <div className="text-xs font-bold text-brand-gold mb-4 uppercase">
                Ms. Neeta Arora (1960–2017)
              </div>
              
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed italic m-0 font-sans">
                Ms. Neeta Arora was a founding pillar of Bhakti Management Services. Her vision, warmth, and commitment to building an organization rooted in genuine human connection shaped the values that BMSPL carries forward to this day. We remember her with deep gratitude and respect.
              </p>
            </div>

          </div>
        </Container>
      </Section>

      {/* SECTION B: CLOSING BRAND CTA */}
      <Section className="bg-white relative overflow-hidden text-center">
        {/* Subtle background radial gradients */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at top left, rgba(255,184,0,0.03) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(255,184,0,0.03) 0%, transparent 40%)'
          }}
        />
        
        <Container className="max-w-3xl flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight font-serif m-0">
            Ready to Partner with BMSPL?
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[600px] m-0 font-sans">
            Whether you're looking for institutional staffing or a career that makes a difference, our 25-year legacy of trust is at your service.
          </p>
          
          <div className="flex gap-4 flex-wrap justify-center mt-3">
            <button className="bg-brand-gold text-brand-navy border-none py-4 px-9 font-bold text-xs tracking-widest rounded-button hover:brightness-110 shadow-elevated cursor-pointer transition-all uppercase">
              Hire Through BMSPL
            </button>
            <button className="bg-transparent text-brand-navy border-2 border-brand-navy py-3.5 px-9 font-bold text-xs tracking-widest rounded-button hover:bg-slate-50 cursor-pointer transition-all uppercase">
              View Job Openings
            </button>
          </div>
        </Container>
      </Section>

    </div>
  );
}
