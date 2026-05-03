import React from 'react';
import { Search, Filter } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CandidateFiltersProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  filterParty: string;
  setFilterParty: (val: string) => void;
  parties: string[];
}

export const CandidateFilters: React.FC<CandidateFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filterParty,
  setFilterParty,
  parties
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center bg-surface-container p-6 rounded-3xl border border-outline-variant">
      <div className="flex-1 relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search by candidate or constituency..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none font-medium"
        />
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Filter className="text-outline w-5 h-5 ml-2" />
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
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
  );
};
