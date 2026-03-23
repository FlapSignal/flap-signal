import React from 'react';

export const MarketIntegration = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest/30 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight">Multi-Market Integration</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-light">Cross-market capabilities that unify your trading experience through one intelligent portal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BSC */}
          <div className="group relative glass-panel glass-stroke p-10 rounded-3xl text-center hover:bg-primary-container/5 transition-all duration-500">
            <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform shadow-xl border border-white/5">
              <span className="material-symbols-outlined text-5xl text-blue-400">deployed_code</span>
            </div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-4">Global Crypto</h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">Direct oracle feeds from Ethereum, Solana, BSC, and all leading EVM/Non-EVM chains.</p>
            <div className="absolute top-4 right-4 text-[10px] text-primary-container font-mono opacity-0 group-hover:opacity-100 transition-opacity">Live 12ms</div>
          </div>
          {/* Futures */}
          <div className="group relative glass-panel glass-stroke p-10 rounded-3xl text-center hover:bg-secondary-container/5 transition-all duration-500">
            <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform shadow-xl">
              <span className="material-symbols-outlined text-5xl text-secondary">candlestick_chart</span>
            </div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-4">Futures</h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">Predictive long/short signals for top 50 perpetual contracts with leverage guidance.</p>
            <div className="absolute top-4 right-4 text-[10px] text-secondary font-mono opacity-0 group-hover:opacity-100 transition-opacity">Live 8ms</div>
          </div>
          {/* Forex */}
          <div className="group relative glass-panel glass-stroke p-10 rounded-3xl text-center hover:bg-primary-container/5 transition-all duration-500">
            <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform shadow-xl">
              <span className="material-symbols-outlined text-5xl text-primary-container">public</span>
            </div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-4">Global Forex</h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">Institutional-grade signals for major and minor pairs, tracking global macro trends.</p>
            <div className="absolute top-4 right-4 text-[10px] text-primary-container font-mono opacity-0 group-hover:opacity-100 transition-opacity">Live 15ms</div>
          </div>
        </div>
      </div>
    </section>
  );
};
