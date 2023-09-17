import Svg, { Path } from 'react-native-svg';

const AvatarIcon = ({ width, height, fill }) => {
  return (
    <Svg width={width} height={width} fill="none">
      <Path
        fill-rule="evenodd" clip-rule="evenodd" d="M0.40332 11C0.40332 8.18955 1.51977 5.49421 3.50705 3.50693C5.49434 1.51964 8.18967 0.403198 11.0001 0.403198C13.8106 0.403198 16.5059 1.51964 18.4932 3.50693C20.4805 5.49421 21.5969 8.18955 21.5969 11C21.5969 13.8104 20.4805 16.5058 18.4932 18.4931C16.5059 20.4804 13.8106 21.5968 11.0001 21.5968C8.18967 21.5968 5.49434 20.4804 3.50705 18.4931C1.51977 16.5058 0.40332 13.8104 0.40332 11ZM11.0001 1.9232C9.24079 1.92326 7.51939 2.43461 6.04534 3.39504C4.57129 4.35548 3.40812 5.7236 2.69735 7.33296C1.98658 8.94233 1.75883 10.7236 2.04182 12.46C2.32481 14.1964 3.10634 15.8132 4.29132 17.1136C5.01072 15.9868 6.00255 15.0595 7.17514 14.4174C8.34772 13.7753 9.66324 13.4392 11.0001 13.44C12.337 13.439 13.6526 13.7751 14.8252 14.4172C15.9978 15.0593 16.9896 15.9867 17.7089 17.1136C18.8939 15.8132 19.6754 14.1964 19.9584 12.46C20.2414 10.7236 20.0137 8.94233 19.3029 7.33296C18.5921 5.7236 17.429 4.35548 15.9549 3.39504C14.4809 2.43461 12.7595 1.92326 11.0001 1.9232ZM16.5713 18.1664C16.0051 17.1906 15.1924 16.3807 14.2146 15.818C13.2368 15.2552 12.1283 14.9593 11.0001 14.96C9.87195 14.9593 8.76342 15.2552 7.78562 15.818C6.80783 16.3807 5.99511 17.1906 5.42892 18.1664C7.02054 19.4075 8.98182 20.08 11.0001 20.0768C13.0993 20.0768 15.0321 19.3632 16.5713 18.1664ZM7.24012 9.408C7.24012 8.41078 7.63626 7.45441 8.3414 6.74928C9.04654 6.04414 10.0029 5.648 11.0001 5.648C11.9973 5.648 12.9537 6.04414 13.6588 6.74928C14.364 7.45441 14.7601 8.41078 14.7601 9.408C14.7601 10.4052 14.364 11.3616 13.6588 12.0667C12.9537 12.7719 11.9973 13.168 11.0001 13.168C10.0029 13.168 9.04654 12.7719 8.3414 12.0667C7.63626 11.3616 7.24012 10.4052 7.24012 9.408ZM11.0001 7.168C10.706 7.168 10.4147 7.22594 10.1429 7.33851C9.87114 7.45108 9.6242 7.61608 9.4162 7.82408C9.2082 8.03208 9.0432 8.27902 8.93063 8.55079C8.81806 8.82256 8.76012 9.11384 8.76012 9.408C8.76012 9.70216 8.81806 9.99344 8.93063 10.2652C9.0432 10.537 9.2082 10.7839 9.4162 10.9919C9.6242 11.1999 9.87114 11.3649 10.1429 11.4775C10.4147 11.5901 10.706 11.648 11.0001 11.648C11.5942 11.648 12.164 11.412 12.584 10.9919C13.0041 10.5718 13.2401 10.0021 13.2401 9.408C13.2401 8.81391 13.0041 8.24416 12.584 7.82408C12.164 7.404 11.5942 7.168 11.0001 7.168Z"
        fill={fill}
      />
    </Svg>
  );
};

export default AvatarIcon;