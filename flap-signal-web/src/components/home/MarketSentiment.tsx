import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp, TrendingDown, Zap } from 'lucide-react';

const tweets = [
  { id: 1, user: '@CryptoWhale', handle: 'MobyDick_ETH', text: "Flap Signal just perfectly called the exact bottom on $SOL. Incredible algorithmic precision. 🚀", sentiment: 'bullish', time: '2m ago' },
  { id: 2, user: '@DefiDegen', handle: 'anon_trader', text: "Market looking historically weak here. Flap Oracle data shows massive volume exiting ETH. Stay safe.", sentiment: 'bearish', time: '14m ago' },
  { id: 3, user: '@MacroQuant', handle: 'quant_fund', text: "Just locked in +140% on that $PEPE long signal. Flap Signal feels like an absolute cheat code.", sentiment: 'bullish', time: '32m ago' },
  { id: 4, user: '@OnChainSniper', handle: 'sniper_bot', text: "Seeing strong accumulation on AI tokens, the sentiment grid is flashing bright green. 🟢 Sending it.", sentiment: 'bullish', time: '1h ago' },
  { id: 5, user: '@AltcoinPsycho', handle: 'psycho_trades', text: "Rejected exactly at the key resistance Flap Signal warned about. Insane accuracy.", sentiment: 'bearish', time: '2h ago' },
  { id: 6, user: '@WhaleAlerts', handle: 'whale_tracker', text: "$BTC moving exactly as the neural engine projected. Don't fight the Oracle.", sentiment: 'bullish', time: '3h ago' },
];

export const MarketSentiment = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-dim/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-container font-mono text-sm mb-4">
            <Zap size={16} className="text-primary-container" />
            Social Oracle Matrix
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Live Market Sentiment</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            Flap Signal aggregates millions of data points from X/Twitter and on-chain messaging protocols to visualize instantaneous global sentiment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet, i) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel glass-stroke rounded-2xl p-6 hover:-translate-y-1 transition-transform relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-lg text-white">
                    {tweet.user[1]}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface font-space-grotesk text-sm">{tweet.user}</h4>
                    <p className="text-xs text-neutral-500">@{tweet.handle}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-neutral-400 group-hover:fill-white transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.968H5.169z"></path></svg>
                </div>
              </div>
              
              <p className="text-sm font-light leading-relaxed text-on-surface-variant mb-6">
                {tweet.text}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${tweet.sentiment === 'bullish' ? 'text-emerald-400' : 'text-rose-500'}`}>
                  {tweet.sentiment === 'bullish' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {tweet.sentiment}
                </div>
                <div className="text-xs text-neutral-600 font-mono">
                  {tweet.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
