import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function askElectionAssistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: question,
      config: {
        systemInstruction: `You are the "Smart Election Assistant" for India. 
        Your mission is to provide accurate, non-partisan, and verified information about:
        1. Voter registration (Form 6, Form 8, etc.)
        2. Constitutional roles (President, PM, MP, MLA)
        3. Election schedules and the 7-phase process
        4. EVM/VVPAT technicalities
        
        Guidelines:
        - Use Markdown for structure (bullet points, bold text).
        - Keep answers concise but comprehensive.
        - If the user asks something outside of elections, politely guide them back to civic topics.
        - Encourage citizen participation and voting.
        - Never show political bias.`,
      },
    });
    return response.text || "I'm sorry, I couldn't find a detailed answer. Please check official ECI sources.";
  } catch (error) {
    console.error("AI Error:", error);
    return "The assistant is momentarily offline. You can find verified info at voters.eci.gov.in.";
  }
}
