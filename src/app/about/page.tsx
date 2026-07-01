import React from 'react';
import AboutHero from '@/components/AboutHero';
import StatsGrid from '@/components/StatsGrid';
import AboutStorySection from '@/components/AboutStorySection';
import AboutEcosystemMatrix from '@/components/AboutEcosystemMatrix';
import AboutIndustriesSection from '@/components/AboutIndustriesSection';
import AboutLeadershipCTA from '@/components/AboutLeadershipCTA';

export default function AboutMainPage() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden', backgroundColor: '#ffffff' }}>
      <AboutHero />
      <StatsGrid />
      <AboutStorySection />
      <AboutEcosystemMatrix />
      <AboutIndustriesSection />
      <AboutLeadershipCTA />
    </main>
  );
}
