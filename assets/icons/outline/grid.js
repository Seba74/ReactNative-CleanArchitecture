import React from 'react';
import { SvgXml } from 'react-native-svg';

const GridSvg = ({ color, size }) => {
  const svgs = `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" viewBox="0 -960 960 960" width="${size}" fill="${color}"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>`;

  const Grid = () => <SvgXml xml={svgs} />;

  return <Grid />;
};

export default GridSvg;
