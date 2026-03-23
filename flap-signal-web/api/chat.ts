export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { action, messages, token, timeframe, dexData, ltmContext } = req.body;

  try {
    if (!process.env.XAI_API_KEY) {
      return res.status(500).json({ error: 'XAI_API_KEY is not configured on the Vercel server. Please add it in project settings.' });
    }

    const systemPrompt = `You are Flap Signal, an advanced, highly pragmatic, and conversational Web3 AI Oracle. 
Your persona is a brilliant, straightforward quant trader chatting directly with a peer. 
Do NOT mention any external AI models, OpenAI, Grok, or xAI. You are an independent system.

CRITICAL INSTRUCTION FOR TOKEN SCANS:
If the user asks you to scan, check, analyze a token, or asks for a signal (e.g. "scan SOL", "how is PEPE?", "signal for BTC", "0x..."), you MUST reply with a short conversational acknowledgment, and append EXACTLY this string at the very end of your message: __SCAN_REQ__:TICKER
(Replace TICKER with the actual token ticker or CA, e.g. __SCAN_REQ__:SOL or __SCAN_REQ__:0x123...)
DO NOT provide the signal yet! The frontend will intercept this tag, pull real-time DexScreener data, and ping you back for the actual signal.

Formatting rules for when you do generate signals:
Always **bold** key metrics: **Entry Zone**, **Target (TP)**, **Invalidation (SL)**.
Always **bold** price values (e.g. **$1.05**) and percentages (e.g. **+5%**, **-2%**).
NEVER use markdown horizontal rules like --, ===, or __. Do not use double dashes or dividers.
Keep the tone natural, professional, and slightly conversational. Stay strictly focused on Web3, crypto, and market analysis.`;

    let finalSystemPrompt = systemPrompt;
    if (ltmContext && ltmContext.length > 0) {
      finalSystemPrompt += `\n\nLONG-TERM MEMORY CONTEXT:\nHistorically, the user has inquired about: [${ltmContext}]. Use this context silently to personify a quant AI that casually remembers their past portfolio inquiries when appropriate.`;
    }

    let apiMessages: any[] = [];

    if (action === 'chat') {
      apiMessages = [
        { role: "system", content: finalSystemPrompt },
        ...(messages || [])
      ];
    } else {
      const userPrompt = `Token: ${token}\nTimeframe: ${timeframe}\nDexScreener Data: ${JSON.stringify(dexData)}\n\nPlease provide your analysis and signal based on this data. Format your output beautifully using Markdown (**bold** for emphasis, bullet points for levels). Always include: ORACLE SIGNAL (LONG/SHORT), Entry Zone, Target (TP), Invalidation (SL).`;
      apiMessages = [
        { role: "system", content: finalSystemPrompt },
        { role: "user", content: userPrompt }
      ];
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY?.trim()}`
      },
      body: JSON.stringify({
        model: "grok-4-1-fast-reasoning", // Per user's explicit instruction
        messages: apiMessages,
        temperature: action === 'chat' ? 0.8 : 0.4
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("xAI HTTP Error:", data);
      return res.status(response.status).json({
        error: data.error?.message || 'AI Network/Auth Error',
        details: JSON.stringify(data.error || data)
      });
    }

    if (data.choices && data.choices.length > 0) {
      return res.status(200).json({ signal: data.choices[0].message.content });
    } else {
      console.error("xAI Format Error:", data);
      return res.status(500).json({ error: 'Incomplete output from AI provider', details: JSON.stringify(data) });
    }
  } catch (error: any) {
    console.error("Backend Error:", error);
    return res.status(500).json({ error: 'Failed to generate AI signal', details: error.message });
  }
}
