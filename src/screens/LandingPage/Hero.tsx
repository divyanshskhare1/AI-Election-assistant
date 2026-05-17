import React from 'react';
import { motion } from 'motion/react';
import { Vote, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { type Screen } from '../../App';

interface HeroProps {
  onNavigate: (screen: Screen) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 px-6 sm:px-12 lg:pt-[88px] lg:px-2 lg:pb-2">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-md"
          >
            <Star className="w-4 h-4 fill-secondary" />
            <span>General Elections 2024 Guide</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight"
          >
            Your Vote is Your <span className="text-secondary-fixed">Voice.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-primary-container max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Empowering every citizen with the knowledge to participate in the world's largest democracy. Get verified info on registration, candidates, and election dates.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => onNavigate('guide')}
              className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-2xl shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 transition-all flex items-center gap-2 group"
            >
              Register to Vote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('timeline')}
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all"
            >
              View Poll Dates
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 relative"
        >
           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video lg:aspect-square bg-slate-900">
             <img 
               src="https://as2.ftcdn.net/jpg/07/54/03/31/1000_F_754033159_LBkuTMiT7AxkOEKBThqMp4ywI40urFfp.jpg" 
               alt="Indian Parliament Building" 
               className="w-full h-full object-cover relative z-10 opacity-100"
               referrerPolicy="no-referrer"
               loading="eager"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
             <div className="absolute bottom-6 left-6 text-white pr-6 group z-30">
                <div className="flex items-center gap-2 mb-2 transition-transform group-hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                    <Vote className="w-6 h-6 text-on-secondary-fixed" />
                  </div>
                  <span className="font-display font-bold text-xl">Electoral Process</span>
                </div>
                <p className="text-sm opacity-90 leading-relaxed max-w-md">Learn how the world's largest democratic exercise ensures every citizen's voice is heard across the nation.</p>
             </div>
           </div>
           
           <motion.div
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl z-20 hidden md:block"
           >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-primary">1.4 Billion+</div>
                  <div className="text-xs text-on-surface-variant">Active Citizens</div>
                </div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
