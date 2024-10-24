

import React, { useEffect } from 'react';

const WaveSVG: React.FC = () => {
  useEffect(() => {
    const animateWave = () => {
      const wavePath = document.querySelector('.wave-path') as SVGPathElement;
      let direction = 1; // 1 for up, -1 for down
      let frame = 0;

      const animate = () => {
        frame += direction * 0.04;

        const waveForm1 =
          `M321.39 ${56.44 + Math.sin(frame) * 4}c58-10.79 114.16-${30.13 + Math.sin(frame) * 5} 172-${41.86 + Math.sin(frame) * 4} 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 ${72 + Math.sin(frame) * 4} 985.66 ${92.83 + Math.sin(frame) * 4}c70.05 18.48 146.53 ${26.09 + Math.sin(frame) * 4} 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`;

        wavePath.setAttribute('d', waveForm1);

        requestAnimationFrame(animate);
      };

      animate(); // Start animation
    };

    animateWave();
  }, []);

  return (
    <div className="wave-container">
      <svg
        className="wave-svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-path"
          d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
          fill="rgb(124, 58, 237, 0.5)"
        />
      </svg>
    </div>
  );
};

export default WaveSVG;
