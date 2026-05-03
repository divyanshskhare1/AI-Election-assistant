import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Circle, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

interface VoterStep {
  id: number;
  title: string;
  desc: string;
  icon: any;
  tasks: string[];
  link?: string;
}

interface StepListProps {
  steps: VoterStep[];
  activeStep: number | null;
  setActiveStep: (id: number | null) => void;
  completedSteps: number[];
  toggleStep: (id: number) => void;
}

export const StepList: React.FC<StepListProps> = ({
  steps,
  activeStep,
  setActiveStep,
  completedSteps,
  toggleStep
}) => {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div 
          key={step.id}
          className={cn(
            "group cursor-pointer rounded-[2rem] border transition-all overflow-hidden",
            activeStep === step.id 
              ? "border-primary bg-white shadow-xl shadow-primary/5" 
              : "border-outline-variant bg-surface-container-low hover:border-outline"
          )}
          onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
        >
          <div className="p-6 flex items-start gap-4">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
              activeStep === step.id ? "bg-primary text-white" : "bg-white text-outline shadow-sm"
            )}>
              <step.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className={cn("text-xl font-display font-bold", activeStep === step.id ? "text-primary" : "text-on-surface-variant")}>
                  {step.title}
                </h3>
                {completedSteps.includes(step.id) && (
                  <CheckCircle className="text-green-500 w-5 h-5" />
                )}
              </div>
              <p className={cn("text-sm mt-1 leading-relaxed", activeStep === step.id ? "text-on-surface-variant" : "text-outline")}>
                {step.desc}
              </p>
            </div>
          </div>

          {activeStep === step.id && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="px-6 pb-8 space-y-6"
            >
              <div className="space-y-3">
                {step.tasks.map((task, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container relative">
                    <Circle className="w-4 h-4 text-outline" />
                    <span className="text-sm font-medium text-primary/80">{task}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleStep(step.id); }}
                  className={cn(
                    "flex-1 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                    completedSteps.includes(step.id) 
                      ? "bg-green-100 text-green-700 border border-green-200" 
                      : "bg-primary text-white hover:shadow-lg active:scale-95"
                  )}
                >
                  {completedSteps.includes(step.id) ? "Marked as Done" : "Done with this"}
                  {completedSteps.includes(step.id) ? null : <CheckCircle className="w-4 h-4" />}
                </button>
                {step.link && (
                  <a 
                    href={step.link} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
