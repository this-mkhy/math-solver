import React from 'react';
import Plot from 'react-plotly.js';

interface GraphVisualizerProps {
  data: any;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ data }) => {
  return (
    <div>
      <Plot
        data={data}
        layout={{ title: 'Graph of Equation', autosize: true }}
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  );
};

export default GraphVisualizer;
