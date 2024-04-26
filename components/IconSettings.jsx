import React from 'react'
import { TouchableOpacity } from 'react-native'
import Svg, { Rect, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Rect
      width={43}
      height={43}
      x={1}
      y={1}
      fill="#fff"
      stroke="#00A9E0"
      strokeWidth={2}
      rx={19}
    />
    <Path
      fill="#00A9E0"
      fillRule="evenodd"
      d="M20.309 10a2 2 0 0 0-2 2v1.42l-1.005-1.004a2 2 0 0 0-2.828 0l-2.06 2.06a2 2 0 0 0 0 2.829l1.004 1.004H12a2 2 0 0 0-2 2v2.914a2 2 0 0 0 2 2h1.42l-1.004 1.004.707.707-.707-.707a2 2 0 0 0 0 2.828l2.06 2.06a2 2 0 0 0 2.829 0l1.004-1.004v1.42a2 2 0 0 0 2 2h2.913a2 2 0 0 0 2-2v-1.42l1.005 1.005a2 2 0 0 0 2.828 0l2.06-2.06a2 2 0 0 0 0-2.829l-1.004-1.004h1.42a2 2 0 0 0 2-2v-2.914a2 2 0 0 0-2-2h-1.42l1.005-1.004a2 2 0 0 0 0-2.829l-2.06-2.06-.708.707.707-.707a2 2 0 0 0-2.828 0l-1.005 1.005V12a2 2 0 0 0-2-2H20.31Zm0 2h2.913v1.42c0 1.783 2.154 2.675 3.414 1.415l1.005-1.005 2.06 2.06-1.004 1.005c-1.26 1.26-.368 3.414 1.414 3.414h1.42v2.914h-1.42c-1.782 0-2.674 2.154-1.415 3.414l1.005 1.004-2.06 2.06-1.005-1.004c-1.26-1.26-3.414-.368-3.414 1.414v1.42H20.31v-1.42c0-1.782-2.154-2.674-3.414-1.414l-1.005 1.004-2.06-2.06 1.005-1.004c1.26-1.26.367-3.414-1.415-3.414H12v-2.914h1.42c1.782 0 2.674-2.154 1.415-3.414L13.83 15.89l2.06-2.06 1.005 1.005c1.26 1.26 3.414.367 3.414-1.414V12Zm-.864 9.766a2.321 2.321 0 1 1 4.642 0 2.321 2.321 0 0 1-4.642 0Zm2.32-4.321a4.321 4.321 0 1 0 0 8.642 4.321 4.321 0 0 0 0-8.642Z"
      clipRule="evenodd"
    />
  </Svg>
)

const IconSettings = ({handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={{opacity: 0.1}}>
        <SvgComponent />
    </TouchableOpacity>
  )
}

export default IconSettings