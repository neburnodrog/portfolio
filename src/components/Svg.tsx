import React, { useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { getColor, getRidOfAlpha, getInverseColor } from '../helpers';

interface SVGProps {
  color: string;
}

const SVG: React.FC<SVGProps> = ({ color }) => {
  const getPoints = () => {
    const numberOfPoints = Math.floor(Math.random() * 20) + 10;

    const points = Array(numberOfPoints)
      .fill(null)
      .map(
        _ => `${Math.floor(Math.random() * 100)} 
        ${Math.floor(Math.random() * 100)}`,
      );

    return points.join(' ');
  };

  const [flip, set] = useState(false);
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 1,
    delay: 100,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.svg
      style={{
        margin: 20,
        width: '60vw',
        height: '50vh',
        background: getRidOfAlpha(color),
        borderRadius: '100vh',
      }}
      viewBox="0 0 100 100"
      strokeWidth="0.05em"
      fill={getInverseColor(color)}
      stroke={getInverseColor(color)}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={556}
      strokeDashoffset={x.to(x => (1 - x) * 556)}
    >
      <polygon points={getPoints()} />
    </animated.svg>
  );
};

export default SVG;
