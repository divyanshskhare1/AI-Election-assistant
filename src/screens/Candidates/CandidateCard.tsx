import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, GraduationCap, Scale, ChevronRight, Check } from 'lucide-react';
import { Candidate } from '../types';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { cn } from '../../lib/utils';

interface CandidateCardProps {
  candidate: Candidate;
  isSelected: boolean;
  onToggleSelection: (id: number) => void;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ 
  candidate, 
  isSelected, 
  onToggleSelection
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative"
    >
      <Card 
        className={cn(
          "group transition-all cursor-pointer flex flex-col h-full p-8 select-none relative",
          isSelected ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "hover:border-primary border-outline-variant"
        )} 
        variant="default"
        onClick={() => onToggleSelection(candidate.id)}
      >
        {/* Selection Indicator */}
        <div className={cn(
          "absolute top-4 right-4 w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center z-20",
          isSelected ? "bg-primary border-primary" : "border-outline-variant bg-white opacity-0 group-hover:opacity-100"
        )}>
          {isSelected && <Check className="w-4 h-4 text-white" />}
        </div>

        <div className="flex items-start justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-display font-extrabold text-primary transition-colors">{candidate.name}</h3>
            <div className="flex items-center gap-2 text-outline font-bold text-xs uppercase tracking-widest">
              <Badge variant={candidate.party === 'BJP' ? 'orange' : candidate.party === 'INC' ? 'blue' : 'default'}>
                {candidate.party}
              </Badge>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {candidate.constituency}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>

        <div className="space-y-4 flex-1">
          <CandidateDetail icon={GraduationCap} label="Education" value={candidate.education} />
          <CandidateDetail icon={Briefcase} label="Profession" value={candidate.profession} />
          <CandidateDetail 
            icon={Scale} 
            label="Criminal Cases" 
            value={candidate.cases > 0 ? `${candidate.cases} Cases` : "No Cases"}
            valueClass={candidate.cases > 0 ? "text-red-600" : "text-green-600"}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-outline-variant flex items-center justify-between">
          <div className="flex items-center -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-surface-container border-2 border-white flex items-center justify-center text-[10px] font-bold text-outline">
                {i}
              </div>
            ))}
            <div className="pl-4 text-xs font-bold text-outline uppercase tracking-tighter">Verified data</div>
          </div>
          <button className="text-sm font-bold text-primary transition-opacity">
            {isSelected ? "Selected" : "Select to Compare"}
          </button>
        </div>
      </Card>
    </motion.div>
  );
};

const CandidateDetail = ({ icon: Icon, label, value, valueClass }: { icon: any, label: string, value: string, valueClass?: string }) => (
  <div className="flex items-center gap-3 text-on-surface-variant">
    <Icon className="w-5 h-5 text-outline" />
    <div className="text-sm">
      <div className="text-xs text-outline mb-0.5">{label}</div>
      <div className={cn("font-bold", valueClass)}>{value}</div>
    </div>
  </div>
);
