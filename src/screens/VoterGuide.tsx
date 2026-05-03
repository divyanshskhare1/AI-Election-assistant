import React, { useState } from 'react';
import { VOTER_STEPS } from './constants';
import { SectionHeader } from '../components/SectionHeader';
import { StepList } from './VoterGuide/StepList';
import { SidePanel } from './VoterGuide/SidePanel';

/**
 * Voter Guide screen.
 * Provides an interactive step-by-step checklist for voters to prepare for polls.
 * Tracks completed steps and provides constituency resources.
 */
export default function VoterGuide() {
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (id: number) => {
    if (completedSteps.includes(id)) {
      setCompletedSteps(completedSteps.filter(s => s !== id));
    } else {
      setCompletedSteps([...completedSteps, id]);
    }
  };

  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 mt-2">
      <div className="flex-1 space-y-8">
        <SectionHeader 
          title="Voter Step-by-Step Guide"
          description="Ensure you're ready for election day with our simplified checklist. Follow these steps to ensure your vote is counted."
        />

        <StepList 
          steps={VOTER_STEPS}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          completedSteps={completedSteps}
          toggleStep={toggleStep}
        />
      </div>

      <SidePanel />
    </div>
  );
}
