import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Circle, 
  ChevronRight, 
  Smartphone, 
  FileText, 
  Users, 
  ShieldCheck,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 1,
    title: "Check Enrollment",
    desc: "Verify if your name is listed in the Electoral Roll. Without this, even a Voter ID card isn't enough.",
    icon: ShieldCheck,
    tasks: ["Visit electoralsearch.eci.gov.in", "Search by EPIC number or Personal Details", "Save your Polling Station and Part Number"],
    link: "https://electoralsearch.eci.gov.in/"
  },
  {
    id: 2,
    title: "Voter Registration",
    desc: "If you're not registered, apply online for Form 6. You can do this via the Voter Helpline App.",
    icon: FileText,
    tasks: ["Fill Form 6 (New Voter)", "Upload ID and Address Proof", "Note down Reference ID for tracking"],
    link: "https://voters.eci.gov.in/"
  },
  {
    id: 3,
    title: "Locate Your Booth",
    desc: "Find exactly where you need to go to cast your vote. Booths are usually near your home.",
    icon: Users,
    tasks: ["Check via Voter Helpline App", "Find the BLO (Booth Level Officer) contact", "Check accessibility facilities at the booth"]
  },
  {
    id: 4,
    title: "Election Day prep",
    desc: "Ensure you have the right documents to enter the polling station.",
    icon: Smartphone,
    tasks: ["Carry your EPIC (Voter ID) Card", "Keep an alternative ID (Aadhaar, DL) if EPIC is missing", "Check booth timing (usually 7 AM to 6 PM)"]
  }
];

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
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-display font-extrabold text-primary">Voter Step-by-Step Guide</h1>
          <p className="text-on-surface-variant text-lg">
            Ensure you're ready for election day with our simplified checklist. Follow these steps to ensure your vote is counted.
          </p>
        </div>

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
      </div>

      <div className="lg:w-96 space-y-8">
         <div className="bg-secondary-container p-8 rounded-[2rem] text-on-secondary-container shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
            <h3 className="text-2xl font-display font-extrabold mb-4 relative z-10">Voter Helpline</h3>
            <p className="text-on-secondary-container/80 text-sm leading-relaxed mb-6 relative z-10">
              The Election Commission of India provides a dedicated platform for all voter queries.
            </p>
            <div className="space-y-4 relative z-10">
               <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                  <div className="text-xs font-bold uppercase opacity-60">National Helpline</div>
                  <div className="text-xl font-bold">1950</div>
               </div>
               <button className="w-full py-4 bg-white text-secondary font-bold rounded-xl shadow-sm hover:translate-y-1 transition-all">
                  Install Mobile App
               </button>
            </div>
         </div>

         <div className="card p-8 bg-surface-container-low border-primary/20">
            <h4 className="font-display font-bold text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              Constituency Finder
            </h4>
            <div className="space-y-4">
               <p className="text-xs text-on-surface-variant font-medium">Enter your Pincode to find your constituency (Mockup).</p>
               <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="e.g. 110001" 
                    className="flex-1 px-4 py-2 rounded-xl border border-outline-variant text-sm focus:border-primary outline-none"
                    maxLength={6}
                  />
                  <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl active:scale-95 transition-all">
                    Find
                  </button>
               </div>
               <div className="p-3 bg-white/50 rounded-xl border border-dashed border-outline-variant text-[10px] text-outline text-center">
                  Constituency data is updated based on 2024 delimitation.
               </div>
            </div>
         </div>

         <div className="card p-8">
            <h4 className="font-display font-bold text-primary mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              Required IDs
            </h4>
            <p className="text-sm text-on-surface-variant mb-4 font-medium opacity-80">Carry any one (EPIC preferred):</p>
            <ul className="space-y-3">
              {['Aadhaar Card', 'Passport', 'Driving License', 'PAN Card', 'Bank Passbook'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-primary/80 font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
         </div>
      </div>
    </div>
  );
}
