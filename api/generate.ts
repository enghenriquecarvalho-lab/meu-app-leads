// api/generate.ts
import { GoogleGenAI } from "@google/genai";
import { LeadData } from '../types';

// Esta função é o nosso "backend" seguro.
export async function POST(req: Request) {
  try {
    const data: LeadData = await req.json();

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("A chave de API do Gemini não foi configurada nas variáveis de ambiente da Vercel.");
      throw new Error("Configuração do servidor incompleta.");
    }
    
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
      Você é um conselheiro de carreira especializado em Inteligência Artificial, atuando como o principal orientador do programa "IA EXPERT TURBO".
      Sua missão é analisar o perfil de um novo aplicante e criar uma mensagem de boas-vindas e direcionamento inicial que seja altamente personalizada, motivadora e estratégica.

      Dados do Aplicante:
      - Formação Acadêmica: ${data.education}
      - Situação Profissional: ${data.workStatus}
      - Setor de Atuação: ${data.sector || 'Não informado'}
      - Posição Atual: ${data.position}
      - Renda Mensal: ${data.income}
      - Nível de Conhecimento em IA (1 a 4): ${data.aiKnowledge}
      - Maior Desafio com IA: "${data.aiChallenge}"
      - Foco de Domínio em IA (próximos 3 meses): "${data.aiFocus}"
      - Objetivo Profissional com IA: "${data.aiGoals}"

      Instruções para a Mensagem:
      1. **Saudação e Validação:** Comece com uma saudação energética.
      2. **Análise do Perfil:** Conecte o perfil do aplicante com o potencial da IA.
      3. **Aborde o Desafio Principal:** Reconheça o maior desafio mencionado.
      4. **Crie um Mini-Plano de Foco:** Sugira 2 ou 3 passos iniciais.
      5. **Conecte com o Objetivo Final:** Mostre o caminho do ponto A ao B.
      6. **Reconheça o Nível de Conhecimento:** Adapte o tom.
      7. **Encerramento Motivacional:** Termine com uma chamada para ação.
      8. **Formatação:** Use Markdown (negrito, listas). NÃO use cabeçalhos (#, ##).
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return new Response(JSON.stringify({ text: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Erro na Serverless Function:", error);
    return new Response(JSON.stringify({ error: "Falha ao gerar mensagem no servidor." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
