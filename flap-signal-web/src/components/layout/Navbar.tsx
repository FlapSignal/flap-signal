import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const Navbar = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleConnect = async () => {
    if (isConnected) {
      navigate('/chat');
      return;
    }
    
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Try to switch to BSC mainnet (Chain ID 56 / 0x38)
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          });
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x38',
                chainName: 'Binance Smart Chain Mainnet',
                nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com/']
              }]
            });
          }
        }
        setIsConnected(true);
        navigate('/chat');
      } catch (error) {
        console.error("User rejected request or error occurred", error);
        alert("Failed to connect wallet.");
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("Please install MetaMask or a Web3 wallet to connect.");
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Chat Oracle', path: '/chat' }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-surface/40 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div 
          className="text-2xl font-bold tracking-tighter text-cyan-400 font-space-grotesk flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/')}
        >
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
        
        <div className="hidden md:flex items-center gap-8 font-space-grotesk font-light tracking-tight relative">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              <a 
                className={`relative cursor-pointer transition-colors pb-1 block z-10 ${
                  location.pathname === link.path ? 'text-cyan-400 font-medium' : 'text-neutral-400 hover:text-neutral-100'
                }`}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </a>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={handleConnect}
          className="bg-primary-container text-on-primary font-space-grotesk font-bold px-6 py-2 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] flex justify-center items-center min-w-[150px]"
        >
          {isConnecting ? (
            <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
          ) : isConnected ? (
            "Open Chat"
          ) : (
            "Connect Wallet"
          )}
        </button>
      </div>
    </nav>
  );
};
