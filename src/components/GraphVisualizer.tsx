import React from 'react';
import Plot from 'react-plotly.js';
import './GraphVisualizer.css';

interface GraphVisualizerProps {
  data: any;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ data }) => {
  const layout = {
    title: 'Graph of Equation',
    autosize: true,
    margin: { l: 50, r: 50, t: 50, b: 50 },
    paper_bgcolor: 'white',
    plot_bgcolor: '#f8fafc',
    font: {
      family: 'system-ui, -apple-system, sans-serif',
    },
    xaxis: {
      gridcolor: '#e2e8f0',
      zerolinecolor: '#94a3b8',
    },
    yaxis: {
      gridcolor: '#e2e8f0',
      zerolinecolor: '#94a3b8',
    },
  };

  return (
    <div className="graph-container">
      <Plot
        data={data}
        layout={layout}
        config={{ responsive: true }}
        className="graph-plot"
      />
    </div>
  );
};

export default GraphVisualizer;