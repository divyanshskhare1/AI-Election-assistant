/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Vote, 
  User, 
  Calendar, 
  LayoutDashboard, 
  Search, 
  HelpCircle, 
  Home, 
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

// Screens
import LandingPage from './screens/LandingPage';
import Timeline from './screens/Timeline';
import VoterGuide from './screens/VoterGuide';
import Dashboard from './screens/Dashboard';
import Candidates from './screens/Candidates';
import Resources from './screens/Resources';

export type Screen = 'home' | 'timeline' | 'guide' | 'dashboard' | 'candidates' | 'resources';

/**
 * Root Application Component.
 * Manages the top-level navigation state and renders relevant screens
 * based on the current selection. Includes header, mobile menu, and
 * main content area with route transitions.
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'guide', label: 'Guide', icon: Vote },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'candidates', label: 'Candidates', icon: Search },
    { id: 'resources', label: 'Resources', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Header */}
      <header 
        className="sticky top-0 z-50 bg-white border-b border-outline-variant shadow-sm px-6 py-2 flex items-center justify-between"
        role="banner"
      >
        <div 
          className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg pr-2" 
          onClick={() => navigate('home')}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('home')}
          aria-label="Election Assistant Home"
        >
          <Vote className="text-primary w-8 h-8 fill-primary/10" />
          <span className="font-display font-bold text-lg text-primary tracking-tight">
            Election Assistant
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id as Screen)}
              aria-current={currentScreen === item.id ? 'page' : undefined}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-all active:scale-95",
                currentScreen === item.id 
                  ? "bg-primary-container text-white shadow-sm" 
                  : "text-on-surface-variant hover:bg-surface-container"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button 
            className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors hidden md:block"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
            aria-label="User Profile"
          >
            <User className="w-6 h-6" />
          </button>
          <button 
            className="p-2 text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-outline-variant overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id as Screen)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl font-medium",
                    currentScreen === item.id 
                      ? "bg-primary-container text-white" 
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col" role="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1 focus:outline-none"
            tabIndex={-1}
          >
            {currentScreen === 'home' && <LandingPage onNavigate={navigate} />}
            {currentScreen === 'timeline' && <Timeline />}
            {currentScreen === 'guide' && <VoterGuide />}
            {currentScreen === 'dashboard' && <Dashboard />}
            {currentScreen === 'candidates' && <Candidates />}
            {currentScreen === 'resources' && <Resources />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky Bottom Nav (Mobile Only) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/90 backdrop-blur-md border border-outline-variant shadow-lg rounded-2xl flex justify-around items-center p-2 z-40">
        {menuItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id as Screen)}
            className={cn(
              "p-3 rounded-xl transition-all active:scale-90 flex flex-col items-center gap-1",
              currentScreen === item.id 
                ? "text-primary-container" 
                : "text-outline hover:text-on-surface-variant"
            )}
          >
            <item.icon className={cn("w-6 h-6", currentScreen === item.id && "fill-primary-container/10")} />
          </button>
        ))}
      </nav>
    </div>
  );
}
