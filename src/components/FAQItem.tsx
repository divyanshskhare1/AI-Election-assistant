import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { FAQItemProps } from './types';

export const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}) => {
  return (
    <motion.div layout className="overflow-hidden bg-white border border-outline-variant rounded-2xl">
      <button 
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-primary text-sm transition-colors group-hover:text-primary/70">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-outline transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-surface-container-low"
          >
            <div className="p-6 border-t border-outline-variant text-sm text-on-surface-variant leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
