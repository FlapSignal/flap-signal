import React from 'react';

export const SignalStream = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="font-headline text-5xl font-semibold tracking-tighter">Live Signal Stream</h2>
          <p className="text-on-surface-variant max-w-md font-light">Every 5 seconds, our AI regenerates signals based on the latest global liquidity flow.</p>
        </div>
        <button className="px-8 py-3 rounded-xl border border-outline-variant/20 hover:bg-primary-container/10 transition-all text-sm font-bold tracking-widest uppercase text-primary">View Full Market Scan</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: BTC/ETH */}
        <div className="group relative glass-panel glass-stroke p-8 rounded-3xl hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,240,255,0.15)] overflow-hidden">
          <div className="absolute inset-0 holographic-noise opacity-5 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,153,0,0.2)]">
              <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/btc.svg" alt="BTC" className="w-6 h-6 object-contain" />
            </div>
            <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-primary-container/20">Alpha Tier</span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-1">BTC / USDT</h3>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-primary-container font-mono text-xl font-bold">LONG</span>
            <span className="text-on-surface-variant text-sm font-light">@ $64,231</span>
          </div>
          <div className="space-y-3 pt-6 border-t border-white/5">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-neutral-500">
              <span>Confidence</span>
              <span className="text-primary-container">94%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full w-[94%] shadow-[0_0_12px_#00f0ff]"></div>
            </div>
          </div>
        </div>
        {/* Card 2: BSC Gems */}
        <div className="group relative glass-panel glass-stroke p-8 rounded-3xl hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(173,0,254,0.15)] overflow-hidden">
          <div className="absolute inset-0 holographic-noise opacity-5 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary">diamond</span>
            </div>
            <span className="px-3 py-1 bg-secondary-container/10 text-secondary-fixed-dim text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-secondary-container/20">DeFi Gem</span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-1">FLAP SIGNAL</h3>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-primary-container font-mono text-xl font-bold">ACCUMULATE</span>
            <span className="text-on-surface-variant text-sm font-light">@ $0.0042</span>
          </div>
          <div className="space-y-3 pt-6 border-t border-white/5">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-neutral-500">
              <span>Potential</span>
              <span className="text-secondary">Extreme</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-secondary-container h-full w-[88%] shadow-[0_0_12px_#ad00fe]"></div>
            </div>
          </div>
        </div>
        {/* Card 3: Futures */}
        <div className="group relative glass-panel glass-stroke p-8 rounded-3xl hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,240,255,0.15)]">
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,255,163,0.2)]">
              <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/sol.svg" alt="SOL" className="w-6 h-6 object-contain" />
            </div>
            <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-primary-container/20">Leverage</span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-1">SOL / USDT</h3>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-red-400 font-mono text-xl font-bold">SHORT</span>
            <span className="text-on-surface-variant text-sm font-light">@ $142.12</span>
          </div>
          <div className="space-y-3 pt-6 border-t border-white/5">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-neutral-500">
              <span>Risk Level</span>
              <span className="text-on-surface">10x High</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full w-[65%] shadow-[0_0_12px_#00f0ff]"></div>
            </div>
          </div>
        </div>
        {/* Card 4: Forex */}
        <div className="group relative glass-panel glass-stroke p-8 rounded-3xl hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(173,0,254,0.15)]">
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary">public</span>
            </div>
            <span className="px-3 py-1 bg-secondary-container/10 text-secondary-fixed-dim text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-secondary-container/20">TradFi</span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-1">EUR / USD</h3>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-primary-container font-mono text-xl font-bold">BULLISH</span>
            <span className="text-on-surface-variant text-sm font-light">@ 1.0842</span>
          </div>
          <div className="space-y-3 pt-6 border-t border-white/5">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-neutral-500">
              <span>Volatility</span>
              <span className="text-on-surface">Low</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-secondary-container h-full w-[42%] shadow-[0_0_12px_#ad00fe]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
