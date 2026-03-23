export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Real Animated Video Container */}
      <div className="absolute inset-0 z-0 video-container overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-[1.15] blur-[10px] contrast-[1.5] hue-rotate-[90deg] saturate-200"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-surface-dim/70 mix-blend-multiply z-20"></div>
      </div>
      
      <div className="relative z-30 text-center max-w-4xl mx-auto space-y-8 mb-12">

        <h1 className="font-headline text-4xl md:text-7xl font-bold leading-[1.08] tracking-tight text-on-surface">
          The First AI-Powered<br className="hidden md:block" /> Trading Oracle for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">
            the On-Chain Era.
          </span>
        </h1>
        <p className="text-on-surface-variant text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Flap Signal is a hyper-intelligent signal oracle operating on{' '}
          <span className="text-on-surface font-medium">Binance Smart Chain (BSC)</span>, engineered to decode
          market microstructure, detect liquidity anomalies, and surface high-conviction trade signals across
          <span className="text-on-surface font-medium"> 40,000+ crypto, futures &amp; forex pairs</span> — in
          real time. Powered by a proprietary multi-layer neural engine and delivered through a conversational
          AI interface, Flap Signal gives every trader access to the kind of alpha that was once reserved for
          institutions.
        </p>
        <p className="text-on-surface-variant/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
          No charts to read. No lagging indicators. No guesswork. Just pure, verifiable, on-chain intelligence
          — available at{' '}
          <a href="https://flapsignal.org" className="text-secondary hover:text-secondary-container transition-colors underline underline-offset-2">
            flapsignal.org
          </a>
        </p>
      </div>
      
      {/* Enhanced Glass Chat UI */}
      <div className="relative z-30 w-full max-w-2xl glass-panel glass-stroke rounded-2xl neon-glow-purple p-1 overflow-hidden transform transition-all duration-700 hover:scale-[1.03] group backdrop-blur-3xl">
        <div className="absolute inset-0 holographic-noise opacity-10 pointer-events-none"></div>
        <div className="bg-surface-container-high/40 p-4 border-b border-outline-variant/10 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse shadow-[0_0_10px_rgba(173,0,254,1)]"></div>
            <span className="font-space-grotesk font-medium text-secondary tracking-wide">Flap Signal Chat — <span className="text-[10px] opacity-70">Secured</span></span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10"></div>
            <div className="w-3 h-3 rounded-full bg-white/10"></div>
          </div>
        </div>
        <div className="p-6 space-y-6 min-h-[200px] flex flex-col justify-end">
          <div className="flex justify-start">
            <div className="bg-surface-container-low/80 backdrop-blur-sm px-5 py-3 rounded-2xl rounded-tl-none border border-white/5 text-on-surface-variant max-w-[85%] text-sm leading-relaxed">
              <span className="block text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Oracle AI</span>
              Scanning 40,000+ pairs... Neural alignment complete. What market sector shall I scan for signals today?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary-container/20 backdrop-blur-sm border border-primary-container/30 px-5 py-3 rounded-2xl rounded-tr-none text-primary max-w-[80%] text-sm font-medium">
              Scan global crypto liquidity shifts.
            </div>
          </div>
          <div className="relative mt-4">
            <input className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all text-on-surface p-4 pr-12 rounded-xl text-sm placeholder:text-neutral-600" placeholder="Find me the next 100x..." type="text"/>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
