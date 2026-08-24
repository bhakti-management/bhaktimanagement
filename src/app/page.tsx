import React from 'react';
import SolutionsOverviewSection from '@/components/SolutionsOverviewSection';
import HeroSection from '@/components/HeroSection';
import AudienceSelectionSection from '@/components/AudienceSelectionSection';
import StatsGrid from '@/components/StatsGrid';
import ServicesSection from '@/components/ServicesSection';
import ClientLogosGridSection from '@/components/ClientLogosGridSection';
import PillarsSection from '@/components/PillarsSection';
import FounderSection from '@/components/FounderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import InsightsSection from '@/components/InsightsSection';
import BottomCTASection from '@/components/BottomCTASection';

export default function Home() {
  return (
    <main className="bg-white" style={{ width: '100%', overflowX: 'hidden' }}>
      <SolutionsOverviewSection />
      <HeroSection />
      <AudienceSelectionSection />
      <StatsGrid />
      <ServicesSection />
      <ClientLogosGridSection />
      <PillarsSection />
      <FounderSection />
      <TestimonialsSection />
      <CTASection />
      <InsightsSection />
      <BottomCTASection />
    </main>
  );
}