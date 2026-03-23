import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Send, Clock, Cpu, Activity, Menu, X, Plus, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isProcessing?: boolean;
  timeframeOptions?: string[]; 
}

interface ChatSession {
  id: string;
  title: string;
  updatedAt: number;
  messages: Message[];
}

const TIMEFRAMES = ['15m', '1h', '4h', '1D'];

const markdownComponents = {
  strong: ({node, ...props}: any) => {
    const text = String(props.children);
    let colorClass = "text-on-surface";
    const textUpper = text.toUpperCase();
    
    if (textUpper.includes('ORACLE SIGNAL') || textUpper.includes('SIGNAL')) colorClass = "text-cyan-400 font-black drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]";
    else if (textUpper.includes('ENTRY')) colorClass = "text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]";
    else if (textUpper.includes('TARGET') || textUpper.includes('TP')) colorClass = "text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]";
    else if (textUpper.includes('INVALIDATION') || textUpper.includes('STOP LOSS') || textUpper.includes('SL')) colorClass = "text-rose-500 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]";
    else if (textUpper.includes('LONG')) colorClass = "text-emerald-400 font-extrabold";
    else if (textUpper.includes('SHORT')) colorClass = "text-rose-500 font-extrabold";
    else if (text.includes('%')) {
      if (text.includes('-')) colorClass = "text-rose-400";
      else colorClass = "text-emerald-400";
    }
    else if (text.includes('$')) colorClass = "text-amber-300";

    return <strong className={`${colorClass} font-bold`} {...props}/>;
  },
  h3: ({node, ...props}: any) => <h3 className="text-lg font-bold text-primary-container mt-3 mb-2" {...props}/>,
  ul: ({node, ...props}: any) => <ul className="list-disc pl-5 space-y-2 my-3 text-sm" {...props}/>,
  p: ({node, ...props}: any) => <p className="mb-3 last:mb-0 text-sm leading-relaxed" {...props}/>,
};

