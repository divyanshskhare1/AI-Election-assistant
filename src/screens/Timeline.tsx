import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ELECTION_PHASES } from './constants';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

/**
 * Election Timeline screen.
 * Displays a multi-phase poll schedule with state details and 
 * historical context for the General Election result day.
 */
export default function Timeline() {
  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto space-y-12 mt-2">
      <SectionHeader 
        title="Election Timeline 2024"
        description="The 2024 General Elections are being held in seven phases across the country. Check the schedule to know when your constituency votes."
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 relative">
          {ELECTION_PHASES.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <Card className="hover:border-primary transition-colors group p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      Phase {phase.phase}
                    </span>
                    <span className={`text-sm font-medium ${phase.status === 'Completed' ? 'text-green-600' : 'text-orange-600'}`}>
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {phase.date}
                  </h3>
                  <div className="flex items-start gap-2 text-on-surface-variant mb-4">
                    <MapPin className="w-5 h-5 shrink-0 mt-1" />
                    <p className="text-sm font-medium">{phase.states}</p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
                    <span className="text-sm text-outline">Total Constituencies</span>
                    <span className="text-lg font-bold text-primary">{phase.constituencies}</span>
                  </div>
                </Card>
              </div>

              {/* Point on Timeline */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 shadow-sm" />

              <div className="flex-1 hidden md:block">
                 <div className="p-4 rounded-2xl bg-surface-container opacity-50 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Detailed constituency maps and local booth info will be updated 48 hours before polling starts.
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Result Day Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-24 p-12 bg-primary rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-white/20">
            <CheckCircle className="w-5 h-5 text-secondary-fixed" />
            <span className="font-bold text-sm uppercase tracking-widest">Grand Finale</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-extrabold">Results Day: June 4</h2>
          <p className="text-on-primary-container text-xl max-w-2xl mx-auto leading-relaxed">
            Counting of votes across all 543 constituencies will take place simultaneously. The future of India will be decided on this historic day.
          </p>
          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">543</div>
              <div className="text-xs uppercase opacity-70 tracking-tighter">Total Seats</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold">272</div>
              <div className="text-xs uppercase opacity-70 tracking-tighter">Majority Mark</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
