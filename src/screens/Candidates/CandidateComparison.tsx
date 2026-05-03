import React from 'react';
import { motion } from 'motion/react';
import { X, Scale, GraduationCap, Briefcase, MapPin, Users, Heart } from 'lucide-react';
import { Candidate } from '../types';
import { Badge } from '../../components/Badge';
import { cn } from '../../lib/utils';

interface CandidateComparisonProps {
  candidates: Candidate[];
  onClose: () => void;
}

export const CandidateComparison: React.FC<CandidateComparisonProps> = ({ candidates, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed inset-0 z-50 flex items-end justify-center sm:p-6 p-0 bg-black/40 backdrop-blur-sm"
    >
      <div className="bg-white w-full max-w-6xl rounded-t-[3rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col h-[90vh] sm:h-auto max-h-[90vh]">
        <div className="p-8 border-b border-outline-variant flex items-center justify-between bg-surface-container-lowest">
          <div>
            <h2 className="text-3xl font-display font-extrabold text-primary">Candidate Comparison</h2>
            <p className="text-on-surface-variant text-sm">Side-by-side analysis of selected leaders</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-surface-container rounded-full hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-x-auto p-8 no-scrollbar">
          <div className="flex gap-8 min-w-max md:min-w-0">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="w-[300px] flex-shrink-0 space-y-8">
                <div className="space-y-4">
                  <div className="aspect-square bg-surface-container rounded-3xl flex items-center justify-center text-primary/20">
                     <Users className="w-20 h-20" />
                  </div>
                  <div>
                    <Badge variant={candidate.party === 'BJP' ? 'orange' : candidate.party === 'INC' ? 'blue' : 'default'}>
                      {candidate.party}
                    </Badge>
                    <h3 className="text-2xl font-display font-bold text-primary mt-2">{candidate.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-outline font-bold uppercase tracking-widest mt-1">
                      <MapPin className="w-3 h-3" />
                      {candidate.constituency}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <ComparisonItem 
                    icon={GraduationCap} 
                    label="Education" 
                    value={candidate.education} 
                  />
                  <ComparisonItem 
                    icon={Briefcase} 
                    label="Profession" 
                    value={candidate.profession} 
                  />
                  <ComparisonItem 
                    icon={Scale} 
                    label="Criminal Cases" 
                    value={candidate.cases}
                    valueColor={candidate.cases > 0 ? "text-red-600" : "text-green-600"}
                  />
                  
                  <div className="pt-6 border-t border-outline-variant">
                    <div className="text-xs text-outline font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                       <Heart className="w-3 h-3" />
                       Public Perception
                    </div>
                    <div className="space-y-2">
                       {/* Mock percentage for UI demonstration purposes */}
                       <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${Math.random() * 40 + 60}%` }} 
                          />
                       </div>
                       <div className="flex justify-between text-[10px] font-bold text-outline uppercase tracking-tighter">
                          <span>Verified Status</span>
                          <span>Active Member</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-surface-container-lowest border-t border-outline-variant flex justify-center">
           <button 
             onClick={onClose}
             className="px-12 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1"
           >
             Close Comparison
           </button>
        </div>
      </div>
    </motion.div>
  );
};

const ComparisonItem = ({ icon: Icon, label, value, valueColor }: { icon: any, label: string, value: string | number, valueColor?: string }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-outline">
      <Icon className="w-4 h-4" />
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </div>
    <div className={cn("text-base font-bold text-on-surface", valueColor)}>
      {typeof value === 'number' && label.includes('Cases') 
        ? (value > 0 ? `${value} Registered Cases` : "No Declared Cases")
        : value}
    </div>
  </div>
);
