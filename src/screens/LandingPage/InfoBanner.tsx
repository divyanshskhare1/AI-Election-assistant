import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { type Screen } from '../../App';

interface InfoBannerProps {
  onNavigate: (screen: Screen) => void;
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ onNavigate }) => {
  return (
    <section className="bg-surface-container py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
           <h2 className="text-3xl font-display font-bold text-primary leading-snug">Empowering the largest democratic exercise on Earth.</h2>
           <p className="text-on-surface-variant">The Indian election process is a marvel of logistics and citizen participation. From the snow-capped mountains of Ladakh to the tropical shores of Kerala, we ensure every voice matters.</p>
           <ul className="space-y-3">
             {['Free and Fair Elections', 'Transparency at every step', 'Electronic Voting Machines (EVM)', 'VVPAT Verification'].map(item => (
               <li key={item} className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                   <CheckCircle className="w-4 h-4 text-primary" />
                 </div>
                 <span className="font-medium text-primary/80">{item}</span>
               </li>
             ))}
           </ul>
        </div>
        <div className="flex-1">
           <div className="bg-white p-8 rounded-3xl shadow-xl border border-outline-variant">
             <h4 className="font-display font-bold text-primary mb-4">Did You Know?</h4>
             <p className="text-on-surface-variant italic mb-6">"In the first general elections in 1951-52, the symbols were adopted to help illiterate voters identify candidates. Today, they remain a core part of Indian electoral culture."</p>
             <button 
                onClick={() => onNavigate('dashboard')}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:gap-3 flex items-center justify-center gap-2 transition-all"
             >
               Discover History <ArrowRight className="w-5 h-5" />
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};
