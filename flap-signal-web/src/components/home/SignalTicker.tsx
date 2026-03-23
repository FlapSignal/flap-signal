import React from 'react';

export const SignalTicker = () => {
  return (
    <section className="py-6 bg-surface-container-lowest/80 backdrop-blur-md border-y border-outline-variant/10 relative z-40 overflow-hidden">
      <div className="flex items-center gap-4 px-6 absolute left-0 top-0 h-full bg-surface-container-lowest z-10 border-r border-outline-variant/10">
        <span className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary animate-pulse">
          <span className="w-2 h-2 rounded-full bg-primary-container"></span>
          Live Feed
        </span>
      </div>
      <div className="flex whitespace-nowrap animate-marquee py-2">
        <div className="flex gap-12 px-12 items-center">
          <span className="text-sm font-space-grotesk"><b className="text-primary">BSC:</b> PEPE/WBNB <span className="text-primary-container font-mono">+12.4%</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-secondary">FOREX:</b> GBP/USD <span className="text-secondary-fixed-dim font-mono">BULLISH</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-primary">FUTURES:</b> BTC/USDT <span className="text-primary-container font-mono">LONG @ $64,212</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-primary">BSC:</b> FLAP/WBNB <span className="text-primary-container font-mono">LIQUIDITY SPIKE</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-secondary">FOREX:</b> EUR/JPY <span className="text-red-400 font-mono">SHORT</span></span>
          {/* Repeat for seamless scroll */}
          <span className="text-sm font-space-grotesk"><b className="text-primary">BSC:</b> PEPE/WBNB <span className="text-primary-container font-mono">+12.4%</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-secondary">FOREX:</b> GBP/USD <span className="text-secondary-fixed-dim font-mono">BULLISH</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-primary">FUTURES:</b> BTC/USDT <span className="text-primary-container font-mono">LONG @ $64,212</span></span>
          <span className="text-sm font-space-grotesk"><b className="text-primary">BSC:</b> FLAP/WBNB <span className="text-primary-container font-mono">LIQUIDITY SPIKE</span></span>
        </div>
      </div>
    </section>
  );
};
