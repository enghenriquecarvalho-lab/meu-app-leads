// services/geminiService.ts
import { LeadData } from '../types';

export const generateWelcomeMessage = async (data: LeadData): Promise<string> => {
  try {
    // Agora fazemos uma chamada para a nossa própria API segura no backend
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'A resposta da API não foi OK.');
    }

    const result = await response.json();
    return result.text;
    
  } catch (error) {
    console.error("Erro ao chamar a API interna:", error);
    throw new Error("Falha ao gerar a mensagem de boas-vindas.");
  }
};