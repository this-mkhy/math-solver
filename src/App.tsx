import React, { useState, useEffect } from 'react';
import { Calculator, ChevronDown } from 'lucide-react';
import './App.css';
import MathSolver from './components/MathSolver';
import WaveSVG from './components/WaveSVG';
import FormulaDisp from './components/FormulaSec';
const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Calculator className="h-8 w-8 text-violet-600" />
          <h1 className="header-title">Math Solver & Visualizer</h1>
        </div>
        <WaveSVG />
      </header>

      <main className="container">
        <MathSolver />
        < FormulaDisp/>
      </main>
    </div>
  );
};

export default App;