    import React from 'react';
import Hero from '@/components/HeroSection';
import AudienceSelectionSection from '@/components/AudienceSelectionSection';
import StatsGrid from '@/components/StatsGrid';
import ServicesSection from '@/components/ServicesSection';
import PillarsSection from '@/components/PillarsSection';
import FounderSection from '@/components/FounderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import InsightsSection from '@/components/InsightsSection';
import BottomCTASection from '@/components/BottomCTASection';

export default function Home() {
  return (
    <main className="bg-white" style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <AudienceSelectionSection />
      <StatsGrid />
      <ServicesSection />
      <PillarsSection />
      <FounderSection />
      <TestimonialsSection />
      <CTASection />
      <InsightsSection />
      <BottomCTASection />
    </main>
  );
}