import React, { useState } from 'react';
import { HelpCircle, CheckCircle } from 'lucide-react';
import { FAQS, OFFICIAL_PORTALS } from './constants';
import { useElectionAssistant } from '../hooks/useElectionAssistant';
import { SectionHeader } from '../components/SectionHeader';
import { PortalLink } from '../components/PortalLink';
import { AIAssistant } from './Resources/AIAssistant';
import { FAQSection } from './Resources/FAQSection';

/**
 * Resource Center screen.
 * Features an AI-powered Election Assistant (Gemini) for answering questions
 * and a searchable database of Frequently Asked Questions and official portals.
 */
export default function Resources() {
  const { chatHistory, isLoading, question, setQuestion, ask } = useElectionAssistant();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto space-y-12 mt-2">
      <SectionHeader 
        title="Resource Center"
        description="Have questions about the election process? Search our FAQ or ask our AI-powered Election Assistant for instant verified information."
        icon={<HelpCircle className="w-10 h-10" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: AI Assistant */}
        <div className="lg:col-span-1 order-1">
          <AIAssistant 
            chatHistory={chatHistory}
            isLoading={isLoading}
            question={question}
            setQuestion={setQuestion}
            ask={ask}
          />
        </div>

        {/* Column 2: Official Portals */}
        <div className="space-y-8 order-2">
           <div className="space-y-6">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                 </div>
                 <h3 className="text-2xl font-display font-bold text-primary">Official Portals</h3>
              </div>
              <p className="text-sm text-on-surface-variant font-medium">Verified ECI websites for voter services and information.</p>
              <div className="grid grid-cols-1 gap-3">
                 {OFFICIAL_PORTALS.map(link => (
                   <PortalLink key={link.label} {...link} />
                 ))}
                 {OFFICIAL_PORTALS.length === 0 && (
                   <p className="text-xs text-outline text-center py-4 italic">No portals available.</p>
                 )}
              </div>
           </div>
        </div>

        {/* Column 3: FAQs */}
        <div className="lg:col-span-1 order-3">
           <FAQSection 
             faqs={FAQS}
             openFaq={openFaq}
             setOpenFaq={setOpenFaq}
           />
        </div>
      </div>
    </div>
  );
}
