import React from 'react';
import { SvgXml } from 'react-native-svg';

const GridSvg = ({ color, size }) => {
  const svgs = `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" viewBox="0 -960 960 960" width="${size}" fill="${color}"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520Z"/></svg>`;

  const Grid = () => <SvgXml xml={svgs} />;

  return <Grid />;
};

export default GridSvg;
