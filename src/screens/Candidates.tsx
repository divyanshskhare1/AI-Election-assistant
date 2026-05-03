import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, Scale, X } from 'lucide-react';
import { MOCK_CANDIDATES } from './constants';
import { SectionHeader } from '../components/SectionHeader';
import { CandidateFilters } from './Candidates/CandidateFilters';
import { CandidateCard } from './Candidates/CandidateCard';
import { CandidateComparison } from './Candidates/CandidateComparison';
import { Candidate } from './types';

/**
 * Candidates Search and Comparison screen.
 * Allows users to browse candidate profiles, filter by party, and
 * select multiple candidates for a side-by-side comparison.
 */
export default function Candidates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterParty, setFilterParty] = useState("All");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [comparing, setComparing] = useState(false);

  const filteredCandidates = MOCK_CANDIDATES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.constituency.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesParty = filterParty === "All" || c.party === filterParty;
    return matchesSearch && matchesParty;
  });

  const parties = ["All", ...new Set(MOCK_CANDIDATES.map(c => c.party))];

  const toggleSelection = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectedCandidates = MOCK_CANDIDATES.filter(c => selectedIds.includes(c.id));

  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto space-y-12 mt-2 relative pb-32">
      <SectionHeader 
        title="Candidate Search"
        description="Know your leaders. Search for candidates in your constituency and view their declared background information."
      />

      <CandidateFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterParty={filterParty}
        setFilterParty={setFilterParty}
        parties={parties}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCandidates.map((candidate) => (
          <CandidateCard 
            key={candidate.id} 
            candidate={candidate}
            isSelected={selectedIds.includes(candidate.id)}
            onToggleSelection={toggleSelection}
          />
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

      {/* Comparison Floating Bar */}
      <AnimatePresence>
        {selectedIds.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl bg-primary shadow-2xl rounded-3xl p-4 flex items-center justify-between border border-white/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4 px-2">
               <div className="flex -space-x-3">
                  {selectedCandidates.slice(0, 3).map((c, i) => (
                    <div key={c.id} className="w-10 h-10 rounded-full bg-secondary-container border-2 border-primary flex items-center justify-center text-[10px] font-bold text-on-secondary-container">
                      {c.name[0]}
                    </div>
                  ))}
                  {selectedIds.length > 3 && (
                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center text-[10px] font-bold text-white backdrop-blur-sm">
                      +{selectedIds.length - 3}
                    </div>
                  )}
               </div>
               <div className="hidden sm:block">
                  <div className="text-white font-bold text-sm">{selectedIds.length} Candidates Selected</div>
                  <div className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-none">Ready for comparison</div>
               </div>
            </div>
            
            <div className="flex items-center gap-3">
               <button 
                onClick={() => setSelectedIds([])}
                className="p-3 text-white/60 hover:text-white transition-colors"
               >
                 <X className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => setComparing(true)}
                 disabled={selectedIds.length < 2}
                 className="px-6 py-3 bg-secondary text-on-secondary font-bold rounded-2xl shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all flex items-center gap-2 whitespace-nowrap"
               >
                 <Scale className="w-4 h-4" />
                 Compare Now
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Overlay */}
      <AnimatePresence>
        {comparing && (
          <CandidateComparison 
            candidates={selectedCandidates} 
            onClose={() => setComparing(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
