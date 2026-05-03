export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

export interface ElectionAssistantHook {
  chatHistory: ChatMessage[];
  isLoading: boolean;
  question: string;
  setQuestion: (q: string) => void;
  ask: (customQuestion?: string) => Promise<void>;
}
