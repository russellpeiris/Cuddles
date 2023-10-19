import React from 'react';
import Svg, { Path } from 'react-native-svg';

const WeeklyDevIcon = ({ width, height, fill}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 30" fill="none">
      <Path
        d="M10 20V8.75M10 8.75C10 5 10 1.25 18.75 1.25C18.75 5 18.75 8.75 10 8.75ZM0 20H20M17.5 20L15 28.75H5L2.5 20M10 13.75C10 10 10 6.25 1.25 6.25C1.25 10 1.25 13.75 10 13.75Z"
        stroke={fill}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default WeeklyDevIcon;
