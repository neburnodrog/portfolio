import React from 'react';
import { animated, Spring } from '@react-spring/web';
import Svg from './Svg';
import { getColor, getInverseColor } from '../helpers';
import './home.css';

interface Home {
  intervalId: NodeJS.Timeout;
}

class Home extends React.Component {
  state = {
    color: getColor(100, 255),
    nextColor: getColor(200, 255),
  };

  changeColor = () => {
    this.setState(state => ({
      color: this.state.nextColor,
      nextColor: getColor(200, 255),
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(this.changeColor, 2800);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { color, nextColor } = this.state;

    return (
      <Spring
        to={{ opacity: 1, backgroundColor: color }}
        from={{ opacity: 0, backgroundColor: nextColor }}
      >
        {styles => (
          <animated.div style={styles} className="home-container">
            <div>
              <h1 style={{ color: getInverseColor(color, false) }}>
                Ruben Gordon Karlsson
              </h1>
              <p style={{ color: getInverseColor(color, false) }}>
                Full-Stack Web Developer!
              </p>
              <Svg color={color} />
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default Home;
