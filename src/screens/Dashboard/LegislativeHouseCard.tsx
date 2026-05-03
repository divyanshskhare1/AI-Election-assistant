import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { LegislativeHouse } from '../types';

interface Props {
  house: LegislativeHouse;
  index: number;
}

export const LegislativeHouseCard: React.FC<Props> = ({ house, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "rounded-[3rem] border p-8 md:p-12 space-y-8 relative overflow-hidden",
        house.bgClass,
        house.borderClass
      )}
    >
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <house.accentIcon className="w-64 h-64" />
      </div>
      
      <div className="space-y-6 relative z-10">
        <div className={cn(
          "w-16 h-16 text-white rounded-2xl flex items-center justify-center shadow-lg",
          house.colorClass,
          house.shadowClass
        )}>
           <house.icon className="w-8 h-8" />
        </div>
        <div>
          <h2 className={cn("text-3xl font-display font-extrabold", house.textClass)}>{house.name}</h2>
          <p className={cn("font-medium", house.textClass.replace('900', '700'))}>{house.type}</p>
        </div>
        
        <p className="text-on-surface-variant leading-relaxed">
          {house.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
           <div className={cn("bg-white p-4 rounded-2xl shadow-sm border", house.borderClass)}>
              <div className={cn("text-xs font-extra-bold uppercase tracking-widest mb-1", house.textClass.replace('900', '400'))}>Max Seats</div>
              <div className={cn("text-2xl font-display font-bold", house.textClass)}>{house.maxSeats}</div>
           </div>
           <div className={cn("bg-white p-4 rounded-2xl shadow-sm border", house.borderClass)}>
              <div className={cn("text-xs font-extra-bold uppercase tracking-widest mb-1", house.textClass.replace('900', '400'))}>Tenure</div>
              <div className={cn("text-2xl font-display font-bold", house.textClass)}>{house.tenure}</div>
           </div>
        </div>

        <div className="space-y-3">
           {house.features.map((item, i) => (
             <div key={i} className={cn("flex items-center gap-3 font-medium p-3 rounded-xl", house.bgClass.replace('50/50', '100/50'), house.textClass.replace('900', '800/80'))}>
               <item.icon className="w-5 h-5 opacity-70" />
               <span className="text-sm">{item.label}</span>
             </div>
           ))}
        </div>
      </div>
    </motion.div>
  );
};
