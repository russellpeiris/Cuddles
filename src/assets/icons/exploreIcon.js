import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExploreIcon = ({ width, height, fill}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M6 16V9.75M11 16V6M16 16V13.5M18.5 1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H18.5C19.163 21 19.7989 20.7366 20.2678 20.2678C20.7366 19.7989 21 19.163 21 18.5V3.5C21 2.83696 20.7366 2.20107 20.2678 1.73223C19.7989 1.26339 19.163 1 18.5 1Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ExploreIcon;
