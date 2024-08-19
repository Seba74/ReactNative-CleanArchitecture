import React from 'react';
import { SvgXml } from 'react-native-svg';

const HomeSvg = ({ color, size }) => {
  const svgs = `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" viewBox="0 -960 960 960" width="${size}" fill="${color}"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>`;

  const Home = () => <SvgXml xml={svgs} />;

  return <Home />;
};

export default HomeSvg;
