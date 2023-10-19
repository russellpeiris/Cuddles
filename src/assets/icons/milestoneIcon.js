import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MilestoneIcon = ({ width, height, fill}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 28" fill="none">
      <Path
        d="M13 15.25V1.5L23 6.5L13 11.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.6877 11.7875C24.3529 13.8377 24.4151 16.0358 23.867 18.1203C23.3189 20.2048 22.1835 22.088 20.5959 23.5459C19.0083 25.0037 17.0353 25.9747 14.9117 26.3435C12.7881 26.7123 10.6033 26.4633 8.61711 25.6261C6.63096 24.7889 4.92711 23.3988 3.70828 21.6211C2.48944 19.8435 1.80693 17.7531 1.74193 15.5987C1.67694 13.4443 2.23221 11.3165 3.34167 9.46861C4.45114 7.6207 6.06809 6.1304 8.00017 5.175"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.00005 11.5C7.37368 12.3338 6.9659 13.311 6.81386 14.3427C6.66181 15.3744 6.77034 16.4278 7.12955 17.4068C7.48877 18.3858 8.08724 19.2594 8.87046 19.948C9.65368 20.6365 10.5967 21.1181 11.6137 21.349C12.6307 21.5798 13.6893 21.5525 14.693 21.2695C15.6967 20.9865 16.6137 20.4569 17.3603 19.7289C18.107 19.0008 18.6596 18.0975 18.9678 17.1013C19.2761 16.105 19.3301 15.0475 19.1251 14.025"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MilestoneIcon;
