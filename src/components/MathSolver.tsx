import React, { useState } from 'react';
import { simplify, evaluate } from 'mathjs';
import GraphVisualizer from './GraphVisualizer';

const MathSolver: React.FC = () => {
  const [equation, setEquation] = useState<string>('');
  const [solution, setSolution] = useState<string | null>(null);
  const [graphData, setGraphData] = useState<any>(null);

  const solveEquation = () => {
    try {
      if (!equation.includes('x')) {
        throw new Error('Equation must contain the variable x.');
      }

      const simplified = simplify(equation);
      const result = evaluate(equation, { x: 1 }); 
      setSolution(`Solution (for x = 1): ${result}`);

      const plotData = createGraphData(equation);
      setGraphData(plotData);
    } catch (err) {
      setSolution('Invalid equation. Please try again.');
    }
  };

  const createGraphData = (eq: string) => {
    const xValues = Array.from({ length: 100 }, (_, i) => i - 50); 
    const yValues = xValues.map((x) => {
      try {
        return evaluate(eq.replace(/x/g, `(${x})`));
      } catch (err) {
        return NaN;
      }
    });

    return [
      {
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'blue' },
      },
    ];
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Math Equation Solver</h2>
      <input
        type="text"
        placeholder="Enter equation (e.g., x^2 + 2*x + 1)"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={solveEquation} style={{ margin: '10px' }}>
        Solve
      </button>
      {solution && <p>{solution}</p>}
      {graphData && <GraphVisualizer data={graphData} />}
    </div>
  );
};

export default MathSolver;
