import React from 'react'
import Svg, { G, Path, Defs } from "react-native-svg"


const SlotBg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={325}
    height={608}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#E6E6E6"
        d="M292.689 63.53C283.662 25.882 249.457 0 210.742 0H89.418C39.488 0 .182 42.383 2.513 92.259 8.808 226.935 6.409 347.313.303 518.698-1.434 567.44 37.545 608 86.317 608h123.871c38.975 0 73.309-26.196 82.388-64.098 39.85-166.36 46.446-287.134.113-480.372Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SlotBg
