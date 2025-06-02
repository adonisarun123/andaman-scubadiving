import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import CurrentStateAnalysis from '@/components/CurrentStateAnalysis';
import Phase1QuickWins from '@/components/Phase1QuickWins';
import Phase2DigitalMarketing from '@/components/Phase2DigitalMarketing';
import Phase3EmpireBuilding from '@/components/Phase3EmpireBuilding';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <CurrentStateAnalysis />
      <Phase1QuickWins />
      <Phase2DigitalMarketing />
      <Phase3EmpireBuilding />
      <FinalCTA />
    </main>
  );
}
