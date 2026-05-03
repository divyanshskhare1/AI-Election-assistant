import { useState } from 'react';
import { askElectionAssistant } from '../services/aiService';
import { ChatMessage, ElectionAssistantHook } from './types';

/**
 * Custom hook to manage the state and logic for the Election AI Assistant.
 * Handles chat history, loading states, and the process of sending questions to the AI service.
 * 
 * @returns {ElectionAssistantHook} An object containing chat state and interaction methods.
 */
export const useElectionAssistant = (): ElectionAssistantHook => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState("");

  const ask = async (customQuestion?: string) => {
    const q = customQuestion || question;
    if (!q.trim() || isLoading) return;

    if (!customQuestion) setQuestion("");
    
    setChatHistory(prev => [...prev, { role: 'user', text: q }]);
    setIsLoading(true);

    try {
      const result = await askElectionAssistant(q);
      setChatHistory(prev => [...prev, { role: 'ai', text: result }]);
    } catch (error) {
      console.error("AI Hook Error:", error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    chatHistory,
    isLoading,
    question,
    setQuestion,
    ask
  };
};