const TypewriterMarkdown = ({ content }: { content: string }) => {
  const [displayedContent, setDisplayedContent] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedContent("");
    
    const interval = setInterval(() => {
      index += 3;
      if (index > content.length) index = content.length;
      setDisplayedContent(content.slice(0, index));
      
      if (index >= content.length) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, [content]);

  return <ReactMarkdown components={markdownComponents}>{displayedContent}</ReactMarkdown>;
};

const formatRelativeTime = (timestamp: number) => {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (minutes < 60) return `${minutes || 1}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return `Yesterday`;
  return `${days}d ago`;
};

const DEFAULT_WELCOME_MSG: Message = {
  id: 'startup',
  sender: 'ai',
  content: "System initialized. I am Flap Signal, an advanced Web3 quant AI. Ask me anything about the market, or enter a Token Ticker (e.g. SOL) or Contract Address (CA) to initiate a deep on-chain scan.",
  timestamp: new Date()
};

export const Chat = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatStep, setChatStep] = useState<'AWAITING_TOKEN' | 'AWAITING_TIMEFRAME'>('AWAITING_TOKEN');
  const [activeToken, setActiveToken] = useState('');
  const [dexDataCache, setDexDataCache] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('flap_session_store');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Convert string dates back to Date objects
        parsed.forEach((s: any) => {
          s.messages.forEach((m: any) => m.timestamp = new Date(m.timestamp));
        });
        setSessions(parsed);
        if (parsed.length > 0) {
          setCurrentSessionId(parsed[0].id);
          setMessages(parsed[0].messages);
        } else {
          startNewSession();
        }
      } catch (e) {
        startNewSession();
      }
    } else {
      startNewSession();
    }
  }, []);

  useEffect(() => {
    if (currentSessionId && messages.length > 0) {
      setSessions(prev => {
        let exists = false;
        const updated = prev.map(s => {
          if (s.id === currentSessionId) {
            exists = true;
            return {
              ...s,
              updatedAt: Date.now(),
              messages: messages,
              title: s.title === 'New Chat' && messages.length > 1 && messages[1].sender === 'user' 
                ? (messages[1].content as string).substring(0, 30) + '...'
                : s.title
            };
          }
          return s;
        });
        
        const finalSessions = exists ? updated : [{ id: currentSessionId, title: 'New Chat', updatedAt: Date.now(), messages }, ...prev];
        localStorage.setItem('flap_session_store', JSON.stringify(finalSessions));
        return finalSessions;
      });
    }
  }, [messages, currentSessionId]);

  const startNewSession = () => {
    const newId = Date.now().toString();
    setCurrentSessionId(newId);
    setMessages([{ ...DEFAULT_WELCOME_MSG, id: Date.now().toString(), timestamp: new Date() }]);
    setChatStep('AWAITING_TOKEN');
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const loadSession = (id: string) => {
    const session = sessions.find(s => s.id === id);
    if (session) {
      setCurrentSessionId(session.id);
      setMessages(session.messages);
      setChatStep('AWAITING_TOKEN');
      if (window.innerWidth < 768) setIsSidebarOpen(false);
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      const container = document.getElementById('chat-scroll-container');
      if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const getLTMContext = () => {
    const prevSessions = sessions.filter(s => s.id !== currentSessionId);
    const keywords = prevSessions
      .flatMap(s => s.messages)
      .filter(m => m.sender === 'user' && typeof m.content === 'string')
      .map(m => m.content as string)
      .slice(-10);
    return keywords.join(" | ");
  };

  const executeDexScreenerFlow = async (tokenQuery: string) => {
    const processingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: processingId,
      sender: 'ai',
      isProcessing: true,
      content: `Connecting to on-chain nodes to scan ${tokenQuery}...`,
      timestamp: new Date()
    }]);
    scrollToBottom();

    try {
      const dexRes = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${tokenQuery.replace('$', '')}`);
      const data = await dexRes.json();
      
      setMessages(prev => prev.filter(m => m.id !== processingId));

      if (data.pairs && data.pairs.length > 0) {
        const pair = data.pairs[0];
        setDexDataCache(data);
        setActiveToken(tokenQuery);
        setChatStep('AWAITING_TIMEFRAME');
        
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          sender: 'ai',
          content: `Data localized: **${pair.baseToken.symbol}** / **${pair.quoteToken.symbol}** (${pair.chainId.toUpperCase()}).\nPlease specify your analytical timeframe:`,
          timeframeOptions: TIMEFRAMES,
          timestamp: new Date()
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          sender: 'ai',
          content: `⚠️ **Network Sync Failed**. No sufficient on-chain liquidity pools found for \`${tokenQuery}\`.`,
          timestamp: new Date()
        }]);
      }
    } catch (err) {
      setMessages(prev => prev.filter(m => m.id !== processingId));
      setMessages(prev => [...prev, {
        id: (Date.now() + 2).toString(),
        sender: 'ai',
        content: `Error connecting to DexScreener API. Please try again later.`,
        timestamp: new Date()
      }]);
    }
    scrollToBottom();
  };

  const triggerConversationalAI = async (inputText: string) => {
    setIsTyping(true);
    const processingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
        id: processingId,
        sender: 'ai',
        isProcessing: true,
        content: "Flap Signal is formulating response...",
        timestamp: new Date()
    }]);
    scrollToBottom();

    try {
        const history = messages
            .filter(m => !m.isProcessing && !m.timeframeOptions && typeof m.content === 'string')
            .map(m => ({ role: m.sender === 'ai' ? 'assistant' : 'user', content: m.content }));
        
        history.push({ role: 'user', content: inputText });

        const apiRes = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'chat', messages: history, ltmContext: getLTMContext() })
        });
        const apiData = await apiRes.json();

        let responseText = apiData.signal || `⚠️ **Error**: ${apiData.error}`;

        if (responseText.includes('__SCAN_REQ__:')) {
          const match = responseText.match(/__SCAN_REQ__:([A-Za-z0-9]+)/);
          if (match) {
            const tokenToScan = match[1];
            responseText = responseText.replace(/__SCAN_REQ__:[A-Za-z0-9]+/, '').trim();
            
            setMessages(prev => prev.filter(m => m.id !== processingId));
            if (responseText) {
              setMessages(prev => [...prev, { id: (Date.now() + 2).toString(), sender: 'ai', content: responseText, timestamp: new Date() }]);
            }
            scrollToBottom();
            await executeDexScreenerFlow(tokenToScan);
            setIsTyping(false);
            return;
          }
        }

        setMessages(prev => prev.filter(m => m.id !== processingId));
        setMessages(prev => [...prev, { id: (Date.now() + 2).toString(), sender: 'ai', content: responseText, timestamp: new Date() }]);
        scrollToBottom();
    } catch (err) {
        setMessages(prev => prev.filter(m => m.id !== processingId));
        setMessages(prev => [...prev, { id: (Date.now() + 2).toString(), sender: 'ai', content: `Error connecting to oracle network.`, timestamp: new Date() }]);
        scrollToBottom();
    }
    setIsTyping(false);
  };

  const handleSendString = async (text: string) => {
    if (!text.trim() || isTyping) return;
    
    const tokenInput = text.trim();
    const userMessage: Message = { id: Date.now().toString(), sender: 'user', content: tokenInput, timestamp: new Date() };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    scrollToBottom();
    
    if (chatStep === 'AWAITING_TOKEN') {
      const isLikelyToken = /^(\$[A-Za-z0-9]{2,10}|0x[a-fA-F0-9]{40}|[1-9A-HJ-NP-Za-km-z]{32,44}|[A-Z0-9]{2,10})$/.test(tokenInput);
      if (isLikelyToken) {
        setIsTyping(true);
        await executeDexScreenerFlow(tokenInput);
        setIsTyping(false);
      } else {
        await triggerConversationalAI(tokenInput);
      }
    }
  };

  const handleTimeframeSelect = async (tf: string) => {
    if (chatStep !== 'AWAITING_TIMEFRAME') return;
    setMessages(prev => prev.map(m => m.timeframeOptions ? { ...m, timeframeOptions: undefined } : m));
    
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', content: `${tf} Selected`, timestamp: new Date() }]);
    scrollToBottom();
    
    setChatStep('AWAITING_TOKEN'); 
    setIsTyping(true);
    await triggerAISequence(activeToken, tf);
  };

  const triggerAISequence = async (token: string, timeframe: string) => {
    const processingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: processingId, sender: 'ai', isProcessing: true, content: `Processing cross-market flows and historical profiles...`, timestamp: new Date() }]);
    scrollToBottom();

    try {
      await new Promise(r => setTimeout(r, 1000));
      setMessages(prev => prev.map(m => m.id === processingId ? { ...m, content: "Analyzing technical structures and deep support levels..." } : m));

      await new Promise(r => setTimeout(r, 1000));
      setMessages(prev => prev.map(m => m.id === processingId ? { ...m, content: "Synthesizing high-frequency oracle signal..." } : m));

      const apiRes = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, timeframe, dexData: dexDataCache, ltmContext: getLTMContext() })
      });
      const apiData = await apiRes.json();

      let finalContent = "";
      if (apiData.signal) {
         finalContent = apiData.signal;
      } else {
         finalContent = `⚠️ **Analysis Blocked**. ${apiData.error || 'Check XAI_API_KEY configuration.'}`;
         if (apiData.details) {
            finalContent += `\n\n*Diagnostics*: \`${typeof apiData.details === 'object' ? JSON.stringify(apiData.details) : apiData.details}\``;
         }
      }

      setMessages(prev => prev.filter(m => m.id !== processingId));
      setMessages(prev => [...prev, { id: (Date.now() + 2).toString(), sender: 'ai', content: finalContent, timestamp: new Date() }]);
    } catch (err) {
      setMessages(prev => prev.filter(m => m.id !== processingId));
      setMessages(prev => [...prev, { id: (Date.now() + 2).toString(), sender: 'ai', content: `Error connecting to oracle infrastructure for ${token}.`, timestamp: new Date() }]);
    }

    scrollToBottom();
    setDexDataCache(null);
    setIsTyping(false);
  };

  return (
    <div className="pt-24 h-screen flex max-w-7xl mx-auto px-2 md:px-4 pb-6 overflow-hidden relative">
      
      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100] md:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* History Sidebar */}
      <motion.div 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: isSidebarOpen || window.innerWidth >= 768 ? 0 : -300, opacity: isSidebarOpen || window.innerWidth >= 768 ? 1 : 0 }}
        className={`fixed md:relative z-[110] w-[280px] h-[calc(100vh-8rem)] bg-surface-container-highest/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col gap-4 shadow-2xl transition-all duration-300 left-4 md:left-0 md:mr-6`}
      >
        <div className="flex justify-between items-center mb-2 px-2">
          <h3 className="font-space-grotesk font-bold text-sm text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            <Activity size={14} className="text-secondary" /> History
          </h3>
          <button className="md:hidden text-neutral-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <button 
          onClick={startNewSession}
          className="w-full py-3 px-4 glass-panel glass-stroke rounded-xl flex items-center justify-center gap-2 text-primary font-bold hover:bg-white/5 transition-colors mb-2 group"
        >
          <Plus size={16} className="group-hover:rotate-90 transition-transform" /> New Analysis
        </button>

        <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {sessions.map(session => (
            <div 
              key={session.id}
              onClick={() => loadSession(session.id)}
              className={`p-3 rounded-xl cursor-pointer transition-all border group ${currentSessionId === session.id ? 'bg-secondary/10 border-secondary/30' : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`}
            >
              <div className="flex items-start gap-3">
                <MessageSquare size={14} className={`mt-1 shrink-0 ${currentSessionId === session.id ? 'text-secondary' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                <div className="overflow-hidden">
                  <div className={`text-sm font-medium truncate ${currentSessionId === session.id ? 'text-white' : 'text-neutral-300'}`}>
                    {session.title}
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-1">
                    {formatRelativeTime(session.updatedAt)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {sessions.length === 0 && (
            <div className="text-center text-xs text-neutral-600 mt-10">No history yet.</div>
          )}
        </div>
      </motion.div>

      {/* Main Chat Window */}
      <div className="glass-panel glass-stroke rounded-3xl flex-1 flex flex-col overflow-hidden relative shadow-2xl neon-glow-purple w-full">
        <div className="absolute inset-0 holographic-noise opacity-5 pointer-events-none"></div>
        
        {/* Chat Header */}
        <div className="bg-surface-container-highest/60 backdrop-blur-md border-b border-outline-variant/10 p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={18} />
            </button>
            <div className="hidden md:block relative">
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 border border-secondary flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.jpeg" 
                  alt="AI Avatar" 
                  className="w-full h-full object-cover scale-110" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary-container rounded-full border-2 border-surface-container animate-pulse"></div>
            </div>
            <div>
              <h2 className="font-space-grotesk font-bold text-lg leading-none mb-1">Flap Signal</h2>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span> Oracle Online</span>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div id="chat-scroll-container" className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 z-10 scrollbar-hide">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} w-full`}
              >
                <div className={`max-w-[90%] md:max-w-[80%] rounded-2xl p-4 ${
                  msg.sender === 'user' 
                    ? 'bg-primary-container/20 border border-primary-container/30 text-primary rounded-tr-none shadow-[0_5px_15px_rgba(0,240,255,0.1)]' 
                    : 'bg-surface-container-highest/80 backdrop-blur-md border border-white/10 text-on-surface-variant rounded-tl-none shadow-xl'
                }`}>
                  {msg.sender === 'ai' && (
                    <div className="mb-2 flex items-center gap-2 text-[10px] text-secondary font-black uppercase tracking-widest">
                      <Cpu size={12} /> Flap Signal
                    </div>
                  )}
                  
                  {msg.isProcessing ? (
                    <div className="flex items-center gap-3 text-secondary animate-pulse">
                      <div className="w-4 h-4 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium">{msg.content}</span>
                    </div>
                  ) : (
                    <div className="text-sm font-medium leading-relaxed whitespace-pre-wrap font-body w-full">
                      {msg.sender === 'ai' && !msg.isProcessing && !msg.timeframeOptions ? (
                        <TypewriterMarkdown content={msg.content as string} />
                      ) : (
                        <ReactMarkdown components={markdownComponents}>{msg.content as string}</ReactMarkdown>
                      )}
                      
                      {msg.timeframeOptions && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {msg.timeframeOptions.map(tf => (
                            <button
                              key={tf}
                              onClick={() => handleTimeframeSelect(tf)}
                              className="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 bg-secondary/80 text-on-secondary shadow-[0_0_15px_rgba(229,180,255,0.3)] hover:bg-secondary hover:scale-105 active:scale-95"
                            >
                              <Clock size={14} /> {tf}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  <div className={`text-[10px] mt-2 opacity-50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 bg-surface-container-high/60 border-t border-outline-variant/10 backdrop-blur-xl z-10 w-full">
          <div className="relative flex items-center w-full">
            <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendString(inputValue)}
              placeholder={chatStep === 'AWAITING_TOKEN' ? "Ask Oracle or scan Ticker (e.g. BTC)..." : "Specify timeframe..."}
              disabled={isTyping || chatStep === 'AWAITING_TIMEFRAME'}
              className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:ring-1 focus:ring-secondary/50 focus:border-secondary transition-all text-on-surface py-3 px-4 pr-[3.5rem] rounded-2xl text-sm placeholder:text-neutral-500 font-medium disabled:opacity-50"
            />
            <button 
              onClick={() => handleSendString(inputValue)}
              disabled={!inputValue.trim() || isTyping || chatStep === 'AWAITING_TIMEFRAME'}
              className="absolute right-1.5 w-[2.2rem] h-[2.2rem] rounded-xl bg-primary-container flex items-center justify-center text-on-primary hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <Send size={16} className="-ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
