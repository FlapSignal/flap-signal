import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const DashboardMockup = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-surface-container-lowest/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column (Text & Button) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel glass-stroke">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
            <span className="text-xs font-black tracking-widest uppercase text-primary">Live Performance Hub</span>
          </div>
          <h2 className="font-headline text-6xl font-bold leading-tight tracking-tighter">Profit Proven <br/>by Intelligence.</h2>
          <p className="text-on-surface-variant text-xl leading-relaxed font-light">
            Flap Signal operates as a continuously learning neural network, analyzing global crypto liquidity shifts and social sentiment to deliver institutional-grade trading signals natively to you.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-6">
            <div className="space-y-2">
              <div className="text-5xl font-headline font-bold text-primary-container">+482%</div>
              <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Avg. Monthly Yield</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-headline font-bold text-secondary">89.4%</div>
              <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Oracle Accuracy</div>
            </div>
          </div>
          <button onClick={() => navigate('/chat')} className="flex items-center gap-4 text-primary-container font-headline font-bold text-xl hover:translate-x-3 transition-transform">
            Launch Chat <span className="material-symbols-outlined text-2xl">rocket_launch</span>
          </button>
        </motion.div>
        
        {/* Right Column (Glass Panel) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            className="relative group mt-12 lg:mt-0"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute -inset-10 md:-inset-20 bg-primary-container/10 rounded-full blur-[150px] group-hover:bg-primary-container/15 transition-colors"></div>
            
            <div className="relative glass-panel glass-stroke rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-500">
              
              {/* Header: Live Balance */}
              <div className="bg-surface-container-high/60 backdrop-blur-xl p-6 md:p-8 flex justify-between items-center border-b border-white/5">
                <div className="flex gap-4 md:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-secondary">wallet</span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-container rounded-full animate-pulse shadow-[0_0_10px_#00f0ff]"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">Live Balance</div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[8px] font-bold border border-emerald-500/30">SYNCED</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold tracking-tight text-white">$1,284,552.12</div>
                  </div>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-primary-container/10 text-[10px] md:text-xs font-black text-primary-container border border-primary-container/20 flex items-center gap-1 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +12.4% TODAY
                </div>
              </div>
              
              <div className="p-6 md:p-10 space-y-6 md:space-y-8">
                
                {/* Active Trading Intelligence (NEW) */}
                <div className="flex flex-col gap-3">
                  <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Active AI Execution
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {/* Gold (XAU/USD) Execution */}
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 relative overflow-hidden group shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/50">
                          <span className="material-symbols-outlined text-[12px] text-amber-400">diamond</span>
                        </div>
                        <div className="text-xs font-bold text-neutral-300">XAU/USD</div>
                      </div>
                      <div className="text-sm font-black text-amber-400 flex items-center gap-1.5 ml-7">
                        LONG <span className="text-[10px] text-amber-400/50 font-mono">@2,385.40</span>
                      </div>
                    </motion.div>
                    
                    {/* Crypto Execution */}
                    <motion.div 
                      className="p-3 bg-white/5 rounded-xl border border-secondary/20 relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/50">
                          <span className="material-symbols-outlined text-[12px] text-secondary">currency_bitcoin</span>
                        </div>
                        <div className="text-xs font-bold text-neutral-300">BTC/USDT</div>
                      </div>
                      <div className="text-sm font-black text-rose-400 flex items-center gap-1.5 ml-7">
                        SHORT <span className="text-[10px] text-rose-400/50 font-mono">@68,240</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="flex justify-between items-end h-32 md:h-40 gap-2 md:gap-4 pt-4">
                  <div className="flex-1 bg-white/5 rounded-t-xl relative group/bar overflow-hidden">
                    <motion.div 
                      initial={{ height: "0%" }} animate={{ height: "40%" }} transition={{ duration: 1, delay: 0.5 }}
                      className="absolute bottom-0 w-full bg-primary-container/20 rounded-t-xl group-hover/bar:bg-primary-container/40 transition-colors"
                    ></motion.div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-t-xl relative group/bar overflow-hidden">
                    <motion.div 
                      initial={{ height: "0%" }} animate={{ height: "65%" }} transition={{ duration: 1, delay: 0.7 }}
                      className="absolute bottom-0 w-full bg-primary-container/20 rounded-t-xl group-hover/bar:bg-primary-container/40 transition-colors"
                    ></motion.div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-t-xl relative group/bar overflow-hidden">
                    <motion.div 
                      initial={{ height: "0%" }} animate={{ height: "50%" }} transition={{ duration: 1, delay: 0.9 }}
                      className="absolute bottom-0 w-full bg-primary-container/20 rounded-t-xl group-hover/bar:bg-primary-container/40 transition-colors"
                    ></motion.div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-t-xl relative group/bar overflow-hidden">
                    <motion.div 
                      initial={{ height: "0%" }} animate={{ height: "95%" }} transition={{ duration: 1.5, delay: 1.1, type: "spring" }}
                      className="absolute bottom-0 w-full bg-gradient-to-t from-secondary-container/50 to-primary-container/80 rounded-t-xl shadow-[0_-5px_20px_rgba(173,0,254,0.4)]"
                    ></motion.div>
                  </div>
                </div>
                
                {/* Floating Action / Latest Win */}
                <motion.div 
                  className="p-4 md:p-5 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 flex items-center justify-between shadow-xl backdrop-blur-md"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                    </div>
                    <div>
                      <div className="text-xs md:text-sm font-bold text-white">Closed: PEPE/WBNB</div>
                      <div className="text-[9px] md:text-[10px] text-neutral-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> AI Precision Oracle
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base md:text-lg font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">+$8,442.00</div>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
