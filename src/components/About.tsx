import { useSpring, animated } from '@react-spring/web';
import React from 'react';
import Experience from './Experience';
import Education from './Education';

const About: React.FC = () => {
  const fadeIn = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn}>
      <div style={{ width: '40%', float: 'left' }}>
        <Education />
      </div>
      <div style={{ width: '60%', float: 'right' }}>
        <Experience />
      </div>
    </animated.div>
  );
};

export default About;
