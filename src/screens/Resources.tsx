import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Send, Sparkles, BookOpen, ExternalLink, ChevronDown, CheckCircle, Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { askElectionAssistant } from '../services/aiService';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "How can I check if I am registered to vote?",
    a: "You can check your name in the electoral roll by visiting electoralsearch.eci.gov.in. You will need your EPIC number or personal details like name, father's name, and state."
  },
  {
    q: "What is an EPIC number?",
    a: "EPIC stands for Electors Photo Identity Card. The EPIC number is the unique identification number printed on your Voter ID card."
  },
  {
    q: "Can I vote if I don't have my Voter ID card?",
    a: "Yes, you can vote even if you don't have your physical Voter ID card, provided your name is in the electoral roll. You must carry an alternative photo ID like Aadhaar, Passport, or DL."
  },
  {
    q: "What are the timings for poll day?",
    a: "Generally, polling takes place from 7:00 AM to 6:00 PM. However, these timings can vary slightly in certain constituencies based on local conditions."
  }
];

const officialPortals = [
  { label: 'ECI Official Website', url: 'https://eci.gov.in/' },
  { label: 'Voter Service Portal', url: 'https://voters.eci.gov.in/' },
  { label: 'Search Your Name', url: 'https://electoralsearch.eci.gov.in/' },
  { label: 'KYC - Know Your Candidate', url: 'https://affidavit.eci.gov.in/' },
  { label: 'Strategic Voter Education (SVEEP)', url: 'https://ecisveep.nic.in/' },
  { label: 'National Grievance Portal', url: 'https://ngsp.eci.gov.in/' }
];

export default function Resources() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAsk = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!question.trim() || isLoading) return;

    const userQ = question;
    setQuestion("");
    setChatHistory(prev => [...prev, { role: 'user', text: userQ }]);
    setIsLoading(true);

    const result = await askElectionAssistant(userQ);
    setChatHistory(prev => [...prev, { role: 'ai', text: result }]);
    setIsLoading(false);
  };

  const filteredPortals = officialPortals.filter(p => 
    p.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="flex-1 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-display font-extrabold text-primary flex items-center gap-3">
            <HelpCircle className="w-10 h-10 text-secondary" />
            Resource Center
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Have questions about the election process? Search our FAQ or ask our AI-powered Election Assistant for instant verified information.
          </p>
        </div>

        {/* AI Assistant */}
        <div className="bg-primary rounded-[2.5rem] p-4 md:p-8 shadow-2xl relative overflow-hidden flex flex-col h-[600px]">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <Sparkles className="w-32 h-32 text-white" />
          </div>

          <div className="relative z-10 flex items-center gap-3 mb-6 px-4">
             <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-on-secondary" />
             </div>
             <div>
                <h3 className="text-white font-display font-bold">Election AI Assistant</h3>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] text-white/60 uppercase font-bold tracking-widest leading-none">Powered by Gemini</span>
                </div>
             </div>
          </div>

          <div 
            className="flex-1 overflow-y-auto space-y-4 mb-6 p-4 scrollbar-thin scrollbar-thumb-white/20"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
             {chatHistory.length === 0 && (
               <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-6">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                     <BookOpen className="w-10 h-10 text-white/40" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-lg">How can I help you today?</h4>
                    <p className="text-white/60 text-sm">Ask about voting steps, registration, or election dates.</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Registering for first time', 'Check polling booth', 'What is VVPAT?'].map(q => (
                      <button 
                        key={q} 
                        onClick={() => { setQuestion(q); }}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 hover:bg-white/10 transition-all focus:ring-2 focus:ring-secondary focus:outline-none"
                        aria-label={`Ask about ${q}`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
               </div>
             )}
             {chatHistory.map((msg, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className={cn(
                   "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                   msg.role === 'user' 
                     ? "bg-white/10 text-white ml-auto rounded-tr-none" 
                     : "bg-surface-container-lowest text-on-surface mr-auto rounded-tl-none shadow-xl"
                 )}
               >
                 <div className="markdown-body">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                 </div>
               </motion.div>
             ))}
             {isLoading && (
               <div className="bg-surface-container-lowest text-on-surface mr-auto p-4 rounded-2xl rounded-tl-none shadow-xl flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                  </div>
               </div>
             )}
          </div>

          <form onSubmit={handleAsk} className="relative px-4 pb-4">
             <input 
               type="text" 
               placeholder="Write your question here..." 
               value={question}
               onChange={(e) => setQuestion(e.target.value)}
               className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 pl-6 pr-14 py-5 rounded-2xl backdrop-blur-md outline-none focus:bg-white/20 transition-all font-medium"
             />
             <button 
              type="submit"
              disabled={isLoading || !question.trim()}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-secondary text-on-secondary rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg shadow-secondary/20"
             >
               <Send className="w-5 h-5" />
             </button>
          </form>
        </div>
      </div>

      <div className="lg:w-96 space-y-12">
         {/* Search Filter */}
         <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Filter portals or FAQs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-sm font-medium"
            />
         </div>

         {/* Official Portals Section */}
         <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
               </div>
               <h3 className="text-2xl font-display font-extrabold text-primary">Official Portals</h3>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">Verified ECI websites for voter services and information.</p>
            <div className="grid grid-cols-1 gap-3">
               {filteredPortals.map(link => (
                 <motion.a 
                   layout
                   key={link.label}
                   href={link.url}
                   target="_blank"
                   rel="noreferrer"
                   className="flex items-center justify-between p-4 bg-white border border-outline-variant rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group"
                 >
                    <div className="flex flex-col">
                       <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary">{link.label}</span>
                       <span className="text-[10px] text-outline group-hover:text-primary/70">.gov.in / .nic.in</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
                 </motion.a>
               ))}
               {filteredPortals.length === 0 && (
                 <p className="text-xs text-outline text-center py-4 italic">No portals match your search.</p>
               )}
            </div>
         </div>

         {/* FAQs */}
         <div className="space-y-6">
            <h3 className="text-2xl font-display font-extrabold text-primary">Common Questions</h3>
            <div className="space-y-4">
               {filteredFaqs.map((faq, i) => (
                 <motion.div layout key={i} className="card p-0 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-6 flex items-center justify-between text-left group"
                    >
                       <span className="font-bold text-primary text-sm transition-colors group-hover:text-primary/70">{faq.q}</span>
                       <ChevronDown className={cn("w-5 h-5 text-outline transition-transform", openFaq === i && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden bg-surface-container-low"
                        >
                           <div className="p-6 border-t border-outline-variant text-sm text-on-surface-variant leading-relaxed">
                              {faq.a}
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </motion.div>
               ))}
               {filteredFaqs.length === 0 && (
                 <p className="text-xs text-outline text-center py-4 italic">No FAQs match your search.</p>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
