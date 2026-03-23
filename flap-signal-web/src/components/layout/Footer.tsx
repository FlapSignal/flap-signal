
export const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 border-t border-white/5 bg-neutral-950 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-bold text-neutral-100 font-space-grotesk flex items-center gap-3">
            <img 
              src="/logo.jpeg" 
              alt="Flap Signal Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<span class="material-symbols-outlined text-primary-container animate-pulse">radar</span>');
              }} 
            />
            Flap Signal
          </div>
          <p className="font-inter text-sm text-neutral-500">The next generation of high-frequency AI intelligence.</p>
          <p className="font-inter text-xs text-neutral-600">© 2024 Flap Signal. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a
            className="text-neutral-400 hover:text-primary transition-colors text-sm font-space-grotesk tracking-widest uppercase font-bold flex items-center gap-2"
            href="https://x.com/flapsignal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X
          </a>
          <a
            className="text-neutral-400 hover:text-primary transition-colors text-sm font-space-grotesk tracking-widest uppercase font-bold flex items-center gap-2"
            href="https://github.com/flapsignal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
