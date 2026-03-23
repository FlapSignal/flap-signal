import React from 'react';
import { Hero } from '../components/home/Hero';
import { SignalTicker } from '../components/home/SignalTicker';
import { SignalGeneration } from '../components/home/SignalGeneration';
import { MarketIntegration } from '../components/home/MarketIntegration';
import { MarketSentiment } from '../components/home/MarketSentiment';
import { RecentProfits } from '../components/home/RecentProfits';
import { SignalStream } from '../components/home/SignalStream';
import { DashboardMockup } from '../components/home/DashboardMockup';

export const Home = () => {
  return (
    <main className="relative z-10 w-full overflow-hidden pt-10">
      <Hero />
      <RecentProfits />
      <SignalTicker />
      <SignalGeneration />
      <MarketSentiment />
      <MarketIntegration />
      <SignalStream />
      <DashboardMockup />
    </main>
  );
};
