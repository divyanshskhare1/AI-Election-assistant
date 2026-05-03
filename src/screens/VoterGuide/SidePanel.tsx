import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';
import { Card } from '../../components/Card';

export const SidePanel: React.FC = () => {
  return (
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

      <Card className="p-8 bg-surface-container-low border-primary/20">
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
      </Card>

      <Card className="p-8">
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
      </Card>
    </div>
  );
};
