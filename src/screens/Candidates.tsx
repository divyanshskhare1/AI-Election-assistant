import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MapPin, Briefcase, GraduationCap, Scale, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const mockCandidates = [
  { id: 1, name: "Narendra Modi", party: "BJP", constituency: "Varanasi", education: "MA", cases: 0, profession: "Public Service" },
  { id: 2, name: "Rahul Gandhi", party: "INC", constituency: "Wayanad", education: "M.Phil", cases: 0, profession: "Politics" },
  { id: 3, name: "Arvind Kejriwal", party: "AAP", constituency: "New Delhi", education: "B.Tech", cases: 3, profession: "Public Service" },
  { id: 4, name: "Mamata Banerjee", party: "TMC", constituency: "Kolkata South", education: "LLB", cases: 0, profession: "Politics" },
  { id: 5, name: "M.K. Stalin", party: "DMK", constituency: "Kolathur", education: "Graduate", cases: 0, profession: "Politics" },
  { id: 6, name: "Amit Shah", party: "BJP", constituency: "Gandhinagar", education: "Graduate", cases: 0, profession: "Public Service" }
];

export default function Candidates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterParty, setFilterParty] = useState("All");

  const filteredCandidates = mockCandidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.constituency.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesParty = filterParty === "All" || c.party === filterParty;
    return matchesSearch && matchesParty;
  });

  const parties = ["All", ...new Set(mockCandidates.map(c => c.party))];

  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-extrabold text-primary">Candidate Search</h1>
        <p className="text-on-surface-variant max-w-3xl text-lg">
          Know your leaders. Search for candidates in your constituency and view their declared background information.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center bg-surface-container p-6 rounded-3xl border border-outline-variant">
         <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by candidate or constituency..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
            />
         </div>
         <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-outline w-5 h-5 ml-2" />
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
              {parties.map(party => (
                <button
                  key={party}
                  onClick={() => setFilterParty(party)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                    filterParty === party 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-white text-on-surface-variant border border-outline-variant hover:bg-surface-container-low"
                  )}
                >
                  {party}
                </button>
              ))}
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCandidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card group hover:border-primary transition-all cursor-pointer flex flex-col"
          >
             <div className="flex items-start justify-between mb-6">
                <div className="space-y-1">
                   <h3 className="text-2xl font-display font-extrabold text-primary group-hover:text-primary transition-colors">{candidate.name}</h3>
                   <div className="flex items-center gap-2 text-outline font-bold text-xs uppercase tracking-widest">
                      <span className={cn("px-2 py-0.5 rounded-md", 
                        candidate.party === 'BJP' ? 'bg-orange-100 text-orange-700' :
                        candidate.party === 'INC' ? 'bg-blue-100 text-blue-700' : 'bg-surface-container text-on-surface-variant'
                      )}>
                        {candidate.party}
                      </span>
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
                <div className="flex items-center gap-3 text-on-surface-variant">
                   <GraduationCap className="w-5 h-5 text-outline" />
                   <div className="text-sm">
                      <div className="text-xs text-outline mb-0.5">Education</div>
                      <div className="font-bold">{candidate.education}</div>
                   </div>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                   <Briefcase className="w-5 h-5 text-outline" />
                   <div className="text-sm">
                      <div className="text-xs text-outline mb-0.5">Profession</div>
                      <div className="font-bold">{candidate.profession}</div>
                   </div>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                   <Scale className="w-5 h-5 text-outline" />
                   <div className="text-sm">
                      <div className="text-xs text-outline mb-0.5">Criminal Cases</div>
                      <div className={cn("font-bold", candidate.cases > 0 ? "text-red-600" : "text-green-600")}>
                        {candidate.cases > 0 ? `${candidate.cases} Cases` : "No Cases"}
                      </div>
                   </div>
                </div>
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
                <button className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile
                </button>
             </div>
          </motion.div>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <div className="text-center py-24 space-y-4">
           <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-outline" />
           </div>
           <h3 className="text-2xl font-display font-bold text-primary">No candidates found</h3>
           <p className="text-on-surface-variant">Try adjusting your search terms or filters.</p>
        </div>
      )}
    </div>
  );
}
