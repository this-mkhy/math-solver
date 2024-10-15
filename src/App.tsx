import React from 'react';
import './App.css';
import MathSolver from './components/MathSolver';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Solver & Visualizer</h1>
      </header>
      <MathSolver />
    </div>
  );
};

export default App;
