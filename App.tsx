import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-50 font-sans selection:bg-primary selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            AI<span className="text-primary">START</span>
          </div>
          {/* Navigation button removed to focus on the two main CTAs requested */}
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