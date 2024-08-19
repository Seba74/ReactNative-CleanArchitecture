import React from 'react';
import { SvgXml } from 'react-native-svg';

const ArrowRightSvg = ({ color, size }) => {
  const svgs = `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" viewBox="0 -960 960 960" width="${size}" fill="${color}"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>`;

  const ArrowRight = () => <SvgXml xml={svgs} />;

  return <ArrowRight />;
};

export default ArrowRightSvg;
