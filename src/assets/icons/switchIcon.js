import React from 'react';
import { Svg, Path } from 'react-native-svg';

const SwitchIcon = ({ width, height, fill }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 23" fill="none" >
      <Path
        d="M4.75 4.5C3.23299 5.78097 2.14621 7.49713 1.63679 9.41617C1.12736 11.3352 1.2199 13.3644 1.90188 15.2291C2.58385 17.0938 3.82233 18.704 5.44964 19.8415C7.07695 20.9791 9.0145 21.5892 11 21.5892C12.9855 21.5892 14.9231 20.9791 16.5504 19.8415C18.1777 18.704 19.4161 17.0938 20.0981 15.2291C20.7801 13.3644 20.8726 11.3352 20.3632 9.41617C19.8538 7.49713 18.767 5.78097 17.25 4.5M11 2V12"
        stroke={fill}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SwitchIcon;
