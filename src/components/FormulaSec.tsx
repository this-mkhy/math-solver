import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import './FormulaSec.css';

interface Formula {
  title: string;
  equation: string;
  example: string;
}

const formulas: Formula[] = [
  {
    title: "Quadratic Formula",
    equation: "x = (-b ± √(b² - 4ac)) / 2a",
    example: "Try: x² + 2x + 1"
  },
  {
    title: "Linear Equation",
    equation: "y = mx + b",
    example: "Try: 2x + 3"
  },
  {
    title: "Polynomial",
    equation: "ax³ + bx² + cx + d",
    example: "Try: x³ - 2x² + 1"
  },
  {
    title: "Exponential",
    equation: "y = aˣ",
    example: "Try: 2^x"
  }
];

const FormulaShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % formulas.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + formulas.length) % formulas.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % formulas.length);
  };

  return (
    <div className="formula-showcase">
      <div className="formula-card">
        <button 
          className="nav-button" 
          onClick={handlePrev}
          aria-label="Previous formula"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="formula-content">
          <div className="formula-header">
            <Lightbulb className="h-4 w-4 text-violet-500" />
            <span className="formula-hint">Quick Formula</span>
          </div>
          <div className="formula-title">{formulas[currentIndex].title}</div>
          <div className="formula-equation">{formulas[currentIndex].equation}</div>
          <div className="formula-example">{formulas[currentIndex].example}</div>
        </div>

        <button 
          className="nav-button" 
          onClick={handleNext}
          aria-label="Next formula"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="formula-dots">
        {formulas.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to formula ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FormulaShowcase;