import React from 'react';
import { motion } from 'motion/react';
import { Users, Landmark, Award, Shield, FileText, Vote, BarChart3 } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { cn } from '../lib/utils';

const seatData = [
  { name: 'Lok Sabha', seats: 543, color: '#2563eb' },
  { name: 'Rajya Sabha', seats: 250, color: '#dc2626' },
];

export default function Dashboard() {
  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-extrabold text-primary">Parliamentary Structure</h1>
        <p className="text-on-surface-variant max-w-3xl text-lg">
          India follows a bicameral legislative system. Understanding the difference between the House of the People and the Council of States is key to understanding our democracy.
        </p>
      </div>

      {/* Seat Distribution Chart */}
      <section className="card p-8 md:p-12 space-y-8 bg-white border border-outline-variant shadow-lg rounded-[2.5rem]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-primary">Seat Distribution</h2>
            <p className="text-on-surface-variant text-sm">Comparison of maximum strength of both houses</p>
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={seatData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 14, fontWeight: 600 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                  padding: '12px'
                }}
              />
              <Bar dataKey="seats" radius={[8, 8, 0, 0]} barSize={60}>
                {seatData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Lok Sabha */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-blue-50/50 rounded-[3rem] border border-blue-100 p-8 md:p-12 space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Landmark className="w-64 h-64" />
          </div>
          
          <div className="space-y-6 relative z-10">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
               <Vote className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-extrabold text-blue-900">Lok Sabha</h2>
              <p className="text-blue-700 font-medium">House of the People (Lower House)</p>
            </div>
            
            <p className="text-on-surface-variant leading-relaxed">
              Members are directly elected by the public across 543 constituencies. It's where the Prime Minister is usually appointed from and where the government is formed.
            </p>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                  <div className="text-xs font-extra-bold text-blue-400 uppercase tracking-widest mb-1">Max Seats</div>
                  <div className="text-2xl font-display font-bold text-blue-900">550</div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                  <div className="text-xs font-extra-bold text-blue-400 uppercase tracking-widest mb-1">Tenure</div>
                  <div className="text-2xl font-display font-bold text-blue-900">5 Years</div>
               </div>
            </div>

            <div className="space-y-3">
               {[
                 { icon: Users, label: 'Directly elected by citizens' },
                 { icon: FileText, label: 'Power to pass Budget and Money Bills' },
                 { icon: Shield, label: 'Current Speaker: Shri Om Birla' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-blue-800/80 font-medium bg-blue-100/50 p-3 rounded-xl">
                   <item.icon className="w-5 h-5 opacity-70" />
                   <span className="text-sm">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

        {/* Rajya Sabha */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-red-50/50 rounded-[3rem] border border-red-100 p-8 md:p-12 space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Award className="w-64 h-64" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-200">
               <Landmark className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-extrabold text-red-900">Rajya Sabha</h2>
              <p className="text-red-700 font-medium">Council of States (Upper House)</p>
            </div>

            <p className="text-on-surface-variant leading-relaxed">
              A permanent house representing the states and union territories. Members are elected by the elected members of State Legislative Assemblies.
            </p>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-red-100">
                  <div className="text-xs font-extra-bold text-red-400 uppercase tracking-widest mb-1">Max Seats</div>
                  <div className="text-2xl font-display font-bold text-red-900">250</div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-red-100">
                  <div className="text-xs font-extra-bold text-red-400 uppercase tracking-widest mb-1">Tenure</div>
                  <div className="text-2xl font-display font-bold text-red-900">Permanent</div>
               </div>
            </div>

            <div className="space-y-3">
               {[
                 { icon: Users, label: 'Indirectly elected (MLA voting)' },
                 { icon: Award, label: '12 members nominated by President' },
                 { icon: Shield, label: 'Ex-officio Chairman: Vice President' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-red-800/80 font-medium bg-red-100/50 p-3 rounded-xl">
                   <item.icon className="w-5 h-5 opacity-70" />
                   <span className="text-sm">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="bg-surface-container py-20 rounded-[3rem] px-8 md:px-16 text-center space-y-8">
         <h2 className="text-4xl font-display font-extrabold text-primary">Electoral College</h2>
         <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
           Did you know the President of India is elected by an Electoral College consisting of elected members of both houses and state legislatures?
         </p>
         <div className="flex flex-wrap justify-center gap-6">
            <div className="card p-6 bg-white min-w-[200px]">
               <div className="text-primary font-bold text-xl">MPs</div>
               <p className="text-xs text-outline font-medium">Members of Parliament</p>
            </div>
            <div className="text-3xl font-display font-bold text-primary self-center">+</div>
            <div className="card p-6 bg-white min-w-[200px]">
               <div className="text-primary font-bold text-xl">MLAs</div>
               <p className="text-xs text-outline font-medium">Members of Legislative Assemblies</p>
            </div>
         </div>
      </section>
    </div>
  );
}
