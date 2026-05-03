import React from 'react';
import { FAQItem } from '../../components/FAQItem';

interface FAQSectionProps {
  faqs: { q: string, a: string }[];
  openFaq: number | null;
  setOpenFaq: (idx: number | null) => void;
}

/**
 * FAQSection component.
 * Renders a list of searchable Frequently Asked Questions.
 * 
 * @param {FAQSectionProps} props - Component props
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  openFaq,
  setOpenFaq
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-display font-bold text-primary">Common Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            question={faq.q} 
            answer={faq.a} 
            isOpen={openFaq === i} 
            onToggle={() => setOpenFaq(openFaq === i ? null : i)}
          />
        ))}
        {faqs.length === 0 && (
          <p className="text-xs text-outline text-center py-4 italic">No FAQs match your search.</p>
        )}
      </div>
    </div>
  );
};
