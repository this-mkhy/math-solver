import React, { useState } from 'react';
import { simplify, evaluate } from 'mathjs';
import { AlertCircle } from 'lucide-react';
import GraphVisualizer from './GraphVisualizer';
import './MathSolver.css';

const MathSolver: React.FC = () => {
  const [equation, setEquation] = useState<string>('');
  const [solution, setSolution] = useState<number | null>(null);
  const [graphData, setGraphData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const solveEquation = () => {
    try {
      setError('');
      if (!equation.includes('x')) {
        throw new Error('Equation must contain the variable x');
      }
      const simplified = simplify(equation);
      const result = evaluate(equation, { x: 1 });
      setSolution(result);
      const plotData = createGraphData(equation);
      setGraphData(plotData);
    } catch (err: any) {
      setError(err.message || 'Invalid equation. Please try again.');
      setSolution(null);
      setGraphData(null);
    }
  };

  const createGraphData = (eq: string) => {
    const xValues = Array.from({ length: 100 }, (_, i) => i - 50);
    const yValues = xValues.map((x) => {
      try {
        return evaluate(eq.replace(/x/g, `(${x})`));
      } catch {
        return NaN;
      }
    });
    return [{
      x: xValues,
      y: yValues,
      type: 'scatter',
      mode: 'lines',
      line: { color: '#7c3aed', width: 2 },
    }];
  };

  return (
    <div className="math-solver">
      <div className="solver-card">
        <div className="input-group">
          <label htmlFor="equation" className="input-label">
            Enter your equation
          </label>
          <input
            id="equation"
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            placeholder="e.g., x^2 + 2*x + 1"
            className="equation-input"
          />
        </div>

        <button onClick={solveEquation} className="solve-button">
          Solve Equation
        </button>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {solution !== null && (
          <div className="solution-card">
            <p className="solution-text">
              Solution (for x = 1): {solution}
            </p>
          </div>
        )}
      </div>

      {graphData && (
        <div className="graph-card animate-slideUp">
          <h2 className="graph-title">Visualization</h2>
          <GraphVisualizer data={graphData} />
        </div>
      )}
    </div>
  );
};

export default MathSolver;