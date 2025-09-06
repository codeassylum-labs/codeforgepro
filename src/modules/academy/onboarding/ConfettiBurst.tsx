import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiBurst: React.FC = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default ConfettiBurst;
