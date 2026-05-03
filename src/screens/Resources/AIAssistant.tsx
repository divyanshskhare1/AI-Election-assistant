import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../../lib/utils';

interface AIAssistantProps {
  chatHistory: { role: string, text: string }[];
  isLoading: boolean;
  question: string;
  setQuestion: (val: string) => void;
  ask: (q?: string) => void;
}

/**
 * AIAssistant component.
 * Provides a chat interface for users to interact with the Election AI.
 * Supports streaming responses, chat history, and suggested questions.
 * 
 * @param {AIAssistantProps} props - Component props
 */
export const AIAssistant: React.FC<AIAssistantProps> = ({
  chatHistory,
  isLoading,
  question,
  setQuestion,
  ask
}) => {
  const handleAsk = (e?: React.FormEvent) => {
    e?.preventDefault();
    ask();
  };

  return (
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
                    onClick={() => ask(q)}
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
  );
};
