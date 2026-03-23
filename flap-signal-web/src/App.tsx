import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Chat } from './pages/Chat';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-dim text-on-surface relative">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 parallax-grid animate-parallax opacity-20"></div>
        </div>
        
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
