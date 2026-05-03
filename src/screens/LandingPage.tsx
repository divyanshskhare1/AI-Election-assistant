import React from 'react';
import { type Screen } from '../App';
import { Hero } from './LandingPage/Hero';
import { QuickNav } from './LandingPage/QuickNav';
import { InfoBanner } from './LandingPage/InfoBanner';

interface LandingPageProps {
  onNavigate: (screen: Screen) => void;
}

/**
 * Landing Page component.
 * Serves as the entry point for users, featuring a hero section, 
 * quick navigation links to main features, and an informational banner.
 */
export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="flex flex-col">
      <Hero onNavigate={onNavigate} />
      <QuickNav onNavigate={onNavigate} />
      <InfoBanner onNavigate={onNavigate} />
    </div>
  );
}
