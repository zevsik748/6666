import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-50 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
               <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span>START</span>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Curriculum />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;