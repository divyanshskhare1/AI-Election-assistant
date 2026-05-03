import React from 'react';
import { motion } from 'motion/react';
import { Vote, ArrowRight, CheckCircle, Info, Star, User, Search } from 'lucide-react';
import { type Screen } from '../App';
import { cn } from '../lib/utils';

interface LandingPageProps {
  onNavigate: (screen: Screen) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
                 src="https://images.unsplash.com/photo-1540910419316-ce745c1064ea?q=80&w=2670&auto=format&fit=crop" 
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
             
             {/* Floating Badge */}
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

      {/* Quick Navigation Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full lg:pt-[88px] lg:px-2 lg:pb-2">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-display font-bold text-primary">Election Essentials</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Everything you need to be an informed voter this election season.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Voter Registration",
              desc: "Check your enrollment status and apply for your Voter ID card online.",
              icon: User,
              color: "text-blue-600 bg-blue-50",
              action: () => onNavigate('guide')
            },
            {
              title: "Election Schedule",
              desc: "Find out when your constituency goes to polls with our interactive timeline.",
              icon: Info,
              color: "text-orange-600 bg-orange-50",
              action: () => onNavigate('timeline')
            },
            {
              title: "Candidate Insights",
              desc: "Explore details about candidates contesting in your area.",
              icon: Search,
              color: "text-green-600 bg-green-50",
              action: () => onNavigate('candidates')
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="card group cursor-pointer"
              onClick={card.action}
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", card.color)}>
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{card.desc}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
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
    </div>
  );
}
