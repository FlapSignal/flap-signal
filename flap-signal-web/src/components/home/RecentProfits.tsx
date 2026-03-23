import React from 'react';
import { motion } from 'framer-motion';

const profits = [
  { id: 1, pair: 'SOL/USDT', type: 'LONG', profit: '+142.5%', time: '12m ago', entry: '$145.20', exit: '$162.80' },
  { id: 2, pair: 'BTC/USDT', type: 'SHORT', profit: '+85.2%', time: '45m ago', entry: '$72,100', exit: '$68,500' },
  { id: 3, pair: 'PEPE/USDT', type: 'LONG', profit: '+310.4%', time: '2h ago', entry: '$0.000007', exit: '$0.000010' },
  { id: 4, pair: 'WIF/USDT', type: 'LONG', profit: '+89.1%', time: '3h ago', entry: '$2.10', exit: '$3.55' },
  { id: 5, pair: 'ETH/USDT', type: 'SHORT', profit: '+54.3%', time: '4h ago', entry: '$3,800', exit: '$3,400' },
  { id: 6, pair: 'DOGE/USDT', type: 'LONG', profit: '+112.8%', time: '6h ago', entry: '$0.12', exit: '$0.18' },
];

export const RecentProfits = () => {
  return (
    <section className="py-20 px-6 bg-surface-container-lowest/50 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
              Live Oracle Wins
            </h2>
            <p className="text-on-surface-variant font-light">Real-time massive hits executed by Flap Signal intelligence.</p>
          </div>
          <div className="px-5 py-2 glass-panel glass-stroke rounded-xl text-emerald-400 font-mono text-sm font-bold border-emerald-500/20 bg-emerald-500/5">
            Success Rate: 91.4%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profits.map((trade, i) => (
             <motion.div
               key={trade.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05, duration: 0.4 }}
               className="glass-panel glass-stroke rounded-xl p-5 hover:bg-white/5 transition-colors border-l-4 border-l-emerald-500 relative overflow-hidden group"
             >
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-6xl">payments</span>
               </div>
               
               <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                   <h3 className="font-bold text-lg font-space-grotesk">{trade.pair}</h3>
                   <span className={`text-[10px] px-2 py-0.5 rounded-sm font-bold tracking-wider ${trade.type === 'LONG' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                     {trade.type}
                   </span>
                 </div>
                 <div className="text-xs text-neutral-500 font-mono">{trade.time}</div>
               </div>

               <div className="mb-4">
                 <div className="text-3xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] tracking-tighter">
                   {trade.profit}
                 </div>
                 <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest mt-1">Net Gain (Unrealized/Realized)</div>
               </div>

               <div className="flex justify-between items-center text-xs font-mono bg-black/40 rounded-lg p-3">
                 <div>
                   <span className="text-neutral-500">Entry:</span> <span className="text-white">{trade.entry}</span>
                 </div>
                 <div>
                   <span className="text-neutral-500">Target Hit:</span> <span className="text-white">{trade.exit}</span>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
